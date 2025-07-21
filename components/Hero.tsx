
import React from 'react';
import { HeroSection } from '../types';

interface HeroProps {
  data?: HeroSection;
}

const Hero: React.FC<HeroProps> = ({ data }) => {
  if (!data) return null;

  return (
    <header id={data.id} className="min-h-screen flex flex-col items-center justify-center text-center py-20 px-4 relative overflow-hidden bg-slate-900">
       <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-800/50 to-slate-900 z-0"></div>
      <div className="max-w-4xl relative z-10">
        <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-black text-slate-50 drop-shadow-lg">
          {data.heading}
        </h1>
        <p className="mt-6 text-xl sm:text-2xl text-slate-300 max-w-3xl mx-auto">
          {data.subtitle}
        </p>
        <p className="mt-8 max-w-3xl mx-auto text-lg text-slate-400 leading-relaxed">
          {data.content}
        </p>
        <div className="mt-12">
          <a
            href={data.callToAction.link}
            className="inline-block bg-gradient-to-br from-rose-500 to-rose-600 hover:from-rose-600 hover:to-rose-700 text-white font-bold uppercase tracking-wider py-4 px-10 rounded-lg shadow-lg shadow-rose-500/30 transition-all duration-300 transform hover:scale-105"
          >
            {data.callToAction.text}
          </a>
        </div>
      </div>
    </header>
  );
};

export default Hero;