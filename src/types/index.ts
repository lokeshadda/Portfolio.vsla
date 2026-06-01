export type NavLink = {
  label: string;
  href: string;
  sectionId: string;
};

export type HeroStat = {
  value: string;
  label: string;
  detail: string;
};

export type PersonalInfo = {
  name: string;
  shortName: string;
  title: string;
  currentRole: string;
  tagline: string;
  heroIntro: string[];
  subtitle: string;
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  linkedinHandle: string;
  github: string;
  githubHandle: string;
  about: string[];
  heroStats: HeroStat[];
  techStack: string[];
};

export type SkillCategory = {
  category: string;
  items: string[];
};

export type ExperienceItem = {
  title: string;
  company: string;
  duration: string;
  points: string[];
};

export type ProjectCategory =
  | "Dashboard"
  | "Machine Learning"
  | "Big Data"
  | "Analytics"
  | "Data Governance";

export type ProjectAccent = "blue" | "emerald" | "amber" | "cyan" | "violet";

export type ProjectItem = {
  title: string;
  duration?: string;
  category: ProjectCategory;
  description: string[];
  tech: string[];
  githubUrl?: string;
  accent?: ProjectAccent;
  comingSoon?: boolean;
};

export type EducationItem = {
  degree: string;
  institution: string;
  duration: string;
  gpa?: string;
};
