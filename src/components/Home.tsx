import React from 'react';
import { Globe, ChevronDown, Menu, ArrowRight, CheckCircle2, X, Star, CheckCircle } from "lucide-react";

interface HomeProps {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (isOpen: boolean) => void;
  features: any[];
  testimonials: any[];
  trustedCompanies: any[];
}

const Home: React.FC<HomeProps> = ({ 
  isMobileMenuOpen, 
  setIsMobileMenuOpen,
  features,
  testimonials,
  trustedCompanies 
}) => {
  return (
    <div className="w-full min-h-screen bg-slate-900">
      {/* Header */}
      <header className="flex justify-between items-center p-6 bg-gray-950 shadow-md">
        <h1 className="text-2xl font-bold text-white">DoorBuilderPro</h1>
        <nav className="space-x-6">
          <a href="#" className="text-gray-300 hover:text-white">Templates</a>
          <a href="#" className="text-gray-300 hover:text-white">Pricing</a>
          <a href="#" className="text-gray-300 hover:text-white">Help Center</a>
          <button className="bg-green-500 text-white px-4 py-2 rounded-lg">Sign In</button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="text-center py-24 px-6">
        <h2 className="text-5xl font-bold leading-tight">
          Build Your Perfect Door<br />
          <span className="text-green-500">In Minutes</span>
        </h2>
        <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg">
          Professional door customization made simple. Design, preview, and order custom doors 
          with our intuitive builder. Perfect for contractors, architects, and homeowners.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <button className="bg-green-500 px-8 py-4 rounded-lg text-white font-semibold hover:bg-green-600 transition-colors">
            Start Building
          </button>
          <button className="border border-gray-400 px-8 py-4 rounded-lg text-white hover:bg-white hover:text-black transition-colors">
            Watch Demo
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">Why Choose DoorBuilderPro?</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-lg bg-gray-800">
              <div className="text-green-500 text-4xl mb-4">⚡</div>
              <h4 className="text-xl font-semibold mb-2">Lightning Fast</h4>
              <p className="text-gray-400">Design and configure your perfect door in minutes, not hours.</p>
            </div>
            <div className="p-6 rounded-lg bg-gray-800">
              <div className="text-green-500 text-4xl mb-4">🎨</div>
              <h4 className="text-xl font-semibold mb-2">Fully Customizable</h4>
              <p className="text-gray-400">Hundreds of styles, materials, and finishing options to choose from.</p>
            </div>
            <div className="p-6 rounded-lg bg-gray-800">
              <div className="text-green-500 text-4xl mb-4">💰</div>
              <h4 className="text-xl font-semibold mb-2">Instant Pricing</h4>
              <p className="text-gray-400">Get real-time cost estimates as you customize your door.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-2xl font-semibold mb-8">Trusted by Industry Leaders</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-70">
            <div className="text-xl font-bold">BuildCorp</div>
            <div className="text-xl font-bold">ArchitectPro</div>
            <div className="text-xl font-bold">HomeBuilders</div>
            <div className="text-xl font-bold">DesignMasters</div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-green-500">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-black mb-4">Ready to Build Your Door?</h3>
          <p className="text-gray-800 mb-8">
            Join thousands of satisfied customers who have already created their perfect doors.
          </p>
          <button className="bg-black text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-900 transition-colors">
            Get Started Now
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 text-gray-400 py-12 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">
          <div>
            <h4 className="text-white font-semibold mb-4">DoorBuilderPro</h4>
            <p className="text-sm">Making door customization simple and efficient for everyone.</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">Features</a></li>
              <li><a href="#" className="hover:text-white">Pricing</a></li>
              <li><a href="#" className="hover:text-white">Templates</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">Documentation</a></li>
              <li><a href="#" className="hover:text-white">Help Center</a></li>
              <li><a href="#" className="hover:text-white">Blog</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">About</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
