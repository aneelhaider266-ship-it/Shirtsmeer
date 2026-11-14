"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const SLIDES = [
  {
    title: "Grey Pants & Tailored Shirts",
    subtitle: "Classic Monochromes & Crisp White Contrast",
    category: "Corporate & Evening",
    link: "/blog/what-color-shirt-goes-with-grey-pants",
    image:
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=1000&q=70",
    alt: "Men's shirts arranged on a wooden table",
  },
  {
    title: "Navy Blue Pants & Pastel Shirts",
    subtitle: "The Timeless Royal Standard with Rose & Sky Tones",
    category: "Business Casual",
    link: "/blog/what-color-shirt-goes-with-navy-pants",
    image:
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=1000&q=70",
    alt: "Men's formal clothing and shirt styling",
  },
  {
    title: "Olive Green Chinos & Denim",
    subtitle: "Rugged Elegance with Military Utility & Black Knits",
    category: "Modern Smart Casual",
    link: "/blog/what-color-shirt-goes-with-olive-green-pants",
    image:
      "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=1000&q=70",
    alt: "Men's casual clothing and wardrobe styling",
  },
  {
    title: "Khaki Trousers & Navy Shirts",
    subtitle: "High-Contrast Sartorial Harmony for Summer & Office",
    category: "Wardrobe Essentials",
    link: "/blog/what-color-shirt-goes-with-khaki-pants",
    image:
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1000&q=70",
    alt: "Men's smart formal outfit styling",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const slide = SLIDES[current];

  return (
    <section
      className="relative mb-14 w-full overflow-hidden rounded-3xl border border-[#D9CBB5] bg-[#252923] shadow-lg"
      aria-label="Featured style guides"
    >
      <div className="relative h-[360px] w-full sm:h-[460px] md:h-[520px]">
        <div className="absolute inset-0">
          <Image
            src={slide.image}
            alt={slide.alt}
            fill
            priority={current === 0}
            fetchPriority={current === 0 ? "high" : "auto"}
            sizes="(max-width: 768px) 100vw, 1200px"
            quality={70}
            className="object-cover object-center brightness-[0.78]"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#252923]/90 via-[#252923]/30 to-[#252923]/10" />

          <div className="absolute bottom-0 left-0 right-0 p-6 pb-16 text-white sm:p-10 sm:pb-20 md:p-12 md:pb-20">
            <span className="mb-4 inline-block rounded-full border border-[#D9CBB5]/50 bg-[#252923]/65 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#E5D7C2] backdrop-blur-sm">
              {slide.category}
            </span>

            <h2 className="mb-3 max-w-2xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl">
              {slide.title}
            </h2>

            <p className="mb-6 max-w-xl text-sm leading-relaxed text-[#F5F2EB]/90 sm:text-base">
              {slide.subtitle}
            </p>

            <Link
              href={slide.link}
              className="group inline-flex items-center gap-3 rounded-full bg-[#59664D] px-6 py-3 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:bg-[#46543D] hover:shadow-lg"
            >
              Explore Style Guide
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        <div className="absolute right-5 top-5 z-20 flex gap-2 sm:right-8 sm:top-8" aria-label="Choose featured guide">
          {SLIDES.map((item, idx) => (
            <button
              key={item.link}
              type="button"
              onClick={() => setCurrent(idx)}
              aria-label={`Show slide ${idx + 1}: ${item.title}`}
              aria-current={idx === current ? "true" : undefined}
              className="flex h-11 w-11 items-center justify-center rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
