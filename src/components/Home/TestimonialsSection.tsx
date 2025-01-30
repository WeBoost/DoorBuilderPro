import React from 'react';
import { Star } from 'lucide-react';

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  rating: number;
}

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

const TestimonialsSection: React.FC = () => {
  return (
    <div className="relative bg-slate-900 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 py-24">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
          Loved by Door Manufacturers
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-slate-600 transition-all duration-300"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={20} 
                    className="fill-yellow-500 text-yellow-500" 
                  />
                ))}
              </div>
              <p className="text-slate-300 mb-4">"{testimonial.quote}"</p>
              <div>
                <p className="font-semibold text-white">
                  {testimonial.author}
                </p>
                <p className="text-slate-400">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection; 