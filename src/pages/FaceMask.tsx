import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Zap, Droplets, ShieldCheck, Activity } from "lucide-react";
import faceMaskAsset from "@/assets/hydrovisage-mask.jpg.asset.json";
const faceMaskImage = faceMaskAsset.url;

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
      title: "HidroAlly & Giftovate Band Integration",
      description:
        "Seamlessly syncs with your Giftovate Band and HidroAlly app. When sudomotor sensors detect an impending sympathetic spike, HidroAlly prompts a quick 15-minute maintenance session to stabilize your sudomotor baseline before visible sweating begins.",
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
                  TARGETED CRANIOFACIAL ELECTROTHERAPY
                </p>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                  Face Mask: Craniofacial Mastery
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground mb-4">
                  Stop the sweat cascade at the source. Command the room with total composure.
                </p>
                <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
                  For many warriors, facial sweating is the most visible and stigmatizing barrier to professional and social success. Our innovative HydroVisage face mask prototype provides targeted, silent, and clinically proven relief for craniofacial hyperhidrosis.
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
                The Science of Craniofacial Iontophoresis
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Facial sweating is driven by an intense concentration of hyperactive eccrine sweat glands on the forehead, temples, and cheeks. In tropical climates where ambient temperatures routinely exceed 28°C and humidity crosses 70%, the body's natural evaporative cooling system fails — leading to severe, uncontrollable perspiration.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                While traditional cooling plates (Peltier modules) consume excessive battery power, generate condensation, and dump excess heat back onto the skull, HydroVisage uses targeted microcurrent iontophoresis. Gentle, calibrated sub-milliamp microcurrent (0.1–1.5 mA) safely introduces natural mineral ions into the eccrine sweat ducts, temporarily disrupting cholinergic sweat secretion for 5–8 days per maintenance session. This is not masking the symptom — it is silencing the sudomotor cascade.
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
                    className="p-8 feature-card-vibrant border-border/50"
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
