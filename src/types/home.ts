import { ReactNode } from 'react';

export interface Feature {
  icon: ReactNode;
  title: string;
  description: string;
  color: "blue" | "purple" | "emerald";
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  rating: number;
}

export interface TrustedCompany {
  name: string;
  logo: string;
}

export interface FAQItem {
  question: string;
  answer: string;
} 