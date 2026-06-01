import { ArrowUpRight, Mail, Phone } from "lucide-react";
import Container from "../layout/Container";
import SectionTitle from "../ui/SectionTitle";
import SocialLinks from "../ui/SocialLinks";
import Reveal from "../ui/Reveal";
import { personalInfo } from "../../data/personal";
import { card, cardInteractive, sectionAlt, sectionPadding } from "../../lib/styles";
import { cn } from "../../lib/utils";

export default function Contact() {
  return (
    <section id="contact" className={cn(sectionAlt, sectionPadding)}>
      <Container>
        <Reveal>
          <div
            className={cn(
              card,
              "overflow-hidden border-teal-400/20 bg-gradient-to-br from-teal-400/[0.08] via-[#121a2e] to-[#121a2e] p-8 md:p-12"
            )}
          >
            <SectionTitle
              title="Get in Touch"
              sectionNumber="06"
              subtitle="Open to Full-Time Opportunities in Analytics, Data Governance, and BI."
            />

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              <a
                href={`mailto:${personalInfo.email}`}
                className={cn(cardInteractive, "group flex items-center gap-4 p-5")}
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-teal-400/30 bg-teal-400/10 transition-transform duration-300 group-hover:scale-105">
                  <Mail className="h-5 w-5 text-teal-400" />
                </span>
                <div>
                  <p className="text-xs text-slate-500">Email</p>
                  <p className="font-medium text-slate-100 group-hover:text-teal-300">
                    {personalInfo.email}
                  </p>
                </div>
                <ArrowUpRight className="ml-auto h-4 w-4 text-slate-500 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-teal-300" />
              </a>

              <div className={cn(cardInteractive, "flex items-center gap-4 p-5")}>
                <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-teal-400/30 bg-teal-400/10">
                  <Phone className="h-5 w-5 text-teal-400" />
                </span>
                <div>
                  <p className="text-xs text-slate-500">Phone</p>
                  <p className="font-medium text-slate-100">{personalInfo.phone}</p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex items-center gap-3">
              <p className="text-sm text-slate-500">Connect</p>
              <SocialLinks iconClassName="h-5 w-5" />
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
