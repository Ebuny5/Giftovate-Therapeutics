import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";

const Roadmap = () => {
  const phases = [
    {
      phase: "Phase 1",
      years: "2025–2026",
      title: "Diagnostic Visibility",
      focus:
        "Launching the SweatSmart App and gathering the world's first granular dataset on hyperhidrosis triggers in tropical climates.",
    },
    {
      phase: "Phase 2",
      years: "2026–2027",
      title: "Data-Driven Intervention",
      focus:
        "Scaling the Giftovate Band and Oasis integration to provide 24/7 clinical monitoring and predictive trigger alerts.",
    },
    {
      phase: "Phase 3",
      years: "2027–2028",
      title: "Targeted Hardware Ecosystem",
      focus:
        "Production-scale deployment of Thermoelectric Gloves, Socks, and Headbands, manufactured via precision laser technology, tailored specifically for high-heat/high-humidity environments.",
    },
    {
      phase: "Phase 4",
      years: "2028 and Beyond",
      title: "Global Clinical Integration",
      focus:
        "Establishing our 'Clinic-in-a-Pocket' ecosystem as the global standard for hyperhidrosis diagnostic care, bridging the specialist deficit in underserved regions.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <div className="flex-grow">
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <p className="text-sm font-bold text-primary mb-3 uppercase tracking-wider">
                  THE PATH TO CLINICAL EQUALITY
                </p>
                <h1 className="text-3xl md:text-4xl font-bold mb-4">
                  The Giftovate Roadmap: Building the Infrastructure of Care.
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We are moving beyond symptom management toward a future where hyperhidrosis is a fully recognized, medically managed condition. Our roadmap is built on a "Data-to-Device" philosophy — first, we understand the condition through high-resolution data; then, we treat it with targeted hardware.
                </p>
              </div>

              <div className="space-y-6">
                {phases.map((p) => (
                  <Card key={p.phase} className="p-6 md:p-8 border-l-4 border-l-primary">
                    <div className="flex flex-col md:flex-row md:items-baseline md:gap-4 mb-3">
                      <span className="text-sm font-bold text-primary uppercase tracking-wider">
                        {p.phase} · {p.years}
                      </span>
                      <h3 className="text-xl md:text-2xl font-bold">{p.title}</h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      <span className="font-semibold text-foreground">Focus: </span>
                      {p.focus}
                    </p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Roadmap;
