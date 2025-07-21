export interface HeaderData {
  title: {
    part1: string;
    part2: string;
    part3: string;
  };
  subtitle: string;
  callToAction: {
    text: string;
    link: string;
  };
}

export interface KeyStat {
  label: string;
  value: string;
}

export interface TimelineEvent {
  monthYear: string;
  title: string;
  description: string;
}

export interface LegalPoint {
  icon: string;
  title: string;
  description: string;
}

export interface OmissionTableRow {
  pergunta: string;
  resposta: string;
  implicacao: string;
}

export interface LawViolation {
  law: string;
  violation: string;
}

export interface Chapter {
  title: string;
  description: string;
  quote?: {
    text: string;
    source: string;
  };
  keyNumbers?: Array<{ label: string; value: string }>;
  omissionTable?: OmissionTableRow[];
  lawsViolated?: LawViolation[];
  legalPoints?: LegalPoint[];
  analysis?: string;
  conclusion?: string;
}

export interface ActionButton {
  id?: string;
  text: string;
  url: string;
  variant: 'primary' | 'secondary';
}

export interface WhatWeveDoneItem {
  icon: string;
  title: string;
  description: string;
}

export interface SectionData {
  id: string;
  title: string;
  content?: string;
  keyStats?: KeyStat[];
  events?: TimelineEvent[];
  introduction?: string;
  legalPoints?: LegalPoint[];
  consequence?: string;
  warningCall?: string;
  chapters?: Chapter[];
  
  // Fields for the new conclusion section
  mainTitle?: { part1: string; part2: string; part3: string; part4: string };
  conclusionDescription?: string;
  whatWeveDone?: {
    title: string;
    description: string;
    items: WhatWeveDoneItem[];
  };
  callToActionTitle?: string;
  actionButtons?: ActionButton[];
}

export interface FooterData {
    text: string;
    copyright: string;
}

export interface DossierData {
  pageTitle: string;
  header: HeaderData;
  sections: SectionData[];
  footer: FooterData;
}