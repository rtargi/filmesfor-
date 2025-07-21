import React from 'react';
import { DATA } from './data';
import { Section, SectionElement } from './types';
import Header from './components/Header';
import TimelineSection from './components/TimelineSection';
import MainTitleSection from './components/MainTitleSection';
import ArticleSection from './components/ArticleSection';
import DiagnosisSection from './components/DiagnosisSection';
import LivingMapSection from './components/LivingMapSection';
import LegalIncoherenceSection from './components/LegalIncoherenceSection';
import ActionTakenSection from './components/ActionTakenSection';
import UrgentCallSection from './components/UrgentCallSection';
import Navigation from './components/Navigation';

const App: React.FC = () => {
  const renderSection = (section: Section, index: number) => {
    switch (section.element) {
      case SectionElement.Header:
        return <Header key={index} data={section} />;
      case SectionElement.Timeline:
        return <TimelineSection key={index} data={section} />;
      case SectionElement.MainTitle:
        return <MainTitleSection key={index} data={section} />;
      case SectionElement.Article:
        return <ArticleSection key={index} data={section} />;
      case SectionElement.Diagnosis:
        return <DiagnosisSection key={index} data={section} />;
      case SectionElement.LivingMap:
        return <LivingMapSection key={index} data={section} />;
      case SectionElement.LegalIncoherence:
        return <LegalIncoherenceSection key={index} data={section} />;
      case SectionElement.ActionTaken:
        return <ActionTakenSection key={index} data={section} />;
      case SectionElement.UrgentCall:
        return <UrgentCallSection key={index} data={section} />;
      case SectionElement.Section:
          // Handle generic sections or specific ones that use the "section" element type
          if ('timeline_items' in section) {
              return <TimelineSection key={index} data={section} />;
          }
          // Add other checks if needed for other section types
          return null;
      default:
        return null;
    }
  };

  return (
    <div className="bg-gray-900 min-h-screen text-gray-200">
      <Navigation />
      <main>
        {DATA.map((section, index) => renderSection(section as Section, index))}
      </main>
      <footer className="bg-gray-900 border-t border-gray-800">
          <div className="container mx-auto px-4 py-8 max-w-6xl">
            <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-6">
              <div>
                <p className="text-xl font-bold text-amber-300">FilmsForFuture.info</p>
                <p className="text-sm text-gray-400 mt-1">A Luta Pela Narrativa Climática no Brasil</p>
              </div>
              <div className="text-xs text-gray-500 space-y-1">
                <p>Este é um projeto de denúncia e chamado à ação.</p>
                <p>Todos os dados foram obtidos por meios legais e estão à disposição para verificação.</p>
              </div>
            </div>
          </div>
      </footer>
    </div>
  );
};

export default App;