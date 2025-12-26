
// Add React import to resolve "Cannot find namespace 'React'" error
import React from 'react';

export interface Feature {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
}