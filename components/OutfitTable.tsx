export interface OutfitRow {
  shirtColor: string;
  formality: string;
  contrast: string;
  footwear: string;
  occasion: string;
}

interface OutfitTableProps {
  caption: string;
  rows: OutfitRow[];
}

export default function OutfitTable({ caption, rows }: OutfitTableProps) {
  return (
    <div className="not-prose my-8 overflow-x-auto rounded-lg border border-slate-200 shadow-sm">
      <table className="w-full min-w-[640px] border-collapse bg-white text-left text-sm">
        <caption className="border-b border-slate-200 bg-slate-100 p-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-600">
          {caption}
        </caption>
        <thead>
          <tr className="border-b border-slate-200 bg-slate-50 font-semibold text-slate-700">
            <th scope="col" className="px-4 py-3">Shirt Color</th>
            <th scope="col" className="px-4 py-3">Formality</th>
            <th scope="col" className="px-4 py-3">Contrast</th>
            <th scope="col" className="px-4 py-3">Footwear</th>
            <th scope="col" className="px-4 py-3">Best Occasion</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {rows.map((row) => (
            <tr key={row.shirtColor} className="transition-colors hover:bg-slate-50">
              <th scope="row" className="px-4 py-3 font-medium text-slate-900">{row.shirtColor}</th>
              <td className="px-4 py-3 text-slate-700">{row.formality}</td>
              <td className="px-4 py-3 text-slate-600">{row.contrast}</td>
              <td className="px-4 py-3 text-slate-700">{row.footwear}</td>
              <td className="px-4 py-3 text-slate-600">{row.occasion}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
