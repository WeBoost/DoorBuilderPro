import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const CTASection: React.FC = () => {
  return (
    <div className="relative bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 py-24 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Ready to Transform Your Door Business?
        </h2>
        <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
          Join hundreds of door manufacturers who are growing their business
          with our platform. Start your free trial today.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
          <Link
            to="/signup"
            className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2 text-lg font-medium group"
          >
            Get Started Free
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            to="/demo"
            className="px-8 py-4 bg-slate-800/50 text-white rounded-lg hover:bg-slate-800 transition-colors border border-slate-700"
          >
            Book a Demo
          </Link>
        </div>
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-slate-400">
          <div className="flex items-center gap-2">
            <CheckCircle size={20} className="text-blue-500" />
            <span>14-day free trial</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle size={20} className="text-blue-500" />
            <span>No credit card required</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle size={20} className="text-blue-500" />
            <span>Cancel anytime</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTASection; 