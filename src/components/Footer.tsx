import { Link } from "react-router-dom";
import logo from "@/assets/giftovate-logo.png";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img src={logo} alt="Giftovate Therapeutics Ltd Logo" className="h-12 w-auto brightness-0 invert" />
            </div>
            <h3 className="font-bold text-lg mb-2 text-white">
              Giftovate Therapeutics Ltd
            </h3>
            <p className="text-sm text-white/70">
              Developing affordable hyperhidrosis solutions in Africa
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-white">Products</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/sweatsmart-app" className="text-white/60 hover:text-white transition-colors">SweatSmart App</Link></li>
              <li><Link to="/giftovate-band" className="text-white/60 hover:text-white transition-colors">Giftovate Band</Link></li>
              <li><Link to="/giftovate-oasis" className="text-white/60 hover:text-white transition-colors">Giftovate Oasis</Link></li>
              <li><Link to="/thermoelectric-glove" className="text-white/60 hover:text-white transition-colors">Thermoelectric Glove</Link></li>
              <li><Link to="/cooling-sock" className="text-white/60 hover:text-white transition-colors">Cooling Sock</Link></li>
              <li><Link to="/face-mask" className="text-white/60 hover:text-white transition-colors">Face Mask</Link></li>
              <li><Link to="/ecocaps" className="text-white/60 hover:text-white transition-colors">EcoCaps</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-white">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/programs" className="text-white/60 hover:text-white transition-colors">Programs</Link></li>
              <li><Link to="/roadmap" className="text-white/60 hover:text-white transition-colors">Roadmap</Link></li>
              <li><Link to="/resources" className="text-white/60 hover:text-white transition-colors">Resources</Link></li>
              <li><Link to="/privacy-policy" className="text-white/60 hover:text-white transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-white">Connect</h4>
            <p className="text-sm text-white/70">
              Join our community in reducing stigma and improving care for hyperhidrosis.
            </p>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/10 text-center text-sm text-white/50">
          <p>&copy; {new Date().getFullYear()} Giftovate Therapeutics Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
