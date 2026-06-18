import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Activity, HeartPulse, Watch, Radio } from "lucide-react";
import ringAsset from "@/assets/giftovate-ring.jpg.asset.json";

const GiftovateRing = () => {
  const features = [
    {
      icon: Activity,
      title: "Continuous EDA Tracking",
      description:
        "Captures real-time skin conductance, identifying spikes in sympathetic activity long before a visible episode begins.",
    },
    {
      icon: HeartPulse,
      title: "Physiological Correlation",
      description:
        "Syncs Heart Rate Variability (HRV) with thermal data to distinguish between metabolic sweat and nervous system-induced sudomotor activity.",
    },
    {
      icon: Watch,
      title: "Invisible Comfort",
      description:
        "Designed for 24/7 wear, ensuring you have a complete longitudinal view of your thermal profile without the bulk of traditional wearables.",
    },
    {
      icon: Radio,
      title: "Seamless SweatSmart Sync",
      description:
        "Automatically transmits biometric data to your SweatSmart dashboard, closing the loop between your body's signals and our predictive analytics.",
    },
  ];

  const steps = [
    {
      step: "1",
      title: "Wear",
      text: "The ring sits comfortably on your finger, continuously measuring micro-fluctuations in skin conductivity.",
    },
    {
      step: "2",
      title: "Analyze",
      text: "The onboard sensors capture EDA, while the mobile app correlates this with environmental data (Climate Alert).",
    },
    {
      step: "3",
      title: "Predict",
      text: "Our AI identifies your unique 'pre-episode' biometric signature, notifying you to activate your cooling gear or take preemptive action.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <div className="flex-grow">
        <section className="bg-background py-10 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <img
                src={ringAsset.url}
                alt="Giftovate Ring biometric wearable on a warrior's finger"
                className="w-full h-auto rounded-2xl mb-10 md:mb-14"
              />
              <div className="text-center">
                <p className="text-sm font-bold text-primary mb-3 uppercase tracking-wider">
                  THE BIOMETRIC STANDARD
                </p>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                  Giftovate Ring: Clinical-Grade Monitoring, Always On.
                </h1>
                <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
                  Precise, continuous, and unobtrusive. The Giftovate Ring captures the physiological data that mobile apps miss. By monitoring Electrodermal Activity (EDA) and Heart Rate Variability (HRV) directly from the finger — the most sensitive site for sympathetic nervous system activity — the ring provides the raw data needed to predict hyperhidrosis triggers before they manifest.
                </p>
                <Button size="lg">Join the Pilot Program</Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Key Features</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Engineered for warriors who demand evidence, not estimates.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                {features.map((f, i) => (
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
              <div className="grid md:grid-cols-3 gap-8">
                {steps.map((s) => (
                  <Card key={s.step} className="p-8 text-center border-border/50">
                    <div className="text-4xl font-bold text-primary mb-3">{s.step}</div>
                    <h3 className="text-xl font-semibold mb-3">{s.title}</h3>
                    <p className="text-muted-foreground">{s.text}</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <Card className="bg-gradient-card p-8 md:p-12 text-center max-w-3xl mx-auto border-primary/20">
              <h2 className="text-3xl font-bold mb-4">Reserve Your Ring</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Be among the first warriors to wear clinical-grade biometric monitoring designed for tropical climates.
              </p>
              <Button size="lg">Express Interest</Button>
            </Card>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default GiftovateRing;
