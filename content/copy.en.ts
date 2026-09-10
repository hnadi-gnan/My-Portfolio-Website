/**
 * All narrative copy for the site, in one typed object so a future `copy.ar.ts`
 * is a one-file translation. English is written as original professional copy,
 * not a literal translation.
 */

export const copy = {
  meta: {
    title: "Hanadi Qanan — ERP & Business Systems Specialist",
    description:
      "Hanadi Qanan is an ERP specialist and technical consultant who turns business requirements into working systems — analysis, solution design, development, deployment, and training across Odoo 15–19.",
  },

  hero: {
    eyebrow: "ERP & Business Systems · Technical Consulting",
    headline: "From business requirement to running system.",
    subhead:
      "I'm an ERP specialist and technical consultant. For about five years I've worked where technology meets operations — turning the way a company actually runs into systems the people there rely on every day.",
    primaryCta: { label: "Start a conversation", href: "#contact" },
    secondaryCta: { label: "Download CV", href: "" }, // href injected from site.cvPath
    note: "Currently open to remote roles and independent consulting.",
  },

  whatIDo: {
    heading: "What I do",
    lead: "Three parts of the same job — understanding the business, designing the system, and making it stick.",
    items: [
      {
        title: "Understand the business",
        body: "I map how work really flows — the approvals, the exceptions, the reporting — before a single line of configuration.",
      },
      {
        title: "Design the solution",
        body: "I turn requirements into a clear solution design: data model, workflows, integrations, and the reports that make it useful.",
      },
      {
        title: "Deliver and support it",
        body: "I build, test, deploy, document, and train — and stay close to the system through migration, performance, and day-two operations.",
      },
    ],
  },

  about: {
    heading: "About",
    paragraphs: [
      "I work at the intersection of software, business analysis, and operations. Most of my work has been ERP — implementing, customizing, and extending Odoo across versions 15 to 19 — but the value I bring isn't a specific tool. It's the ability to sit with a business, understand what it needs, and turn that into a system that fits the way the work is actually done.",
      "Over roughly five years, much of it with an Odoo Gold Partner, I've contributed to more than twelve implementation projects and led several of them end to end. That has meant writing Python and QWeb, but also designing approval matrices, localizing payroll for a specific regulatory environment, planning server migrations, and coordinating the technical response to a security incident. I'm most useful on problems that don't sit neatly inside one discipline.",
    ],
    headshotAlt: "Portrait of Hanadi Qanan",
    headshotCaption: "Professional headshot — placeholder until supplied.",
  },

  whatISolve: {
    heading: "What I solve",
    lead: "The problems companies bring me usually look like one of these.",
    items: [
      {
        title: "Business-process inefficiency",
        body: "Slow, unclear processes with no single source of truth. I document how the work actually happens, then redesign it in the system so every step has an owner and a status.",
      },
      {
        title: "Manual workflows",
        body: "Spreadsheets, email chains, and re-keyed data. I replace them with structured workflows, validation, and approvals that hold up under real volume.",
      },
      {
        title: "Complex ERP requirements",
        body: "Requirements standard modules don't cover. I design custom modules and configuration that extend the ERP without turning it into something unmaintainable.",
      },
      {
        title: "Disconnected systems",
        body: "Data trapped between tools — email, scanners, external services. I build integrations and import/export pipelines so information moves once and stays consistent.",
      },
      {
        title: "Reporting gaps",
        body: "Decisions made without the right numbers. I design custom reports across HR, payroll, finance, sales, and purchasing, in the format each team needs.",
      },
      {
        title: "Operational data management",
        body: "Messy master data with no clear model. I clean and structure it, define ownership, and build the processes that keep it accurate.",
      },
    ],
  },

  expertise: {
    heading: "Expertise",
    lead: "Grouped by domain rather than rated on a scale — this is where I've spent real project time.",
    groups: [
      {
        title: "Software & Development",
        items: [
          "Python development",
          "Odoo module architecture",
          "XML / QWeb",
          "ORM & business logic",
          "REST & webhook integrations",
          "Git & code review",
          "Flutter (mobile)",
          "Testing & troubleshooting",
        ],
      },
      {
        title: "ERP & Business Systems",
        items: [
          "Odoo 15–19 implementation & customization",
          "HR & Payroll",
          "Accounting & Finance",
          "Sales · Purchase · CRM",
          "Approvals & workflows",
          "Employee portals",
          "Document management",
        ],
      },
      {
        title: "Business Analysis",
        items: [
          "Requirements gathering",
          "Business-process analysis",
          "Workflow & solution design",
          "Gap analysis",
          "System requirements & specifications",
          "Client documentation",
        ],
      },
      {
        title: "Infrastructure & Servers",
        items: [
          "Ubuntu / Linux administration",
          "PostgreSQL",
          "Odoo server configuration",
          "Deployment & server migration",
          "Backup & disaster-recovery design",
          "Performance troubleshooting",
          "Security coordination",
        ],
      },
      {
        title: "Reporting & Data",
        items: [
          "Custom report development",
          "QWeb & programmatic reports",
          "Data import / export",
          "Excel data processing",
          "Data cleaning & structuring",
        ],
      },
      {
        title: "Consulting & Training",
        items: [
          "ERP consulting",
          "Implementation planning",
          "End-user training",
          "Technical & business proposals",
          "Company profiles & presentations",
          "AI-assisted documentation & analysis",
        ],
      },
    ],
  },

  work: {
    heading: "Selected work",
    lead: "A few projects that show the range — from payroll localization to infrastructure and incident response. No client names; impact is described, not quantified.",
    alsoHeading: "Also delivered",
  },

  experience: {
    heading: "Experience",
    lead: "Roles and focus over time. Dates to be confirmed.",
  },

  credentials: {
    heading: "Certifications & education",
    certificationsLabel: "Certifications",
    educationLabel: "Education",
    languagesLabel: "Languages",
  },

  toolkit: {
    heading: "Toolkit",
    lead: "The tools and technologies I work in regularly.",
  },

  howIWork: {
    heading: "How I work",
    lead: "The same sequence on almost every engagement, whether it's a two-week fix or a full implementation.",
    steps: [
      {
        title: "Understand",
        body: "Sit with the people doing the work. Map the real process — including the exceptions and the reporting — before proposing anything.",
      },
      {
        title: "Analyze",
        body: "Turn observations into a clear picture: requirements, gaps, constraints, and the decisions that need to be made.",
      },
      {
        title: "Design",
        body: "Produce a solution design — data model, workflows, integrations, reports — that the client can review and agree to before build.",
      },
      {
        title: "Build & test",
        body: "Develop in small, reviewable pieces. Test against real scenarios and data, not just the happy path.",
      },
      {
        title: "Deploy & enable",
        body: "Deploy carefully, document what was built, and train the people who will run it. Stay available for day-two questions.",
      },
    ],
  },

  contact: {
    heading: "Let's talk about your systems.",
    body: "Whether it's an ERP implementation, two systems that need to talk to each other, or a process that should be simpler — send a short description and I'll reply.",
    emailLabel: "Email",
    whatsappLabel: "WhatsApp",
  },

  footer: {
    tagline: "ERP & business systems — available for remote work worldwide.",
  },
};

export type Copy = typeof copy;
