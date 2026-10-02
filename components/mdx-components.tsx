import React from "react";
import Link from "next/link";
import Image from "next/image";
import QuickAnswerBox from "@/components/QuickAnswerBox";
import OutfitTable from "@/components/OutfitTable";
import ColorSwatch from "@/components/ColorSwatch";
import FAQAccordion from "@/components/FAQAccordion";

export const mdxComponents = {
  // Custom Components
  QuickAnswerBox,
  OutfitTable,
  ColorSwatch,
  FAQAccordion,

  // 1. Next.js <Image /> Component (For JSX usage with width & height)
  Image: (props: any) => {
    // Agar width aur height missing hon to safe fallback
    if (!props.width && !props.height && !props.fill) {
      return (
        <img
          {...props}
          className="rounded-xl border border-slate-200 my-6 shadow-sm w-full h-auto object-cover"
          loading="lazy"
        />
      );
    }
    return (
      <Image
        {...props}
        className={`rounded-xl border border-slate-200 my-6 shadow-sm ${props.className || ""}`}
        loading={props.priority ? undefined : "lazy"}
      />
    );
  },

  // 2. Standard Markdown Images: ![Alt Text](url)
  img: (props: any) => (
    <img
      {...props}
      className="rounded-xl border border-slate-200 my-6 shadow-sm w-full h-auto object-cover"
      loading="lazy"
    />
  ),

  // 3. Smart Links (Internal vs External)
  a: ({ href, children, className = "", ...props }: any) => {
    const isInternal = href && (href.startsWith("/") || href.startsWith("#"));

    const linkClasses = `text-blue-600 underline font-medium hover:text-blue-800 transition-colors ${className}`;

    if (isInternal) {
      return (
        <Link href={href} className={linkClasses} {...props}>
          {children}
        </Link>
      );
    }

    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={linkClasses}
        {...props}
      >
        {children}
      </a>
    );
  },
};
