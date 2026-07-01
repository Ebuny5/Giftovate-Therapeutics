import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-sustainable.png";
import sweatsmartImage from "@/assets/sweatsmart-hero.jpg";
import gloveImage from "@/assets/thermoelectric-glove.png";
import faceMaskImage from "@/assets/face-mask.png";
import coolingSockImage from "@/assets/cooling-sock.jpg";
import ecocapsImage from "@/assets/ecocaps-hero.jpg";
import bandImage from "@/assets/giftovate-band.png.asset.json";
import oasisImage from "@/assets/giftovate-oasis.jpg";

import "@/styles/giftovate-cards.css";

type Product = {
  overline: string;
  title: React.ReactNode;
  body: string;
  href: string;
  cta: string;
  image: string;
  cardClass: string;
  reverse?: boolean;
  bandClass?: string;
};

const products: Product[] = [
  {
    overline: "INNOVATIVE SCREENING",
    title: <>Engineering a <span className="accent-italic">sweat-free</span> future.</>,
    body: "SweatSmart is the world's first clinical-grade digital ecosystem designed to break the anxiety-sweat cycle through integrated intelligence, climate-aware alerts and HidroAlly consultations.",
    href: "/sweatsmart-app",
    cta: "Learn about SweatSmart",
    image: sweatsmartImage,
    cardClass: "product-card-purple",
    bandClass: "band-cream",
  },
  {
    overline: "THE BIOMETRIC STANDARD",
    title: <>Clinical-grade monitoring, <span className="accent-italic accent-italic-magenta">always on.</span></>,
    body: "The Giftovate Band captures the physiological data mobile apps miss — Electrodermal Activity and Heart Rate Variability read from the wrist to predict hyperhidrosis triggers before they manifest.",
    href: "/giftovate-band",
    cta: "Meet the Giftovate Band",
    image: bandImage.url,
    cardClass: "product-card-indigo",
    reverse: true,
    bandClass: "band-ink",
  },
  {
    overline: "THE THERMOELECTRIC FRONTIER",
    title: <>Restoring <span className="accent-italic">precision</span> & performance.</>,
    body: "Active sudomotor suppression meets rapid recovery. Integrated Peltier modules pump heat away from the palm, bypassing the evaporative failure that grips tropical climates above 70% humidity.",
    href: "/thermoelectric-glove",
    cta: "Explore the glove",
    image: gloveImage,
    cardClass: "product-card-magenta",
    bandClass: "band-cream",
  },
  {
    overline: "THE PLANTAR PROTOCOL",
    title: <>Ending <span className="accent-italic">shoe-removal</span> anxiety.</>,
    body: "Bamboo and Merino fibers meet integrated Peltier units. Walk at your natural pace with total stability — feet locked into a dry, high-friction environment all day.",
    href: "/cooling-sock",
    cta: "See the cooling sock",
    image: coolingSockImage,
    cardClass: "product-card-purple",
    reverse: true,
    bandClass: "band-purple",
  },
  {
    overline: "PRECISION THERMAL REGULATION",
    title: <>Craniofacial <span className="accent-italic">mastery.</span></>,
    body: "Stop the rain before it begins. Targeted, silent Peltier cooling for the forehead and cheeks — command the room with total composure, even past the 28°C / 70% humidity threshold.",
    href: "/face-mask",
    cta: "Discover the face mask",
    image: faceMaskImage,
    cardClass: "product-card-sunset",
    bandClass: "band-cream",
  },
  {
    overline: "SUDOMOTOR SYNERGY FROM WITHIN",
    title: <>Holistic. Sustainable. <span className="accent-italic accent-italic-magenta">Validated.</span></>,
    body: "EcoCaps are our plant-based sudomotor regulator — co-created with local African communities and pilot-tested through SweatSmart. A natural, synergetic alternative without pharmaceutical side effects.",
    href: "/ecocaps",
    cta: "Learn about EcoCaps",
    image: ecocapsImage,
    cardClass: "product-card-cream",
    reverse: true,
    bandClass: "band-coral-tint",
  },
  {
    overline: "CLINICAL RELIEF ON DEMAND",
    title: <>Empowering lives, one <span className="accent-italic">session</span> at a time.</>,
    body: "Localized recovery stations delivering professional-grade thermoelectric sessions at a micro-price — while training local youth into Certified Sudomotor Specialists. Relief on demand, careers built in place.",
    href: "/giftovate-oasis",
    cta: "Visit the Oasis",
    image: oasisImage,
    cardClass: "product-card-magenta",
    bandClass: "band-ink",
  },
];

const ProductRow = ({ p }: { p: Product }) => (
  <section className={`section-pad ${p.bandClass ?? ""}`}>
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center max-w-6xl mx-auto">
        <div className={`product-card ${p.cardClass} ${p.reverse ? "md:order-2" : ""}`}>
          <img src={p.image} alt="" />
        </div>
        <div className={p.reverse ? "md:order-1" : ""}>
          <p className="overline-label mb-2">{p.overline}</p>
          <h2 className="mb-4 leading-tight" style={{ fontSize: "clamp(2.5rem, 10vw, 4rem)", fontWeight: "900", lineHeight: "0.95" }}>{p.title}</h2>
          <p className="text-base md:text-lg leading-relaxed mb-8 opacity-90">{p.body}</p>
          <Link to={p.href} className="link-arrow">
            {p.cta} <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  </section>
);

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* HERO — dark band, big italic-accent headline, coral CTA */}
      <section className="band-ink relative overflow-hidden">
        <div className="container mx-auto px-4 pt-4 md:pt-8 pb-20 md:pb-32">
          <div className="max-w-5xl">
            <p className="overline-label mb-2">GIFTOVATE THERAPEUTICS LTD</p>
            <h1 className="mb-4 leading-tight tracking-tighter" style={{ fontSize: "clamp(4rem, 15vw, 10rem)", fontWeight: "900", lineHeight: "0.95" }}>
              Transforming hyperhidrosis care{" "}
              <span className="accent-italic">globally.</span>
            </h1>
            <p className="text-lg md:text-xl text-white/85 max-w-2xl leading-relaxed mb-10">
              Clinical-grade sudomotor biometrics fused with thermoelectric hardware —
              built for the 385 million Warriors the industry forgot.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/sweatsmart-app" className="btn-coral">
                Join the pilot <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/programs" className="btn-purple">
                Our programs
              </Link>
            </div>
          </div>
        </div>
        <div className="relative">
          <img src={heroImage} alt="Sustainable thermoelectric wearable" className="w-full h-auto object-cover" />
        </div>
      </section>

      {/* MISSION — cream band, large body copy */}
      <section className="section-pad band-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="overline-label mb-2">EMPOWERING RELIEF</p>
            <h2 className="mb-4" style={{ fontSize: "clamp(2.5rem, 10vw, 4rem)", fontWeight: "900", lineHeight: "0.95" }}>
              Hyperhidrosis is not cosmetic. It's a{" "}
              <span className="accent-italic accent-italic-magenta">silent medical crisis.</span>
            </h2>
            <p className="text-lg md:text-xl leading-relaxed mb-6 text-foreground/80">
              At Giftovate Therapeutics Ltd, we are dismantling the systemic barriers to
              specialized care. By fusing clinical-grade sudomotor biometrics with
              revolutionary thermoelectric hardware, we empower Warriors with the freedom
              to be seen without trepidation.
            </p>
            <p className="text-lg leading-relaxed mb-6 text-foreground/80">
              We achieve this through our operational digital platform,{" "}
              <a href="https://sweatsmart.guru" target="_blank" rel="noopener noreferrer"
                 className="text-[#6B21A8] font-semibold underline decoration-2 underline-offset-4">
                SweatSmart
              </a>
              —which provides proactive climate-aware alerts and HidroAlly clinical
              intelligence—and our upcoming line of localized thermoelectric cooling
              hardware, including smart gloves and Eco-Caps currently in the functional
              prototype stage.
            </p>

            <h3 className="mt-12 mb-4">Our strategic partnership</h3>
            <p className="text-lg leading-relaxed text-foreground/80">
              Our technical innovation is fueled by our close partnership with the{" "}
              <a href="https://beyondsweat.org" target="_blank" rel="noopener noreferrer"
                 className="text-[#6B21A8] font-semibold underline decoration-2 underline-offset-4">
                Beyond Sweat Foundation
              </a>
              . Together, we are building the first-ever Pan-African dataset to break the
              silence and restore bodily dignity to the 5% of the West African workforce
              currently threatened by heat-stress-induced productivity loss.
            </p>
          </div>
        </div>
      </section>

      {/* STAT BAND — impact numbers */}
      <section className="band-ink section-pad">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto text-center">
            <div className="border-b-2 border-purple-500/20 md:border-b-0 md:border-r-2 md:border-purple-500/20 pb-8 md:pb-0 md:pr-8">
              <div className="big-stat text-7xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-300">385M</div>
              <p className="mt-4 uppercase tracking-widest text-xs text-white/60">Warriors worldwide</p>
            </div>
            <div className="border-b-2 border-purple-500/20 md:border-b-0 md:border-r-2 md:border-purple-500/20 pb-8 md:pb-0 md:px-8">
              <div className="big-stat text-7xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-pink-300">5%</div>
              <p className="mt-4 uppercase tracking-widest text-xs text-white/60">West African workforce at risk</p>
            </div>
            <div className="pt-8 md:pt-0 md:pl-8">
              <div className="big-stat text-7xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-300">28°</div>
              <p className="mt-4 uppercase tracking-widest text-xs text-white/60">Climate alert threshold</p>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCT ROWS */}
      {products.map((p) => (
        <ProductRow key={p.href} p={p} />
      ))}

      {/* ROADMAP TEASER */}
      <section className="section-pad band-magenta">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="overline-label mb-2">THE PATH TO CLINICAL EQUALITY</p>
            <h2 className="mb-4" style={{ fontSize: "clamp(2.5rem, 10vw, 4rem)", fontWeight: "900", lineHeight: "0.95" }}>
              Building the <span className="accent-italic">infrastructure</span> of care.
            </h2>
            <p className="text-lg md:text-xl text-white/85 leading-relaxed mb-10 max-w-2xl mx-auto">
              A four-phase Data-to-Device plan — from diagnostic visibility in 2025 to
              global clinical integration in 2028+. Understand hyperhidrosis through
              high-resolution data, then treat it with targeted hardware.
            </p>
            <Link to="/roadmap" className="btn-coral">
              Explore the roadmap <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad" style={{ backgroundColor: "#1a1625" }}>
        <div className="container mx-auto px-4">
          <div className="cta-card max-w-4xl mx-auto">
            <p className="overline-label mb-2" style={{ color: "#FDE68A" }}>JOIN THE MOVEMENT</p>
            <h2 className="mb-4 text-white" style={{ fontSize: "clamp(2.5rem, 10vw, 4rem)", fontWeight: "900", lineHeight: "0.95" }}>Ready to take <span className="accent-italic">control?</span></h2>
            <p className="text-lg md:text-xl mb-8 max-w-xl mx-auto">
              Explore our solutions and join the community reducing stigma and improving
              care for hyperhidrosis.
            </p>
            <Link to="/resources" className="btn-coral">
              Explore resources <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <footer style={{ backgroundColor: "#1a1a1a" }}>
        <Footer />
      </footer>
    </div>
  );
};

export default Home;
