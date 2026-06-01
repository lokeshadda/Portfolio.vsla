"use client";

import Image from "next/image";
import { MapPin, Phone } from "lucide-react";
import Container from "../layout/Container";
import Button from "../ui/Button";
import HeroBackground from "../ui/HeroBackground";
import { personalInfo } from "../../data/personal";
import { withBasePath } from "../../lib/basePath";
import { card, heroSectionPadding } from "../../lib/styles";
import { cn } from "../../lib/utils";

export default function Hero() {
  return (
    <section
      id="home"
      className={cn(
        "relative overflow-hidden border-b border-white/[0.06] bg-[#0a0f1a]",
        heroSectionPadding
      )}
    >
      <HeroBackground />

      <Container className="relative z-10">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.95fr] lg:items-start">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-teal-400/70" aria-hidden />
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-teal-300/90">
                Business Analyst · Data Quality Analyst · Analytics Engineer
              </p>
            </div>

            <h1 className="font-display mt-6 text-4xl font-bold leading-[1.02] tracking-tight text-slate-50 sm:text-5xl lg:text-6xl">
              Turning <span className="text-teal-300">data</span>
              <br />
              into decisions
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-400 md:text-lg">
              {personalInfo.heroIntro[0]}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="#contact">Get in Touch</Button>
              <Button href={personalInfo.linkedin} variant="secondary" external>
                LinkedIn
              </Button>
              <Button href={personalInfo.github} variant="secondary" external>
                GitHub
              </Button>
            </div>

            <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-slate-400">
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="h-4 w-4 shrink-0 text-teal-400" />
                {personalInfo.location}
              </span>
              <a href={`mailto:${personalInfo.email}`} className="hover:text-teal-300">
                {personalInfo.email}
              </a>
              <span className="inline-flex items-center gap-1.5">
                <Phone className="h-4 w-4 shrink-0 text-teal-400" />
                {personalInfo.phone}
              </span>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex justify-center">
              <div className="relative h-40 w-40 overflow-hidden rounded-full border-2 border-white/25 bg-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.35)]">
                <Image
                  src={withBasePath("/images/profile.png")}
                  alt="Lokesh Adda profile photo"
                  fill
                  sizes="160px"
                  className="object-cover object-[center_20%]"
                  priority
                  unoptimized
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {personalInfo.heroStats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={cn(
                    "rounded-2xl border p-4 transition-all duration-300",
                    index === 1
                      ? "border-teal-300/35 bg-gradient-to-br from-teal-400/30 to-cyan-400/20"
                      : "border-white/15 bg-white/[0.04]"
                  )}
                >
                  <p className="font-display text-4xl font-bold text-slate-50">{stat.value}</p>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-[0.12em] text-slate-300/90">
                    {stat.label}
                  </p>
                  <p className="mt-1 text-xs text-slate-300/75">{stat.detail}</p>
                </div>
              ))}
            </div>

            <div className="rounded-2xl border border-white/15 bg-white/[0.04] p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-300/80">
                Core Stack
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {personalInfo.techStack.slice(0, 10).map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-white/15 bg-white/[0.06] px-2.5 py-1 text-xs font-medium text-slate-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
