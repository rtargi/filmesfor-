import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-background/80 backdrop-blur-lg py-4 sticky top-0 z-50 border-b border-surface/50">
      <div className="max-w-7xl mx-auto px-5 flex justify-center items-center">
        <a href="#home" className="font-display font-bold text-2xl text-text-primary no-underline transition-colors hover:text-primary-yellow">
          filmsforfuture.app
        </a>
      </div>
    </header>
  );
};

export default Header;