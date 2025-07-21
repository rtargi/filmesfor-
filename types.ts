export interface TableData {
  caption: string;
  headers: string[];
  rows: (string | { content: string; highlight?: boolean })[][];
  source?: string;
  exportLabel?: string;
}

export interface PageData {
  pageTitle: string;
  sections: Section[];
  footer: FooterData;
}

export type Section = 
  | HeroSection 
  | DiagnosticoSection
  | ResumoImpactoSection
  | ArquiteturaExclusaoSection
  | VozesExcluidasSection
  | RoadmapSection
  | LinhaDoTempoSection
  | IncoerenciaLegalSection
  | ProvaDaOmissaoSection
  | ChamadoAcaoSection
  | ParadigmaSection
  | EstrategiaAcaoSection
  | AcoesEmAndamentoSection;

export interface HeroSection {
  id: 'hero';
  heading: string;
  subtitle: string;
  content: string;
  callToAction: {
    text: string;
    link: string;
  };
}

export interface DiagnosticoSection {
  id: 'diagnostico';
  heading: string;
  content: { type: 'paragraph'; text: string }[];
  keyFigures: { label: string; value: string; unit: string }[];
}

export interface ResumoImpactoSection {
  id: 'resumo-impacto';
  heading:string;
  subheading: string;
  intro: string;
  stats: { label: string; value: string; description: string }[];
  concentration: { title: string; text: string };
  arquitetura: {
    title: string;
    points: string[];
    conclusion: string;
  };
  outro: string;
}

export interface ArquiteturaExclusaoSection {
    id: 'arquitetura-exclusao';
    heading: string;
    content: (
        | { type: 'paragraph'; text: string }
        | { type: 'exclusionPillars'; items: { pillar: string; description: string[]; table?: TableData }[] }
    )[];
}

export interface VozesExcluidasSection {
  id: 'vozes-excluidas';
  heading:string;
  description: string;
  organizations: {
    name: string;
    fullName?: string;
    mission: string;
    production: string;
    status: string;
    summaryPoints?: { icon: string; text: string }[];
    quote?: string;
  }[];
  extensiveListIntro: string;
  extensiveList: string[];
  analysis: {
    title: string;
    intro: string;
    points: {
      icon: string;
      title: string;
      description: string;
    }[];
  };
}

export interface RoadmapSection {
  id: 'roadmap';
  heading: string;
  steps: {
    step: number;
    title: string;
    content: string[];
  }[];
}

export interface LinhaDoTempoSection {
  id: 'linha-do-tempo';
  heading: string;
  events: {
    date: string;
    title: string;
    description: string;
  }[];
}

export interface IncoerenciaLegalSection {
  id: 'incoerencia-legal';
  heading: string;
  content: (
    | { type: 'paragraph'; text: string }
    | { type: 'list'; items: { icon?: string; law: string; description: string }[] }
  )[];
}

export interface ProvaDaOmissaoSection {
  id: 'prova-da-omissao';
  heading: string;
  chapters: {
    title: string;
    quote?: {
      text: string;
      source: string;
    };
    description?: string;
    consequences?: {
      type: 'critical' | 'default';
      label: string;
      value?: string;
      detail?: string;
    }[];
    analysis?: string;
    conclusion?: string;
  }[];
}

export interface ChamadoAcaoSection {
  id: string;
  heading: string;
  content: (
    | { type: 'paragraph'; text: string }
    | { type: 'demand'; text: string; actions: string[] }
    | { type: 'callToActionGroup'; primary: { text: string; link: string }; secondary: { text: string; link: string } }
  )[];
}

export interface ParadigmaSection {
  id: string;
  heading: string;
  paradigms: {
    icon: string;
    title: string;
    points: string[];
  }[];
}

export interface EstrategiaAcaoSection {
  id: string;
  heading: string;
  intro: string;
  tables: TableData[];
}

export interface AcoesEmAndamentoSection {
  id: string;
  heading: string;
  intro: string;
  actions: {
    title: string;
    document: string;
    date: string;
    objective: string;
    mainPoints: {
      title: string;
      items: string[];
    }[];
  }[];
}


export interface FooterData {
  message: string;
  link: { text: string; url: string };
  copyright: string;
  closingStatement: string;
}