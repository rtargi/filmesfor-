import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center text-center p-5 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1534447677768-be436a0976f2?q=80&w=2070&auto=format&fit=crop" 
          alt="Futuristic background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background"></div>
      </div>
      <div className="relative z-10 max-w-5xl">
        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-black text-text-primary leading-tight tracking-tight">
          A Transição Que Faremos <br /> no Audiovisual Brasileiro
        </h1>
        <p className="text-lg md:text-xl mt-8 max-w-4xl mx-auto text-text-secondary font-light">
          O setor estratégico que negligencia a crise climática e precisa sair da irrelevância do quarto de brinquedos para inspirar o mundo e reduzir a vulnerabilidade brasileira. Junte-se ao Filmes For Future para articular a transição estratégica do audiovisual, sair da irresponsabilidade e construir um futuro sustentável, transformar o Brasil em uma potência global como maior bioma cultural da Terra.
        </p>
      </div>
    </section>
  );
};

export default Hero;