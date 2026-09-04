interface Env {
  META_ACCESS_TOKEN: string;
  META_PIXEL_ID?: string;
}

const sha256 = async (value: string) => {
  const normalized = value.trim().toLowerCase();
  const bytes = new TextEncoder().encode(normalized);
  const hash = await crypto.subtle.digest("SHA-256", bytes);
  return Array.from(new Uint8Array(hash)).map((byte) => byte.toString(16).padStart(2, "0")).join("");
};

const normalizePhone = (value?: string) => (value || "").replace(/\D/g, "");

const cookieValue = (cookieHeader: string | null, name: string) => {
  if (!cookieHeader) return undefined;
  return cookieHeader.split(";").map((item) => item.trim()).find((item) => item.startsWith(name + "="))?.slice(name.length + 1);
};

export const onRequestPost: PagesFunction<Env> = async (context) => {
  try {
    const body = await context.request.json() as {
      event_name?: "Lead" | "Contact";
      event_id?: string;
      event_source_url?: string;
      user_data?: { name?: string; email?: string; phone?: string };
    };

    if (!body.event_name || !body.event_id || !context.env.META_ACCESS_TOKEN) {
      return new Response(JSON.stringify({ ok: false }), { status: 400, headers: { "Content-Type": "application/json" } });
    }

    const user = body.user_data || {};
    const nameParts = (user.name || "").trim().split(/\s+/).filter(Boolean);
    const cookieHeader = context.request.headers.get("cookie");

    const userData: Record<string, string> = {
      client_user_agent: context.request.headers.get("user-agent") || "",
    };

    const ip = context.request.headers.get("CF-Connecting-IP");
    if (ip) userData.client_ip_address = ip;

    const email = user.email?.trim();
    const phone = normalizePhone(user.phone);

    if (email) userData.em = await sha256(email);
    if (phone) userData.ph = await sha256(phone);
    if (nameParts[0]) userData.fn = await sha256(nameParts[0]);
    if (nameParts.length > 1) userData.ln = await sha256(nameParts[nameParts.length - 1]);

    const fbp = cookieValue(cookieHeader, "_fbp");
    const fbc = cookieValue(cookieHeader, "_fbc");
    if (fbp) userData.fbp = fbp;
    if (fbc) userData.fbc = fbc;

    const pixelId = context.env.META_PIXEL_ID || "2001984400520028";
    const response = await fetch(
      `https://graph.facebook.com/v22.0/${pixelId}/events?access_token=${encodeURIComponent(context.env.META_ACCESS_TOKEN)}`,
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
      }
    );

    const result = await response.text();

    return new Response(
      JSON.stringify({ ok: response.ok }),
      { status: response.ok ? 200 : 502, headers: { "Content-Type": "application/json" } }
    );
  } catch {
    return new Response(JSON.stringify({ ok: false }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
};