export type ProjectCategory =
  | "installations"
  | "commercial"
  | "theatre-design"
  | "conceptual-work";

export type ProjectLayout = "gallery" | "video" | "board";

export type Project = {
  slug: string;
  title: string;
  category: ProjectCategory;
  layout: ProjectLayout;
  summary?: string;
  images: string[];
  videos?: string[];
  thumbnail?: string;
  thumbnailPosition?: string;
  featured?: boolean;
};

export const categoryLabels: Record<ProjectCategory, string> = {
  installations: "Installations",
  commercial: "Commercial",
  "theatre-design": "Theatre Design",
  "conceptual-work": "Conceptual Work",
};

export const categoryOrder: ProjectCategory[] = [
  "installations",
  "commercial",
  "theatre-design",
  "conceptual-work",
];

function projectImages(slug: string, count: number): string[] {
  return Array.from({ length: count }, (_, index) =>
    `/images/projects/${slug}/${String(index + 1).padStart(2, "0")}.jpg`,
  );
}

export const projects: Project[] = [
  {
    slug: "reading-is-fundamental",
    title: "Reading Is Fundamental",
    category: "installations",
    layout: "gallery",
    summary:
      "A tactile installation exploring texture, colour, and the physicality of reading.",
    images: projectImages("reading-is-fundamental", 6),
    featured: true,
  },
  {
    slug: "the-unreliable-narrator",
    title: "The Unreliable Narrator",
    category: "installations",
    layout: "video",
    summary:
      "An immersive installation environment built from found objects, light, and atmosphere.",
    images: Array.from({ length: 12 }, (_, index) =>
      `/images/projects/the-unreliable-narrator/${String(index + 2).padStart(2, "0")}.jpg`,
    ),
    videos: ["https://youtu.be/b6WiqTJZ58M"],
    thumbnail: "/images/projects/the-unreliable-narrator/07.jpg",
    thumbnailPosition: "center 40%",
    featured: true,
  },
  {
    slug: "pixel-flower",
    title: "Pixel Flower",
    category: "installations",
    layout: "gallery",
    summary:
      "A modular wooden installation assembled into pixelated floral forms.",
    images: projectImages("pixel-flower", 5),
    thumbnail: "/images/projects/pixel-flower/menu.jpg",
    thumbnailPosition: "center center",
    featured: true,
  },
  {
    slug: "digifest",
    title: "digiFest",
    category: "installations",
    layout: "gallery",
    summary:
      "Primary-colour modular blocks arranged as playful sculptural vignettes.",
    images: projectImages("digifest", 6),
    thumbnail: "/images/projects/digifest/menu.jpg",
    thumbnailPosition: "center center",
    featured: true,
  },
  {
    slug: "urban-outfitters",
    title: "Urban Outfitters",
    category: "commercial",
    layout: "gallery",
    summary: "Retail and window display work for Urban Outfitters.",
    images: Array.from({ length: 96 }, (_, index) =>
      `/images/projects/urban-outfitters/gallery/${String(index + 1).padStart(2, "0")}.jpg`,
    ),
    thumbnail: "/images/projects/urban-outfitters/gallery/menu.jpg",
    thumbnailPosition: "center 45%",
  },
  {
    slug: "simons",
    title: "Simons",
    category: "commercial",
    layout: "gallery",
    summary: "Large-scale styling and installation work for Simons.",
    images: Array.from({ length: 33 }, (_, index) =>
      `/images/projects/simons/gallery/${String(index + 1).padStart(2, "0")}.jpg`,
    ),
    thumbnail: "/images/projects/simons/gallery/menu.jpg",
    thumbnailPosition: "center center",
  },
  {
    slug: "bunz",
    title: "Bunz",
    category: "commercial",
    layout: "video",
    summary: "Commercial video and campaign work for Bunz.",
    images: [],
    videos: [
      "https://www.youtube.com/watch?v=2C5pirk-AHQ",
      "https://www.youtube.com/watch?v=sfbFRJnb65M",
      "https://www.youtube.com/watch?v=uWPcpm18yco",
    ],
    thumbnail: "/images/projects/bunz/thumbnail.jpg",
  },
  {
    slug: "immersive-theatre",
    title: "immersive theatre",
    category: "theatre-design",
    layout: "gallery",
    summary: "Immersive theatre environments and stage design.",
    images: projectImages("immersive-theatre", 8),
  },
  {
    slug: "model-making",
    title: "model making",
    category: "theatre-design",
    layout: "gallery",
    summary: "Physical scale models for theatre and spatial design.",
    images: projectImages("model-making", 10),
  },
  {
    slug: "sketches",
    title: "sketches",
    category: "theatre-design",
    layout: "board",
    summary: "Process sketches, drawings, and design development.",
    images: projectImages("sketches", 8),
  },
  {
    slug: "style-application-video",
    title: "style application video",
    category: "conceptual-work",
    layout: "video",
    summary: "Motion design and style application, edited in After Effects.",
    images: [],
    videos: ["https://www.youtube.com/watch?v=ivQeuXwJoUA"],
    thumbnail: "/images/projects/style-application-video/poster.jpg",
  },
  {
    slug: "wearable-concept",
    title: "wearable concept",
    category: "conceptual-work",
    layout: "board",
    summary: "Concept boards exploring wearable and spatial ideas.",
    images: projectImages("wearable-concept", 8),
  },
  {
    slug: "get-lost",
    title: "get lost",
    category: "conceptual-work",
    layout: "board",
    summary:
      "Presentation deck for an interactive urban environment — a citywide geolocation scavenger hunt.",
    images: projectImages("get-lost", 23),
    thumbnail: "/images/projects/get-lost/menu.jpg",
  },
  {
    slug: "hijack",
    title: "hijack",
    category: "conceptual-work",
    layout: "board",
    summary:
      "Presentation deck for an immersive interactive bar experience.",
    images: projectImages("hijack", 24),
    thumbnail: "/images/projects/hijack/menu.jpg",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getProjectsByCategory(category: ProjectCategory): Project[] {
  return projects.filter((project) => project.category === category);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured);
}
