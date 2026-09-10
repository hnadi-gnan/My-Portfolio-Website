/**
 * Global site configuration: identity, contact, navigation.
 * Values marked PLACEHOLDER are awaiting confirmation from Hanadi.
 */

export type SocialLink = {
  label: string;
  href: string;
};

export const site = {
  name: {
    full: "Hanadi Mohammed Qanan",
    short: "Hanadi Qanan",
  },
  role: "ERP & Business Systems Specialist · Technical Consultant",
  // Shown in About / Contact. Set `showLocation` to false to hide it everywhere.
  location: "PLACEHOLDER — city, country",
  showLocation: false,
  availability: "Open to remote roles and independent consulting engagements.",

  email: "hnadi.gnan@gmail.com",
  whatsapp: {
    display: "+218 91 488 1129",
    href: "https://wa.me/218914881129",
  },

  // Replace /hanadi-qanan-cv.pdf in /public with the real CV file (keep the name).
  cvPath: "/hanadi-qanan-cv.pdf",

  // Production URL — update once the domain is chosen. Used for SEO / Open Graph.
  url: "https://hanadiqanan.com",

  /**
   * Extra links (LinkedIn, GitHub, …). Add an entry and it appears automatically
   * in the header, contact section, and footer. Left empty for now by request.
   */
  socials: [] as SocialLink[],

  nav: [
    { label: "About", href: "#about" },
    { label: "What I solve", href: "#what-i-solve" },
    { label: "Expertise", href: "#expertise" },
    { label: "Work", href: "#work" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ],
};

export type Site = typeof site;
