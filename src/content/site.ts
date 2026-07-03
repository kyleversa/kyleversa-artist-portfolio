export const siteConfig = {
  name: "Kyle Versa",
  tagline: "Visual designer & installation artist",
  email: "kyleversa@gmail.com",
  linkedin: "https://www.linkedin.com/in/kyleversa/",
  description:
    "Portfolio of visual installation work, digital design, theatre design, and commercial creative projects by Kyle Versa.",
  about: [
    "I am a visual designer and installation artist based in Toronto. My work is shaped by theatre, stage design, visual merchandising, styling, installation, and digital media.",
    "My background in Design for the Stage taught me to think through space, scale, atmosphere, audience, and narrative. Since then, I have worked across retail display, commercial styling, installation, interiors, and creative production.",
    "I am especially interested in work that brings physical environments and digital ideas together, from spatial design and interactive media to immersive environments, applications, and experience-based systems.",
  ],
};

export type NavItem = {
  href: string;
  label: string;
};

export const navItems: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];
