import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Footprints, ShieldCheck, Wind, Thermometer } from "lucide-react";
import sockImage from "@/assets/cooling-sock.jpg";

const CoolingSock = () => {
  const features = [
    {
      icon: Footprints,
      title: "Firm Gait, No More Slips",
      description: "Eliminates dangerous \"slippery accidents\" inside sandals or slippers and gait instability. Walk at your natural pace with total stability in a dry, high-friction environment.",
    },
    {
      icon: ShieldCheck,
      title: "Odor-Free Shoe Removal",
      description: "Antimicrobial silver-infused fibers neutralize odor-causing bacteria at the source by actively regulating temperature. Remove your shoes at home or work with zero trepidation.",
    },
    {
      icon: Wind,
      title: "Tile-Safe Confidence",
      description: "Stop living in fear of leaving damp footprints or white \"maceration\" marks on parquet and tile flooring. The Plantar Protocol maintains a dry stratum corneum for a clean path.",
    },
    {
      icon: Thermometer,
      title: "Tropical Resilience",
      description: "Engineered specifically for the African climate, these socks provide a localized, controlled environment that keeps feet at a stable baseline, even when temperatures exceed 28°C and humidity is \"smothering.\"",
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
                src={sockImage}
                alt="Active cooling socks"
                className="w-full h-auto rounded-2xl mb-10 md:mb-14"
              />
              <div className="text-center">
                <p className="text-sm font-bold text-primary mb-3 uppercase tracking-wider">
                  THE PLANTAR PROTOCOL
                </p>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                  Active Cooling Socks
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground mb-4">
                  Ending the "Shoe-Removal Anxiety" and Restoring Every Step.
                </p>
                <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
                  For warriors with plantar hyperhidrosis, every day feels like walking through a rainstorm inside their shoes. Our cooling socks are engineered with moisture-wicking natural fibers (Bamboo and Merino Wool) and integrated Peltier units to eliminate the "Catch-22" of enclosed footwear.
                </p>
                <Button size="lg">
                  Join the Pilot Program
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Revolutionary Plantar Care</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Every feature is engineered to restore confidence, stability, and freedom for warriors with plantar hyperhidrosis
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

        {/* Integration Section */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Integration with HidroAlly</h2>
              <Card className="p-8">
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Giftovate hardware is the "physical edge" of the SweatSmart ecosystem. Through the Wearable Sensor Simulator, users can monitor their real-time Electrodermal Activity (EDA) and Heart Rate. When HidroAlly detects an imminent episode triggered by climate or stress, it sends a proactive alert:
                </p>
                <Card className="bg-accent/30 border-accent p-6 mb-6">
                  <p className="text-sm italic text-accent-foreground">
                    "Extreme conditions detected (32°C). Activate your Plantar Protocol Cooling Socks now to stabilize your sudomotor baseline and prevent slipping."
                  </p>
                </Card>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                    <p className="text-sm">Real-time EDA and heart rate monitoring through the Wearable Sensor Simulator</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                    <p className="text-sm">Proactive climate-triggered alerts to activate cooling before episodes begin</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                    <p className="text-sm">Seamless data integration with your SweatSmart analytics dashboard</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <Card className="bg-gradient-card p-8 md:p-12 text-center max-w-3xl mx-auto border-primary/20">
              <h2 className="text-3xl font-bold mb-4">Test the Plantar Protocol</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Participate in our pilot program and help us perfect the active cooling sock technology for warriors worldwide
              </p>
              <Button size="lg">Join Pilot Program</Button>
            </Card>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default CoolingSock;
