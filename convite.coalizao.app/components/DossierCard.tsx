import React from 'react';
import { DossierCardProps } from '@/types';

const DossierCard: React.FC<DossierCardProps> = ({ title, description, href }) => {
    return (
        <a 
            href={href} 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white p-6 rounded-lg hover:bg-stone-50 transition-colors block border border-stone-200 shadow-sm hover:shadow-md"
        >
            <h4 className="font-bold text-lg text-stone-800">{title}</h4>
            <p className="text-stone-600 text-sm mt-2">{description}</p>
        </a>
    );
};

export default DossierCard;