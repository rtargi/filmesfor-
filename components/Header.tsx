
import React from 'react';
import type { HeaderData } from '../types';

interface HeaderProps {
    data: HeaderData;
}

export const Header: React.FC<HeaderProps> = ({ data }) => {
    return (
        <header className="min-h-screen bg-cover bg-center flex items-center justify-center relative" style={{ backgroundImage: "url('https://images.unsplash.com/photo-159042212228-e03b7a60a7e1?q=80&w=2070&auto=format&fit=crop')" }}>
            <div className="absolute inset-0 bg-black/70"></div>
            <div className="relative text-center p-6 z-10">
                <h1 className="font-black text-5xl md:text-7xl lg:text-8xl leading-tight uppercase">
                    <span className="text-red-500">{data.title.part1}</span> {data.title.part2} <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">{data.title.part3}</span>
                </h1>
                <p className="mt-4 mb-8 text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto">
                    {data.subtitle}
                </p>
                <a 
                    href={data.callToAction.link} 
                    className="inline-block px-8 py-4 rounded-lg font-bold text-lg transition-transform duration-200 hover:scale-105 bg-yellow-400 text-gray-900 hover:bg-yellow-300 shadow-lg"
                >
                    {data.callToAction.text}
                </a>
            </div>
        </header>
    );
};
