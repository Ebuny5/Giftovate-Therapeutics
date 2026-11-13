import { useEffect, useRef, useState } from "react";
import { MessageCircle, X, Send, ShieldCheck } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

type Msg = { role: "user" | "assistant"; content: string };

const CHIPS = [
  "How does Giftovate Oasis work?",
  "Where are the Oasis hubs?",
  "Tell me about the HidroAlly App",
  "Enquire about wearables",
];
const INTERESTS = ["Giftovate Oasis session", "HidroAlly App", "Giftovate Band", "HydroGlove", "HydroSock", "HydroVisage Face Mask", "EcoCaps", "Other"];
const BASE = import.meta.env.VITE_SUPABASE_URL;
const KEY = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;

export default function AssistantWidget() {
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState<"chat" | "form" | "done">("chat");
  const [msgs, setMsgs] = useState<Msg[]>([
    { role: "assistant", content: "Hello warrior 👋 I'm the Giftovate Assistant. Ask me about Giftovate Oasis, HidroAlly, or our wearables." },
  ]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState("");
  const [form, setForm] = useState({ full_name: "", phone: "", email: "", location: "", interest: INTERESTS[0], message: "" });
  const endRef = useRef<HTMLDivElement>(null);
  useEffect(() => endRef.current?.scrollIntoView({ behavior: "smooth" }), [msgs, mode]);

  async function send(text: string) {
    const t = text.trim();
    if (!t || busy) return;
    const next: Msg[] = [...msgs, { role: "user", content: t }];
    setMsgs([...next, { role: "assistant", content: "" }]);
    setInput(""); setBusy(true);
    try {
      const r = await fetch(`${BASE}/functions/v1/assistant-chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json", apikey: KEY, Authorization: `Bearer ${KEY}` },
        body: JSON.stringify({ messages: next.slice(-20) }),
      });
      if (!r.ok || !r.body) {
        const j = await r.json().catch(() => ({}));
        throw new Error(j.error || "Something went wrong. Please try again.");
      }
      const reader = r.body.getReader(); const dec = new TextDecoder(); let buf = ""; let acc = "";
      for (;;) {
        const { done, value } = await reader.read(); if (done) break;
        buf += dec.decode(value, { stream: true });
        const lines = buf.split("\n"); buf = lines.pop() ?? "";
        for (const line of lines) {
          if (!line.startsWith("data:")) continue;
          const data = line.slice(5).trim(); if (data === "[DONE]") continue;
          try {
            const delta = JSON.parse(data).choices?.[0]?.delta?.content;
            if (delta) { acc += delta; setMsgs([...next, { role: "assistant", content: acc }]); }
          } catch { /* partial */ }
        }
      }
    } catch (e) {
      setMsgs([...next, { role: "assistant", content: (e as Error).message }]);
    } finally { setBusy(false); }
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault(); setErr("");
    if (!form.full_name.trim() || form.phone.trim().length < 5) { setErr("Please add your name and phone number."); return; }
    setBusy(true);
    const { data, error } = await supabase.functions.invoke("submit-enquiry", { body: form });
    setBusy(false);
    if (error || !data?.ok) { setErr("Could not send. Please check your details and try again."); return; }
    setMode("done");
  }

  const field = "w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary";

  return (
    <>
      {!open && (
        <button onClick={() => setOpen(true)} aria-label="Open Giftovate Assistant"
          className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-xl ring-2 ring-[#D4AF37] transition hover:scale-105">
          <MessageCircle className="h-6 w-6" />
        </button>
      )}
      {open && (
        <div className="fixed bottom-3 right-3 left-3 z-50 flex max-h-[80vh] flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-2xl sm:left-auto sm:w-[380px]">
          <div className="flex items-center justify-between bg-primary px-4 py-3 text-primary-foreground">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-[#D4AF37]" />
              <div>
                <p className="text-sm font-bold leading-tight">Giftovate Assistant</p>
                <p className="text-xs opacity-80">Here for warriors 24/7</p>
              </div>
            </div>
            <button onClick={() => setOpen(false)} aria-label="Close assistant"><X className="h-5 w-5" /></button>
          </div>

          <div className="flex-1 space-y-3 overflow-y-auto p-4 text-sm">
            {mode === "chat" && msgs.map((m, i) => (
              <div key={i} className={m.role === "user" ? "flex justify-end" : "flex"}>
                <div className={m.role === "user"
                  ? "max-w-[85%] rounded-2xl rounded-br-sm bg-primary px-3 py-2 text-primary-foreground"
                  : "max-w-[90%] whitespace-pre-wrap text-foreground"}>
                  {m.content.replace(/\*\*/g, "") || (busy ? "…" : "")}
                </div>
              </div>
            ))}
            {mode === "chat" && msgs.length < 3 && (
              <div className="flex flex-wrap gap-2">
                {CHIPS.map((c) => (
                  <button key={c} onClick={() => send(c)} className="rounded-full border border-primary/40 px-3 py-1 text-xs text-primary hover:bg-primary/10">{c}</button>
                ))}
              </div>
            )}
            {mode === "form" && (
              <form onSubmit={submit} className="space-y-2">
                <p className="font-semibold text-foreground">Leave an enquiry and our team will reach out.</p>
                <input className={field} placeholder="Full name *" maxLength={100} value={form.full_name} onChange={(e) => setForm({ ...form, full_name: e.target.value })} />
                <input className={field} placeholder="Phone / WhatsApp *" maxLength={30} value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
                <input className={field} type="email" placeholder="Email" maxLength={255} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
                <input className={field} placeholder="City (e.g. Lagos, Akure)" maxLength={100} value={form.location} onChange={(e) => setForm({ ...form, location: e.target.value })} />
                <select className={field} value={form.interest} onChange={(e) => setForm({ ...form, interest: e.target.value })}>
                  {INTERESTS.map((i) => <option key={i}>{i}</option>)}
                </select>
                <textarea className={field} rows={3} placeholder="Message (optional)" maxLength={1000} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
                {err && <p className="text-xs text-destructive">{err}</p>}
                <div className="flex gap-2">
                  <button type="button" onClick={() => setMode("chat")} className="flex-1 rounded-lg border border-border py-2">Back</button>
                  <button disabled={busy} className="flex-1 rounded-lg bg-primary py-2 font-semibold text-primary-foreground disabled:opacity-60">{busy ? "Sending…" : "Send"}</button>
                </div>
              </form>
            )}
            {mode === "done" && (
              <div className="space-y-3 text-center">
                <p className="font-semibold text-foreground">Thank you, warrior. Your enquiry has been received.</p>
                <p className="text-muted-foreground">Our team will contact you soon. You can also email info@giftovate.world.</p>
                <button onClick={() => setMode("chat")} className="rounded-lg border border-border px-4 py-2">Back to chat</button>
              </div>
            )}
            <div ref={endRef} />
          </div>

          {mode === "chat" && (
            <div className="border-t border-border p-3">
              <button onClick={() => setMode("form")} className="mb-2 w-full rounded-lg bg-[#D4AF37] py-2 text-sm font-semibold text-[#0F0A1F]">Leave an enquiry</button>
              <form onSubmit={(e) => { e.preventDefault(); send(input); }} className="flex gap-2">
                <input className={field} placeholder="Type your question…" maxLength={2000} value={input} onChange={(e) => setInput(e.target.value)} />
                <button disabled={busy || !input.trim()} aria-label="Send" className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground disabled:opacity-50"><Send className="h-4 w-4" /></button>
              </form>
            </div>
          )}
        </div>
      )}
    </>
  );
}
