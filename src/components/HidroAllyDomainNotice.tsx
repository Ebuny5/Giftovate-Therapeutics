import { useEffect, useRef, useState } from "react";
import { X, ExternalLink } from "lucide-react";

const SHOW_DURATION = 10_000; // visible for 10 seconds
const HIDE_DURATION = 60_000; // pops up again after 1 minute

const HidroAllyDomainNotice = () => {
  const [visible, setVisible] = useState(false);
  const dismissedRef = useRef(false);

  useEffect(() => {
    let showTimer: ReturnType<typeof setTimeout>;
    let hideTimer: ReturnType<typeof setTimeout>;

    const show = () => {
      if (dismissedRef.current) return;
      setVisible(true);
      hideTimer = setTimeout(() => {
        setVisible(false);
        showTimer = setTimeout(show, HIDE_DURATION);
      }, SHOW_DURATION);
    };

    // First appearance after a short delay so the page settles
    showTimer = setTimeout(show, 1500);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  const dismissPermanently = () => {
    dismissedRef.current = true;
    setVisible(false);
  };

  return (
    <div
      role="status"
      aria-live="polite"
      className={`fixed bottom-4 left-4 right-4 z-[100] md:left-auto md:right-6 md:bottom-6 md:max-w-sm transition-all duration-500 ${
        visible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-6 pointer-events-none"
      }`}
    >
      <div
        className="relative rounded-2xl p-5 pr-10 text-white shadow-2xl"
        style={{
          background: "linear-gradient(135deg, #4C1D95 0%, #6B21A8 55%, #C026D3 100%)",
        }}
      >
        <button
          onClick={dismissPermanently}
          aria-label="Dismiss notice"
          className="absolute top-3 right-3 p-1 rounded-full text-white/70 hover:text-white hover:bg-white/15 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        <p className="text-xs font-bold uppercase tracking-widest text-white/80 mb-2">
          Notice
        </p>
        <p className="text-sm leading-relaxed mb-4">
          The HidroAlly app has moved — our new home is{" "}
          <span className="font-bold underline decoration-2 underline-offset-2">
            hidroally.space
          </span>
          . Update your bookmarks to keep your clinical alerts flowing.
        </p>
        <a
          href="https://hidroally.space"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-[#6B21A8] hover:bg-white/90 transition-colors"
        >
          Visit hidroally.space
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
};

export default HidroAllyDomainNotice;
