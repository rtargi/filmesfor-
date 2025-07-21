
import React from 'react';
import './OrganizacoesList.css';

interface OrganizacoesListProps {
  organizations: string[];
}

const OrganizacoesList: React.FC<OrganizacoesListProps> = ({ organizations }) => {
  const extendedOrgs = [...organizations, ...organizations];

  return (
    <div className="w-full overflow-hidden relative h-auto py-4 bg-slate-800 rounded-lg border border-slate-700 [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
      <div className="flex animate-marquee-h whitespace-nowrap">
        {extendedOrgs.map((org, index) => (
          <span key={index} className="text-slate-300 font-semibold text-lg mx-8">
            {org}
          </span>
        ))}
      </div>
       <style>
        {`
          @keyframes marquee-h {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
          .animate-marquee-h {
            animation: marquee-h 60s linear infinite;
          }
        `}
      </style>
    </div>
  );
};

export default OrganizacoesList;
