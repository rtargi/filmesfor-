
import React from 'react';
import { dossierData } from './data';
import { SectionData } from './types';
import { Header } from './components/Header';
import { KeyStatCard } from './components/KeyStatCard';
import { Timeline } from './components/Timeline';
import { OmissionTable } from './components/OmissionTable';
import { WarningTriangleIcon } from './components/Icons';
import { PetitionModal } from './components/PetitionModal';

interface SectionWrapperProps {
    id: string;
    children: React.ReactNode;
    className?: string;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ id, children, className = '' }) => (
    <section id={id} className={`py-16 md:py-24 ${className}`}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            {children}
        </div>
    </section>
);

const SectionTitle: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => (
    <h2 className={`text-3xl md:text-4xl font-extrabold text-white text-center mb-12 tracking-tighter ${className}`}>
        {children}
    </h2>
);

const App: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = React.useState(false);

    React.useEffect(() => {
        document.title = dossierData.pageTitle;
    }, []);

    const handleOpenModal = (e: React.MouseEvent) => {
        e.preventDefault();
        setIsModalOpen(true);
    };

    const renderSection = (section: SectionData) => {
        switch (section.id) {
            case 'resumo':
                return (
                    <>
                        <SectionTitle>{section.title}</SectionTitle>
                        <p className="text-lg text-gray-300 mb-12 whitespace-pre-line text-center max-w-4xl mx-auto">{section.content}</p>
                        {section.keyStats && (
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                                {section.keyStats.map(stat => <KeyStatCard key={stat.label} label={stat.label} value={stat.value} />)}
                            </div>
                        )}
                    </>
                );

            case 'linha-do-tempo':
                return (
                    <>
                        <SectionTitle>{section.title}</SectionTitle>
                        {section.events && <Timeline events={section.events} />}
                    </>
                );

            case 'prova-omissao':
                return (
                    <div className="max-w-4xl mx-auto">
                         <header className="text-center border-t-2 border-gray-700 pt-12">
                            <h2 className="font-black text-3xl md:text-5xl uppercase text-gray-100">{section.title.split(':')[0]}</h2>
                             <h3 className="mt-2 text-2xl md:text-4xl font-bold gradient-text">{section.title.split(':')[1]}</h3>
                        </header>

                        {section.chapters?.map((chapter, idx) => (
                            <div key={idx} className="mt-16">
                                <h4 className="font-black text-2xl md:text-3xl text-center mb-8 text-white">
                                    {chapter.title}
                                </h4>
                                <p className="text-lg text-center text-gray-400 max-w-3xl mx-auto mb-10">{chapter.description}</p>
                                
                                {chapter.quote && (
                                    <div className="my-12 p-8 rounded-lg bg-[#0D111C]">
                                        <div className="p-6 rounded-md bg-[#1E293B] max-w-4xl mx-auto">
                                            <blockquote className="border-l-4 border-yellow-500 pl-6">
                                                <p className="text-xl text-white">"{chapter.quote.text}"</p>
                                            </blockquote>
                                            <p className="mt-4 text-right font-mono text-sm">
                                                <span className="text-yellow-400">{chapter.quote.source.split('(')[0].trim()}</span>
                                                <span className="text-gray-400"> ({chapter.quote.source.split('(')[1]}</span>
                                            </p>
                                        </div>
                                    </div>
                                )}

                                {chapter.keyNumbers && (
                                    <div className="my-12 text-center bg-red-900/20 border border-red-500/30 p-8 rounded-lg max-w-3xl mx-auto">
                                        {chapter.keyNumbers.map(kn => (
                                                <div key={kn.label}>
                                                    <p className="text-lg font-semibold text-red-300">{kn.label}</p>
                                                    <p className="font-black text-7xl md:text-9xl text-red-400 my-4">R$ {kn.value}</p>
                                                </div>
                                        ))}
                                    </div>
                                )}

                                {chapter.omissionTable && <OmissionTable data={chapter.omissionTable} />}

                                {chapter.legalPoints && (
                                     <div className="grid md:grid-cols-3 gap-8 my-16">
                                        {chapter.legalPoints.map(point => (
                                            <div key={point.title} className="bg-gray-800 p-6 rounded-lg border-t-4 border-green-500">
                                                <p className="text-5xl text-center mb-4">{point.icon}</p>
                                                <h5 className="font-bold text-xl text-center text-green-300">{point.title}</h5>
                                                <p className="text-gray-400 mt-2 text-sm">{point.description}</p>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {chapter.analysis && (
                                    <div className="my-16 bg-black p-8 rounded-lg shadow-2xl border border-gray-700 max-w-4xl mx-auto">
                                       <div dangerouslySetInnerHTML={{ __html: chapter.analysis }} />
                                    </div>
                                )}
                                
                            </div>
                        ))}
                    </div>
                );
            
            case 'fundamentacao-juridica':
                return (
                    <div className="max-w-4xl mx-auto">
                        <header className="text-center border-t-2 border-gray-700 pt-12">
                            <h2 className="font-black text-3xl md:text-5xl uppercase text-gray-100">{section.title.split(':')[0]}</h2>
                            <h3 className="mt-2 text-2xl md:text-4xl font-bold gradient-text">{section.title.split(':')[1]}</h3>
                        </header>
                        {section.introduction && <p className="mt-8 text-lg text-center text-gray-400 max-w-3xl mx-auto">{section.introduction}</p>}
                        {section.legalPoints && (
                            <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8 my-16">
                                {section.legalPoints.map(point => (
                                    <div key={point.title} className="bg-gray-800 p-8 rounded-lg border-t-4 border-red-500 text-left h-full flex flex-col shadow-lg">
                                        <p className="text-5xl mb-4">{point.icon}</p>
                                        <h5 className="font-bold text-xl text-red-300">{point.title}</h5>
                                        <p className="text-gray-400 mt-3 text-base flex-grow">{point.description}</p>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                );

            case 'conclusao':
                return (
                    <div className="text-center">
                        <hr className="max-w-xl mx-auto border-gray-700 mb-12 md:mb-16"/>
                        {section.mainTitle && (
                            <h2 className="font-black text-4xl md:text-6xl uppercase tracking-wider leading-tight"
                                dangerouslySetInnerHTML={{ __html: `${section.mainTitle.part1}<span class="gradient-text">${section.mainTitle.part2}</span>${section.mainTitle.part3}<span class="gradient-text">${section.mainTitle.part4}</span>` }}
                            />
                        )}
                        {section.conclusionDescription && (
                             <p className="mt-8 max-w-3xl mx-auto text-lg md:text-xl text-gray-300" 
                                dangerouslySetInnerHTML={{ __html: section.conclusionDescription }} />
                        )}
                        {section.whatWeveDone && (
                            <div className="bg-gray-800 border border-gray-700 rounded-lg p-8 my-12 max-w-3xl w-full text-left mx-auto">
                                <h3 className="font-black text-2xl text-center mb-6 text-yellow-400 uppercase">{section.whatWeveDone.title}</h3>
                                <p className="text-gray-400 mb-6 text-center">{section.whatWeveDone.description}</p>
                                <ul className="space-y-4">
                                    {section.whatWeveDone.items.map(item => (
                                        <li key={item.title} className="flex items-start">
                                            <span className="text-yellow-400 mr-3 text-xl">{item.icon}</span>
                                            <div>
                                                <h4 className="font-bold text-white">{item.title}</h4>
                                                <p className="text-gray-400 text-sm">{item.description}</p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                        {section.callToActionTitle && (
                            <h3 className="text-2xl md:text-3xl font-black text-center uppercase mb-6 text-yellow-400">{section.callToActionTitle}</h3>
                        )}
                        {section.actionButtons && (
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-lg mx-auto">
                                {section.actionButtons.map((button, idx) => {
                                    const primaryClasses = "bg-yellow-500 text-gray-900 hover:bg-yellow-400";
                                    const secondaryClasses = "bg-gray-700 text-white hover:bg-gray-600";
                                    const classes = button.variant === 'primary' ? primaryClasses : secondaryClasses;
                                    const isModalButton = button.id === 'open-petition-modal-btn';

                                    const props: React.AnchorHTMLAttributes<HTMLAnchorElement> & { key: number } = {
                                        key: idx,
                                        href: button.url,
                                        className: `w-full inline-block px-8 py-4 font-bold rounded-lg text-lg uppercase transition-all transform hover:scale-105 shadow-lg ${classes}`,
                                        onClick: isModalButton ? handleOpenModal : undefined,
                                        target: isModalButton ? undefined : '_self',
                                        rel: isModalButton ? undefined : 'noopener noreferrer',
                                    };

                                    return <a {...props}>{button.text}</a>;
                                })}
                            </div>
                        )}
                    </div>
                );

            default:
                return null;
        }
    };

    return (
        <div className="bg-gray-900 text-gray-200 antialiased">
            <Header data={dossierData.header} />
            <main>
                {dossierData.sections.map((section, index) => (
                    <SectionWrapper key={section.id} id={section.id} className={index % 2 === 0 ? 'bg-gray-900' : 'bg-black bg-opacity-20'}>
                        {renderSection(section)}
                    </SectionWrapper>
                ))}
            </main>
            <footer className="mt-16 text-center py-8 bg-gray-900">
                 <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-gray-300">
                    <p className="text-lg">{dossierData.footer.text}</p>
                    <p className="mt-4 text-sm text-gray-500">{dossierData.footer.copyright}</p>
                 </div>
            </footer>
            <PetitionModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
    );
};

export default App;