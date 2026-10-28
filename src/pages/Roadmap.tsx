import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";

const Roadmap = () => {
  const phases = [
    {
      phase: "PHASE 1",
      years: "Late 2026 – Early 2027",
      title: "Connected Digital Care & Physical Oasis Launch",
      focus:
        "Simultaneous launch of the HidroAlly App and the first Giftovate Oasis pilot hubs. Providing trained youth specialist pulsed-current iontophoresis so warriors get immediate, physical relief from day one. Clinical logs in HidroAlly give partner dermatologists empirical context for prescription topicals and oral blockers.",
    },
    {
      phase: "PHASE 2",
      years: "2027",
      title: "Biometric Intelligence & Wearable Prototyping",
      focus:
        "Prototyping the Giftovate Band and the wearable electrotherapy line (HydroGlove, HydroSock, HydroVisage). Building our proprietary sweat biometric dataset and transitioning from imported devices to locally engineered prototypes.",
    },
    {
      phase: "PHASE 3",
      years: "2027–2028",
      title: "Targeted Wearable Ecosystem & Domestic Manufacturing",
      focus:
        "Production-scale deployment of proprietary, wearable electrotherapy. Scaling Giftovate Oasis locations across major urban centers in Nigeria and expanding domestic retail distribution.",
    },
    {
      phase: "PHASE 4",
      years: "2028–2029",
      title: "Integrated Intelligence & Pan-African Expansion",
      focus:
        "Full deployment of the 100% Integrated Data-to-Treatment Funnel. Leveraging anonymized biometric data to drive AI-personalized care pathways and licensing our Giftovate Care Architecture to partners across West Africa.",
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
                <p className="text-xs font-bold text-primary mb-3 uppercase tracking-[0.1em]">
                  THE EXECUTION ROADMAP: FROM DATA TO DEVICE
                </p>
                <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Building the Infrastructure of Care.
                </h1>
                <p className="text-base text-muted-foreground leading-relaxed max-w-[600px] mx-auto">
                  We don't just manage symptoms. We're building a 4-phase, Data-to-Device engine — we quantify hyperhidrosis with high-resolution data, then treat it with targeted hardware built for Africa.
                </p>
              </div>

              <div className="space-y-6">
                {phases.map((p) => (
                  <Card key={p.phase} className="p-6 md:p-8 border-l-4 border-l-primary">
                    <div className="flex flex-col md:flex-row md:items-baseline md:gap-4 mb-3">
                      <span className="text-xs font-bold text-primary uppercase tracking-wider">
                        {p.phase} · {p.years}
                      </span>
                      <h3 className="text-lg md:text-xl font-medium">{p.title}</h3>
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
