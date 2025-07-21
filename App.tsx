import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Dossiers from './components/Dossiers';
import Actions from './components/Actions';
import Footer from './components/Footer';
import type { Dossier } from './types';

const App: React.FC = () => {
  const dossiersData: Dossier[] = [
    {
      title: 'A Negligência Climática',
      description: 'A omissão da ANCINE e do FSA frente à crise climática, gerando um passivo ambiental estimado em R$ 100 milhões.',
      url: 'https://dossier-347942777336.us-west1.run.app',
    },
    {
      title: 'O Quarto de Brinquedos',
      description: 'O fracasso industrial do FSA, que com R$ 5 bi em 5 anos não gera bilheteria, não dialoga com o público e ignora o interesse público.',
      url: 'https://quarto-347942777336.us-west1.run.app',
    },
    {
      title: 'A Sabotagem ao Soft Power',
      description: 'Como a indiferença do setor bloqueia a potência do Brasil de liderar a narrativa global sobre justiça climática.',
      url: 'https://soft-347942777336.us-west1.run.app',
    },
    {
      title: 'O Chamado à Sociobiodiversidade Audiovisual',
      description: 'Um novo paradigma que irrigue a sociobiodiversidade do audiovisual, dando voz aos narradores reais do Brasil.',
      url: 'https://sociobio-347942777336.us-west1.run.app',
    },
  ];

  return (
    <div className="font-sans text-text-primary bg-background">
      <Header />
      <main>
        <Hero />
        <Dossiers dossiers={dossiersData} />
        <Actions />
      </main>
      <Footer />
    </div>
  );
};

export default App;