import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Smartphone, BarChart3, Bell, Users } from "lucide-react";
import appPreview from "@/assets/sweatsmart-app-preview.jpg";

const SweatSmartApp = () => {
  const features = [
    {
      icon: Smartphone,
      title: "Easy Tracking",
      description: "Log your sweating episodes and identify patterns with our intuitive interface",
    },
    {
      icon: BarChart3,
      title: "Data Analytics",
      description: "Visualize your progress with detailed charts and insights",
    },
    {
      icon: Bell,
      title: "Smart Reminders",
      description: "Get personalized notifications for treatment and self-care routines",
    },
    {
      icon: Users,
      title: "Community Connection",
      description: "Connect with others managing hyperhidrosis and share experiences",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <div className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-hero text-white py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                SweatSmart App
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8">
                Smart tools for sweat management
              </p>
              <Button size="lg" variant="secondary">
                Download App (Coming Soon)
              </Button>
            </div>
          </div>
        </section>

        {/* Main Description Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Revolutionizing Sweat Detection
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    The SweatSmart app revolutionizes how you detect excessive sweating, specifically targeting 
                    palmar and plantar hyperhidrosis. Using a simple palm scan, the app provides immediate feedback 
                    and early screening results, empowering users to take control of their condition.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    This innovative tool is designed for ease of use in everyday settings, making it accessible for 
                    everyone. As part of our community pilots, the app collects de-identified data to enhance its 
                    effectiveness and tailor solutions for African users.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                    Join us in pioneering a smarter approach to sweat management and experience the relief you deserve. 
                    Our digital tool reduces diagnostic waste by connecting the right people with the right solutions.
                  </p>
                </div>
                <div className="relative">
                  <img 
                    src={appPreview} 
                    alt="SweatSmart mobile app interface showing palm scan feature"
                    className="rounded-lg shadow-lg w-full h-auto"
                  />
                </div>
              </div>

              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Key Features</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Powerful tracking and management tools in your pocket
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
              <h2 className="text-3xl font-bold mb-12 text-center">How It Works</h2>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Download & Setup</h3>
                    <p className="text-muted-foreground">
                      Install the SweatSmart app and complete your personalized profile
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Track Episodes</h3>
                    <p className="text-muted-foreground">
                      Log sweating episodes, triggers, and treatment responses
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Analyze & Improve</h3>
                    <p className="text-muted-foreground">
                      Review insights and adjust your management strategy
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                    4
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Connect & Share</h3>
                    <p className="text-muted-foreground">
                      Join the community and participate in pilot programs
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <Card className="bg-gradient-card p-8 md:p-12 text-center max-w-3xl mx-auto border-primary/20">
              <h2 className="text-3xl font-bold mb-4">Ready to Take Control of Your Sweating?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Join our early access program to be the first to experience SweatSmart
              </p>
              <Button size="lg">Join Pilot Program</Button>
            </Card>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default SweatSmartApp;
