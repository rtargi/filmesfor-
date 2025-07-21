import React from 'react';
import { VozesExcluidasSection } from '../types';
import SectionWrapper from './SectionWrapper';
import OrganizacoesList from './OrganizacoesList';

interface VozesExcluidasProps {
  data?: VozesExcluidasSection;
}

const getStatusColor = (status: string) => {
  const lowerStatus = status.toLowerCase();
  if (lowerStatus.includes('excluíd') || lowerStatus.includes('nunca contemplada') || lowerStatus.includes('jamais recebeu')) {
    return 'bg-rose-900/70 text-rose-300 border-rose-700/50';
  }
  if (lowerStatus.includes('sem apoio sistemático')) {
    return 'bg-amber-900/50 text-amber-300 border-amber-700/50';
  }
  return 'bg-slate-700 text-slate-300 border-slate-600';
};

const VozesExcluidas: React.FC<VozesExcluidasProps> = ({ data }) => {
  if (!data) return null;

  return (
    <SectionWrapper id={data.id} heading={data.heading}>
      <p className="text-xl text-center text-slate-300 max-w-4xl mx-auto mb-16 leading-relaxed">{data.description}</p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.organizations.map((org, index) => (
          <div key={index} className="bg-slate-900/40 backdrop-blur-sm border border-slate-700 rounded-xl p-6 flex flex-col transition-all duration-300 hover:border-rose-500/40 hover:-translate-y-1">
            <div className="mb-4">
              <h4 className="text-xl font-bold text-slate-100">{org.name}</h4>
              {org.fullName && <p className="text-sm text-slate-400">{org.fullName}</p>}
            </div>
            <div className="flex-grow space-y-4 text-slate-400">
                <p><strong className="text-rose-400 block mb-1 text-base font-semibold">Missão:</strong> <span className="text-slate-300">{org.mission}</span></p>
                <p><strong className="text-rose-400 block mb-1 text-base font-semibold">Produção:</strong> <span className="text-slate-300">{org.production}</span></p>
            </div>
            
            {org.summaryPoints && (
              <ul className="mt-4 space-y-2 text-sm text-slate-300">
                {org.summaryPoints.map((point, i) => (
                  <li key={i} className="flex items-start">
                    <span className="mr-2 pt-1">{point.icon}</span>
                    <span className="flex-1">{point.text}</span>
                  </li>
                ))}
              </ul>
            )}

            {org.quote && (
              <blockquote className="mt-4 border-l-4 border-rose-800 pl-4 italic text-slate-400">
                <p>"{org.quote}"</p>
              </blockquote>
            )}

            <div className="mt-4 pt-4 border-t border-slate-700/50">
                <span className={`inline-block px-2 py-0.5 text-xs font-semibold rounded-full border ${getStatusColor(org.status)}`}>{org.status}</span>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-20">
        <p className="text-center text-lg text-slate-300 mb-8 max-w-3xl mx-auto">{data.extensiveListIntro}</p>
        <OrganizacoesList organizations={data.extensiveList} />
      </div>

      <div className="mt-20 max-w-5xl mx-auto">
        <h3 className="font-serif text-3xl sm:text-4xl font-bold text-slate-100 mb-6 text-center">{data.analysis.title}</h3>
        <p className="text-lg text-slate-300 mb-12 text-center max-w-3xl mx-auto">{data.analysis.intro}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {data.analysis.points.map((point, index) => (
            <div key={index} className="bg-slate-900/40 backdrop-blur-sm border border-slate-700 p-6 rounded-xl shadow-lg flex flex-col text-center md:text-left md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6 transition-all duration-300 hover:border-rose-500/40 hover:-translate-y-1">
              <div
                className="flex-shrink-0 w-12 h-12 text-rose-400"
                dangerouslySetInnerHTML={{ __html: point.icon }}
              />
              <div>
                <h4 className="font-bold text-xl text-slate-100 mb-2">{point.title}</h4>
                <p className="text-slate-300 leading-relaxed">{point.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default VozesExcluidas;