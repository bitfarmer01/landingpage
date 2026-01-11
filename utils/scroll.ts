
import React from 'react';

export const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
  const anchor = e.currentTarget;
  const href = anchor.getAttribute('href');
  if (href && href.startsWith('#')) {
    e.preventDefault();
    const id = href.slice(1);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
};
