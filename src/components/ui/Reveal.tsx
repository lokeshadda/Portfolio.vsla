"use client";

import { cn } from "../../lib/utils";
import { useInView } from "../../hooks/useInView";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

/** Subtle scroll animation — content stays visible if JS/CSS fails */
export default function Reveal({ children, className, delay = 0 }: RevealProps) {
  const { ref, isInView } = useInView<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-700 ease-out motion-reduce:transform-none",
        isInView ? "translate-y-0 opacity-100" : "translate-y-3 opacity-100",
        className
      )}
      style={{ transitionDelay: isInView ? `${delay}ms` : "0ms" }}
    >
      {children}
    </div>
  );
}
