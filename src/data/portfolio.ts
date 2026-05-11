import rawData from "../../data.json";

export type Project = {
  name: string;
  favorite: boolean;
  tags: string[];
  description: string;
  link: string;
  repo: string;
  color: string;
  images: string[];
  user: string;
  techstack: string[];
  collaborators: Record<string, string>;
  deployment?: string;
  documentation?: string;
};

export type Skill = {
  name: string;
  proficiency: number;
  description: string;
};

export type Experience = {
  company: string;
  logo: string;
  role: string;
  duration: string;
  date: string;
  link: string;
  images: string[];
  description: string;
  about: string;
};

export type Certification = {
  name: string;
  type: string;
  logo: string;
  images: string[];
  issuer: string;
  date: string;
  details: string;
  certificate_link: string | null;
  website_link: string | null;
  extra_link: string | null;
  color: string;
};

export const portfolio = rawData as {
  projects: Project[];
  skills: {
    technical: Skill[];
    tools: Skill[];
    softSkills: Skill[];
  };
  experience: Experience[];
  certifications: Certification[];
};

export const favoriteProjects = portfolio.projects.filter((project) => project.favorite);
export const completedProjects = portfolio.projects.filter((project) =>
  project.tags.includes("status:completed"),
);

export const topTechnicalSkills = [...portfolio.skills.technical]
  .sort((left, right) => right.proficiency - left.proficiency)
  .slice(0, 8);

export function getTagValue(project: Project, prefix: string) {
  const tag = project.tags.find((item) => item.startsWith(`${prefix}:`));
  return tag?.replace(`${prefix}:`, "") ?? "";
}

export function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function projectSlug(project: Project) {
  return slugify(project.repo || project.name);
}

export function experienceSlug(experience: Experience) {
  return slugify(`${experience.company}-${experience.role}`);
}

export function certificationSlug(certification: Certification) {
  return slugify(`${certification.issuer}-${certification.name}`);
}

export function projectPlaceholder(index: number) {
  const placeholders = [
    "/assets/placeholders/project-1.svg",
    "/assets/placeholders/project-2.svg",
    "/assets/placeholders/project-3.svg",
    "/assets/placeholders/project-4.svg",
  ];

  return placeholders[index % placeholders.length];
}

export function formatDate(date: string) {
  const parts = date.split("-").map(Number);
  const year = parts[0] ?? 1970;
  const month = parts[1] ?? 1;
  const day = parts[2] ?? 1;

  return new Intl.DateTimeFormat("en", {
    month: "short",
    year: "numeric",
  }).format(new Date(year, month - 1, day));
}
