export interface Testimonial {
  name: string;
  title: string;
  quote: string;
  image: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Coltrane Kubo",
    title: "Co-founder @ Aidgentic",
    quote: "Rajath is a phenomenal AI and automation expert. He brought serious <highlight>technical depth</highlight> to my project, and clearly knows his stuff.",
    image: "coltrane.png",
  },
  {
    name: "Zak Hodgson",
    title: "CEO @ Sundale Systems",
    quote: "Delivered faster than expected, explained in plain language, and it <highlight>just works</highlight>. Bounce rates are down and we're saving hours every week.",
    image: "zak.png",
  },
];
