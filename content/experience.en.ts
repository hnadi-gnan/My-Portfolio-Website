/**
 * Experience timeline, credentials, and toolkit.
 * PLACEHOLDER values await confirmation from Hanadi (dates, education, languages,
 * certification track).
 */

export type Role = {
  title: string;
  org: string;
  period: string;
  summary: string;
  highlights?: string[];
};

export const roles: Role[] = [
  {
    title: "ERP Consultant & Developer",
    org: "Odoo Gold Partner",
    period: "PLACEHOLDER — month/year – present",
    summary:
      "Implementation, customization, and support of Odoo (versions 15–19) for clients across multiple sectors.",
    highlights: [
      "Contributed to 12+ implementation projects; led several end to end.",
      "Requirements analysis, solution design, custom module development, and QWeb reporting.",
      "Server deployment and migration planning, backup and disaster-recovery design.",
      "End-user training and technical documentation.",
    ],
  },
  {
    title: "PLACEHOLDER — earlier role / title",
    org: "PLACEHOLDER — organization or type",
    period: "PLACEHOLDER — dates",
    summary: "PLACEHOLDER — short description of responsibilities and focus.",
  },
];

export type Certification = {
  name: string;
  detail: string;
  issuer: string;
  year: string;
};

export const certifications: Certification[] = [
  {
    name: "Odoo 19 Certification",
    detail: "Score: 90 · PLACEHOLDER — confirm Functional / Developer track",
    issuer: "Odoo",
    year: "PLACEHOLDER — year",
  },
];

export type Education = {
  degree: string;
  field: string;
  school: string;
  year: string;
};

export const education: Education[] = [
  {
    degree: "PLACEHOLDER — degree",
    field: "PLACEHOLDER — field of study",
    school: "PLACEHOLDER — university",
    year: "PLACEHOLDER — year",
  },
];

export type Language = {
  name: string;
  level: string;
};

export const languages: Language[] = [
  { name: "Arabic", level: "PLACEHOLDER — e.g. Native" },
  { name: "English", level: "PLACEHOLDER — e.g. Professional working proficiency" },
];

export type ToolGroup = {
  title: string;
  items: string[];
};

export const toolkit: ToolGroup[] = [
  {
    title: "ERP & platforms",
    items: ["Odoo 15", "Odoo 16", "Odoo 17", "Odoo 18", "Odoo 19"],
  },
  {
    title: "Languages",
    items: ["Python", "XML", "QWeb", "SQL", "Dart / Flutter"],
  },
  {
    title: "Data & databases",
    items: ["PostgreSQL", "Excel data processing", "CSV import / export"],
  },
  {
    title: "Infrastructure",
    items: ["Ubuntu / Linux", "SSH", "Nginx", "Server configuration", "Backups"],
  },
  {
    title: "Tooling",
    items: ["Git", "GitHub", "VS Code Remote", "Linux shell"],
  },
  {
    title: "Practice",
    items: [
      "Business analysis",
      "Solution design",
      "Technical writing",
      "User training",
      "AI-assisted delivery",
    ],
  },
];
