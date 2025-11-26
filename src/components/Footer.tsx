import { Link } from "react-router-dom";
import logo from "@/assets/giftovate-logo.png";

const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img src={logo} alt="Giftovate Therapeutics Ltd Logo" className="h-12 w-auto" />
            </div>
            <h3 className="font-bold text-lg mb-2 bg-gradient-hero bg-clip-text text-transparent">
              Giftovate Therapeutics Ltd
            </h3>
            <p className="text-sm text-muted-foreground">
              Developing affordable hyperhidrosis solutions in Africa
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Products</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/sweatsmart-app" className="text-muted-foreground hover:text-primary transition-colors">SweatSmart App</Link></li>
              <li><Link to="/thermoelectric-glove" className="text-muted-foreground hover:text-primary transition-colors">Thermoelectric Glove</Link></li>
              <li><Link to="/cooling-sock" className="text-muted-foreground hover:text-primary transition-colors">Cooling Sock</Link></li>
              <li><Link to="/ecocaps" className="text-muted-foreground hover:text-primary transition-colors">EcoCaps</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/programs" className="text-muted-foreground hover:text-primary transition-colors">Programs</Link></li>
              <li><Link to="/resources" className="text-muted-foreground hover:text-primary transition-colors">Resources</Link></li>
              <li><Link to="/privacy-policy" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <p className="text-sm text-muted-foreground">
              Join our community in reducing stigma and improving care for hyperhidrosis.
            </p>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Giftovate Therapeutics Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
