import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-sustainable.png";

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
      <section className="relative overflow-hidden">
        <img 
          src={heroImage} 
          alt="Thermoelectric glove with sustainable design" 
          className="w-full h-auto object-cover"
        />
      </section>

      {/* About Section */}
      <section className="pt-16 md:pt-20 pb-0 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-16">
            <p className="overline-label mb-3">
              EMPOWERING RELIEF
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Transforming Hyperhidrosis Care in Africa
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Hyperhidrosis is not merely a cosmetic concern; it is a silent medical crisis impacting 385 million Warriors worldwide. At Giftovate Therapeutics Ltd, we are dismantling the systemic barriers to specialized care across the continent. By fusing clinical-grade sudomotor biometrics with revolutionary thermoelectric hardware, we empower Warriors with the freedom to be seen without trepidation.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              We achieve this through our operational digital platform,{" "}
              <a href="https://sweatsmart.guru" target="_blank" rel="noopener noreferrer" className="text-[#6B21A8] hover:underline font-medium">SweatSmart</a>
              —which provides proactive climate-aware alerts and HidroAlly clinical intelligence—and our upcoming line of localized thermoelectric cooling hardware, including smart gloves and Eco-Caps currently in the functional prototype stage.
            </p>
            <h3 className="text-2xl font-bold mb-4 mt-8">Our Strategic Partnership</h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Our technical innovation is fueled by our close partnership with the{" "}
              <a href="https://beyondsweat.org" target="_blank" rel="noopener noreferrer" className="text-[#6B21A8] hover:underline font-medium">Beyond Sweat Foundation</a>
              . While Giftovate engineers the hardware and software solutions, the Foundation leads our mission-critical advocacy, community awareness, and educational outreaches. Together, we are building the first-ever Pan-African dataset to break the silence and restore bodily dignity to the 5% of the West African workforce currently threatened by heat-stress-induced productivity loss.
            </p>
            <Link to="/programs" className="text-primary hover:underline font-medium">
              Get in touch →
            </Link>
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
              <p className="overline-label mb-3">
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
              <p className="overline-label mb-3">
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
              <p className="overline-label mb-3">
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
              <p className="overline-label mb-3">
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
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="relative order-2 md:order-1">
              <img 
                src={faceMaskImage} 
                alt="Face mask prototype for craniofacial hyperhidrosis relief"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
            <div className="order-1 md:order-2">
              <p className="overline-label mb-3">
                PRECISION THERMAL REGULATION
              </p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Face Mask: Craniofacial Mastery
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Stop the "rain" before it begins. Command the room with total composure. Our innovative face mask prototype provides targeted, silent relief for craniofacial hyperhidrosis. Utilizing integrated Peltier cooling modules, the mask provides active heat extraction from the forehead and cheeks, bypassing the "evaporative failure" that occurs in tropical zones once the climate crosses the 28°C and 70% humidity threshold.
              </p>
              <Link to="/face-mask" className="text-primary hover:underline font-medium">
                Learn more about Face Mask →
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="-mt-2 pt-0 pb-16 md:-mt-4 md:pt-0 md:pb-20">
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
