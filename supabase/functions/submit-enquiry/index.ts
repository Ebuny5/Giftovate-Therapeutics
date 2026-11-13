import { createClient } from "npm:@supabase/supabase-js@2";
import { z } from "npm:zod@3";

const cors = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const schema = z.object({
  full_name: z.string().trim().min(1).max(100),
  phone: z.string().trim().min(5).max(30),
  email: z.string().trim().email().max(255).optional().or(z.literal("")),
  location: z.string().trim().max(100).optional(),
  interest: z.string().trim().min(1).max(100),
  message: z.string().trim().max(1000).optional(),
});

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: cors });
  const parsed = schema.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return Response.json({ error: "Please check your details." }, { status: 400, headers: cors });
  const d = parsed.data;
  const sb = createClient(Deno.env.get("SUPABASE_URL")!, Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!);
  const { error } = await sb.from("customer_enquiries").insert({ ...d, email: d.email || null });
  if (error) return Response.json({ error: "Could not save enquiry." }, { status: 500, headers: cors });
  return Response.json({ ok: true }, { headers: cors });
});
