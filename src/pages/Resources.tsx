import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { BookOpen, FileText, Video, Users } from "lucide-react";

const Resources = () => {
  const resourceCategories = [
    {
      icon: BookOpen,
      title: "Educational Materials",
      description: "Learn about hyperhidrosis, its causes, and management strategies",
      items: [
        "Understanding Hyperhidrosis",
        "Living with Excessive Sweating",
        "Treatment Options Overview",
      ],
    },
    {
      icon: FileText,
      title: "Product Guides",
      description: "Detailed information about our innovative solutions",
      items: [
        "HidroAlly App User Guide",
        "Thermoelectric Glove Instructions",
        "Cooling Sock Care Guide",
      ],
    },
    {
      icon: Video,
      title: "Video Tutorials",
      description: "Visual guides to help you get the most from our products",
      items: [
        "Getting Started with HidroAlly",
        "Device Maintenance Tips",
        "Success Stories",
      ],
    },
    {
      icon: Users,
      title: "Community Support",
      description: "Connect with others and share experiences",
      items: [
        "Online Support Groups",
        "Community Forums",
        "Local Pilot Programs",
      ],
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
                Resources for Hyperhidrosis Relief
              </h1>
              <p className="text-xl text-white/90">
                Explore tools, guides, and community support for managing excessive sweating
              </p>
            </div>
          </div>
        </section>

        {/* Resources Grid */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {resourceCategories.map((category, index) => (
                <Card key={index} className="p-8 hover:shadow-soft transition-all duration-300 border-border/50">
                  <div className="rounded-full bg-gradient-hero p-4 w-16 h-16 flex items-center justify-center mb-6">
                    <category.icon className="text-white" size={28} />
                  </div>
                  <h3 className="text-2xl font-semibold mb-3">{category.title}</h3>
                  <p className="text-muted-foreground mb-6">{category.description}</p>
                  <ul className="space-y-2 mb-6">
                    {category.items.map((item, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" className="w-full">
                    Explore {category.title}
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Product Quick Links */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Explore Our Solutions</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <Link to="/hidroally-app" className="block">
                  <Card className="p-6 text-center hover:shadow-soft transition-all hover:-translate-y-1 cursor-pointer">
                    <h3 className="font-semibold">HidroAlly App</h3>
                  </Card>
                </Link>
                <Link to="/thermoelectric-glove" className="block">
                  <Card className="p-6 text-center hover:shadow-soft transition-all hover:-translate-y-1 cursor-pointer">
                    <h3 className="font-semibold">Thermoelectric Glove</h3>
                  </Card>
                </Link>
                <Link to="/cooling-sock" className="block">
                  <Card className="p-6 text-center hover:shadow-soft transition-all hover:-translate-y-1 cursor-pointer">
                    <h3 className="font-semibold">Cooling Sock</h3>
                  </Card>
                </Link>
                <Link to="/ecocaps" className="block">
                  <Card className="p-6 text-center hover:shadow-soft transition-all hover:-translate-y-1 cursor-pointer">
                    <h3 className="font-semibold">EcoCaps</h3>
                  </Card>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Resources;
