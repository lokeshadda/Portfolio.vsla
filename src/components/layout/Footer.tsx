import Container from "./Container";
import SocialLinks from "../ui/SocialLinks";
import { navLinks, personalInfo } from "@/data/personal";

export default function Footer() {
  return (
    <footer className="mt-8 border-t border-white/[0.06] py-14 md:py-16">
      <Container>
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()}{" "}
            <span className="text-slate-400">{personalInfo.name}</span>
          </p>

          <nav className="flex flex-wrap justify-center gap-6 text-sm text-slate-500">
            {navLinks.slice(0, 3).map((link) => (
              <a key={link.href} href={link.href} className="hover:text-teal-300">
                {link.label}
              </a>
            ))}
          </nav>

          <SocialLinks />
        </div>
      </Container>
    </footer>
  );
}
