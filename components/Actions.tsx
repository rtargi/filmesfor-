import React from 'react';

const Actions: React.FC = () => {
  return (
    <section className="bg-surface text-center py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-5">
         <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight text-text-primary sm:text-4xl font-display">Faça parte da mudança</h2>
            <p className="mt-4 text-lg leading-8 text-text-secondary">
                Sua colaboração é fundamental para construir um audiovisual brasileiro mais relevante, sustentável e potente.
            </p>
        </div>
        <div className="flex justify-center gap-6 flex-wrap mt-10">
          <a
            href="#"
            className="inline-block rounded-full px-8 py-3 text-base font-semibold leading-7 text-primary-green shadow-sm ring-2 ring-primary-green hover:bg-primary-green hover:text-dark-text transition-all duration-300 ease-in-out hover:-translate-y-1"
          >
            Release e Materiais
          </a>
          <a
            href="#"
            className="inline-block rounded-full bg-primary-yellow px-8 py-3 text-base font-semibold leading-7 text-dark-text shadow-sm hover:bg-yellow-300 transition-all duration-300 ease-in-out hover:-translate-y-1"
          >
            Faça Parte e Colabore
          </a>
        </div>
      </div>
    </section>
  );
};

export default Actions;