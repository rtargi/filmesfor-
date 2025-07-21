
import React from 'react';
import { ArticleSectionData, ArticleChapter } from '../types';
import { DocumentIcon } from './icons';

interface ArticleSectionProps {
  data: ArticleSectionData;
}

const Chapter1: React.FC<{ content: any }> = ({ content }) => (
  <div className="space-y-8">
    <p>{content.introduction}</p>
    <div className="border-l-4 border-amber-400 pl-4 italic bg-gray-800 p-4 rounded-r-lg">
      <p className="text-lg">"{content.proof_document.quote}"</p>
      <p className="text-right mt-2 text-sm text-gray-400">{content.proof_document.source} - {content.proof_document.reference}</p>
    </div>
    <div className="text-center bg-blue-900/30 border border-blue-800 p-6 rounded-lg">
      <p className="text-lg text-gray-300">{content.financial_statement.description}</p>
      <p className="text-5xl font-mono font-bold text-blue-300 mt-2">{content.financial_statement.amount}</p>
    </div>
    <div className="overflow-x-auto">
        <table className="min-w-full bg-gray-800 border border-gray-700">
            <thead className="bg-gray-700">
                <tr>
                    <th className="py-3 px-4 text-left text-amber-300 font-semibold tracking-wider uppercase text-sm">Pergunta</th>
                    <th className="py-3 px-4 text-left text-amber-300 font-semibold tracking-wider uppercase text-sm">Resposta da ANCINE</th>
                    <th className="py-3 px-4 text-left text-blue-400 font-semibold tracking-wider uppercase text-sm">Implicação</th>
                </tr>
            </thead>
            <tbody>
                {content.table.map((row: any, index: number) => (
                    <tr key={index} className="border-t border-gray-700 hover:bg-gray-700/50">
                        <td className="py-4 px-4 font-semibold">{row.question}</td>
                        <td className="py-4 px-4 text-gray-400 italic">"{row.answer}"</td>
                        <td className="py-4 px-4 font-bold text-blue-400">{row.implication}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  </div>
);

const Chapter2: React.FC<{ content: any }> = ({ content }) => (
    <div className="space-y-6">
      <p>{content.introduction}</p>
      <div className="grid md:grid-cols-3 gap-6">
        {content.legal_framework.map((law: any, index: number) => (
          <div key={index} className="bg-gray-800 p-6 rounded-lg border border-gray-700">
            <p className="text-3xl mb-2">{law.country_icon}</p>
            <h4 className="font-bold text-lg text-amber-300">{law.law}</h4>
            <p className="mt-2 text-gray-400">{law.description}</p>
          </div>
        ))}
      </div>
    </div>
);
  
const Chapter3: React.FC<{ content: any }> = ({ content }) => (
    <div className="space-y-6">
      <p>{content.introduction}</p>
      <div className="bg-gray-800 p-8 rounded-lg flex items-center gap-6 border border-gray-700">
        <div className="text-6xl text-amber-400">{content.data_gap.icon}</div>
        <div>
          <h4 className="font-extrabold text-2xl text-amber-400">{content.data_gap.title}</h4>
          <p className="mt-2 text-gray-300">{content.data_gap.description}</p>
        </div>
      </div>
    </div>
);

const chapterComponents: { [key: string]: React.FC<{ content: any }> } = {
    capitulo1: Chapter1,
    capitulo2: Chapter2,
    capitulo3: Chapter3,
};

const ArticleSection: React.FC<ArticleSectionProps> = ({ data }) => {
  return (
    <article className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 max-w-5xl">
        <header className="text-center mb-16">
          <h2 className="text-4xl font-bold text-amber-300">{data.header.title}</h2>
          <p className="text-2xl text-gray-400">{data.header.subtitle}</p>
        </header>
        <div className="space-y-16">
          {data.sections.map((chapter: ArticleChapter) => {
            const ChapterComponent = chapterComponents[chapter.id];
            return (
                <section key={chapter.id} className="p-8 bg-gray-800/50 rounded-lg border border-gray-700">
                    <h3 className="text-2xl font-bold mb-6 text-white flex items-center gap-3">
                        <DocumentIcon className="w-6 h-6 text-amber-300"/>
                        {chapter.title}
                    </h3>
                    {ChapterComponent && <ChapterComponent content={chapter.content} />}
                </section>
            );
          })}
        </div>
      </div>
    </article>
  );
};

export default ArticleSection;