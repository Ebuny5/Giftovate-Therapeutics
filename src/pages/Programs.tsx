import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Users, HeartHandshake, TrendingUp, Globe } from "lucide-react";

const Programs = () => {
  const programs = [
    {
      icon: Users,
      title: "Community Pilots",
      description: "Engaging local communities in Africa to test and refine our hyperhidrosis solutions through collaborative pilot programs.",
    },
    {
      icon: HeartHandshake,
      title: "Stigma Reduction",
      description: "Educational initiatives to increase awareness and reduce stigma associated with hyperhidrosis in African communities, through Beyond Sweat Foundation.",
      link: "https://www.beyondsweat.org",
    },
    {
      icon: TrendingUp,
      title: "Accessibility Programs",
      description: "Making affordable hyperhidrosis care accessible to underserved populations through innovative distribution models.",
    },
    {
      icon: Globe,
      title: "Research Partnerships",
      description: "Collaborating with medical institutions and researchers to advance understanding and treatment of excessive sweating.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <div className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-hero text-white py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Our Programs
              </h1>
              <p className="text-xl text-white/90">
                Community-driven initiatives to improve hyperhidrosis care across Africa
              </p>
            </div>
          </div>
        </section>

        {/* Programs Grid */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {programs.map((program, index) => (
                <Card key={index} className="p-8 hover:shadow-soft transition-all duration-300 border-border/50">
                  <div className="rounded-full bg-gradient-hero p-4 w-16 h-16 flex items-center justify-center mb-6">
                    <program.icon className="text-white" size={28} />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">{program.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{program.description}</p>
                  {program.link && (
                    <a href={program.link} target="_blank" rel="noopener noreferrer" className="inline-block mt-4 text-primary hover:underline font-medium">
                      Visit Beyond Sweat Foundation →
                    </a>
                  )}
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Roadmap Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <p className="text-sm font-bold text-primary mb-3 uppercase tracking-wider">
                  THE PATH TO CLINICAL EQUALITY
                </p>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  The Giftovate Roadmap: Building the Infrastructure of Care.
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We are moving beyond symptom management toward a future where hyperhidrosis is a fully recognized, medically managed condition. Our roadmap is built on a "Data-to-Device" philosophy — first, we understand the condition through high-resolution data; then, we treat it with targeted hardware.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  {
                    phase: "Phase 1",
                    years: "2025–2026",
                    title: "Diagnostic Visibility",
                    focus: "Launching the SweatSmart App and gathering the world's first granular dataset on hyperhidrosis triggers in tropical climates.",
                  },
                  {
                    phase: "Phase 2",
                    years: "2026–2027",
                    title: "Data-Driven Intervention",
                    focus: "Scaling the Giftovate Ring and Hub integration to provide 24/7 clinical monitoring and predictive trigger alerts.",
                  },
                  {
                    phase: "Phase 3",
                    years: "2027–2028",
                    title: "Targeted Hardware Ecosystem",
                    focus: "Production-scale deployment of Thermoelectric Gloves, Socks, and Headbands, manufactured via precision laser technology, tailored specifically for high-heat/high-humidity environments.",
                  },
                  {
                    phase: "Phase 4",
                    years: "2028 and Beyond",
                    title: "Global Clinical Integration",
                    focus: "Establishing our 'Clinic-in-a-Pocket' ecosystem as the global standard for hyperhidrosis diagnostic care, bridging the specialist deficit in underserved regions.",
                  },
                ].map((p) => (
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

        {/* Mission Statement */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Giftovate Therapeutics is committed to developing and deploying affordable, 
                effective hyperhidrosis solutions tailored for African communities. Through 
                community engagement, innovative technology, and sustainable practices, we 
                aim to improve quality of life and reduce the stigma associated with excessive sweating.
              </p>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Programs;
