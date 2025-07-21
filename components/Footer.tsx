
import React from 'react';
import { FooterData } from '../types';

interface FooterProps {
  data: FooterData;
}

const Footer: React.FC<FooterProps> = ({ data }) => {
  return (
    <footer className="bg-slate-900/50 py-16 text-center text-slate-400 border-t border-slate-800">
      <div className="container mx-auto px-4">
        <p className="max-w-3xl mx-auto text-lg text-slate-300">{data.message}</p>
        <a 
          href={data.link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="my-4 inline-block bg-gradient-to-r from-rose-400 to-rose-500 text-transparent bg-clip-text font-bold text-xl transition-all duration-300 hover:saturate-150"
        >
          {data.link.text}
        </a>
        <p className="text-sm mb-8">{data.copyright}</p>

        <p className="max-w-4xl mx-auto font-serif text-2xl font-bold text-slate-200 italic">{data.closingStatement}</p>
      </div>
    </footer>
  );
};

export default Footer;