import React, { useState } from "react";
import { Globe, ChevronDown, Menu, ArrowRight, CheckCircle2, Boxes, BarChart3, Layout, ShoppingCart, Users2, Clock, X, Star, CheckCircle } from "lucide-react";
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
const features: Feature[] = [{
  icon: <Layout className="text-blue-400" size={24} />,
  title: "AI-Powered Website Builder",
  description: "Create professional websites in minutes with our intuitive builder and industry-specific templates.",
  color: "blue"
}, {
  icon: <Boxes className="text-purple-400" size={24} />,
  title: "3D Door Configurator",
  description: "Let customers customize and visualize doors in real-time with our advanced 3D configuration tool.",
  color: "purple"
}, {
  icon: <ShoppingCart className="text-emerald-400" size={24} />,
  title: "Integrated E-commerce",
  description: "Process orders, manage inventory, and handle payments seamlessly through your website.",
  color: "emerald"
}];
const testimonials: Testimonial[] = [{
  quote: "The 3D configurator has revolutionized how we showcase our custom doors to clients.",
  author: "Sarah Johnson",
  role: "CEO, Modern Doors Inc.",
  rating: 5
}, {
  quote: "Setup was incredibly fast, and our online sales have increased by 300% since launching.",
  author: "Michael Chen",
  role: "Director, Elite Doors",
  rating: 5
}, {
  quote: "The best platform for door manufacturers. The industry-specific features are exactly what we needed.",
  author: "David Smith",
  role: "Owner, Custom Doors Co.",
  rating: 5
}];
const trustedCompanies: TrustedCompany[] = [{
  name: "Yale",
  logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
}, {
  name: "Andersen",
  logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
}, {
  name: "Masonite",
  logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
}, {
  name: "JELD-WEN",
  logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
}];
export function App(): JSX.Element {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  return <div className="w-full min-h-screen bg-slate-900">
      {isMobileMenuOpen && <div className="fixed inset-0 bg-slate-900 z-50 lg:hidden">
          <div className="p-4 flex justify-between items-center border-b border-slate-800">
            <img src="/beffer-high-resolution-logo-transparent.png" alt="Beffer" className="h-8" />
            <button onClick={() => setIsMobileMenuOpen(false)}>
              <X className="text-white" />
            </button>
          </div>
          <div className="p-4 flex flex-col gap-4">
            <a href="#" className="text-slate-300 py-2 hover:text-white">
              Templates
            </a>
            <a href="#" className="text-slate-300 py-2 hover:text-white">
              Pricing
            </a>
            <a href="#" className="text-slate-300 py-2 hover:text-white">
              Help Center
            </a>
            <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors mt-4">
              Sign In
            </button>
          </div>
        </div>}
      <div className="w-full bg-slate-800/50 text-slate-300 py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-1 hover:text-white transition-colors">
              <Globe size={14} />
              English
              <ChevronDown size={14} />
            </button>
            <button className="flex items-center gap-1 hover:text-white transition-colors">
              GBP
              <ChevronDown size={14} />
            </button>
          </div>
          <a href="#" className="hover:text-white transition-colors">
            Help Center
          </a>
        </div>
      </div>
      <nav className="w-full bg-slate-900/90 backdrop-blur-sm sticky top-0 z-40 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-4">
          <a href="#" className="flex items-center gap-2">
            <img src="/beffer-high-resolution-logo-transparent.png" alt="Beffer" className="h-8" />
          </a>
          <div className="hidden md:flex items-center gap-8 text-slate-300">
            <a href="#" className="hover:text-white transition-colors">
              Templates
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Pricing
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Help Center
            </a>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Sign In
            </button>
          </div>
          <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(true)}>
            <Menu />
          </button>
        </div>
      </nav>
      <main className="w-full relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1617392847656-10a3744239dd?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center opacity-15"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/98 to-slate-900/95"></div>
        <div className="max-w-7xl mx-auto px-4 pt-24 pb-32 relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 rounded-full text-blue-400 text-sm font-medium mb-6 hover:bg-blue-500/20 transition-colors">
                <CheckCircle2 size={16} />
                Trusted by 500+ Door Manufacturers
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                Transform Your Door Business with AI-Powered Websites
              </h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Create stunning websites that showcase your doors in 3D,
                automate your sales process, and grow your business with our
                industry-leading platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center mb-12">
                <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2 text-lg font-medium group">
                  Get Started Free
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="px-6 py-3 bg-slate-800/50 text-white rounded-lg hover:bg-slate-800 transition-colors border border-slate-700">
                  Book a Demo
                </button>
              </div>
              <div className="flex items-center gap-4 text-slate-400">
                <CheckCircle size={20} className="text-blue-500" />
                <span>No credit card required</span>
              </div>
            </div>
            <div className="relative hidden md:block">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl"></div>
              <img src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2671&auto=format&fit=crop" alt="Platform preview" className="rounded-xl shadow-2xl" />
            </div>
          </div>
        </div>
        <div className="relative border-y border-slate-800 bg-slate-900/95 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 py-16">
            <p className="text-center text-slate-500 mb-12 text-sm uppercase tracking-wider font-medium">
              Trusted by leading door manufacturers
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center">
              {trustedCompanies.map((company, index) => <div key={index} className="flex items-center justify-center h-16 grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition-all duration-300">
                  <div className="bg-white/5 backdrop-blur-sm rounded-lg px-6 py-3 w-full h-full flex items-center justify-center">
                    <span className="text-slate-400 font-semibold text-lg">
                      {company.name}
                    </span>
                  </div>
                </div>)}
            </div>
          </div>
        </div>
        <div className="relative border-b border-slate-800 bg-slate-900/95 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 py-24">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Everything You Need to Sell Doors Online
              </h2>
              <p className="text-lg text-slate-300">
                Our platform combines powerful features with ease of use to help
                you create a professional online presence.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, index) => <div key={index} className="group bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-slate-600 transition-colors">
                  <div className={`w-12 h-12 bg-${feature.color}-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-${feature.color}-500/20 transition-colors`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-slate-300">{feature.description}</p>
                </div>)}
            </div>
          </div>
        </div>
        <div className="relative bg-slate-900 border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-4 py-24">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
              Loved by Door Manufacturers
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => <div key={index} className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                  <div className="flex gap-1 mb-4">
                    {Array(testimonial.rating).fill(0).map((_, i) => <Star key={i} size={20} className="fill-yellow-500 text-yellow-500" />)}
                  </div>
                  <p className="text-slate-300 mb-4">"{testimonial.quote}"</p>
                  <div>
                    <p className="font-semibold text-white">
                      {testimonial.author}
                    </p>
                    <p className="text-slate-400">{testimonial.role}</p>
                  </div>
                </div>)}
            </div>
          </div>
        </div>
        <div className="relative bg-slate-900">
          <div className="max-w-7xl mx-auto px-4 py-24 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Door Business?
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Join hundreds of door manufacturers who are growing their business
              with our platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2 text-lg font-medium group">
                Get Started Free
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 bg-slate-800/50 text-white rounded-lg hover:bg-slate-800 transition-colors border border-slate-700">
                Book a Demo
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>;
}