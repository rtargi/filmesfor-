
import React from 'react';

interface SectionWrapperProps {
  id: string;
  heading: string;
  children: React.ReactNode;
  className?: string;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ id, heading, children, className = '' }) => {
  return (
    <section id={id} className={`py-20 sm:py-24 bg-slate-800 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-slate-100 tracking-tight">
            {heading}
          </h2>
          <div className="mt-4 h-1.5 w-24 bg-gradient-to-r from-rose-500 to-rose-600 mx-auto rounded"></div>
        </div>
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;