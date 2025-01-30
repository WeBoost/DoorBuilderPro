import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "How does the 3D door configurator work?",
    answer: "Our configurator uses advanced 3D rendering technology to create real-time visualizations of custom doors. Users can modify dimensions, materials, hardware, and finishes, seeing changes instantly in a photorealistic preview."
  },
  {
    question: "Can I integrate the platform with my existing website?",
    answer: "Yes! DoorBuilderPro can be integrated into your existing website through our API, or you can create a new website using our builder with full customization options."
  },
  {
    question: "What payment methods are supported?",
    answer: "We support all major payment methods including credit cards, PayPal, bank transfers, and can integrate with your existing payment processors. Custom payment solutions are available for enterprise clients."
  },
  {
    question: "Is technical support included?",
    answer: "Yes, all plans include technical support. Premium and Enterprise plans include priority support with dedicated account managers and 24/7 assistance."
  },
  {
    question: "Can I export my door designs to CAD software?",
    answer: "Yes, our platform supports exports to major CAD formats including DWG, DXF, and IFC. This feature is available on Professional and Enterprise plans."
  }
];

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="relative bg-slate-900 border-b border-slate-800">
      <div className="max-w-4xl mx-auto px-4 py-24">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-slate-800/50 rounded-xl border border-slate-700 overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-slate-800/70 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-medium text-white">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="text-slate-400" />
                ) : (
                  <ChevronDown className="text-slate-400" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4 text-slate-300">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQSection; 