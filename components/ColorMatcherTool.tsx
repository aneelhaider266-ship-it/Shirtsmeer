"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Check, AlertTriangle, Sparkles, ExternalLink } from "lucide-react";

interface MatchRule {
  name: string;
  hex: string;
  tone: string;
  description: string;
  link: string;
  bestShirts: {
    name: string;
    hex: string;
    role: string;
    fabric: string;
    reason: string;
  }[];
  avoidColor: {
    name: string;
    hex: string;
    reason: string;
  };
  shoeRule: string;
  beltRule: string;
  amazonAffiliate: {
    title: string;
    url: string;
  };
}

const COLOR_DATABASE: Record<string, MatchRule> = {
  grey: {
    name: "Charcoal & Mid Grey",
    hex: "#4B5563",
    tone: "Achromatic Neutral",
    description: "Grey absorbs and balances light evenly. It pairs effortlessly with both stark monochromes and soft pastels.",
    link: "/blog/what-color-shirt-goes-with-grey-pants",
    bestShirts: [
      { name: "Crisp Pure White", hex: "#FFFFFF", role: "Formal Business", fabric: "100% Cotton Poplin", reason: "Creates high contrast without competing color temperatures." },
      { name: "Light Powder Blue", hex: "#87CEEB", role: "Daily Office", fabric: "End-on-End / Pinpoint", reason: "Shares naturally cool undertones for effortless corporate harmony." },
      { name: "Matte Jet Black", hex: "#111827", role: "Evening Minimalist", fabric: "Tapered Cotton Twill", reason: "Delivers sleek architectural contrast when paired with light grey." },
    ],
    avoidColor: {
      name: "Identical Mid-Grey",
      hex: "#6B7280",
      reason: "Wearing a shirt that matches your grey pants looks like an accidental, mismatched suit.",
    },
    shoeRule: "Black Oxford shoes for formal executive suits; medium brown leather penny loafers for smart casual.",
    beltRule: "Always match black leather belt to black shoes, or espresso brown belt to brown loafers.",
    amazonAffiliate: {
      title: "Recommended White Dress Shirt on Amazon",
      url: "https://www.amazon.com/dp/B003IXvr7?tag=YOUR_TAG_HERE",
    },
  },
  navy: {
    name: "Midnight Navy Blue",
    hex: "#1B2A47",
    tone: "Deep Saturated Anchor",
    description: "Navy blue provides an authoritative, structured foundation that anchors lighter pastel and neutral shirts.",
    link: "/blog/what-color-shirt-goes-with-navy-pants",
    bestShirts: [
      { name: "Crisp Pure White", hex: "#FFFFFF", role: "Executive Formal", fabric: "Two-Ply Broadcloth", reason: "The gold standard of tailored menswear with maximum facial framing." },
      { name: "Pastel Blush Pink", hex: "#F8C8DC", role: "Warm Smart Casual", fabric: "Fine Twill Weave", reason: "Warm red undertones soften the serious military roots of deep navy." },
      { name: "Sky Blue Pinpoint", hex: "#A0C4E2", role: "Tonal Monochrome", fabric: "Pinpoint Cotton", reason: "Creates monochromatic depth while maintaining clean tonal separation." },
    ],
    avoidColor: {
      name: "Slightly Mismatched Navy",
      hex: "#1E3A8A",
      reason: "Wearing navy separates that don't match the exact suit dye lot looks unintentional and messy.",
    },
    shoeRule: "Dark brown calfskin oxfords, rich burgundy monk straps, or cognac loafers.",
    beltRule: "Match rich chocolate or cognac leather belt directly to your footwear.",
    amazonAffiliate: {
      title: "Recommended Navy Business Pairing Shoes on Amazon",
      url: "https://www.amazon.com/dp/B0gHrgyMt?tag=YOUR_TAG_HERE",
    },
  },
  brown: {
    name: "Chocolate & Tobacco Brown",
    hex: "#3E2723",
    tone: "Rich Organic Earth",
    description: "Brown trousers introduce textural depth and warm undertones that make classic shirting shades look vibrant.",
    link: "/blog/what-color-shirt-goes-with-brown-pants",
    bestShirts: [
      { name: "Light Sky Blue", hex: "#87CEEB", role: "Complementary Contrast", fabric: "Chambray / Oxford", reason: "Blue and orange-brown sit opposite on the color wheel for natural harmony." },
      { name: "Warm Ecru & Cream", hex: "#F5F5DC", role: "Quiet Luxury", fabric: "Slubbed Linen", reason: "Shares the warm organic undertones of brown pants without bleached harshness." },
      { name: "Forest / Sage Green", hex: "#556B2F", role: "Analogous Earth", fabric: "Cotton Twill", reason: "Earthy green sits adjacent to brown in nature for a relaxed cohesive look." },
    ],
    avoidColor: {
      name: "Neon Orange or Yellow",
      hex: "#F59E0B",
      reason: "Synthetic bright warm shades clash aggressively against natural brown dyes.",
    },
    shoeRule: "Dark chocolate suede chukkas, oxblood tassel loafers, or dark espresso dress shoes.",
    beltRule: "Select a belt noticeably darker than your trousers to ground your waistline.",
    amazonAffiliate: {
      title: "Recommended Brown Leather Penny Loafers on Amazon",
      url: "https://www.amazon.com/dp/B0dmpUnLv?tag=YOUR_TAG_HERE",
    },
  },
  khaki: {
    name: "Classic British Tan Khaki",
    hex: "#C3B091",
    tone: "Warm Golden Neutral",
    description: "Khakis are lighter in visual weight and require high-contrast cool shirts to prevent looking like a flat uniform.",
    link: "/blog/what-color-shirt-goes-with-khaki-pants",
    bestShirts: [
      { name: "Deep Midnight Navy", hex: "#1B2A47", role: "High-Contrast Anchor", fabric: "Cotton Poplin / Polo", reason: "Navy darkens the upper torso, creating an immediate masculine V-taper." },
      { name: "Crisp Pure White", hex: "#FFFFFF", role: "Summer Tailored", fabric: "Oxford Cloth (OCBD)", reason: "An airy, classic warm-weather pairing when sleeves are rolled up." },
      { name: "Washed Blue Chambray", hex: "#4682B4", role: "Rugged Casual", fabric: "Indigo Chambray", reason: "The slubby blue texture complements the utilitarian heritage of cotton chinos." },
    ],
    avoidColor: {
      name: "Identical Tan / Mustard",
      hex: "#D97706",
      reason: "Matching your shirt to your khaki chinos creates a bland maintenance uniform look.",
    },
    shoeRule: "Medium brown or walnut leather penny loafers, dark brown suede boots, or clean white sneakers.",
    beltRule: "Medium brown leather belt or woven braided canvas belt for casual outfits.",
    amazonAffiliate: {
      title: "Recommended Oxford Button Down Shirt on Amazon",
      url: "https://www.amazon.com/dp/B068CQ2Jy?tag=YOUR_TAG_HERE",
    },
  },
  olive: {
    name: "Military Olive Green",
    hex: "#556B2F",
    tone: "Modern Honorary Neutral",
    description: "Olive green carries distinct character while functioning as an adaptable neutral alongside classic shirting.",
    link: "/blog/what-color-shirt-goes-with-olive-green-pants",
    bestShirts: [
      { name: "Crisp Pure White", hex: "#FFFFFF", role: "Sharp Contrast", fabric: "Slubbed Linen / OCBD", reason: "Lets the complex green-brown undertones of the chinos take center stage." },
      { name: "Matte Jet Black", hex: "#111827", role: "Modern Evening", fabric: "Fine Gauge Knit Polo", reason: "Grounds the earthy warmth of olive, lending an edgy modern aesthetic." },
      { name: "Dark Navy Blue", hex: "#1B2A47", role: "Utilitarian Depth", fabric: "Button-Down Poplin", reason: "Both colors share functional military roots for rugged balance." },
    ],
    avoidColor: {
      name: "Bright Saturated Red",
      hex: "#DC2626",
      reason: "Harsh red and green pairing unintentionally creates a holiday costume aesthetic.",
    },
    shoeRule: "Dark brown leather brogues, tobacco suede boots, or minimalist low-top white sneakers.",
    beltRule: "Dark brown leather belt with matte silver hardware.",
    amazonAffiliate: {
      title: "Recommended Casual Loafers on Amazon",
      url: "https://www.amazon.com/dp/B05XUCOQX?tag=YOUR_TAG_HERE",
    },
  },
  black: {
    name: "Tailored Formal Black",
    hex: "#111827",
    tone: "Maximum Formal Density",
    description: "Black absorbs all visible light and demands high-value contrast or strict monochromatic textures.",
    link: "/blog/what-color-shirt-goes-with-black-pants",
    bestShirts: [
      { name: "Crisp Pure White", hex: "#FFFFFF", role: "Formal Monochrome", fabric: "Egyptian Cotton Twill", reason: "The classic black-tie and executive suit combination." },
      { name: "Ice Blue Pinpoint", hex: "#B0E0E6", role: "Corporate Modern", fabric: "Pinpoint Cotton", reason: "Softens the starkness of black trousers while retaining crispness." },
      { name: "Muted Pale Grey", hex: "#D1D5DB", role: "Sleek Minimalist", fabric: "Fine Cotton Broadcloth", reason: "Provides subtle tonal step-down without high-contrast shock." },
    ],
    avoidColor: {
      name: "Muddy Brown / Earth Tones",
      hex: "#78350F",
      reason: "Dark warm brown against formal black wool often looks accidental and murky.",
    },
    shoeRule: "Strictly black calfskin oxfords, patent leather dress shoes, or black Chelsea boots.",
    beltRule: "High-shine black leather dress belt with silver rectangular buckle.",
    amazonAffiliate: {
      title: "Recommended Black Oxford Shoes on Amazon",
      url: "https://www.amazon.com/dp/B08wRqX3Y?tag=YOUR_TAG_HERE",
    },
  },
};

export default function ColorMatcherTool() {
  const [selectedKey, setSelectedKey] = useState<string>("olive");
  const current = COLOR_DATABASE[selectedKey];

  return (
    <section className="my-8 rounded-2xl border border-slate-200 bg-white p-4 sm:p-8 shadow-sm">
      <div className="mb-6">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-blue-700">
          <Sparkles className="h-3.5 w-3.5" /> Interactive Color Wheel Tool
        </span>
        <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
          Select Your Trouser Color:
        </h2>
        <p className="mt-1 text-xs sm:text-sm text-slate-600">
          Tap any trouser shade below to instantly generate matching shirts, shoe rules, and colors to avoid based on menswear color wheel theory.
        </p>
      </div>

      {/* 1. Trouser Color Selectors */}
      <div className="flex flex-wrap gap-2 pb-6 border-b border-slate-200">
        {Object.entries(COLOR_DATABASE).map(([key, data]) => {
          const isSelected = selectedKey === key;
          return (
            <button
              key={key}
              onClick={() => setSelectedKey(key)}
              className={`flex items-center gap-2 rounded-xl px-3 py-2 text-xs sm:text-sm font-semibold transition-all ${
                isSelected
                  ? "bg-slate-900 text-white shadow-md ring-2 ring-blue-600 ring-offset-2"
                  : "bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              <span
                className="h-3.5 w-3.5 rounded-full border border-white/20 flex-shrink-0"
                style={{ backgroundColor: data.hex }}
                aria-hidden="true"
              />
              <span>{data.name}</span>
              {isSelected && <Check className="h-3.5 w-3.5 text-blue-400 ml-1" />}
            </button>
          );
        })}
      </div>

      {/* 2. Dynamic Output Card */}
      <div className="mt-6 space-y-6">
        {/* Selected Summary */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
              Active Bottom Base:
            </span>
            <div className="flex items-center gap-2 mt-0.5">
              <span
                className="h-3.5 w-3.5 rounded-full"
                style={{ backgroundColor: current.hex }}
              />
              <span className="text-base font-bold text-slate-900">
                {current.name} ({current.tone})
              </span>
            </div>
            <p className="text-xs text-slate-600 mt-1 max-w-xl">
              {current.description}
            </p>
          </div>
          <Link
            href={current.link}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-800 hover:underline flex-shrink-0"
          >
            Read In-Depth Guide <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        {/* Top 3 Recommended Shirt Combinations (Stacked on mobile, 3 columns on tablet/desktop) */}
        <div>
          <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-xs font-bold text-emerald-700">✓</span>
            Top 3 Recommended Shirt Color Combinations:
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
            {current.bestShirts.map((shirt, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl border border-slate-200 bg-white shadow-xs hover:border-slate-300 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2 py-0.5 rounded">
                      {shirt.role}
                    </span>
                    <span className="text-[10px] text-slate-500 font-mono text-right">
                      {shirt.fabric}
                    </span>
                  </div>
                  <div className="flex items-center gap-2.5 my-2">
                    <span
                      className="h-6 w-6 rounded-full border border-slate-300 flex-shrink-0"
                      style={{ backgroundColor: shirt.hex }}
                    />
                    <span className="font-bold text-sm text-slate-900">
                      {shirt.name}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed mt-2">
                    {shirt.reason}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Avoid + Shoe Rules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Color Clash Warning */}
          <div className="p-4 rounded-xl border border-amber-200 bg-amber-50/70">
            <div className="flex items-center gap-2 text-amber-900 font-bold text-sm mb-1.5">
              <AlertTriangle className="h-4 w-4 text-amber-600 flex-shrink-0" />
              <span>Color to Avoid (Clash Alert):</span>
            </div>
            <div className="flex items-center gap-2 my-1">
              <span
                className="h-3.5 w-3.5 rounded-full border border-amber-400"
                style={{ backgroundColor: current.avoidColor.hex }}
              />
              <span className="text-xs font-bold text-amber-950">
                {current.avoidColor.name}
              </span>
            </div>
            <p className="text-xs text-amber-800 leading-relaxed mt-1">
              {current.avoidColor.reason}
            </p>
          </div>

          {/* Shoe & Leather Pairing Rule */}
          <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
            <h4 className="font-bold text-sm text-slate-900 mb-1">
              👞 Leather Footwear & Belt Rule:
            </h4>
            <p className="text-xs text-slate-700 leading-relaxed mb-1.5">
              <strong>Footwear:</strong> {current.shoeRule}
            </p>
            <p className="text-xs text-slate-600 leading-relaxed">
              <strong>Belt:</strong> {current.beltRule}
            </p>
          </div>
        </div>

        {/* Affiliate Action Banner */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-xl bg-blue-50 border border-blue-200 text-blue-950">
          <div className="text-xs">
            <span className="font-bold block text-sm text-blue-900">
              Need to complete this outfit?
            </span>
            <span className="text-blue-800">
              Browse top-rated Amazon products verified for this exact color pairing.
            </span>
          </div>
          <a
            href={current.amazonAffiliate.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1.5 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs rounded-lg shadow-sm transition-colors flex-shrink-0"
          >
            {current.amazonAffiliate.title} <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
