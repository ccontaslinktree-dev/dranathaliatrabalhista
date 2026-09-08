import { corsHeaders } from "npm:@supabase/supabase-js@2/cors";

const sha256 = async (value: string) => {
  const bytes = new TextEncoder().encode(value.trim().toLowerCase());
  const hash = await crypto.subtle.digest("SHA-256", bytes);
  return Array.from(new Uint8Array(hash)).map((b) => b.toString(16).padStart(2, "0")).join("");
};

const normalizePhone = (value?: string) => (value || "").replace(/\D/g, "");

const ALLOWED_EVENTS = ["Lead", "Contact", "InitiateCheckout"];

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const token = Deno.env.get("META_ACCESS_TOKEN");
    const pixelId = Deno.env.get("META_PIXEL_ID") || "1408305571245849";

    const body = await req.json() as {
      event_name?: string;
      event_id?: string;
      event_source_url?: string;
      user_data?: { name?: string; phone?: string };
    };

    if (!body.event_name || !ALLOWED_EVENTS.includes(body.event_name) || !body.event_id || !token) {
      return new Response(JSON.stringify({ ok: false, error: "invalid_request" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const user = body.user_data || {};
    const nameParts = (user.name || "").trim().split(/\s+/).filter(Boolean);

    const userData: Record<string, string> = {
      client_user_agent: req.headers.get("user-agent") || "",
    };

    const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
    if (ip) userData.client_ip_address = ip;

    const phone = normalizePhone(user.phone);
    if (phone) userData.ph = await sha256(phone.startsWith("55") ? phone : `55${phone}`);
    if (nameParts[0]) userData.fn = await sha256(nameParts[0]);
    if (nameParts.length > 1) userData.ln = await sha256(nameParts[nameParts.length - 1]);

    const response = await fetch(
      `https://graph.facebook.com/v22.0/${pixelId}/events?access_token=${encodeURIComponent(token)}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          data: [{
            event_name: body.event_name,
            event_time: Math.floor(Date.now() / 1000),
            event_id: body.event_id,
            action_source: "website",
            event_source_url: body.event_source_url,
            user_data: userData,
          }],
        }),
      },
    );

    const text = await response.text();
    if (!response.ok) {
      console.error(`Meta CAPI failed [${response.status}]: ${text}`);
    }

    return new Response(JSON.stringify({ ok: response.ok }), {
      status: response.ok ? 200 : response.status,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (e) {
    console.error("meta-capi error", e);
    return new Response(JSON.stringify({ ok: false }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
