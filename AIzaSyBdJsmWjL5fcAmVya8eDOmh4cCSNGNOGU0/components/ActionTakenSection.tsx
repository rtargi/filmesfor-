
import React from 'react';
import { ActionTakenSectionData } from '../types';
import { ArrowRightIcon } from './icons';

interface ActionTakenSectionProps {
  data: ActionTakenSectionData;
}

const ActionTakenSection: React.FC<ActionTakenSectionProps> = ({ data }) => {
  return (
    <section id={data.id} className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 max-w-4xl">
        <header className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-amber-300">{data.title}</h2>
          <p className="text-lg text-gray-300 mt-4">{data.description}</p>
        </header>

        <div className="space-y-8">
          {data.actions.map((action, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg border-l-4 border-amber-400">
              <div className="flex items-baseline">
                <span className="text-3xl font-bold text-amber-400 mr-4">{action.step}</span>
                <h3 className="text-2xl font-semibold text-white">{action.title}</h3>
              </div>
              <p className="mt-2 ml-10 text-gray-300">{action.details}</p>
              {action.sub_points && (
                <ul className="mt-4 ml-12 space-y-2">
                  {action.sub_points.map((sub, i) => (
                    <li key={i} className="flex items-start">
                      <ArrowRightIcon className="w-5 h-5 text-amber-400 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-400">{sub}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ActionTakenSection;
