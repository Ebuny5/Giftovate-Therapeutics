import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Hand, Droplets, Smartphone, Activity } from "lucide-react";
import gloveImage from "@/assets/hydroglove-render.jpg";
const gloveImage = gloveImage;

const HydroGlove = () => {
  const features = [
    {
      icon: Hand,
      title: "Complete Mobility — No Messy Water Trays",
      description:
        "Snap on the pre-moistened isotonic pads, secure the magnetic wrist pod, and complete your treatment while working or relaxing. No bulky, immobile water trays — ever.",
    },
    {
      icon: Droplets,
      title: "Smart Biphasic Polarity Control",
      description:
        "Automated 10-minute polarity reversal balances ionic distribution equally between both hands, preventing erythema and ensuring uniform dryness.",
    },
    {
      icon: Smartphone,
      title: "Touchscreen-Compatible & Tactile Freedom",
      description:
        "Engineered with conductive fingertips so you can operate smartphones and keyboards during treatments — your day never stops for therapy.",
    },
    {
      icon: Activity,
      title: "HidroAlly App Sync",
      description:
        "Connects directly to the HidroAlly app to log palmar therapy sessions, track multi-day dryness intervals, and schedule maintenance routines ahead of high-stakes meetings or presentations.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <div className="flex-grow">
        {/* Hero Section */}
        <section className="bg-background py-10 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <img
                src={gloveImage}
                alt="HydroGlove portable palmar electrotherapy device"
                className="w-full h-auto rounded-2xl mb-10 md:mb-14"
              />
              <div className="text-center">
                <p className="text-sm font-bold text-primary mb-3 uppercase tracking-wider">
                  THE PALMAR PROTOCOL
                </p>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                  HydroGlove: Portable Palmar Electrotherapy
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground mb-4">
                  Dry Hands, Confident Handshakes, and Unrestricted Professional Command.
                </p>
                <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
                  For warriors with palmar hyperhidrosis, wet hands interfere with touchscreen devices, paper documents, social handshakes, and everyday confidence. HydroGlove frees warriors from bulky, immobile water trays with wearable, targeted microcurrent iontophoresis.
                </p>
                <Button size="lg">
                  Join the Pilot Program
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Science Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">
                The Science of <span className="accent-italic">Palmar Iontophoresis</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Palmar sweating is triggered by dense cholinergic innervation of eccrine glands on the palms and fingertip pads. HydroGlove utilizes contoured isotonic saline hydrogel pads and breathable technical compression knit to deliver calibrated 8–15 mA DC microcurrent evenly across the palm and fingertips, temporarily neutralizing excessive sweat secretion for up to a week per maintenance session.
              </p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Key Features</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Every feature is designed to give warriors back their grip, their dexterity, and their professional command
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {features.map((feature, index) => (
                  <Card key={index} className="p-8 feature-card-vibrant border-border/50">
                    <div className="rounded-full bg-gradient-hero p-4 w-16 h-16 flex items-center justify-center mb-6">
                      <feature.icon className="text-white" size={28} />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <Card className="bg-gradient-card p-8 md:p-12 text-center max-w-3xl mx-auto border-primary/20">
              <h2 className="text-3xl font-bold mb-4">Join Our Pilot Program</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Be among the first to experience portable palmar electrotherapy and help shape the future of needle-free hand-dryness treatment
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

export default HydroGlove;
