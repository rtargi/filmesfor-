
import React from 'react';
import { HeaderData } from '../types';

interface HeaderProps {
    data: HeaderData;
}

const Header: React.FC<HeaderProps> = ({ data }) => {
    const { logo, title, subtitle, description } = data.content;

    return (
        <header 
            className="relative flex items-center justify-center min-h-screen bg-cover bg-center text-white text-center px-4"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1610323336440-9b433e1a6603?q=80&w=1974&auto=format&fit=crop')" }}
        >
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-black/80 to-black/20"></div>
            <div className="relative z-10 max-w-4xl mx-auto">
                <div className="absolute -top-32 md:-top-48 left-1/2 -translate-x-1/2 text-2xl font-bold tracking-widest text-amber-300/80">
                  {logo}
                </div>
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight mb-4 text-amber-300 drop-shadow-lg">
                    {title}
                </h1>
                <p className="text-xl md:text-2xl font-light text-gray-200 mb-8 drop-shadow-md">
                    {subtitle}
                </p>
                <div className="max-w-3xl mx-auto bg-gray-900 bg-opacity-75 p-6 rounded-xl border border-gray-600/50 shadow-2xl">
                    <p className="text-lg md:text-xl font-medium text-gray-300">
                        {description}
                    </p>
                </div>
            </div>
        </header>
    );
};

export default Header;
