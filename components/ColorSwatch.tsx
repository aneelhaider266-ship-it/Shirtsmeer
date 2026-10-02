import React from "react";

interface ColorSwatchProps {
  colorName?: string;
  hex?: string;
  role?: string;
  border?: boolean;
  [key: string]: any;
}

export default function ColorSwatch({
  colorName = "Color",
  hex = "#4B5563",
  role = "Recommended",
  border = true,
}: ColorSwatchProps) {
  const safeHex = typeof hex === "string" && hex.startsWith("#") ? hex : "#4B5563";
  const safeName = typeof colorName === "string" ? colorName : "Color";
  const safeRole = typeof role === "string" ? role : "Recommended";

  return (
    <div className="inline-flex items-center gap-3 rounded-lg border border-slate-200 bg-white px-3 py-2 shadow-sm my-1">
      <span
        className={`h-6 w-6 flex-shrink-0 rounded-full ${border ? "border border-slate-300" : ""}`}
        style={{ backgroundColor: safeHex }}
        aria-hidden="true"
      />
      <div className="flex flex-col text-left">
        <span className="text-xs font-semibold leading-tight text-slate-900">
          {safeName}
        </span>
        <span className="font-mono text-[10px] leading-tight text-slate-500">
          {safeHex.toUpperCase()} • {safeRole}
        </span>
      </div>
    </div>
  );
}
