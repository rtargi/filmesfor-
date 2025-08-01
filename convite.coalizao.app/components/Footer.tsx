
import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-stone-100 border-t border-stone-200">
            <div className="container mx-auto px-6 py-8 text-center text-stone-500">
                <p className="font-bold text-stone-700">Organização:</p>
                <p className="text-sm">Mídia NINJA | Instituto YÉKIT | Fundação Marielle Ramires</p>
                <div className="mt-6 pt-6 border-t border-stone-200">
                    <p className="font-bold text-stone-700">Contato para Dúvidas:</p>
                    <p className="text-sm">Irlana Cassini: (31) 99923-1848</p>
                    <p className="text-sm">Eloah Souza: (19) 99848-8075</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;