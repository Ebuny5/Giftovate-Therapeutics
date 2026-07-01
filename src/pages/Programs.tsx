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
