import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Zap,
  CalendarCheck,
  Pill,
  UserCheck,
  Coins,
  GraduationCap,
} from "lucide-react";
import oasisImage from "@/assets/hub.jpeg";

const GiftovateOasis = () => {
  const accessFeatures = [
    {
      icon: Zap,
      title: "The Intensive Launch Pass (₦30,000)",
      description:
        "Get 6 clinical-grade iontophoresis sessions spread over 2 weeks (3 sessions per week). Our advanced pulsed-current microprocessors safely deactivate overactive eccrine sweat glands, bringing you down to a baseline of complete dryness.",
    },
    {
      icon: CalendarCheck,
      title: "Monthly Dryness Maintenance (₦15,000 / Month)",
      description:
        "Preserve your dryness with a single, predictable top-up session per week (4 sessions a month) to keep your sweat glands dormant.",
    },
    {
      icon: Pill,
      title: "Unbundled Clinical Micro-Retailing",
      description:
        "We respect local wallets. Prescription-strength topicals are unbundled into single-sachet packets and oral blockers into individual tablet blister strips, certified Aluminum Chloride topicals, daily maintenance lotions and oral anticholinergics dispensed legally through licensed pharmacy partners.",
    },
    {
      icon: UserCheck,
      title: "Professional Supervision",
      description:
        "Every session is administered by a Giftovate-Trained Youth Specialist. You are in expert hands, receiving professional guidance to ensure the treatment is safe, effective, and tailored to your specific physiological needs.",
    },
    {
      icon: Coins,
      title: "Micro-Priced Access",
      description:
        "We prioritize impact over profit. By offering sessions at an accessible price point, we ensure that even those in underserved communities can manage their condition effectively.",
    },
    {
      icon: GraduationCap,
      title: "A Pipeline for Youth Employment",
      description:
        "We recruit and train local youth, turning them into Certified Sudomotor Specialists, providing stable, dignified employment in cities and villages across Africa and beyond.",
    },
  ];

  const steps = [
    { step: "1", title: "Consult Online", text: "Start your consultation online through the HidroAlly app." },
    { step: "2", title: "Prescribed Online", text: "Our partner dermatologists review your case and prescribe your treatment online." },
    { step: "3", title: "Treated Locally", text: "Your nearest Hub delivers the sessions, documented for clinician review, at a fraction of private clinic cost." },
    { step: "4", title: "Community Impact", text: "By choosing Giftovate Oasis, you are directly supporting the employment and professional development of a young person in your community." },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <div className="flex-grow">
        <section className="bg-background py-6 md:py-10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <img
                src={oasisImage}
                alt="Giftovate Oasis recovery station with Giftovate-Trained Youth Specialists delivering iontophoresis sessions"
                className="w-full h-auto rounded-2xl mb-6 md:mb-8"
              />
              <div className="text-center">
                <p className="text-sm font-bold text-primary mb-2 uppercase tracking-wider">
                  CLINICAL RELIEF ON DEMAND
                </p>
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
                  Giftovate Oasis: Affordable Physical Relief in 20 Minutes
                </h1>
                <p className="text-lg text-muted-foreground mb-6 max-w-3xl mx-auto leading-relaxed">
                  You don't need an expensive procedure to reclaim your dignity. Giftovate Oasis operates specialized clinical nodes where Giftovate-Trained Youth Specialists deliver certified, safe pulsed-current iontophoresis sessions for excessive sweating.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Button size="lg">Express Interest in Recovery Sessions</Button>
                  <Button size="lg" variant="outline">Apply for Specialist Training</Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-8 md:py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-2">Treatment Plans & Micro-Retailing</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Clear, predictable pricing built for local wallets.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {accessFeatures.map((f, i) => (
                  <Card key={i} className="p-6 feature-card-vibrant border-border/50">
                    <div className="rounded-full bg-gradient-hero p-3 w-12 h-12 flex items-center justify-center mb-4">
                      <f.icon className="text-white" size={24} />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{f.description}</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-8 md:py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-2">How It Works</h2>
              </div>
              <div className="grid md:grid-cols-4 gap-4">
                {steps.map((s) => (
                  <Card key={s.step} className="p-5 text-center border-border/50">
                    <div className="text-3xl font-bold text-primary mb-2">{s.step}</div>
                    <h3 className="text-base font-semibold mb-1">{s.title}</h3>
                    <p className="text-muted-foreground text-xs leading-relaxed">{s.text}</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-8 md:py-12">
          <div className="container mx-auto px-4">
            <Card className="bg-gradient-card p-6 md:p-8 text-center max-w-3xl mx-auto border-primary/20">
              <h2 className="text-3xl font-bold mb-3">Join the Pilot Program</h2>
              <p className="text-lg text-muted-foreground mb-8">
                We are launching Oasis centers across the region. We are looking for volunteers to experience our recovery sessions and for motivated youth interested in joining our Specialist Training Program.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button size="lg">Express Interest in Recovery Sessions</Button>
                <Button size="lg" variant="outline">Apply for Specialist Training</Button>
              </div>
            </Card>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default GiftovateOasis;
