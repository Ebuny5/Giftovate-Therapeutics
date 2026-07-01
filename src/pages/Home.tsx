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
import giftovateRing from "@/assets/giftovate-band.jpg";
import oasisImage from "@/assets/giftovate-oasis.jpg";
import partnershipImage from "@/assets/strategic-partnership.jpg";

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
    overline: "STRATEGIC PARTNERSHIP",
    title: <>Building the <span className="accent-italic">Pan-African</span> dataset.</>,
    body: "Our technical innovation is fueled by our close partnership with the Beyond Sweat Foundation. Together, we are breaking the silence and restoring bodily dignity to the 5% of the West African workforce threatened by heat-stress.",
    href: "https://beyondsweat.org",
    cta: "Visit Beyond Sweat",
    image: partnershipImage,
    cardClass: "product-card-indigo",
    bandClass: "band-cream",
  },
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
    image: giftovateBand,
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
          <p className="overline-label">{p.overline}</p>
          <h2 className="mb-6">{p.title}</h2>
          <p className="text-lg leading-relaxed mb-8 opacity-90">{p.body}</p>
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
        <div className="container mx-auto px-4 pt-8 md:pt-12 pb-20 md:pb-32">
          <div className="max-w-4xl">
            <p className="overline-label">GIFTOVATE THERAPEUTICS LTD</p>
            <h1 className="mb-8">
              Transforming hyperhidrosis care{" "}
              <span className="accent-italic">globally.</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-2xl leading-relaxed mb-10">
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
            <p className="overline-label">EMPOWERING RELIEF</p>
            <h2 className="mb-8">
              Hyperhidrosis is not cosmetic. It's a{" "}
              <span className="accent-italic accent-italic-magenta">silent medical crisis.</span>
            </h2>
            <p className="text-lg md:text-xl leading-relaxed mb-6 text-foreground/80">
              At Giftovate Therapeutics Ltd, we are dismantling the systemic barriers to
              specialized care. By fusing clinical-grade sudomotor biometrics with
              revolutionary thermoelectric hardware, we empower Warriors with the freedom
              to be seen without trepidation.
            </p>
            <p className="text-lg leading-relaxed text-foreground/80">
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
          </div>
        </div>
      </section>

      {/* STAT BAND — impact numbers */}
      <section className="band-ink section-pad">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto text-center">
            <div>
              <div className="big-stat">385M</div>
              <p className="mt-3 uppercase tracking-widest text-sm text-white/70">Warriors worldwide</p>
            </div>
            <div>
              <div className="big-stat">5%</div>
              <p className="mt-3 uppercase tracking-widest text-sm text-white/70">West African workforce at risk</p>
            </div>
            <div>
              <div className="big-stat">28°</div>
              <p className="mt-3 uppercase tracking-widest text-sm text-white/70">Climate alert threshold</p>
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
            <p className="overline-label">THE PATH TO CLINICAL EQUALITY</p>
            <h2 className="mb-6">
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
      <section className="section-pad">
        <div className="container mx-auto px-4">
          <div className="cta-card max-w-4xl mx-auto">
            <p className="overline-label" style={{ color: "#FDE68A" }}>JOIN THE MOVEMENT</p>
            <h2 className="mb-4">Ready to take <span className="accent-italic">control?</span></h2>
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

      <Footer />
    </div>
  );
};

export default Home;
