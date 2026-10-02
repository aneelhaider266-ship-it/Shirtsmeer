import React from "react";

export interface OutfitRow {
  shirtColor: string;
  formality: string;
  contrastRatio: string;
  footwear: string;
  bestOccasion: string;
}

interface OutfitTableProps {
  caption?: string;
  rows?: OutfitRow[];
}

export default function OutfitTable({ caption = "Outfit Matrix", rows = [] }: OutfitTableProps) {
  const safeRows = Array.isArray(rows) ? rows : [];
  if (safeRows.length === 0) return null;

  return (
    <div className="my-8 overflow-x-auto rounded-lg border border-slate-200 shadow-sm">
      <table className="w-full text-left border-collapse bg-white text-sm">
        <caption className="p-3 text-xs font-semibold uppercase tracking-wider text-slate-500 bg-slate-100 text-left border-b border-slate-200">
          {caption}
        </caption>
        <thead>
          <tr className="bg-slate-50 text-slate-700 font-semibold border-b border-slate-200">
            <th className="py-3 px-4">Shirt Color</th>
            <th className="py-3 px-4">Formality</th>
            <th className="py-3 px-4">Contrast</th>
            <th className="py-3 px-4">Recommended Footwear</th>
            <th className="py-3 px-4">Best Occasion</th>
          </tr>
        </thead>
        <tbody className="divide-y border-slate-100">
          {safeRows.map((row, idx) => (
            <tr key={idx} className="hover:bg-slate-50 transition-colors">
              <td className="py-3 px-4 font-medium text-slate-900">{row.shirtColor}</td>
              <td className="py-3 px-4 text-slate-700">{row.formality}</td>
              <td className="py-3 px-4 text-slate-600">{row.contrastRatio}</td>
              <td className="py-3 px-4 text-slate-700">{row.footwear}</td>
              <td className="py-3 px-4 text-slate-600">{row.bestOccasion}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
