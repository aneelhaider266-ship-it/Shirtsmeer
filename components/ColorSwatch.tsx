interface ColorSwatchProps {
  colorName: string;
  hex: string;
  role?: string;
}

export default function ColorSwatch({ colorName, hex, role = "Recommended" }: ColorSwatchProps) {
  return (
    <div className="inline-flex items-center gap-3 rounded-lg border border-slate-200 bg-white px-3 py-2 shadow-sm">
      <span
        className="h-6 w-6 flex-shrink-0 rounded-full border border-slate-300"
        style={{ backgroundColor: hex }}
        aria-hidden="true"
      />
      <div className="flex flex-col text-left">
        <span className="text-xs font-semibold leading-tight text-slate-900">{colorName}</span>
        <span className="font-mono text-[10px] leading-tight text-slate-500">
          {hex.toUpperCase()} · {role}
        </span>
      </div>
    </div>
  );
}
