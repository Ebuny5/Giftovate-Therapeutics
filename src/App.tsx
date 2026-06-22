import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Programs from "./pages/Programs";
import Resources from "./pages/Resources";
import SweatSmartApp from "./pages/SweatSmartApp";
import ThermoelectricGlove from "./pages/ThermoelectricGlove";
import CoolingSock from "./pages/CoolingSock";
import EcoCaps from "./pages/EcoCaps";
import FaceMask from "./pages/FaceMask";
import GiftovateBand from "./pages/GiftovateBand";
import GiftovateOasis from "./pages/GiftovateOasis";
import Roadmap from "./pages/Roadmap";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/sweatsmart-app" element={<SweatSmartApp />} />
          <Route path="/thermoelectric-glove" element={<ThermoelectricGlove />} />
          <Route path="/cooling-sock" element={<CoolingSock />} />
          <Route path="/ecocaps" element={<EcoCaps />} />
          <Route path="/face-mask" element={<FaceMask />} />
          <Route path="/giftovate-band" element={<GiftovateBand />} />
          <Route path="/giftovate-oasis" element={<GiftovateOasis />} />
          <Route path="/roadmap" element={<Roadmap />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
