import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-sustainable.png";
import empoweringImage from "@/assets/empowering-relief.jpg";
import sweatsmartImage from "@/assets/sweatsmart-hero.jpg";
import gloveImage from "@/assets/thermoelectric-glove.png";
import faceMaskImage from "@/assets/face-mask.png";
import coolingSockImage from "@/assets/cooling-sock.jpg";
import ecocapsImage from "@/assets/ecocaps-hero.jpg";

const Home = () => {
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
              Giftovate Therapeutics Ltd develops low-energy wearables and plant-based EcoCaps, creating local jobs and reducing waste through circular design.
            </p>
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
              Hyperhidrosis is not a cosmetic problem; it is a silent medical crisis affecting 385 million warriors globally. At Giftovate Therapeutics Ltd, we are dismantling the barriers to care in Africa. By fusing clinical-grade sudomotor biometrics with revolutionary thermoelectric hardware, we are giving warriors what they deserve most: the freedom to be seen without trepidation. We achieve this through our operational digital platform, SweatSmart, and our upcoming line of thermoelectric cooling hardware.
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
                Engineering a Sweat-Free Future
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                SweatSmart is the world's first clinical-grade digital ecosystem designed to break the anxiety-sweat cycle through integrated intelligence and high-fidelity analytics.
              </p>
              <Link to="/sweatsmart-app" className="text-primary hover:underline font-medium">
                Learn more about SweatSmart →
              </Link>
            </div>
          </div>

          {/* Thermoelectric Glove Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto mb-16">
            <div>
              <p className="text-sm font-semibold text-primary mb-3 uppercase tracking-wider">
                THE THERMOELECTRIC FRONTIER
              </p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Thermoelectric Glove: Restoring Precision & Performance
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Active Sudomotor Suppression meets Rapid Recovery. While passive glove liners only manage the aftermath, Giftovate's prototype thermoelectric gloves address the source. By utilizing integrated Peltier cooling modules, the glove actively pumps heat away from the skin's surface, bypassing the "evaporative failure" that occurs in tropical climates once humidity crosses 70%.
              </p>
              <Link to="/thermoelectric-glove" className="text-primary hover:underline font-medium">
                Learn more about the Thermoelectric Glove →
              </Link>
            </div>
            <div className="relative">
              <img 
                src={gloveImage} 
                alt="Thermoelectric glove prototype for palm sweating relief"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>

          {/* Cooling Sock Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto mb-16">
            <div className="relative order-2 md:order-1">
              <img 
                src={coolingSockImage} 
                alt="Cooling sock prototype for plantar hyperhidrosis relief"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
            <div className="order-1 md:order-2">
              <p className="text-sm font-semibold text-primary mb-3 uppercase tracking-wider">
                THE PLANTAR PROTOCOL
              </p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Active Cooling Socks: Ending "Shoe-Removal Anxiety"
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                For warriors with plantar hyperhidrosis, every day feels like walking through a rainstorm inside their shoes. Our cooling socks are engineered with moisture-wicking natural fibers (Bamboo and Merino Wool) and integrated Peltier units to eliminate the "Catch-22" of enclosed footwear. Walk at your natural pace with total stability, knowing your feet are locked into a dry, high-friction environment.
              </p>
              <Link to="/cooling-sock" className="text-primary hover:underline font-medium">
                Learn more about Cooling Sock →
              </Link>
            </div>
          </div>

          {/* EcoCaps Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto mb-16">
            <div>
              <p className="text-sm font-semibold text-primary mb-3 uppercase tracking-wider">
                SUDOMOTOR SYNERGY FROM WITHIN
              </p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                EcoCaps: Holistic. Sustainable. Validated.
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Reclaim your internal balance. EcoCaps represent our commitment to plant-based sudomotor regulation. Co-created with local African communities and pilot-tested through the SweatSmart initiative, these eco-friendly capsules offer a natural, synergetic alternative for warriors seeking relief without the side effects of traditional pharmaceuticals.
              </p>
              <Link to="/ecocaps" className="text-primary hover:underline font-medium">
                Learn more about EcoCaps →
              </Link>
            </div>
            <div className="relative">
              <img 
                src={ecocapsImage} 
                alt="EcoCaps plant-based herbal capsules for sustainable hyperhidrosis relief"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>

          {/* Face Mask Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto mb-16">
            <div className="relative order-2 md:order-1">
              <img 
                src={faceMaskImage} 
                alt="Face mask prototype for craniofacial hyperhidrosis relief"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
            <div className="order-1 md:order-2">
              <p className="text-sm font-semibold text-primary mb-3 uppercase tracking-wider">
                FACIAL COOLING SOLUTION
              </p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Face Mask: Relief for Craniofacial Hyperhidrosis
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Our innovative face mask prototype addresses craniofacial hyperhidrosis, providing targeted relief 
                for excessive facial sweating. Designed with advanced cooling technology and breathable materials, 
                this wearable solution helps manage forehead, cheek, and facial perspiration, restoring confidence 
                in social and professional settings.
              </p>
              <Link to="/programs" className="text-primary hover:underline font-medium">
                Learn more about Face Mask →
              </Link>
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
