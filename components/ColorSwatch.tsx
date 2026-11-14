import React from "react";
import Link from "next/link";

interface ColorSwatchProps {
  colorName?: string;
  hex?: string;
  role?: string;
  border?: boolean;
  href?: string;
  [key: string]: any;
}

export default function ColorSwatch({
  colorName = "Color",
  hex = "#4B5563",
  role = "Recommended",
  border = true,
  href,
}: ColorSwatchProps) {
  const safeHex = typeof hex === "string" && hex.startsWith("#") ? hex : "#4B5563";
  const safeName = typeof colorName === "string" ? colorName : "Color";
  const safeRole = typeof role === "string" ? role : "Recommended";
  const className = "my-1 inline-flex items-center gap-3 rounded-lg border border-slate-200 bg-white px-3 py-2 text-left shadow-sm";

  const content = (
    <>
      <span
        className={"h-6 w-6 flex-shrink-0 rounded-full " + (border ? "border border-slate-300" : "")}
        style={{ backgroundColor: safeHex }}
        aria-hidden="true"
      />
      <span className="flex flex-col text-left">
        <span className="text-xs font-semibold leading-tight text-slate-900">
          {safeName}
        </span>
        <span className="font-mono text-[10px] leading-tight text-slate-500">
          {safeHex.toUpperCase()} • {safeRole}
        </span>
      </span>
    </>
  );

  return href ? (
    <Link
      href={href}
      aria-label={"Explore " + safeName + " outfit combinations"}
      className={className + " transition hover:border-[#59664D] hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#59664D]"}
    >
      {content}
    </Link>
  ) : (
    <div className={className}>{content}</div>
  );
}
