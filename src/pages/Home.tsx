import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Droplets, Leaf } from "lucide-react";
import heroImage from "@/assets/hero-sustainable.png";
import empoweringImage from "@/assets/empowering-relief.jpg";
import sweatsmartImage from "@/assets/sweatsmart-hero.jpg";
import gloveImage from "@/assets/glove-background.jpg";

const Home = () => {
  const products = [
    {
      icon: Droplets,
      title: "Cooling Sock",
      description: "Stay cool and dry with our innovative cooling sock",
      link: "/cooling-sock",
    },
    {
      icon: Leaf,
      title: "EcoCaps",
      description: "Plant-based herbal capsules for sustainable relief",
      link: "/ecocaps",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative text-white py-32 md:py-48 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="Thermoelectric glove with sustainable design" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Sustainable Relief for Hyperhidrosis
            </h1>
            <p className="text-lg md:text-xl mb-8 text-white/95 leading-relaxed">
              Giftovate develops low-energy wearables and plant-based EcoCaps, creating local jobs and reducing waste through circular design.
            </p>
            <Link to="/sweatsmart-app">
              <Button size="lg" className="bg-primary/90 hover:bg-primary text-white font-semibold px-8">
                TRY SWEATSMART
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto mb-16">
            <div>
              <p className="text-sm font-semibold text-primary mb-3 uppercase tracking-wider">
                EMPOWERING RELIEF
              </p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Transforming hyperhidrosis care in africa
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Giftovate Therapeutics Ltd is dedicated to revolutionizing the way we detect and relieve 
                palmar and plantar hyperhidrosis. Founded by Gifty Aruwajoye, we partner with Beyond Sweat 
                to tackle the stigma surrounding excessive sweating while ensuring affordable access to care. 
                Our innovative SweatSmart app and prototype devices are designed with local communities in mind, 
                prioritizing safety, ethics, and invaluable feedback from users. Join us in our mission to change 
                lives through early detection and effective relief.
              </p>
              <Link to="/programs" className="text-primary hover:underline font-medium">
                Get in touch →
              </Link>
            </div>
            <div className="relative">
              <img 
                src={empoweringImage} 
                alt="SweatSmart app and glove device with healthcare team"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>

          {/* SweatSmart App Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto mb-16">
            <div className="relative order-2 md:order-1">
              <img 
                src={sweatsmartImage} 
                alt="SweatSmart mobile app showing palm scan feature"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
            <div className="order-1 md:order-2">
              <p className="text-sm font-semibold text-primary mb-3 uppercase tracking-wider">
                INNOVATIVE SCREENING
              </p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                SweatSmart App: Revolutionizing Sweat Detection
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                The SweatSmart app revolutionizes how you detect excessive sweating, specifically targeting 
                palmar and plantar hyperhidrosis. Using a simple palm scan, the app provides immediate feedback 
                and early screening results, empowering users to take control of their condition.
              </p>
              <Link to="/sweatsmart-app" className="text-primary hover:underline font-medium">
                Learn more about SweatSmart →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Thermoelectric Glove Section with Background */}
      <section className="relative text-white py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={gloveImage} 
            alt="Thermoelectric glove prototype for palm sweating relief" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-primary-foreground mb-3 uppercase tracking-wider">
              ADVANCED COOLING TECHNOLOGY
            </p>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Thermoelectric Glove: Redefining Comfort
            </h2>
            <p className="text-lg md:text-xl text-white/95 leading-relaxed mb-8">
              Introducing the prototype thermoelectric glove, a groundbreaking solution designed to provide 
              relief for those suffering from excessive palm sweating. This innovative wearable technology uses 
              advanced thermoelectric materials to regulate temperature and minimize sweat production, bringing 
              comfort and confidence to your daily activities.
            </p>
            <Link to="/thermoelectric-glove">
              <Button size="lg" variant="secondary">
                Learn more about the Thermoelectric Glove →
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4">

          {/* Products Grid */}
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {products.map((product, index) => (
              <Link key={index} to={product.link}>
                <Card className="p-6 h-full hover:shadow-soft transition-all duration-300 hover:-translate-y-1 cursor-pointer border-border/50 hover:border-primary/50">
                  <div className="rounded-full bg-gradient-hero p-3 w-12 h-12 flex items-center justify-center mb-4">
                    <product.icon className="text-white" size={24} />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{product.title}</h3>
                  <p className="text-sm text-muted-foreground">{product.description}</p>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">App-Based</div>
                <h3 className="font-semibold mb-2">Digital Health</h3>
                <p className="text-sm text-muted-foreground">
                  Track and manage your condition with our SweatSmart mobile application
                </p>
              </div>
              <div>
                <div className="text-4xl font-bold text-secondary mb-2">Wearable</div>
                <h3 className="font-semibold mb-2">Cooling Devices</h3>
                <p className="text-sm text-muted-foreground">
                  Experience relief with our thermoelectric gloves and cooling socks
                </p>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">Community</div>
                <h3 className="font-semibold mb-2">Pilot Programs</h3>
                <p className="text-sm text-muted-foreground">
                  Join our community-driven approach to improving care accessibility
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <Card className="bg-gradient-card p-8 md:p-12 text-center max-w-3xl mx-auto border-primary/20">
            <h2 className="text-3xl font-bold mb-4">Ready to Take Control?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Explore our innovative solutions and join the community working to reduce stigma and improve care for hyperhidrosis
            </p>
            <Link to="/resources">
              <Button size="lg">Explore Resources</Button>
            </Link>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
