
import React from 'react';
import { DiagnosisSectionData } from '../types';
import { XCircleIcon, CheckCircleIcon } from './icons';

interface DiagnosisSectionProps {
  data: DiagnosisSectionData;
}

const DiagnosisSection: React.FC<DiagnosisSectionProps> = ({ data }) => {
  const { content } = data;

  return (
    <section id={data.id} className="py-20 bg-gray-800">
      <div className="container mx-auto px-4 max-w-5xl">
        <header className="text-center mb-16">
          <h2 className="text-4xl font-bold text-center text-amber-300">{data.title}</h2>
          <p className="text-xl text-gray-300 mt-2">{data.subtitle}</p>
        </header>

        <div className="space-y-12">
            {/* FSA Definition */}
            <div className="bg-gray-900/50 p-8 rounded-lg border border-gray-700">
                <h3 className="text-2xl font-bold text-white mb-4">{content.fsa_definition.title}</h3>
                <p className="text-gray-300 mb-4">{content.fsa_definition.description}</p>
                <p className="italic text-amber-300">{content.fsa_definition.question}</p>
            </div>

            {/* Architecture */}
            <div className="bg-gray-900/50 p-8 rounded-lg border border-gray-700">
                <h3 className="text-2xl font-bold text-white mb-4">{content.architecture.title}</h3>
                <p className="text-gray-300 mb-6">{content.architecture.description}</p>
                <ul className="space-y-3 list-inside">
                    {content.architecture.elements.map((item: string, index: number) => (
                        <li key={index} className="flex items-start">
                            <XCircleIcon className="w-6 h-6 text-blue-400 mr-3 flex-shrink-0 mt-1"/>
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
                <p className="mt-6 font-bold text-lg text-center bg-gray-800 p-4 rounded-md">{content.architecture.conclusion}</p>
            </div>
            
            {/* Data of Exclusion */}
            <div className="bg-gray-900/50 p-8 rounded-lg border border-gray-700">
                <h3 className="text-2xl font-bold text-white mb-6">{content.data_of_exclusion.title}</h3>
                <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="bg-gray-800 p-4 rounded">
                        <h4 className="font-bold text-lg text-amber-300 mb-2">{content.data_of_exclusion.geography.title}</h4>
                        <ul className="space-y-2 text-gray-400">
                            {content.data_of_exclusion.geography.items.map((item: string, i: number) => <li key={i}>- {item}</li>)}
                        </ul>
                    </div>
                     <div className="bg-gray-800 p-4 rounded">
                        <h4 className="font-bold text-lg text-amber-300 mb-2">{content.data_of_exclusion.sociobiodiversity.title}</h4>
                        <ul className="space-y-2 text-gray-400">
                            {content.data_of_exclusion.sociobiodiversity.items.map((item: string, i: number) => <li key={i}>- {item}</li>)}
                        </ul>
                    </div>
                     <div className="bg-gray-800 p-4 rounded">
                        <h4 className="font-bold text-lg text-amber-300 mb-2">{content.data_of_exclusion.practical_result.title}</h4>
                        <ul className="space-y-2 text-gray-400">
                            {content.data_of_exclusion.practical_result.items.map((item: string, i: number) => <li key={i}>- {item}</li>)}
                        </ul>
                    </div>
                </div>
            </div>

            {/* Final Diagnosis */}
            <div className="bg-blue-900/40 p-8 rounded-lg border border-blue-700">
                <h3 className="text-2xl font-bold text-white mb-4">{content.final_diagnosis.title}</h3>
                <ul className="space-y-3 mb-6">
                    {content.final_diagnosis.points.map((item: string, index: number) => (
                        <li key={index} className="flex items-center text-lg">
                            <XCircleIcon className="w-6 h-6 text-blue-400 mr-3 flex-shrink-0"/>
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
                <p className="font-bold text-lg text-center text-blue-200 bg-gray-800/50 p-4 rounded-md">{content.final_diagnosis.conclusion}</p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default DiagnosisSection;
