import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Thermometer, Zap, Hand, Heart } from "lucide-react";
import gloveImage from "@/assets/thermoelectric-glove.png";

const ThermoelectricGlove = () => {
  const features = [
    {
      icon: Thermometer,
      title: "Active Sudomotor Suppression",
      description: "Integrated Peltier cooling modules actively pump heat away from the skin's surface, bypassing the \"evaporative failure\" that occurs in tropical climates once humidity crosses 70%.",
    },
    {
      icon: Hand,
      title: "AVA Targeting Technology",
      description: "Targets Arteriovenous Anastomoses (AVAs) — the body's primary radiators in the hand — to stabilize local skin temperature and reduce sympathetic nerve over-activation.",
    },
    {
      icon: Zap,
      title: "Restoring Manual Dexterity",
      description: "Eliminates \"ghost touches\" and moisture interference on capacitive touchscreens, ensuring your grip remains dry and your precision remains sharp.",
    },
    {
      icon: Heart,
      title: "Heart Rate & Recovery",
      description: "Active hand cooling accelerates heart rate recovery and reduces muscle fatigue after high-intensity stress — essential for both daily work and post-exercise recovery.",
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
                alt="Thermoelectric cooling glove"
                className="w-full h-auto rounded-2xl mb-10 md:mb-14"
              />
              <div className="text-center">
                <p className="text-sm font-bold text-primary mb-3 uppercase tracking-wider">
                  THE THERMOELECTRIC FRONTIER
                </p>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                  Thermoelectric Glove: Restoring Precision & Performance
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground mb-4">
                  Active Sudomotor Suppression meets Rapid Recovery.
                </p>
                <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
                  While passive glove liners only manage the aftermath, Giftovate's prototype thermoelectric gloves address the source. By utilizing integrated Peltier cooling modules, the glove actively pumps heat away from the skin's surface.
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
                <h2 className="text-3xl font-bold mb-4">Advanced Cooling Technology</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Precision-engineered to target the body's natural cooling pathways and restore full manual function
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {features.map((feature, index) => (
                  <Card key={index} className="p-8 hover:shadow-soft transition-all border-border/50">
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

        {/* How It Works */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">How It Works</h2>
              <Card className="p-8">
                <p className="text-muted-foreground leading-relaxed mb-6">
                  The hand contains specialized vascular structures called Arteriovenous Anastomoses (AVAs) that act as the body's primary radiators. Our thermoelectric glove targets these sites using Peltier effect technology to create a temperature differential that actively pumps heat away from the skin, stabilizing local skin temperature and reducing sympathetic nerve over-activation.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                    <p className="text-sm">Wear the glove on the affected hand — the Peltier modules begin active cooling immediately</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                    <p className="text-sm">AVA targeting stabilizes your thermal baseline and reduces sympathetic over-activation</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                    <p className="text-sm">Manual dexterity is restored — no more ghost touches, slippery grip, or moisture interference</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                    <p className="text-sm">HidroAlly integration sends proactive alerts when conditions require activation</p>
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
              <h2 className="text-3xl font-bold mb-4">Join Our Pilot Program</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Be among the first to test our thermoelectric glove prototype and help shape the future of localized sudomotor suppression
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

export default ThermoelectricGlove;
