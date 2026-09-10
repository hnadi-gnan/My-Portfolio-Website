/**
 * Case studies and the compact "also delivered" list.
 *
 * Rules followed here:
 *  - No client names — only sector / area, and some of those are PLACEHOLDER
 *    until Hanadi confirms what may be disclosed.
 *  - "impact" is qualitative. No invented metrics, dates, or team sizes.
 */

export type CaseStudy = {
  id: string;
  title: string;
  meta: string; // sector / area / scope line
  challenge: string;
  solution: string;
  role: string;
  technologies: string[];
  impact: string;
  featured?: boolean;
};

export const caseStudies: CaseStudy[] = [
  {
    id: "erp-implementation-programme",
    title: "ERP implementation programme",
    meta: "12+ projects · multiple sectors",
    challenge:
      "Organizations adopting ERP for the first time, each with its own processes, data, and expectations — and limited internal capacity to translate business needs into system design.",
    solution:
      "Worked across the full implementation lifecycle: discovery workshops, process mapping, configuration, data migration, custom development, user-acceptance testing, training, and go-live support.",
    role:
      "Consultant and developer on more than twelve implementations; direct responsibility for several as the lead.",
    technologies: ["Odoo 15–19", "Python", "QWeb", "PostgreSQL", "Data migration"],
    impact:
      "Multiple organizations moved from fragmented tools and manual tracking to a single operational system, with their teams trained to run it independently.",
    featured: true,
  },
  {
    id: "libyan-hr-payroll-localization",
    title: "HR & payroll localization",
    meta: "HR & Payroll · regulated environment",
    challenge:
      "Standard payroll did not reflect local rules and practice — allowances, leave types, tax treatment, contract structures, and multi-branch organization all needed to work the way employers and authorities in the Libyan context expect.",
    solution:
      "Designed and built an HR and payroll localization: configurable salary structures and rules, allowances, leave management, tax handling, contract and employee data models, and branch-aware payroll processing.",
    role:
      "Led the localization design and implementation, from requirements through configuration, custom development, and validation.",
    technologies: ["Odoo HR & Payroll", "Python", "Salary rules", "QWeb payslips"],
    impact:
      "Payroll could be run inside the system with local rules applied consistently across branches, replacing manual calculation and external spreadsheets.",
    featured: true,
  },
  {
    id: "employee-insurance-management",
    title: "Employee insurance management",
    meta: "HR · Finance",
    challenge:
      "Medical insurance for employees and their dependents was tracked outside the system, with no link between the people covered, their treatment records, and the financial side.",
    solution:
      "Designed a mechanism to manage insurance for employees and dependents — connecting coverage, treatment data, employee records, and the associated financial entries and reporting.",
    role:
      "Solution design and implementation, working from the business requirements through the data model and reports.",
    technologies: ["Odoo", "Python", "Custom models", "QWeb reporting"],
    impact:
      "Coverage, claims context, and cost became visible in one place, giving HR and finance a shared view.",
    featured: true,
  },
  {
    id: "dynamic-approval-matrix",
    title: "Dynamic approval matrix",
    meta: "Cross-module workflow",
    challenge:
      "Approval rules were effectively hard-coded per document type, so every new requirement meant another change and the logic drifted between modules.",
    solution:
      "Built a dynamic approval matrix that defines approval levels and conditions in configuration and can be reused across multiple modules and business processes.",
    role: "Designed and developed the matrix and its integration points.",
    technologies: ["Odoo", "Python", "Workflow logic", "Configurable rules"],
    impact:
      "New approval scenarios became a configuration task rather than a development one, with consistent behaviour across processes.",
    featured: true,
  },
  {
    id: "custom-reporting-systems",
    title: "Custom reporting systems",
    meta: "HR · Payroll · Finance · Sales · Purchase",
    challenge:
      "Teams needed reports that standard outputs didn't provide — specific layouts, calculations, and groupings for operational and management use.",
    solution:
      "Designed and built a range of custom reports across HR, payroll, purchasing, sales, and finance using QWeb and programmatic report generation.",
    role:
      "Report design and development, working directly with the teams who would use them.",
    technologies: ["QWeb", "Python", "XML", "Odoo reporting"],
    impact:
      "Each team received the numbers in the form they actually needed, without manual assembly in spreadsheets.",
    featured: true,
  },
  {
    id: "server-migration-infrastructure-planning",
    title: "Server migration & infrastructure planning",
    meta: "Infrastructure",
    challenge:
      "A production ERP environment needed to move to new hosting without disrupting operations — covering application server, database, domains, backup, disaster recovery, and security.",
    solution:
      "Prepared the migration plan end to end: target architecture, cutover sequence, backup and rollback strategy, DNS and domain handling, and post-migration verification.",
    role: "Planned the migration and the supporting infrastructure design.",
    technologies: ["Ubuntu / Linux", "PostgreSQL", "Odoo", "DNS", "Backups"],
    impact: "The move had a defined, reversible plan rather than an improvised one.",
    featured: true,
  },
  {
    id: "backup-disaster-recovery-architecture",
    title: "Backup & disaster-recovery architecture",
    meta: "Infrastructure · resilience",
    challenge:
      "Backups existed in a single location, which meant a single point of failure for recovery.",
    solution:
      "Designed a multi-tier backup strategy with independent copies held by the client and on separate infrastructure, so recovery did not depend on any one environment.",
    role: "Backup and disaster-recovery design.",
    technologies: ["PostgreSQL", "Linux", "Scheduled backups", "Offsite storage"],
    impact: "Recovery options survived the loss of any single location.",
    featured: true,
  },
  {
    id: "cybersecurity-incident-coordination",
    title: "Cybersecurity incident coordination",
    meta: "Security · infrastructure",
    challenge:
      "Malware performing crypto-mining was discovered on a server, degrading performance and raising questions about exposure.",
    solution:
      "Contributed to the technical analysis and remediation from the systems side, and coordinated with security and infrastructure teams through containment and hardening.",
    role:
      "Technical contributor and coordination point between the ERP / systems side and security.",
    technologies: ["Linux", "Log analysis", "Server hardening", "Monitoring"],
    impact:
      "The affected server was cleaned and hardened, with clearer monitoring in place afterwards.",
    featured: true,
  },
];

export const alsoDelivered: string[] = [
  "Employee portal enhancements — self-service access to requests, services, and reports",
  "Microsoft Outlook / email integration for business processes",
  "Scanner & document-management integration with ERP",
  "Server performance and remote-development troubleshooting",
  "Technical & business documentation — requirements, implementation plans, solution documents, client proposals",
  "System-integration requirements between ERP and external services and devices",
  "AI-assisted business solutions — documentation, data analysis, reporting, and process automation",
  "Flutter and non-ERP software project work",
];
