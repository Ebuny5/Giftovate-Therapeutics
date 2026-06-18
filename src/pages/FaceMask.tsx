import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Thermometer, Users, Wind, Zap } from "lucide-react";
import faceMaskImage from "@/assets/face-mask.png";

const FaceMask = () => {
  const features = [
    {
      icon: Thermometer,
      title: "Silent Thermal Transfer",
      description:
        "Utilizing integrated Peltier cooling modules, the mask provides active heat extraction from the forehead and cheeks. This bypasses the \"evaporative failure\" that occurs in tropical zones once the climate crosses the 28°C and 70% humidity threshold.",
    },
    {
      icon: Users,
      title: "Restoring Social Confidence",
      description:
        "Designed for high-stakes social and professional interactions, the mask suppresses perspiration during public speaking or high-pressure meetings. It is a lightweight, non-invasive alternative to Botox that keeps your focus on your message, not your sweat.",
    },
    {
      icon: Wind,
      title: "Breathable, Ergonomic Design",
      description:
        "Crafted from advanced moisture-wicking materials, the mask stabilizes your facial thermal baseline, ensuring you remain dry, calm, and composed even in the most \"smothering\" environments.",
    },
    {
      icon: Zap,
      title: "HidroAlly Integration",
      description:
        "When HidroAlly detects an imminent episode triggered by climate or stress, it sends a proactive alert to activate your face mask's cooling system and stabilize your sudomotor baseline.",
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
                src={faceMaskImage}
                alt="Face mask prototype for craniofacial hyperhidrosis relief"
                className="w-full h-auto rounded-2xl mb-10 md:mb-14"
              />
              <div className="text-center">
                <p className="text-sm font-bold text-primary mb-3 uppercase tracking-wider">
                  PRECISION THERMAL REGULATION
                </p>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                  Face Mask: Craniofacial Mastery
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground mb-4">
                  Stop the "rain" before it begins. Command the room with total composure.
                </p>
                <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
                  For many warriors, facial sweating is the most visible and stigmatizing barrier to professional success. Our innovative face mask prototype provides targeted, silent relief for craniofacial hyperhidrosis.
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
                The Science of Craniofacial Cooling
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Facial sweating is driven by a dense concentration of eccrine sweat glands on the forehead, temples, and cheeks. In tropical climates where ambient temperatures routinely exceed 28°C and humidity crosses 70%, the body's natural evaporative cooling system fails — leading to visible, uncontrollable perspiration.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our face mask uses Peltier effect technology to create a localized temperature differential, actively extracting heat from the skin's surface before the sweat response is triggered. This is not masking the symptom — it is intercepting the cascade.
              </p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">
                  Engineered for Composure
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Every feature is designed to give warriors command over their most visible battlefield — the face
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {features.map((feature, index) => (
                  <Card
                    key={index}
                    className="p-8 hover:shadow-soft transition-all border-border/50"
                  >
                    <div className="rounded-full bg-gradient-hero p-4 w-16 h-16 flex items-center justify-center mb-6">
                      <feature.icon className="text-white" size={28} />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
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
                Be among the first to experience craniofacial mastery and help shape the future of facial sudomotor suppression
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

export default FaceMask;
