export const LANGS = ["pt", "en"] as const;

export type Lang = (typeof LANGS)[number];

export interface SkillGroup {
  title: string;
  description: string;
}

export interface Content {
  headerLabel: string;
  tagline: string;
  intro: string;
  status: string;
  skills: SkillGroup[];
  footerLocation: string;
  contactLabel: string;
  documentTitle: string;
}

const CONTENT: Record<Lang, Content> = {
  pt: {
    headerLabel: "Portfólio",
    tagline: "Especialista Senior Front-End",
    intro:
      "Eu crio e construo interfaces limpas, rápidas e acessíveis — transformando ideias de produto em experiências polidas que escalam.",
    status: "Disponível para trabalhos",
    skills: [
      {
        title: "Fundamentos",
        description: "HTML, CSS, JavaScript, TypeScript",
      },
      {
        title: "Frameworks",
        description: "React, Next.js, Vue e ferramentas modernas",
      },
      {
        title: "Ofício",
        description: "UI responsiva, performance, acessibilidade",
      },
      {
        title: "Fluxo de trabalho",
        description: "Git, testes, CI/CD, design systems",
      },
    ],
    footerLocation: "Baseado em qualquer lugar · Trabalhando globalmente",
    contactLabel: "Entre em contato",
    documentTitle: "Daniel Simão — Especialista Senior Front-End",
  },
  en: {
    headerLabel: "Portfolio",
    tagline: "Senior Front-End Specialist",
    intro:
      "I design and build clean, fast and accessible interfaces — turning product ideas into polished experiences that scale.",
    status: "Available for work",
    skills: [
      {
        title: "Core",
        description: "HTML, CSS, JavaScript, TypeScript",
      },
      {
        title: "Frameworks",
        description: "React, Next.js, Vue, and modern tooling",
      },
      {
        title: "Craft",
        description: "Responsive UI, performance, accessibility",
      },
      {
        title: "Workflow",
        description: "Git, testing, CI/CD, design systems",
      },
    ],
    footerLocation: "Based anywhere · Working worldwide",
    contactLabel: "Get in touch",
    documentTitle: "Daniel Simão — Senior Front-End Specialist",
  },
};

export function contentFor(lang: Lang): Content {
  return CONTENT[lang];
}

export function isLang(value: unknown): value is Lang {
  return LANGS.includes(value as Lang);
}
