import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Zap, Droplets, ShieldCheck, Activity } from "lucide-react";
import faceMaskImage from "@/assets/hydrovisage-mask.jpg";

const FaceMask = () => {
  const features = [
    {
      icon: Zap,
      title: "Sub-Milliamp Microcurrent Delivery",
      description:
        "Calibrated specifically for sensitive facial skin, the mask delivers a strict cranial microcurrent ceiling (≤ 1.5 mA). Automated 5-minute biphasic polarity reversal prevents pH shifts and skin redness, delivering comfortable, invisible sudomotor interception without systemic pill side effects.",
    },
    {
      icon: Droplets,
      title: "Replaceable Isotonic Hydrogel Pads",
      description:
        "Sterile 0.9% saline hydrogel contact pads mold seamlessly across the forehead, temple crests, and upper lip. No messy water trays or dripping water — just uniform, comfortable ionic contact engineered for tropical humidity.",
    },
    {
      icon: ShieldCheck,
      title: "25mm Anatomical Periorbital Eye-Safety Buffer",
      description:
        "Engineered with non-conductive medical silicone standoffs that mechanically guarantee all electrical pathways remain strictly on the forehead and temples, well clear of the orbital eye sockets and optic nerves.",
    },
    {
      icon: Activity,
      title: "HidroAlly App Sync",
      description:
        "Connects directly to the HidroAlly app to log craniofacial treatment sessions, track 5–8 day dryness intervals, and schedule needle-free maintenance sessions.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <div className="flex-grow">
        {/* Hero Section */}
        <section className="bg-background py-6 md:py-10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <img
                src={faceMaskImage}
                alt="Face mask prototype for craniofacial hyperhidrosis relief"
                className="w-full h-auto rounded-2xl mb-6 md:mb-8"
              />
              <div className="text-center">
                <p className="text-sm font-bold text-primary mb-2 uppercase tracking-wider">
                  TARGETED CRANIOFACIAL ELECTROTHERAPY
                </p>
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
                  Face Mask: Craniofacial Mastery
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground mb-3">
                  Stop the sweat cascade at the source. Command the room with total composure.
                </p>
                <p className="text-lg text-muted-foreground mb-6 max-w-3xl mx-auto">
                  For many warriors, facial sweating is the most visible and stigmatizing barrier to professional and social success. Our innovative HydroVisage face mask prototype provides targeted, silent relief for craniofacial hyperhidrosis using established iontophoresis principles.
                </p>
                <Button size="lg">
                  Join the Pilot Program
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Science Section */}
        <section className="py-8 md:py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">
                The Science of <span className="accent-italic">Craniofacial Iontophoresis</span>
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                Craniofacial sweating is triggered by dense concentration of hyperactive eccrine glands across the forehead, temples and perioral zones. HydroVisage utilizes contoured isotonic hydrogel contact pads to deliver calibrated sub-milliamp microcurrent to temporarily silence sweat secretion for 5 to 8 days per session.
              </p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-8 md:py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-2">
                  Engineered for Composure
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Every feature is designed to give warriors command over their most visible battlefield — the face
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <Card
                    key={index}
                    className="p-6 feature-card-vibrant border-border/50"
                  >
                    <div className="rounded-full bg-gradient-hero p-3 w-12 h-12 flex items-center justify-center mb-4">
                      <feature.icon className="text-white" size={24} />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-8 md:py-12">
          <div className="container mx-auto px-4">
            <Card className="bg-gradient-card p-6 md:p-8 text-center max-w-3xl mx-auto border-primary/20">
              <h2 className="text-3xl font-bold mb-3">Join Our Pilot Program</h2>
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
