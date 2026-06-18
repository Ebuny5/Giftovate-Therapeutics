import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Snowflake,
  UserCheck,
  Coins,
  GraduationCap,
  Database,
  LineChart,
  FileText,
  ShieldAlert,
} from "lucide-react";
import oasisImage from "@/assets/giftovate-oasis.jpg";

const GiftovateOasis = () => {
  const accessFeatures = [
    {
      icon: Snowflake,
      title: "15-Minute Thermoelectric Recovery",
      description:
        "For those who cannot afford personal wearables (gloves, socks, or masks), the Oasis provides access to high-intensity, thermoelectric cooling sessions that deliver hours of relief.",
    },
    {
      icon: UserCheck,
      title: "Professional Supervision",
      description:
        "Every session is administered by a Giftovate-trained Specialist. You are in expert hands, receiving professional guidance to ensure the treatment is safe, effective, and tailored to your specific physiological needs.",
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
        "We recruit and train local youth, turning them into Certified Sudomotor Specialists — providing stable, dignified employment in cities and villages across Africa and beyond.",
    },
  ];

  const dataFeatures = [
    {
      icon: Database,
      title: "Centralized Aggregation",
      description:
        "Connects your Giftovate Ring, cooling wearables, and environmental trackers into one unified data ecosystem.",
    },
    {
      icon: LineChart,
      title: "Predictive Baseline Modelling",
      description:
        "Identifies your specific 'Trigger Baseline' based on local humidity, temperature, and your personal biometric history.",
    },
    {
      icon: FileText,
      title: "Clinical Reporting",
      description:
        "Generates automated, PDF-format evidence-based reports — shifting conversations from 'I think I'm sweating' to 'Here is my clinical data.'",
    },
    {
      icon: ShieldAlert,
      title: "Proactive Guarding",
      description:
        "Sends localized alerts to your devices when environmental conditions (e.g., 28°C / 70% humidity) threaten to trigger an episode.",
    },
  ];

  const steps = [
    { step: "1", title: "Book", text: "Select a 15-minute thermoelectric recovery session through our app or visit your local Oasis." },
    { step: "2", title: "Expert Care", text: "Receive professional-grade cooling therapy from a trained Specialist who understands the science of hyperhidrosis." },
    { step: "3", title: "Sustain", text: "A single session provides hours of relief, stabilizing your thermal baseline and restoring your confidence." },
    { step: "4", title: "Community Impact", text: "By choosing Giftovate Oasis, you are directly supporting the employment and professional development of a young person in your community." },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <div className="flex-grow">
        <section className="bg-background py-10 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <img
                src={oasisImage}
                alt="Giftovate Oasis recovery station with SweatSmart AI dashboard and thermoelectric gloves"
                className="w-full h-auto rounded-2xl mb-10 md:mb-14"
              />
              <div className="text-center">
                <p className="text-sm font-bold text-primary mb-3 uppercase tracking-wider">
                  CLINICAL RELIEF ON DEMAND
                </p>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                  Giftovate Oasis: Empowering Lives, One Session at a Time.
                </h1>
                <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
                  We believe that effective hyperhidrosis relief should be a standard of care for all, not a luxury. The Giftovate Oasis is our localized solution to the hardware deficit in Africa — providing a pathway to professional-grade sudomotor suppression at an affordable, per-session cost, while simultaneously building a new generation of health-tech professionals.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Button size="lg">Express Interest in Recovery Sessions</Button>
                  <Button size="lg" variant="outline">Apply for Specialist Training</Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Accessible Relief & Youth Empowerment</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Every Oasis is both a recovery station and a launchpad for local careers.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                {accessFeatures.map((f, i) => (
                  <Card key={i} className="p-8 hover:shadow-soft transition-all border-border/50">
                    <div className="rounded-full bg-gradient-hero p-4 w-16 h-16 flex items-center justify-center mb-6">
                      <f.icon className="text-white" size={28} />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{f.title}</h3>
                    <p className="text-muted-foreground">{f.description}</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">How It Works</h2>
              </div>
              <div className="grid md:grid-cols-4 gap-6">
                {steps.map((s) => (
                  <Card key={s.step} className="p-6 text-center border-border/50">
                    <div className="text-4xl font-bold text-primary mb-3">{s.step}</div>
                    <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
                    <p className="text-muted-foreground text-sm">{s.text}</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <p className="text-sm font-bold text-primary mb-3 uppercase tracking-wider">THE ANALYTICS CORE</p>
                <h2 className="text-3xl font-bold mb-4">Your Personal Clinical Command Center</h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  If the Ring is the observer, the Oasis is the strategist. The Giftovate Oasis serves as the central processing unit for your hyperhidrosis management — aggregating data from your wearables, app logs, and environmental sensors, and transforming raw biometric noise into actionable clinical insights.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                {dataFeatures.map((f, i) => (
                  <Card key={i} className="p-8 hover:shadow-soft transition-all border-border/50">
                    <div className="rounded-full bg-gradient-hero p-4 w-16 h-16 flex items-center justify-center mb-6">
                      <f.icon className="text-white" size={28} />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{f.title}</h3>
                    <p className="text-muted-foreground">{f.description}</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <Card className="bg-gradient-card p-8 md:p-12 text-center max-w-3xl mx-auto border-primary/20">
              <h2 className="text-3xl font-bold mb-4">Join the Pilot Program</h2>
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
