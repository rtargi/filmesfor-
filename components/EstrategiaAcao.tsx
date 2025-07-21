
import React from 'react';
import { EstrategiaAcaoSection } from '../types';
import SectionWrapper from './SectionWrapper';
import Table from './Table';

interface EstrategiaAcaoProps {
  data?: EstrategiaAcaoSection;
}

const EstrategiaAcao: React.FC<EstrategiaAcaoProps> = ({ data }) => {
  if (!data) return null;

  return (
    <SectionWrapper id={data.id} heading={data.heading} className="bg-slate-800">
      <div className="max-w-5xl mx-auto">
        <p className="text-lg text-center text-slate-300 italic mb-12">{data.intro}</p>
        <div className="space-y-12">
          {data.tables.map((table, index) => (
            <Table key={index} tableData={table} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default EstrategiaAcao;
