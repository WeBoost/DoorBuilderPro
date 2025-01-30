import React from 'react';
import { Layout, Boxes, ShoppingCart } from 'lucide-react';

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: "blue" | "purple" | "emerald";
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

const FeaturesSection: React.FC = () => {
  return (
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
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-slate-600 transition-colors"
            >
              <div 
                className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-colors ${
                  feature.color === 'blue' ? 'bg-blue-500/10 group-hover:bg-blue-500/20' :
                  feature.color === 'purple' ? 'bg-purple-500/10 group-hover:bg-purple-500/20' :
                  'bg-emerald-500/10 group-hover:bg-emerald-500/20'
                }`}
              >
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-slate-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
