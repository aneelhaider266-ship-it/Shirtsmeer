import React from "react";
import { CheckCircle2 } from "lucide-react";

interface QuickAnswerBoxProps {
  title?: string;
  children: React.ReactNode;
}

export default function QuickAnswerBox({
  title = "Quick Answer",
  children,
}: QuickAnswerBoxProps) {
  return (
    <aside
      aria-label="Quick Answer Summary"
      className="not-prose my-6 rounded-r-lg border-l-4 border-blue-600 bg-slate-50 p-5 shadow-sm"
    >
      <div className="mb-2 flex items-center gap-2 text-base font-semibold text-blue-900">
        <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-blue-600" />
        <span>{title}</span>
      </div>
      <div className="text-sm leading-relaxed text-slate-800 md:text-base">
        {children}
      </div>
    </aside>
  );
}
