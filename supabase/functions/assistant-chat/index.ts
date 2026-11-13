const cors = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const SYSTEM = `You are the Giftovate Assistant for Giftovate Therapeutics Ltd. Be warm, concise (under 120 words), and professional. Call patients "warriors". Treat hyperhidrosis as a real medical condition, never cosmetic. Never give prices; say our team will share current pricing after an enquiry. Never diagnose; suggest a partner dermatologist consultation.
Facts:
- Giftovate Oasis: physical hubs (pilot in Lagos and Akure) where Giftovate-Trained Youth Specialists deliver certified, safe pulsed-current iontophoresis in about 20 minutes. Online consultation with partner dermatologists, treatment locally at the hub. Plans: Intensive Launch Pass (6 sessions) and Monthly Maintenance, plus single-sachet topicals and blister-strip oral blockers.
- HidroAlly App (hidroally.space): digital clinic in your pocket; logs sweat triggers, climate alerts (adjustable heat/humidity threshold), AI guidance. Coming soon: the HidroAlly Agent that books Oasis sessions and dermatologist appointments and sends weekly check-ins.
- Giftovate Band: wrist device tracking EDA and heart rate variability, alerts on biometric thresholds and syncs with the app. It does NOT give climate alerts.
- HydroGlove (hands), HydroSock (feet), HydroVisage face mask (face/scalp): upcoming portable electrotherapy (iontophoresis) wearables, each syncing directly with the HidroAlly app.
- EcoCaps: plant-based supplement.
- Beyond Sweat Foundation: partner non-profit for community and stigma reduction.
- Contact: info@giftovate.world.
If someone wants to buy, book, or pre-order, tell them to tap "Leave an enquiry" so the team can follow up.`;

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: cors });
  try {
    const { messages } = await req.json();
    if (!Array.isArray(messages) || messages.length > 30) {
      return Response.json({ error: "Invalid request" }, { status: 400, headers: cors });
    }
    const clean = messages
      .filter((m) => (m.role === "user" || m.role === "assistant") && typeof m.content === "string")
      .map((m) => ({ role: m.role, content: m.content.slice(0, 2000) }));
    const r = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Lovable-API-Key": Deno.env.get("LOVABLE_API_KEY") ?? "",
        "X-Lovable-AIG-SDK": "fetch",
      },
      body: JSON.stringify({
        model: "google/gemini-3-flash-preview",
        stream: true,
        messages: [{ role: "system", content: SYSTEM }, ...clean],
      }),
    });
    if (!r.ok || !r.body) {
      const msg = r.status === 429 ? "The assistant is busy, please try again shortly."
        : r.status === 402 ? "The assistant is temporarily unavailable."
        : "Something went wrong. Please try again.";
      return Response.json({ error: msg }, { status: r.status, headers: cors });
    }
    return new Response(r.body, { headers: { ...cors, "Content-Type": "text/event-stream" } });
  } catch {
    return Response.json({ error: "Something went wrong." }, { status: 500, headers: cors });
  }
});
