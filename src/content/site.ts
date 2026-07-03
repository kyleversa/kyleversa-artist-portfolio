export const siteConfig = {
  name: "Kyle Versa",
  tagline: "Visual designer & installation artist",
  email: "kyleversa@gmail.com",
  linkedin: "https://www.linkedin.com/in/kyleversa/",
  description:
    "Portfolio of visual installation work, digital design, theatre design, and commercial creative projects by Kyle Versa.",
  about: [
    "I am a visual designer and installation artist based in Toronto. I am always striving to create visually rich work and constantly learn and evolve my respect for design.",
    "My beginnings in theatre and stage design ignited my passion and creativity in design and art, which led me to work successfully as an assistant to film, digital, and commercial art for several notable cinematographers. I feel very capable and accomplished from my work in interior design and art direction as well.",
    "What excites me most in my work now is exploring new forms of sensitive and interactive, energy-filled creations, more recently combining the built environment with digital design.",
    "With a recent education in user experience design thinking and work experience in spatial design and project coordination, I am excited to create and explore new ideas in spatial design and development in interactive media, applications systems, and immersive environments.",
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
