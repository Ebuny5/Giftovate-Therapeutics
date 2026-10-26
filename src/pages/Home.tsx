import { useEffect, useRef, useState } from "react";
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
import oasisImage from "@/assets/giftovate-oasis-new.png";
import futureHardwareImage from "@/assets/giftovate-future-hardware.png";
import partnershipImage from "@/assets/strategic-partnership.jpg";
import f6sBadge from "@/assets/f6s-ai-badge.png";

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

const useReveal = (threshold = 0.2) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, visible };
};

const useTypewriter = (text: string, speed = 60, start = false) => {
  const [displayText, setDisplayText] = useState("");
  useEffect(() => {
    if (!start) return;
    let index = 0;
    setDisplayText("");
    const timer = setInterval(() => {
      index++;
      setDisplayText(text.slice(0, index));
      if (index >= text.length) {
        clearInterval(timer);
      }
    }, speed);
    return () => clearInterval(timer);
  }, [text, speed, start]);
  return displayText;
};

const SectionSlide = ({ children, direction = "bottom", className = "" }: { children: React.ReactNode; direction?: "left" | "right" | "bottom"; className?: string }) => {
  const { ref, visible } = useReveal(0.15);
  const slideClass = direction === "left" ? "slide-from-left" : direction === "right" ? "slide-from-right" : "slide-from-bottom";
  return (
    <div ref={ref} className={`${slideClass} ${visible ? "is-visible" : ""} ${className}`}>
      {children}
    </div>
  );
};

const ProductRow = ({ p, index = 0 }: { p: Product; index?: number }) => {
  const { ref, visible } = useReveal(0.15);
  const cardSlide = index % 2 === 0 ? "slide-from-left" : "slide-from-right";
  const textSlide = index % 2 === 0 ? "slide-from-right" : "slide-from-left";

  return (
    <section className={`section-pad ${p.bandClass ?? ""}`}>
      <div className="container mx-auto px-4" ref={ref}>
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center max-w-6xl mx-auto">
          <div className={`${cardSlide} ${visible ? "is-visible" : ""} product-card ${p.cardClass} ${p.reverse ? "md:order-2" : ""}`}>
            <img src={p.image} alt="" />
          </div>
          <div className={`${textSlide} ${visible ? "is-visible" : ""} ${p.reverse ? "md:order-1" : ""}`}>
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
};

type StatCardProps = {
  stat: string;
  unit: string;
  badge: string;
  label: string;
  bg: string;
  text: string;
  divider: string;
  border: string;
  delay: number;
  slideDirection: "left" | "right" | "bottom";
};

const StatCard = ({ stat, unit, badge, label, bg, text, divider, border, delay, slideDirection }: StatCardProps) => {
  const { ref, visible } = useReveal(0.15);
  const typedStat = useTypewriter(stat, 120, visible);
  const typedLabel = useTypewriter(label, 30, visible);

  const slideClass = slideDirection === "left" ? "slide-from-left" : slideDirection === "right" ? "slide-from-right" : "slide-from-bottom";

  return (
    <div
      ref={ref}
      className={`${slideClass} ${visible ? "is-visible" : ""} rounded-[24px] p-8 pt-9 text-center relative overflow-hidden transition-all duration-300 hover:-translate-y-2`}
      style={{
        backgroundColor: bg,
        border: `1px solid ${border}`,
        boxShadow: "0 12px 30px rgba(0,0,0,0.15)",
        transitionDelay: visible ? `${delay}ms` : undefined
      }}
    >
      <span className="stat-badge" style={{ color: text, borderColor: text }}>{badge}</span>
      <div className="my-2">
        <span className="stat-number" style={{ color: text }}>
          {visible ? typedStat : ""}
          <span className="stat-unit">{unit}</span>
        </span>
      </div>
      <div className="w-12 h-0.5 mx-auto my-4" style={{ backgroundColor: divider, opacity: 0.6 }}></div>
      <p className="uppercase tracking-[2px] text-[10px] font-bold" style={{ color: text, fontFamily: "'Inter', 'Manrope', sans-serif" }}>
        {visible ? typedLabel : ""}
      </p>
    </div>
  );
};

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
            <div className="flex flex-wrap items-center gap-3">
              <a href="https://hidroally.space" target="_blank" rel="noopener noreferrer" className="btn-beaming-coral">
                Try HidroAlly App <ArrowRight className="w-4 h-4" />
              </a>
              <Link to="/giftovate-oasis" className="btn-beaming-purple">
                Find a Hub <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* STAT BAND — impact cards with serif numerals & staggered scroll reveal */}
      <section className="bg-slate-950/90 border-t-2 border-b-2 border-purple-500/30 py-16 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <StatCard
              stat="5" unit="%"
              badge="WORKFORCE EXPOSURE"
              label="WEST AFRICAN WORKFORCE AT RISK"
              bg="#FFFBEB" text="#1A365D" divider="#1A365D"
              border="rgba(26, 54, 93, 0.15)" delay={0}
              slideDirection="left"
            />
            <StatCard
              stat="0.05" unit="%"
              badge="CLINICAL ACCESS"
              label="0.05% TREATMENT PATHWAY IN AFRICA"
              bg="#E8FF00" text="#EA580C" divider="#EA580C"
              border="rgba(234, 88, 12, 0.3)" delay={150}
              slideDirection="bottom"
            />
            <StatCard
              stat="100" unit="%"
              badge="CARE ARCHITECTURE"
              label="INTEGRATED DATA-TO-TREATMENT FUNNEL"
              bg="#FFB703" text="#000000" divider="#000000"
              border="rgba(0, 0, 0, 0.15)" delay={300}
              slideDirection="right"
            />
          </div>
        </div>
      </section>

      {/* PRODUCT ROWS */}
      {products.map((p, i) => (
        <ProductRow key={p.href} p={p} index={i} />
      ))}

      {/* GIFTOVATE OASIS SECTION */}
      <section className="section-pad band-ink relative overflow-hidden">
        <div className="container mx-auto px-4">
          <SectionSlide direction="left" className="max-w-5xl mx-auto">
            <div className="mb-10 w-full overflow-hidden rounded-2xl shadow-2xl">
              <img src={oasisImage} alt="Giftovate Oasis" className="w-full h-auto block" />
            </div>
            <p className="overline-label">LIVE SERVICE &amp; MICRO-RETAILING</p>
            <h2 className="mb-6">
              Giftovate Oasis: <span className="accent-italic">affordable</span> physical relief in 20 minutes.
            </h2>
            <p className="text-lg md:text-xl leading-relaxed mb-8 opacity-90 max-w-3xl">
              Giftovate-Trained Youth Specialists deliver certified, safe pulsed-current iontophoresis. Get a consultation online by our partner dermatologists and get treated locally at our hub. Intensive Launch Pass ₦30,000 (6 sessions), Monthly Maintenance ₦15,000, plus single-sachet topicals and blister-strip oral blockers.
            </p>
            <div>
              <Link to="/giftovate-oasis" className="link-arrow">
                Find a Giftovate Oasis Location <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </SectionSlide>
        </div>
      </section>

      {/* WEARABLES INTRO */}
      <section className="section-pad band-purple">
        <div className="container mx-auto px-4">
          <SectionSlide direction="right" className="max-w-5xl mx-auto text-center">
            <div className="mb-10 overflow-hidden rounded-2xl shadow-2xl">
              <img src={futureHardwareImage} alt="The Future of Hardware - Micro-iontophoresis wearables" className="w-full h-auto block" />
            </div>
            <p className="overline-label">THE FUTURE OF HARDWARE</p>
            <h2 className="mb-6">
              Micro-iontophoresis <span className="accent-italic">wearables.</span>
            </h2>
            <p className="text-lg md:text-xl leading-relaxed opacity-90 max-w-3xl mx-auto">
              Traditional iontophoresis requires heavy, stationary clinical equipment and messy
              water immersion trays. Giftovate's prototyped hydro wearable tech eliminates that
              entire burden. Our upcoming hardware line, currently in the advanced prototyping and
              engineering stage, uses flexible, skin-conforming compression garments with
              precision low-intensity microcurrents, carbon-silicone electrodes, and highly
              affordable snap-on hydrogel pads to deliver safe, rapid, and precise sweat-duct
              blocking therapy directly to the root.
            </p>
          </SectionSlide>
        </div>
      </section>

      {wearables.map((p, i) => (
        <ProductRow key={p.href} p={p} index={i} />
      ))}

      {ecosystem.map((p, i) => (
        <ProductRow key={p.href} p={p} index={i} />
      ))}

      {/* AWARDS & RECOGNITION */}
      <section className="section-pad band-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <SectionSlide direction="bottom" className="text-center mb-8">
              <p className="overline-label">AWARDS &amp; RECOGNITION</p>
              <h2>Recognized for <span className="accent-italic">innovation.</span></h2>
            </SectionSlide>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <SectionSlide direction="left">
                <div className="rounded-2xl bg-card border border-border shadow-md p-6 flex flex-col items-center text-center justify-between h-full">
                  <div className="flex flex-col items-center w-full">
                    <span className="text-xs font-bold tracking-widest text-primary mb-3">01 · JUNE 2026</span>
                    <a href="https://www.f6s.com/giftovate-therapeutics-ltd" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-105 mb-3">
                      <img src={f6sBadge} alt="F6S Top AI Company #69" className="h-20 w-auto rounded" />
                    </a>
                    <h3 className="text-xl font-bold mb-2">F6S #69 Top AI Company</h3>
                    <p className="text-foreground/80 text-sm leading-relaxed">
                      Recognized in Nigeria as a #69 Top AI Company by F6S for our work in health innovation.
                    </p>
                  </div>
                </div>
              </SectionSlide>
              <SectionSlide direction="right">
                <div className="rounded-2xl bg-card border border-border shadow-md p-6 flex flex-col items-center text-center justify-between h-full">
                  <div className="flex flex-col items-center w-full">
                    <span className="text-xs font-bold tracking-widest text-primary mb-3">02 · SEPTEMBER 2026</span>
                    <h3 className="text-xl font-bold mb-2">Ondo State Government Business Grant Winner</h3>
                    <p className="text-foreground/80 text-sm leading-relaxed">
                      Selected by the Ondo State Government through the Ondo State Entrepreneurship
                      Agency (ONDEA) as one of the Top 20 distinguishing business ideas in September 2026.
                    </p>
                  </div>
                </div>
              </SectionSlide>
            </div>
          </div>
        </div>
      </section>

      {/* ROADMAP TEASER */}
      <section className="section-pad band-magenta">
        <div className="container mx-auto px-4">
          <SectionSlide direction="bottom" className="max-w-4xl mx-auto text-center">
            <p className="overline-label">THE PATH TO CLINICAL EQUALITY</p>
            <h2 className="mb-6">
              Building the <span className="accent-italic">infrastructure</span> of care.
            </h2>
            <p className="text-lg md:text-xl text-white/85 leading-relaxed mb-10 max-w-2xl mx-auto">
              A four-phase Data-to-Device plan from diagnostic visibility in 2025 to
              global clinical integration in 2028+. Understand hyperhidrosis through
              high-resolution data, then treat it with targeted hardware.
            </p>
            <Link to="/roadmap" className="btn-coral">
              Explore the roadmap <ArrowRight className="w-4 h-4" />
            </Link>
          </SectionSlide>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad">
        <div className="container mx-auto px-4">
          <SectionSlide direction="bottom" className="cta-card max-w-4xl mx-auto">
            <p className="overline-label" style={{ color: "#FDE68A" }}>JOIN THE MOVEMENT</p>
            <h2 className="mb-4">Ready to take <span className="accent-italic">control?</span></h2>
            <p className="text-lg md:text-xl mb-8 max-w-xl mx-auto">
              Explore our solutions and join the warriors reducing stigma and reclaiming their deserved dignity back.
            </p>
            <Link to="/giftovate-oasis" className="btn-coral">
              Find a Treatment Hub <ArrowRight className="w-4 h-4" />
            </Link>
          </SectionSlide>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
