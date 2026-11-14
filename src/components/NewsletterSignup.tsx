import { useState } from "react";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";

const emailSchema = z.string().trim().email("Please enter a valid email address").max(255);

const NewsletterSignup = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");
  const [msg, setMsg] = useState("");

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = emailSchema.safeParse(email);
    if (!parsed.success) { setStatus("error"); setMsg(parsed.error.issues[0].message); return; }
    setStatus("loading");
    const { error } = await supabase.from("newsletter_subscribers").insert({ email: parsed.data.toLowerCase() });
    if (error && error.code !== "23505") { setStatus("error"); setMsg("Something went wrong. Please try again."); return; }
    setStatus("done");
    setMsg(error ? "You are already subscribed, Warrior. Thank you!" : "Thank you for joining the Giftovate movement, Warrior. We will keep you updated.");
    setEmail("");
  };

  return (
    <section className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12 md:py-14 text-center max-w-2xl">
        <h2 className="text-2xl md:text-3xl font-bold mb-3">Stay Connected with the Giftovate Movement</h2>
        <p className="text-sm md:text-base opacity-85 mb-6">
          Receive updates on our products, services, Giftovate Oasis hub openings and wearable releases.
        </p>
        <form onSubmit={submit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
          <input
            type="email" required maxLength={255} value={email}
            onChange={(e) => { setEmail(e.target.value); if (status !== "loading") setStatus("idle"); }}
            placeholder="Enter your email address" aria-label="Email address"
            className="flex-1 h-12 rounded-full px-5 bg-background text-foreground placeholder:text-muted-foreground outline-none focus:ring-2 focus:ring-ring"
          />
          <button type="submit" disabled={status === "loading"}
            className="h-12 px-7 rounded-full bg-background text-primary font-semibold hover:opacity-90 disabled:opacity-60 transition">
            {status === "loading" ? "Subscribing..." : "Subscribe"}
          </button>
        </form>
        {msg && status !== "idle" && <p role="status" className="mt-4 text-sm font-medium">{msg}</p>}
      </div>
    </section>
  );
};
export default NewsletterSignup;
