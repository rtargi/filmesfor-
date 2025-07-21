import React from 'react';
import type { Dossier } from '../types';
import DossierCard from './DossierCard';

interface DossiersProps {
  dossiers: Dossier[];
}

const Dossiers: React.FC<DossiersProps> = ({ dossiers }) => {
  return (
    <section id="dossiers" className="bg-background py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-5">
        <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-text-primary sm:text-4xl font-display">Entenda a Transição Necessária</h2>
            <p className="mt-4 text-lg leading-8 text-text-secondary">
                O paradigma industrial anacrônico e ineficiente, na realidade esconde o patrimonialismo colonial e a sabotagem ao soft power do Brasil, com os recursos escondidos no quarto de brinquedos e os narradores reais excluídos da brincadeira, defendendo o território, comunidades e a biodiversidade muitas vezes só com seus próprios corpos.
            </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {dossiers.map((dossier) => (
            <DossierCard key={dossier.title} dossier={dossier} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Dossiers;
