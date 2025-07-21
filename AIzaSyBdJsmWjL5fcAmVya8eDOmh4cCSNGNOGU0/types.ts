
export enum SectionElement {
    Header = "header",
    Section = "section",
    Timeline = "timeline",
    MainTitle = "main_title",
    Article = "article",
    Diagnosis = "diagnostico",
    LivingMap = "mapa-vivo",
    LegalIncoherence = "legal_incoherence",
    ActionTaken = "action_taken",
    UrgentCall = "urgent_call",
}

export interface HeaderData {
    element: SectionElement.Header;
    content: {
        logo: string;
        title: string;
        subtitle: string;
        description: string;
    };
}

export interface TimelineItem {
    step: number;
    date: string;
    title: string;
    description: string;
}

export interface TimelineSectionData {
    element: SectionElement.Timeline | SectionElement.Section;
    id: string;
    title: string;
    timeline_items: TimelineItem[];
}

export interface MainTitleSectionData {
    element: SectionElement.MainTitle;
    title: string;
    description: string;
}

export interface ArticleChapter {
    id: string;
    title: string;
    content: any;
}

export interface ArticleSectionData {
    element: SectionElement.Article;
    header: {
        title: string;
        subtitle: string;
    };
    sections: ArticleChapter[];
}

export interface DiagnosisSectionData {
    element: SectionElement.Diagnosis;
    id: string;
    title: string;
    subtitle: string;
    content: any;
}

export interface Organization {
    name: string;
    focus: string;
    production: string;
    territories: string;
    fsa_status: string;
    quote: string;
}

export interface LivingMapSectionData {
    element: SectionElement.LivingMap;
    id: string;
    title: string;
    subtitle: string;
    organizations: Organization[];
    excluded_organizations_list: string[];
    exclusion_conclusion: string;
}

export interface LegalPoint {
    number: number;
    title: string;
    text: string;
}

export interface LegalIncoherenceSectionData {
    element: SectionElement.LegalIncoherence;
    id: string;
    title: string;
    description: string;
    legal_points: LegalPoint[];
}

export interface Action {
    step: string;
    title: string;
    details: string;
    sub_points?: string[];
}

export interface ActionTakenSectionData {
    element: SectionElement.ActionTaken;
    id: string;
    title: string;
    description: string;
    actions: Action[];
}

export interface UrgentCallSectionData {
    element: SectionElement.UrgentCall;
    id: string;
    title: string;
    description: string;
    call_to_action: {
        main_text: string;
        secondary_text: string;
        button_text: string;
    };
}

export type Section = HeaderData | TimelineSectionData | MainTitleSectionData | ArticleSectionData | DiagnosisSectionData | LivingMapSectionData | LegalIncoherenceSectionData | ActionTakenSectionData | UrgentCallSectionData;