import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Leaf, Users, FlaskConical, Wallet } from "lucide-react";
import ecoCapsImage from "@/assets/ecocaps-hero.jpg";

const EcoCaps = () => {
  const features = [
    {
      icon: FlaskConical,
      title: "Botanical Anticholinergics",
      description: "Formulated with potent natural compounds like Sage (Salvia officinalis), containing thujone and rosmarinic acid known for their natural anticholinergic properties that inhibit sweat gland over-activation at the source.",
    },
    {
      icon: Users,
      title: "Community-Led Innovation",
      description: "Built on the wisdom of local African traditional medicine, refined through clinical observation. EcoCaps harmonize the autonomic nervous system, providing a sustainable foundation for long-term management.",
    },
    {
      icon: Leaf,
      title: "Sustainable Sourcing",
      description: "All herbal ingredients are sustainably sourced from local suppliers, supporting community economies while maintaining environmental responsibility.",
    },
    {
      icon: Wallet,
      title: "Affordable & Accessible",
      description: "Designed to provide effective, high-quality care that is financially reachable for every warrior. Combine with digital tracking to end the anxiety-sweat cycle.",
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
                src={ecoCapsImage}
                alt="EcoCaps plant-based capsules"
                className="w-full h-auto rounded-2xl mb-10 md:mb-14"
              />
              <div className="text-center">
                <p className="text-sm font-bold text-primary mb-3 uppercase tracking-wider">
                  SUDOMOTOR SYNERGY FROM WITHIN
                </p>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                  EcoCaps: Holistic. Sustainable. Validated.
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground mb-4">
                  Reclaim your internal balance.
                </p>
                <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
                  EcoCaps represent our commitment to plant-based sudomotor regulation. Co-created with local African communities and pilot-tested through the SweatSmart initiative, these eco-friendly capsules offer a natural, synergetic alternative for warriors seeking relief without the side effects of traditional pharmaceuticals.
                </p>
                <Button size="lg">
                  Join the EcoCaps Pilot
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
                <h2 className="text-3xl font-bold mb-4">Plant-Based Sudomotor Regulation</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Combining traditional herbal wisdom with modern clinical observation for effective, sustainable relief
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

        {/* About EcoCaps */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Why EcoCaps?</h2>
              <Card className="p-8 space-y-6">
                <div>
                  <h3 className="font-semibold text-lg mb-3">Botanical Anticholinergics</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Formulated with potent natural compounds like Sage (Salvia officinalis), which contains thujone and rosmarinic acid known for their natural anticholinergic properties. These ingredients work internally to inhibit sweat gland over-activation at the source.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-3">Community-Led Innovation</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Our formula is built on the wisdom of local African traditional medicine, refined through clinical observation. EcoCaps are designed to harmonize the autonomic nervous system, providing a sustainable foundation for long-term management.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-3">SweatSmart Integration</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    By combining "Synergy from Within" with your digital tracking, you can finally end the anxiety-sweat cycle. Monitor your progress and optimize your dosage through the SweatSmart analytics dashboard.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-3">Affordable Access</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    EcoCaps align with our mission to provide effective, high-quality care that is financially reachable for every warrior. No more choosing between relief and financial stability.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <Card className="bg-gradient-card p-8 md:p-12 text-center max-w-3xl mx-auto border-primary/20">
              <h2 className="text-3xl font-bold mb-4">Join the EcoCaps Pilot</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Be part of our community pilot program and experience natural sudomotor synergy while contributing to product development
              </p>
              <Button size="lg">Participate in Pilot</Button>
            </Card>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default EcoCaps;
