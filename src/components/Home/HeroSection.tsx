import React from 'react';
import { ArrowRight, CheckCircle2, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection: React.FC = () => {
  return (
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
              <Link 
                to="/signup" 
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2 text-lg font-medium group"
              >
                Get Started Free
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/demo"
                className="px-6 py-3 bg-slate-800/50 text-white rounded-lg hover:bg-slate-800 transition-colors border border-slate-700"
              >
                Book a Demo
              </Link>
            </div>
            <div className="flex items-center gap-4 text-slate-400">
              <CheckCircle size={20} className="text-blue-500" />
              <span>No credit card required</span>
            </div>
          </div>
          <div className="relative hidden md:block">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl"></div>
            <img 
              src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2671&auto=format&fit=crop" 
              alt="Door Builder Pro platform preview" 
              className="rounded-xl shadow-2xl"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
