import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-sustainable.png";
import sweatsmartImage from "@/assets/sweatsmart-hero.jpg";
import gloveImage from "@/assets/hydroglove-render.jpg";
import faceMaskImage from "@/assets/hydrovisage-mask.jpg";
import coolingSockImage from "@/assets/hydrosock-render.jpg";
import ecocapsImage from "@/assets/ecocaps-hero.jpg";
import giftovateBand from "@/assets/giftovate-band.jpg";
import oasisImage from "@/assets/giftovate-oasis.jpg";
import partnershipImage from "@/assets/strategic-partnership.jpg";
import f6sBadge from "@/assets/f6s-ai-badge.png";
import ondeaAward from "@/assets/ondea-award.jpg";

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
    overline: "THE DIGITAL FRONT DOOR",
    title: <>HidroAlly: your <span className="accent-italic">care pathway</span>, in your pocket.</>,
    body: "HidroAlly is the world’s first clinical-grade digital ecosystem designed to break the anxiety-sweat cycle — empirical symptom logging, climate-aware alerts and online consultations with partner dermatologists.",
    href: "/hidroally-app",
    cta: "Learn about HidroAlly",
    image: sweatsmartImage,
    cardClass: "product-card-purple",
    bandClass: "band-cream",
  },
  {
    overline: "LIVE SERVICE & MICRO-RETAILING",
    title: <>Giftovate Oasis Hubs: <span className="accent-italic">affordable</span> physical relief.</>,
    body: "Trained Clinical Nurses deliver certified pulsed-current iontophoresis. Consult online, get prescribed online by our partner dermatologists, and get treated locally — Intensive Launch Pass ₦30,000 (6 sessions), Monthly Maintenance ₦15,000, plus unbundled single-sachet topicals and blister-strip oral blockers.",
    href: "/giftovate-oasis",
    cta: "Find a Giftovate Treatment Hub",
    image: oasisImage,
    cardClass: "product-card-magenta",
    bandClass: "band-ink",
    reverse: true,
  },
];

const wearables: Product[] = [
  {
    overline: "THE BIOMETRIC STANDARD",
    title: <>Clinical-grade monitoring, <span className="accent-italic accent-italic-magenta">always on.</span></>,
    body: "The Giftovate Band captures the physiological data mobile apps miss — Electrodermal Activity and Heart Rate Variability read from the wrist to predict hyperhidrosis triggers before they manifest.",
    href: "/giftovate-band",
    cta: "Meet the Giftovate Band",
    image: giftovateBand,
    cardClass: "product-card-indigo",
    bandClass: "band-cream",
  },
  {
    overline: "THE PALMAR PROTOCOL",
    title: <>Portable <span className="accent-italic">palmar</span> electrotherapy.</>,
    body: "HydroGlove frees warriors from bulky, immobile water trays with wearable, targeted microcurrent iontophoresis — dry hands, confident handshakes, and unrestricted professional command.",
    href: "/hydroglove",
    cta: "Explore HydroGlove",
    image: gloveImage,
    cardClass: "product-card-magenta",
    bandClass: "band-cream",
    reverse: true,
  },
  {
    overline: "THE PLANTAR PROTOCOL",
    title: <>Ending <span className="accent-italic">shoe-removal</span> anxiety.</>,
    body: "Five-toe plantar electrotherapy woven into Bamboo-Merino knit. Walk at your natural pace with total stability — 5–10 days of dry, high-friction footing per session.",
    href: "/hydrosock",
    cta: "Explore HydroSock",
    image: coolingSockImage,
    cardClass: "product-card-purple",
    bandClass: "band-purple",
  },
  {
    overline: "TARGETED CRANIOFACIAL ELECTROTHERAPY",
    title: <>Craniofacial <span className="accent-italic">mastery.</span></>,
    body: "Stop the sweat cascade at the source. HydroVisage uses gentle sub-milliamp microcurrent iontophoresis on the forehead and temples — command the room with total composure.",
    href: "/face-mask",
    cta: "Discover HydroVisage",
    image: faceMaskImage,
    cardClass: "product-card-sunset",
    bandClass: "band-cream",
    reverse: true,
  },
];

const ecosystem: Product[] = [
  {
    overline: "STRATEGIC PARTNERSHIP",
    title: <>Building the <span className="accent-italic">Pan-African</span> dataset.</>,
    body: "Our innovation is fueled by our close partnership with the Beyond Sweat Foundation. Together, we are breaking the silence and building the continent’s first centralized sudomotor data.",
    href: "https://beyondsweat.org",
    cta: "Visit Beyond Sweat Foundation",
    image: partnershipImage,
    cardClass: "product-card-indigo",
    bandClass: "band-cream",
  },
  {
    overline: "SUDOMOTOR SYNERGY FROM WITHIN",
    title: <>Holistic. Sustainable. <span className="accent-italic accent-italic-magenta">Validated.</span></>,
    body: "EcoCaps are our plant-based sudomotor regulator — co-created with local African communities and pilot-tested through HidroAlly. A natural, synergetic alternative without pharmaceutical side effects.",
    href: "/ecocaps",
    cta: "Learn about EcoCaps",
    image: ecocapsImage,
    cardClass: "product-card-cream",
    bandClass: "band-coral-tint",
    reverse: true,
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
          {p.href.startsWith("http") ? (
            <a href={p.href} target="_blank" rel="noopener noreferrer" className="link-arrow">
              {p.cta} <ArrowRight className="w-5 h-5" />
            </a>
          ) : (
            <Link to={p.href} className="link-arrow">
              {p.cta} <ArrowRight className="w-5 h-5" />
            </Link>
          )}
        </div>
      </div>
    </div>
  </section>
);

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* HERO — image comes after H1 title, remaining text and CTAs come under image */}
      <section className="band-ink relative overflow-hidden">
        <div className="container mx-auto px-4 pt-10 md:pt-14 pb-12">
          <div className="max-w-4xl">
            <p className="overline-label">THE AFRICAN BLIND SPOT IN DERMATOLOGY</p>
            <h1 className="mb-8">
              Hyperhidrosis is not cosmetic. It is a{" "}
              <span className="accent-italic">silent medical crisis.</span>
            </h1>
          </div>

          <div className="my-8 md:my-10">
            <img src={heroImage} alt="Giftovate hyperhidrosis care ecosystem" className="w-full h-auto rounded-2xl block" />
          </div>

          <div className="max-w-4xl">
            <p className="text-lg md:text-xl text-white/80 max-w-3xl leading-relaxed mb-6">
              While patients in Europe and America have established insurance-backed therapies,
              structured clinical pathways, and easy access to specialized treatments, Africa
              faces an absolute vacuum. There are no centralized sudomotor datasets, no clinical
              pathway, and no affordable treatment.
            </p>
            <p className="text-lg md:text-xl text-white/80 max-w-3xl leading-relaxed mb-10">
              Giftovate Therapeutics is dismantling these barriers. We are building the
              continent's first Online-to-Offline (O2O) health ecosystem. By combining empirical
              data logging, independent dermatological partnerships, and hyper-accessible physical
              care nodes, we are giving African Warriors their dignity back.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="https://hidroally.space" target="_blank" rel="noopener noreferrer" className="btn-coral">
                Download the HidroAlly App <ArrowRight className="w-4 h-4" />
              </a>
              <Link to="/giftovate-oasis" className="btn-purple">
                Find a Giftovate Treatment Hub
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* STAT BAND — impact numbers separated into distinct section */}
      <section className="bg-slate-900 border-t border-b border-purple-900/40 py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto text-center">
            <div>
              <div className="big-stat">5%</div>
              <p className="mt-3 uppercase tracking-widest text-sm text-white/70">West African workforce at risk</p>
            </div>
            <div>
              <div className="big-stat">0.05%</div>
              <p className="mt-3 uppercase tracking-widest text-sm text-white/70">Established clinical pathways in Africa</p>
            </div>
            <div>
              <div className="big-stat">100%</div>
              <p className="mt-3 uppercase tracking-widest text-sm text-white/70">Integrated data-to-treatment funnel</p>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCT ROWS */}
      {products.map((p) => (
        <ProductRow key={p.href} p={p} />
      ))}

      {/* WEARABLES INTRO */}
      <section className="section-pad band-purple">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="overline-label">THE FUTURE OF HARDWARE</p>
            <h2 className="mb-6">
              Micro-iontophoresis <span className="accent-italic">wearables.</span>
            </h2>
            <p className="text-lg md:text-xl leading-relaxed opacity-90">
              Traditional iontophoresis requires heavy, stationary clinical equipment and messy
              water immersion trays. Giftovate's prototyped hydro wearable tech eliminates that
              entire burden. Our upcoming hardware line, currently in the advanced prototyping and
              engineering stage, uses flexible, skin-conforming compression garments with
              precision low-intensity microcurrents, carbon-silicone electrodes, and highly
              affordable snap-on hydrogel pads to deliver safe, rapid, and precise sweat-duct
              blocking therapy directly to the root.
            </p>
          </div>
        </div>
      </section>

      {wearables.map((p) => (
        <ProductRow key={p.href} p={p} />
      ))}

      {ecosystem.map((p) => (
        <ProductRow key={p.href} p={p} />
      ))}

      {/* AWARDS & RECOGNITION */}
      <section className="section-pad band-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <p className="overline-label">AWARDS &amp; RECOGNITION</p>
              <h2>Recognized for <span className="accent-italic">innovation.</span></h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="rounded-3xl bg-card border border-border shadow-lg p-8 flex flex-col items-center text-center">
                <span className="text-sm font-bold tracking-widest text-primary mb-4">01 · JUNE 2026</span>
                <a href="https://www.f6s.com/giftovate-therapeutics-ltd" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-105 mb-6">
                  <img src={f6sBadge} alt="F6S Top AI Company #69" className="h-32 w-auto rounded" />
                </a>
                <h3 className="text-2xl font-bold mb-3">F6S #69 Top AI Company</h3>
                <p className="text-foreground/80 leading-relaxed">
                  Recognized in Nigeria as a #69 Top AI Company by F6S for our work in health innovation.
                </p>
              </div>
              <div className="rounded-3xl bg-card border border-border shadow-lg overflow-hidden flex flex-col">
                <img src={ondeaAward} alt="Giftovate founder receiving the ONDEA Business Grant award" className="w-full h-72 object-cover object-top" />
                <div className="p-8 text-center">
                  <span className="text-sm font-bold tracking-widest text-primary">02 · SEPTEMBER 2026</span>
                  <h3 className="text-2xl font-bold mt-3 mb-3">Ondo State Government Business Grant Winner</h3>
                  <p className="text-foreground/80 leading-relaxed">
                    Selected by the Ondo State Government through the Ondo State Entrepreneurship
                    Agency (ONDEA) as one of the Top 20 distinguishing business ideas in September 2026.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
            <Link to="/giftovate-oasis" className="btn-coral">
              Find a Treatment Hub <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
