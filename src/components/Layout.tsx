import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Globe, ChevronDown, Menu, X } from "lucide-react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Top Bar */}
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
          <Link to="/help" className="hover:text-white transition-colors">
            Help Center
          </Link>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="w-full bg-slate-900/90 backdrop-blur-sm sticky top-0 z-40 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-4">
          <Link to="/" className="flex items-center">
            <span className="text-xl font-bold text-white">DoorBuilderPro</span>
          </Link>
          <div className="hidden md:flex items-center gap-8 text-slate-300">
            <Link to="/configure" className="hover:text-white transition-colors">
              Configure Door
            </Link>
            <Link to="/templates" className="hover:text-white transition-colors">
              Templates
            </Link>
            <Link to="/pricing" className="hover:text-white transition-colors">
              Pricing
            </Link>
            <Link to="/login" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Sign In
            </Link>
          </div>
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Menu />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-slate-900 z-50 lg:hidden">
          <div className="p-4 flex justify-between items-center border-b border-slate-800">
            <Link to="/" className="text-xl font-bold text-white">
              DoorBuilderPro
            </Link>
            <button onClick={() => setIsMobileMenuOpen(false)}>
              <X className="text-white" />
            </button>
          </div>
          <div className="p-4 flex flex-col gap-4">
            <Link to="/configure" className="text-slate-300 py-2 hover:text-white">
              Configure Door
            </Link>
            <Link to="/templates" className="text-slate-300 py-2 hover:text-white">
              Templates
            </Link>
            <Link to="/pricing" className="text-slate-300 py-2 hover:text-white">
              Pricing
            </Link>
            <Link to="/login" className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors mt-4">
              Sign In
            </Link>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>
    </div>
  );
};

export default Layout;