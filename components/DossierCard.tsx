import React from 'react';
import type { Dossier } from '../types';

interface DossierCardProps {
  dossier: Dossier;
}

const DossierCard: React.FC<DossierCardProps> = ({ dossier }) => {
  return (
    <a
      href={dossier.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group bg-surface p-8 rounded-xl flex flex-col no-underline text-text-primary transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary-green/10 border border-transparent hover:border-primary-green/20"
    >
      <h3 className="font-display text-2xl font-bold text-text-primary mb-4">{dossier.title}</h3>
      <p className="flex-grow text-text-secondary">{dossier.description}</p>
      <span className="font-display font-bold text-primary-yellow mt-6 self-start flex items-center gap-2">
        Saiba Mais 
        <span className="transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
      </span>
    </a>
  );
};

export default DossierCard;