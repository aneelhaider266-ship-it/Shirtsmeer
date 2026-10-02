import React from "react";
import Link from "next/link";
import Image from "next/image";
import QuickAnswerBox from "@/components/QuickAnswerBox";
import OutfitTable from "@/components/OutfitTable";
import ColorSwatch from "@/components/ColorSwatch";
import FAQAccordion from "@/components/FAQAccordion";

export const mdxComponents = {
  QuickAnswerBox,
  OutfitTable,
  ColorSwatch,
  FAQAccordion,
  Image: (props: any) => (
    <Image
      {...props}
      className="rounded-xl border border-slate-200 my-6 shadow-sm"
      loading={props.priority ? undefined : "lazy"}
    />
  ),
  a: ({ href, children, ...props }: any) => {
    const isInternal = href && (href.startsWith("/") || href.startsWith("#"));
    if (isInternal) {
      return (
        <Link href={href} className="text-blue-600 underline hover:text-blue-800 transition-colors" {...props}>
          {children}
        </Link>
      );
    }
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 underline hover:text-blue-800 transition-colors"
        {...props}
      >
        {children}
      </a>
    );
  },
};
