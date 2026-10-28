import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import logo from "@/assets/giftovate-logo.png";

const productItems = [
  { path: "/hidroally-app", label: "HidroAlly App" },
  { path: "/giftovate-band", label: "Giftovate Band" },
  { path: "/giftovate-oasis", label: "Giftovate Oasis" },
  { path: "/hydroglove", label: "HydroGlove" },
  { path: "/hydrosock", label: "HydroSock" },
  { path: "/face-mask", label: "Face Mask" },
  { path: "/ecocaps", label: "EcoCaps" },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const location = useLocation();
  const dropRef = useRef<HTMLDivElement>(null);

  const isActive = (path: string) => location.pathname === path;
  const productActive = productItems.some((p) => isActive(p.path));

  useEffect(() => {
    setIsOpen(false);
    setProductsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (dropRef.current && !dropRef.current.contains(e.target as Node)) setProductsOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 gap-3">
          <Link to="/" className="flex items-center gap-2 min-w-0">
            <img src={logo} alt="Giftovate Therapeutics Ltd Logo" className="h-10 md:h-12 w-auto shrink-0" />
            <div className="text-base sm:text-lg md:text-xl font-bold text-[#6B21A8] leading-tight truncate">
              Giftovate Therapeutics Ltd
            </div>
          </Link>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-1 shrink-0">
            <Link to="/">
              <Button variant={isActive("/") ? "default" : "ghost"}>Home</Button>
            </Link>
            <div className="relative" ref={dropRef}>
              <Button
                variant={productActive ? "default" : "ghost"}
                onClick={() => setProductsOpen((v) => !v)}
                aria-expanded={productsOpen}
                className="gap-1"
              >
                Products <ChevronDown className={`w-4 h-4 transition-transform ${productsOpen ? "rotate-180" : ""}`} />
              </Button>
              {productsOpen && (
                <div className="absolute right-0 mt-2 w-60 rounded-xl border border-border bg-background shadow-xl p-2">
                  {productItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className={`block rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                        isActive(item.path) ? "bg-primary text-primary-foreground" : "hover:bg-muted"
                      }`}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link to="/roadmap">
              <Button variant={isActive("/roadmap") ? "default" : "ghost"}>Roadmap</Button>
            </Link>
          </div>

          {/* Mobile button */}
          <button className="md:hidden p-2 shrink-0" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile drawer */}
        {isOpen && (
          <div className="md:hidden pb-4 max-h-[75vh] overflow-y-auto">
            <div className="flex flex-col gap-1">
              <Link to="/">
                <Button variant={isActive("/") ? "default" : "ghost"} className="w-full justify-start h-11">Home</Button>
              </Link>
              <p className="px-4 pt-3 pb-1 text-xs font-bold uppercase tracking-widest text-muted-foreground">Products</p>
              {productItems.map((item) => (
                <Link key={item.path} to={item.path}>
                  <Button variant={isActive(item.path) ? "default" : "ghost"} className="w-full justify-start h-11 pl-6">
                    {item.label}
                  </Button>
                </Link>
              ))}
              <Link to="/roadmap" className="mt-2">
                <Button variant={isActive("/roadmap") ? "default" : "ghost"} className="w-full justify-start h-11">Roadmap</Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
