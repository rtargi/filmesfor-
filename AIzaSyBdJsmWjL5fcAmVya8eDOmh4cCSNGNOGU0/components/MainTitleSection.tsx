
import React from 'react';
import { MainTitleSectionData } from '../types';

interface MainTitleSectionProps {
    data: MainTitleSectionData;
}

const MainTitleSection: React.FC<MainTitleSectionProps> = ({ data }) => {
    return (
        <section className="bg-gray-900 py-20 px-4">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-5xl font-bold text-blue-400 tracking-wide">
                    {data.title}
                </h2>
                <p className="mt-6 text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
                    {data.description}
                </p>
            </div>
        </section>
    );
};

export default MainTitleSection;
