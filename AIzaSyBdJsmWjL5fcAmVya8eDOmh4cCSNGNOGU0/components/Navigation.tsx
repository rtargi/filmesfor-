import React, { useState, useEffect } from 'react';
import { useScrollSpy } from '../hooks/useScrollSpy';

const SECTIONS = [
  { id: 'timeline', title: 'Revelação' },
  { id: 'diagnostico', title: 'Diagnóstico' },
  { id: 'mapa-vivo', title: 'Mapa Vivo' },
  { id: 'action_taken', title: 'Ação' },
  { id: 'urgent_call', title: 'Chamado' },
];

const Navigation: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const activeSection = useScrollSpy(SECTIONS.map(s => s.id));

    useEffect(() => {
        const handleScroll = () => {
            // Show nav after scrolling past the hero section (e.g., 90% of viewport height)
            setIsScrolled(window.scrollY > window.innerHeight * 0.9);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navClass = isScrolled 
        ? "fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-md shadow-lg transition-all duration-300 ease-in-out transform translate-y-0"
        : "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out transform -translate-y-full";

    return (
        <header className={navClass}>
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="flex items-center justify-between h-16">
                    <a href="#" className="text-xl font-bold text-amber-300 tracking-wider">FilmsForFuture.info</a>
                    
                    {/* Desktop Nav */}
                    <nav className="hidden md:flex space-x-6">
                        {SECTIONS.map(section => (
                            <a 
                                key={section.id}
                                href={`#${section.id}`} 
                                onClick={() => setIsMenuOpen(false)}
                                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                                    activeSection === section.id
                                    ? 'bg-amber-400 text-gray-900'
                                    : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                                }`}
                            >
                                {section.title}
                            </a>
                        ))}
                    </nav>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-300 hover:text-white focus:outline-none">
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                {isMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-gray-900/95">
                    <nav className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {SECTIONS.map(section => (
                             <a 
                                key={section.id}
                                href={`#${section.id}`} 
                                onClick={() => setIsMenuOpen(false)}
                                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                                    activeSection === section.id
                                    ? 'bg-amber-400 text-gray-900'
                                    : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                                }`}
                            >
                                {section.title}
                            </a>
                        ))}
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Navigation;
