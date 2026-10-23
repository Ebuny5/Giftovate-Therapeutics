import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Footprints, ShieldCheck, Sparkles, Zap, Sun, Activity } from "lucide-react";
import sockImage from "@/assets/hydrosock-render.jpg";

const HydroSock = () => {
  const features = [
    {
      icon: Footprints,
      title: "Firm Gait, No More Slips",
      description:
        "Eliminates dangerous \"slippery accidents\" inside sandals, slippers, or on bare floors. By stopping excessive plantar secretion at the source, you walk at your natural cadence with total biomechanical stability in a dry, high-friction footbed.",
    },
    {
      icon: ShieldCheck,
      title: "Odor-Free Shoe Removal",
      description:
        "Antimicrobial silver-infused fibers combined with sweat duct normalization neutralize odor-causing bacteria at the root cause rather than masking it with perfumes. Remove your shoes at home, work, or social gatherings with zero trepidation.",
    },
    {
      icon: Sparkles,
      title: "Tile-Safe Confidence & Zero Maceration",
      description:
        "Stop living in fear of leaving damp footprints or white maceration rings on parquet and polished tile flooring. The Plantar Protocol maintains an intact, dry stratum corneum for clean, confident footing anywhere.",
    },
    {
      icon: Zap,
      title: "Anatomical Five-Toe Zone Electrodes",
      description:
        "Unlike flat water tubs that fail to reach sweaty toe webs, HydroSock features individual five-toe hydrogel contact caps, ball-of-foot pads, and heel contact points for 100% comprehensive plantar coverage.",
    },
    {
      icon: Sun,
      title: "Tropical Resilience & All-Day Comfort",
      description:
        "Engineered specifically for tropical climates where ambient heat exceeds 28°C and humidity is smothering. Breathable Bamboo-Merino knit keeps feet comfortable, while the lightweight snap-on ankle pod delivers quiet, portable treatments.",
    },
    {
      icon: Activity,
      title: "HidroAlly App Sync",
      description:
        "Connects directly to the HidroAlly app to log plantar treatment sessions, maintain your 5–10 day dry-footbed protocol, and receive preventative reminders ahead of hot, humid weather.",
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
                src={sockImage}
                alt="HydroSock five-toe plantar electrotherapy sock"
                className="w-full h-auto rounded-2xl mb-10 md:mb-14"
              />
              <div className="text-center">
                <p className="text-sm font-bold text-primary mb-3 uppercase tracking-wider">
                  THE PLANTAR PROTOCOL
                </p>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                  HydroSock: Targeted Five-Toe Plantar Electrotherapy
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground mb-4">
                  Ending "Shoe-Removal Anxiety" and Restoring Every Confident Step.
                </p>
                <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
                  For warriors with plantar hyperhidrosis, every day feels like walking through a rainstorm inside their shoes. Where bulky water-basin trays fail in active daily life, our HydroSock five-toe wearable is engineered with moisture-wicking natural fibers (Bamboo and Merino Wool) and five-zone isotonic hydrogel iontophoresis electrodes to eliminate the "Catch-22" of enclosed footwear.
                </p>
                <Button size="lg">Join the Pilot Program</Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="text-3xl font-bold">
                The Science: <span className="accent-italic">Beyond Water Trays, Needles & Cracked Skin</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Plantar hyperhidrosis is driven by one of the highest concentrations of eccrine sweat glands on the human body, densely distributed across the toes, metatarsal ball, arch, and heel. In warm and tropical climates, sweat rapidly pools inside enclosed footwear, causing epidermal maceration, odor-producing bacterial breakdown, and dangerous loss of footing.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Conventional clinical options force severe trade-offs: bulky tap-water basins anchor warriors to a wall socket and miss sweaty toe web spaces, harsh aluminum foot topicals cause painful fissures and peeling, and plantar Botox injections require dozens of agonizing needle strikes across sensitive foot nerves.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                HydroSock replaces these compromises with targeted, portable plantar electrotherapy. Delivering calibrated, low-voltage direct microcurrent through five anatomically mapped isotonic hydrogel zones, it introduces mild mineral ions that temporarily normalize cholinergic sweat output at the duct level — providing 5–10 days of dry, stable gait per maintenance session.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-muted/30">
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

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <Card className="bg-gradient-card p-8 md:p-12 text-center max-w-3xl mx-auto border-primary/20">
              <h2 className="text-3xl font-bold mb-4">Join Our Pilot Program</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Be among the first to experience portable plantar electrotherapy and help shape the future of needle-free foot-dryness treatment
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

export default HydroSock;
