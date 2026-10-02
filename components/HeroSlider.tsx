"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const SLIDES = [
  {
    title: "Grey Pants & Tailored Shirts",
    subtitle: "Classic Monochromes & Crisp White Contrast",
    category: "Corporate & Evening",
    link: "/blog/what-color-shirt-goes-with-grey-pants",
    // Premium Menswear Flatlay (High-res Unsplash)
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=1400&q=80",
    alt: "Tailored grey trousers with crisp white and blue shirts",
  },
  {
    title: "Navy Blue Pants & Pastel Shirts",
    subtitle: "The Timeless Royal Standard with Rose & Sky Tones",
    category: "Business Casual",
    link: "/blog/what-color-shirt-goes-with-navy-pants",
    // Tailored Navy & Shirts Flatlay
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=1400&q=80",
    alt: "Navy blue dress pants and luxury formal shirts",
  },
  {
    title: "Olive Green Chinos & Denim",
    subtitle: "Rugged Elegance with Military Utility & Black Knits",
    category: "Modern Smart Casual",
    link: "/blog/what-color-shirt-goes-with-olive-green-pants",
    // Earthy Casual Menswear
    image: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=1400&q=80",
    alt: "Olive green pants paired with denim and white shirts",
  },
  {
    title: "Khaki Trousers & Navy Shirts",
    subtitle: "High-Contrast Sartorial Harmony for Summer & Office",
    category: "Wardrobe Essentials",
    link: "/blog/what-color-shirt-goes-with-khaki-pants",
    // Classic Khaki & Smart Shirts
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1400&q=80",
    alt: "Khaki chinos styled with navy and white shirts",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-900 shadow-xl mb-14">
      {/* Aspect Ratio Container for Desktop & Mobile */}
      <div className="relative h-[420px] sm:h-[480px] md:h-[540px] w-full">
        {SLIDES.map((slide, idx) => {
          const isActive = idx === current;
          return (
            <div
              key={idx}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
              }`}
            >
              {/* Background Image */}
              <Image
                src={slide.image}
                alt={slide.alt}
                fill
                priority={idx === 0}
                sizes="(max-width: 768px) 100vw, 1200px"
                className="object-cover object-center brightness-50"
              />

              {/* Gradient Vignette Overlay for Text Legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

              {/* Slide Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10 md:p-12 text-white">
                <span className="inline-block text-xs font-bold uppercase tracking-widest text-blue-400 bg-blue-950/80 border border-blue-800 px-3 py-1 rounded-full mb-3">
                  {slide.category}
                </span>
                <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight mb-2 max-w-2xl">
                  {slide.title}
                </h2>
                <p className="text-sm sm:text-base text-slate-300 max-w-xl mb-5 leading-relaxed">
                  {slide.subtitle}
                </p>
                <Link
                  href={slide.link}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold rounded-lg shadow-md transition-all group"
                >
                  View Styling Matrix
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      {/* Slide Navigation Dots */}
      <div className="absolute bottom-4 right-6 sm:right-10 z-20 flex gap-2">
        {SLIDES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              idx === current ? "w-8 bg-blue-500" : "w-2.5 bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
