import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Flame,
  Waves,
  Zap,
  BellRing,
  TrendingUp,
  Fingerprint,
  BotMessageSquare,
  UserCheck,
  Trophy,
} from "lucide-react";
import heroImage from "@/assets/sweatsmart-hero.jpg";

const SweatSmartApp = () => {
  const features = [
    {
      icon: BellRing,
      letter: "A",
      iconColor: "hsl(var(--icon-bell))",
      iconBg: "hsl(var(--icon-bell) / 0.12)",
      title: "Proactive Climate Alerting",
      description:
        "Unlike generic weather applications, SweatSmart features a background climate monitoring system that syncs every 30 minutes.",
      details: [
        {
          subtitle: "Threshold Intelligence",
          text: 'The system is hardcoded to trigger "High Risk" alerts when local temperature exceeds 28°C or humidity crosses 70%.',
        },
        {
          subtitle: "Agentic Management",
          text: "Warriors receive personalized advice: \"Extreme humidity detected 77% — your body cannot cool itself via evaporation. Move to a ventilated space and use cooling products now to stabilize your sudomotor baseline.\"",
        },
      ],
    },
    {
      icon: TrendingUp,
      letter: "B",
      iconColor: "hsl(var(--icon-trend))",
      iconBg: "hsl(var(--icon-trend) / 0.12)",
      title: "Visual Analytics Dashboard (Trend Mastery)",
      description:
        "Our dashboard provides high-fidelity visual analytics that transform subjective frustration into objective evidence.",
      details: [
        {
          subtitle: "Trend Overview",
          text: "Utilizing a dual-axis combination chart, the platform visualizes Episode Count (bars) against HDSS Severity (line) across daily, weekly, monthly, and yearly timeframes.",
        },
        {
          subtitle: "Peak Time Detection",
          text: "The dashboard identifies specific temporal patterns—such as a 1 PM peak time—to help users prepare for their most vulnerable moments.",
        },
      ],
    },
    {
      icon: Fingerprint,
      letter: "C",
      iconColor: "hsl(var(--icon-fingerprint))",
      iconBg: "hsl(var(--icon-fingerprint) / 0.12)",
      title: "Personalized Insights & Pattern Analysis",
      description:
        'The Insights Page uses the user\'s complete episode history to generate "Pattern Analysis" modules.',
      details: [
        {
          subtitle: "Trigger Intelligence",
          text: "The system ranks 14+ unique triggers (e.g., Hot Temperature, Outdoor Sun, Synthetic Fabrics) based on their correlation with high-severity episodes.",
        },
        {
          subtitle: "Evidence-Based Strategies",
          text: "Based on your individual heatmap, HidroAlly suggests targeted treatments such as Iontophoresis for palms/soles or topical anticholinergics like Sofdra to block gland signals.",
        },
      ],
    },
    {
      icon: BotMessageSquare,
      letter: "D",
      iconColor: "hsl(var(--icon-bot))",
      iconBg: "hsl(var(--icon-bot) / 0.12)",
      title: "HidroAlly Consultant",
      description:
        "HidroAlly functions as a 24/7 clinical consultant that adopts the Transparent Reasoning methodology.",
      details: [
        {
          subtitle: "Multimodal Reasoning",
          text: "It cross-references live Electrodermal Activity (EDA) spikes (3.8 μS baseline) and Heart Rate data with climate context and history to provide probabilistic explanations for every episode.",
        },
        {
          subtitle: "Consultant Status",
          text: "It provides downloadable PDF Warrior Reports specifically formatted for dermatologists, including HDSS trend lines and trigger correlation matrices.",
        },
      ],
    },
    {
      icon: UserCheck,
      letter: "E",
      iconColor: "hsl(var(--icon-usercheck))",
      iconBg: "hsl(var(--icon-usercheck) / 0.12)",
      title: "Specialist Radar (Verified Expertise)",
      description:
        "To eliminate misdiagnosis in Africa, the Specialist Radar locates IHS-certified dermatologists and experts based on the user's state or country. This bridges the care gap by connecting warriors to doctors who recognize Hh as a legitimate condition.",
      details: [],
    },
    {
      icon: Trophy,
      letter: "F",
      iconColor: "hsl(var(--icon-trophy))",
      iconBg: "hsl(var(--icon-trophy) / 0.12)",
      title: "Warrior Gamification: The Achievement Badge",
      description:
        "To foster resilience and community, the app features the Hyperhidrosis Warrior Badge. Warriors earn this badge by consistently logging their journey, providing them with a shareable symbol of their bravery in the face of stigma.",
      details: [],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <div className="flex-grow">
        {/* Hero Section */}
        <section className="relative w-full overflow-hidden">
          <img
            src={heroImage}
            alt="SweatSmart app interface"
            className="w-full h-auto block"
          />
        </section>

        {/* Mission Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our mission is to move Hh care in Africa from a state of{" "}
                <span className="font-semibold text-foreground">
                  "silent suffering"
                </span>{" "}
                to a state of{" "}
                <span className="font-semibold text-foreground">
                  "agentic mastery."
                </span>{" "}
                We achieve this through our operational digital platform,
                SweatSmart, and our upcoming line of thermoelectric cooling
                hardware.
              </p>
            </div>
          </div>
        </section>

        {/* The Problem Section */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 mb-4">
                  <Flame style={{ color: "hsl(var(--icon-flame))" }} size={28} />
                  <h2 className="text-3xl md:text-4xl font-bold">
                    The Problem
                  </h2>
                </div>
                <p className="text-xl text-muted-foreground">
                  The Vicious Cycle of Heat and Anxiety
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <Card className="p-8" style={{ borderColor: "hsl(var(--icon-waves) / 0.2)" }}>
                  <div className="rounded-full p-4 w-16 h-16 flex items-center justify-center mb-6" style={{ backgroundColor: "hsl(var(--icon-waves) / 0.12)" }}>
                    <Waves style={{ color: "hsl(var(--icon-waves))" }} size={28} />
                  </div>
                  <h3 className="text-xl font-bold mb-4">
                    Climate Exacerbation
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    In tropical climates, once air temperature reaches 35°C the
                    body relies solely on evaporation for cooling. However, when
                    relative humidity exceeds 70%, evaporation becomes physically
                    ineffective, trapping metabolic heat and triggering profuse,
                    non-stop sweating. Our research indicates that for Hh
                    warriors, symptoms spike significantly once ambient
                    conditions cross the{" "}
                    <span className="font-semibold text-foreground">
                      28°C and 70% humidity threshold
                    </span>
                    , creating an intolerable physical burden.
                  </p>
                </Card>

                <Card className="p-8" style={{ borderColor: "hsl(var(--icon-zap) / 0.2)" }}>
                  <div className="rounded-full p-4 w-16 h-16 flex items-center justify-center mb-6" style={{ backgroundColor: "hsl(var(--icon-zap) / 0.12)" }}>
                    <Zap style={{ color: "hsl(var(--icon-zap))" }} size={28} />
                  </div>
                  <h3 className="text-xl font-bold mb-4">
                    The Anticipatory Feedback Loop
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    The constant trepidation of sweating in public creates an
                    anxiety-stress loop that further stimulates sudomotor
                    activity, leading to social withdrawal and{" "}
                    <span className="font-semibold text-foreground">
                      27%+ rates of depression
                    </span>{" "}
                    among warriors. Hyperhidrosis is a pathological
                    over-activation of the sympathetic nervous system,
                    specifically involving the cholinergic receptors on the
                    eccrine glands.
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* The Solution: SweatSmart Features */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  The Solution: SweatSmart
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  A fully operational digital ecosystem serving a dedicated beta
                  community of 50+ participants — the world's first
                  clinical-grade tool designed to break the anxiety-sweat cycle.
                </p>
              </div>

              <div className="space-y-8">
                {features.map((feature, index) => (
                  <Card
                    key={index}
                    className="p-8 md:p-10 hover:shadow-lg transition-all border-border/50"
                  >
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="flex-shrink-0">
                        <div className="rounded-2xl p-4 w-16 h-16 flex items-center justify-center" style={{ backgroundColor: feature.iconBg }}>
                          <feature.icon style={{ color: feature.iconColor }} size={28} />
                        </div>
                      </div>
                      <div className="flex-grow">
                        <div className="flex items-center gap-3 mb-3">
                          <Badge variant="outline" className="text-xs">
                            {feature.letter}
                          </Badge>
                          <h3 className="text-xl md:text-2xl font-bold">
                            {feature.title}
                          </h3>
                        </div>
                        <p className="text-muted-foreground leading-relaxed mb-4">
                          {feature.description}
                        </p>
                        {feature.details.length > 0 && (
                          <div className="grid sm:grid-cols-2 gap-4 mt-4">
                            {feature.details.map((detail, dIndex) => (
                              <div
                                key={dIndex}
                                className="bg-muted/50 rounded-lg p-4"
                              >
                                <h4 className="font-semibold text-sm mb-2 text-foreground">
                                  {detail.subtitle}
                                </h4>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                  {detail.text}
                                </p>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <Card className="bg-gradient-card p-8 md:p-12 text-center max-w-3xl mx-auto border-primary/20">
              <h2 className="text-3xl font-bold mb-4">
                Ready to Take Control of Your Sweating?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Join our growing community of 50+ warriors already using
                SweatSmart to master their condition with data-driven
                intelligence.
              </p>
              <a
                href="https://www.sweatsmart.guru"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="max-w-full whitespace-normal h-auto text-sm sm:text-base px-5 sm:px-8 py-4 sm:py-6 leading-snug">
                  Get Early Access to SweatSmart
                </Button>
              </a>
            </Card>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default SweatSmartApp;
