"use client";

import { HeroStat } from "../../types";
import { cardInteractive } from "../../lib/styles";
import { cn } from "../../lib/utils";

type StatCardProps = {
  stat: HeroStat;
  index?: number;
};

export default function StatCard({ stat, index = 0 }: StatCardProps) {
  return (
    <div
      className={cn(cardInteractive, "group relative overflow-hidden p-5")}
    >
      <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-teal-400/10 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <p className="font-display relative text-3xl font-bold text-teal-300 transition-transform duration-300 group-hover:scale-105 group-hover:text-teal-200 md:text-4xl">
        {stat.value}
      </p>
      <p className="relative mt-1 text-sm font-semibold text-slate-200">{stat.label}</p>
      <p className="relative mt-2 text-xs leading-5 text-slate-500">{stat.detail}</p>
    </div>
  );
}
