
import React from 'react';
import type { OmissionTableRow } from '../types';

interface OmissionTableProps {
    data: OmissionTableRow[];
}

export const OmissionTable: React.FC<OmissionTableProps> = ({ data }) => {
    return (
        <div className="my-8 overflow-x-auto">
            <div className="min-w-full inline-block align-middle">
                <div className="overflow-hidden border border-gray-700 rounded-lg">
                    <table className="min-w-full divide-y divide-gray-700">
                        <thead className="bg-gray-800">
                            <tr>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-yellow-400 uppercase tracking-wider">Pergunta à ANCINE</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-yellow-400 uppercase tracking-wider">Resposta Oficial</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-yellow-400 uppercase tracking-wider">Implicação</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-700 bg-gray-900">
                            {data.map((row, index) => (
                                <tr key={index} className="hover:bg-gray-800/50 transition-colors">
                                    <td className="px-6 py-4 whitespace-normal text-sm font-medium text-gray-200">{row.pergunta}</td>
                                    <td className="px-6 py-4 whitespace-normal text-sm text-gray-300 italic">"{row.resposta}"</td>
                                    <td className="px-6 py-4 whitespace-normal text-sm font-bold text-red-400">{row.implicacao}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};
