
import React from 'react';
import { pageData } from './data';
import { PageData } from './types';
import Hero from './components/Hero';
import Diagnostico from './components/Diagnostico';
import ResumoImpacto from './components/ResumoImpacto';
import ArquiteturaExclusao from './components/ArquiteturaExclusao';
import VozesExcluidas from './components/VozesExcluidas';
import Roadmap from './components/Roadmap';
import Footer from './components/Footer';
import ProvaDaOmissao from './components/ProvaDaOmissao';

const App: React.FC = () => {
  const data: PageData = pageData;

  const getSectionData = <T,>(id: string): T | undefined => {
    return data.sections.find(section => section.id === id) as T | undefined;
  }

  return (
    <div className="w-full bg-slate-900">
      <main>
        <Hero data={getSectionData( 'hero')} />
        <Diagnostico data={getSectionData('diagnostico')} />
        <ResumoImpacto data={getSectionData('resumo-impacto')} />
        <ArquiteturaExclusao data={getSectionData('arquitetura-exclusao')} />
        <ProvaDaOmissao data={getSectionData('prova-da-omissao')} />
        <VozesExcluidas data={getSectionData('vozes-excluidas')} />
        <Roadmap data={getSectionData('roadmap')} />
      </main>
      <Footer data={data.footer} />
    </div>
  );
};

export default App;
