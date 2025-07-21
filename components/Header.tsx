import React from 'react';

const Header: React.FC = () => {
  const navLinks = [
    { name: 'Início', href: '#home' },
    { name: 'Dossiês', href: '#dossiers' },
    { name: 'Articule com IA', href: '#ai-articule' },
    { name: 'Ações', href: '#actions' },
  ];

  return (
    <header className="bg-background/80 backdrop-blur-lg py-4 sticky top-0 z-50 border-b border-surface/50">
      <div className="max-w-7xl mx-auto px-5 flex justify-between items-center">
        <a href="#home" className="font-display font-bold text-xl md:text-2xl text-text-primary no-underline transition-colors hover:text-primary-yellow">
          filmsforfuture.app
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="font-sans text-sm font-semibold text-text-secondary hover:text-primary-green transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;