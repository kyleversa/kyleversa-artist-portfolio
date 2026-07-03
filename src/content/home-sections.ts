export type HomeImage = {
  src: string;
  alt: string;
  href?: string;
};

export type HomeSection = {
  id: string;
  intro?: string[];
  images: HomeImage[];
  outro?: string[];
  layout: "triple" | "wide" | "single" | "double";
};

export const homeSections: HomeSection[] = [
  {
    id: "stories-and-narratives",
    layout: "triple",
    intro: [
      "I find it hard to choose a word or title to describe me short of 'designer' or 'maker'. But I do know that I live to make stories and narratives come to life in my work. Whether it be, on the stage or in a store, on film or online, outside or just simply 'out there', it is my strength to bring beauty and life to things that may be so commonly be overlooked.",
      "My studies were in Design for the Stage and it is the underlying techniques with which I execute all the work that I do.",
    ],
    images: [
      {
        src: "/images/home/sections/01-a.jpg",
        alt: "The Unreliable Narrator installation exterior",
        href: "/projects/the-unreliable-narrator",
      },
      {
        src: "/images/home/sections/01-b.jpg",
        alt: "The Unreliable Narrator installation interior",
        href: "/projects/the-unreliable-narrator",
      },
      {
        src: "/images/projects/the-unreliable-narrator/02.jpg",
        alt: "The Unreliable Narrator installation detail",
        href: "/projects/the-unreliable-narrator",
      },
    ],
  },
  {
    id: "large-scale-installations",
    layout: "wide",
    intro: [
      "I'm known for making larger scale installations and am commissioned by employers to construct pieces with great impact.",
    ],
    images: [
      {
        src: "/images/home/sections/02-a.jpg",
        alt: "Reading Is Fundamental installation detail",
        href: "/projects/reading-is-fundamental",
      },
    ],
    outro: [
      "I like to have a sense of humour in my work so I am drawn to projects that aren't always meant to be taken so seriously.",
    ],
  },
  {
    id: "pixel-flower",
    layout: "single",
    images: [
      {
        src: "/images/home/sections/03-a.jpg",
        alt: "Pixel Flower installation",
        href: "/projects/pixel-flower",
      },
    ],
  },
  {
    id: "risk-and-heart",
    layout: "double",
    intro: [
      "And I am not afraid to take risks in design and love freeform exploration while always researching and planning before executing my work.",
    ],
    images: [
      {
        src: "/images/projects/urban-outfitters/gallery/52.jpg",
        alt: "Urban Outfitters summer display with geometric panels and mannequins",
        href: "/projects/urban-outfitters",
      },
      {
        src: "/images/projects/urban-outfitters/gallery/53.jpg",
        alt: "Urban Outfitters summer installation with neon-painted picnic table and hanging plants",
        href: "/projects/urban-outfitters",
      },
    ],
    outro: [
      "My constructions and designs come with a lot of heart and life...full of colour and story...humour and impact...and represent me as an artist and individual.",
    ],
  },
];
