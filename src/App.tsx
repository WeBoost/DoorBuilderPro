import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Globe, ChevronDown, Menu, ArrowRight, CheckCircle2, Boxes, BarChart3, Layout, ShoppingCart, Users2, Clock, X, Star, CheckCircle } from "lucide-react";
import Home from './components/Home';

// Move these interfaces and data to separate files later for better organization
interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: "blue" | "purple" | "emerald";
}

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  rating: number;
}

interface TrustedCompany {
  name: string;
  logo: string;
}

// Data arrays (consider moving to separate data files)
export const features: Feature[] = [
  // ... your existing features array
];

export const testimonials: Testimonial[] = [
  // ... your existing testimonials array
];

export const trustedCompanies: TrustedCompany[] = [
  // ... your existing trustedCompanies array
];

const App: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-slate-900">
        <Routes>
          <Route path="/" element={<Home 
            isMobileMenuOpen={isMobileMenuOpen} 
            setIsMobileMenuOpen={setIsMobileMenuOpen}
            features={features}
            testimonials={testimonials}
            trustedCompanies={trustedCompanies}
          />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;