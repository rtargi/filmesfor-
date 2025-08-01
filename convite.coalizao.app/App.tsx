
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import DossierCard from '@/components/DossierCard';
import Modal from '@/components/Modal';
import { RSVPForm } from '@/components/RSVPForm';
import { DOSSIER_ITEMS, STRATEGIC_AXES_DETAILS } from '@/constants';

const App: React.FC = () => {
    const [isFormModalOpen, setFormModalOpen] = useState(false);

    const LinkHighlight: React.FC<{href: string, children: React.ReactNode}> = ({ href, children }) => (
        <a href={href} target="_blank" rel="noopener noreferrer" className="text-amber-600 font-medium underline decoration-dotted underline-offset-4 hover:text-amber-700">
            {children}
        </a>
    );

    return (
        <>
            <Header onJoinClick={() => setFormModalOpen(true)} />

            <main className="container mx-auto px-6 py-12">
                
                {/* Section 1: O Chamado */}
                <section id="chamado" className="text-center pt-8 pb-8">
                    <h2 className="text-4xl md:text-5xl font-black text-stone-900 mb-4 tracking-tight">⚡️CONVITE À COALIZÃO PARA VIRAR O JOGO NO VALE⚡️</h2>
                    <div className="text-md text-stone-600 max-w-4xl mx-auto leading-relaxed space-y-4">
                        <p>
                            Convidamos você a se juntar a uma coalizão estratégica nascida para construir soluções climáticas para o Vale do Jequitinhonha. Nossa articulação foi forjada em um encontro imersivo de colaboração, com o objetivo definido de dar formato a um litígio climático de alto nível e impacto sistêmico.
                        </p>
                        <p>
                            Este movimento nasceu durante o 40º FESTIVALE - Festival da Cultura Popular do Vale do Jequitinhonha, uma resistência cultural exemplar que, ao completar 40 anos, segue ressignificando o Vale. Se você se identifica com esta luta, sua participação é fundamental para as soluções climáticas que o território exige. Entenda porquê:
                        </p>
                    </div>
                </section>

                {/* Section 2: A Estratégia */}
                <section id="estrategia" className="pt-0 pb-16">
                    <div className="max-w-4xl mx-auto">
                        
                        <h3 className="text-3xl font-bold mb-8 pl-4 border-l-4 border-amber-600">O TABULEIRO DO JOGO</h3>
                        <div className="space-y-6 text-stone-700 leading-relaxed mb-12">
                            <p>
                                O Vale do Jequitinhonha é uma encruzilhada definitiva: séculos de racismo ambiental e economia de exaustão encontram uma vulnerabilidade climática gravíssima, onde estão{' '}
                                <LinkHighlight href="https://climainfo.org.br/2024/02/28/cemaden-mostra-cidades-que-mais-sofreram-com-calor-extremo-em-2023/">
                                    18 das 20 cidades que mais aqueceram no país
                                </LinkHighlight>
                                . Sobre este cenário, impõe-se a corrida do neocolonialismo da transição energética, patrocinado com recursos da NDC brasileira, fazendo com que o Fundo Clima promova o agravamento da vulnerabilidade extrema, sem qualquer medida de resiliência ou adaptação.
                            </p>
                            <p>
                                Neste tabuleiro sofisticado, a <strong className="text-stone-800">Nota Técnica do Projeto LIQUIT</strong> emergiu como peça-chave, expondo as fragilidades do projeto de mineração. A{' '}
                                <LinkHighlight href="https://conflitosambientaismg.lcc.ufmg.br/noticias/nota-de-repudio-da-aba-mineradora-tenta-censurar-a-imprensa-e-impedir-a-divulgacao-de-resultados-de-pesquisa-em-19052025/">
                                    tentativa de censura da Sigma Lithium ao Observatório da Mineração
                                </LinkHighlight>
                                , seguida da reação de 25 sociedades científicas, complicou o ponto mais crítico: o desembolso de{' '}
                                <LinkHighlight href="https://agenciadenoticias.bndes.gov.br/industria/BNDES-aprova-R$-4867-milhoes-para-Sigma-Lithium-beneficiar-litio-de-forma-sustentavel/">
                                    R$ 486,7 milhões do Fundo Clima pelo BNDES
                                </LinkHighlight>
                                . Sem estes recursos, o castelo de cartas da mineradora, já abalado por disputas internas e crises financeiras, desaba.
                            </p>
                        </div>

                        <h3 className="text-3xl font-bold mb-8 pl-4 border-l-4 border-amber-600">NOSSA VIRADA NO JOGO</h3>
                        <div className="space-y-6 text-stone-700 leading-relaxed mb-12">
                            <p>
                                Foi neste cenário que o encontro CLÍMAX 2025 se tornou um ponto de virada, articulando as contribuições individuais que já existem em campo para dar corpo a uma coalizão robusta, focada no litígio de alto nível via <strong className="text-stone-800">Ação Direta de Inconstitucionalidade (ADI) no STF</strong>. Proposta em nosso encontro de 2024, idealizada por Marielle Ramires e Ricardo Targino, a ADI foi abraçada pela Deputada Federal Célia Xakriabá para derrubar os decretos que sustentam as lavras de lítio.
                            </p>
                             <p>
                                A Coalizão tem o papel estratégico de fortalecer a ADI e a produção de provas, como o filme{' '}
                                <LinkHighlight href="https://selffiction.storylab.cc/pt">
                                    AUTOFICÇÃO: Cinema como dispositivo de intervenção
                                </LinkHighlight>
                                , que registra a formação desta sofisticada aliança para o litígio histórico. O alvo principal é a desregulamentação ambiental e mineral do governo Bolsonaro, que afeta toda a mineração no Brasil.
                            </p>
                        </div>
                        
                        <h3 className="text-3xl font-bold mb-8 pl-4 border-l-4 border-amber-600">LITÍGIO CLIMÁTICO DE ALTO NÍVEL</h3>
                        <div className="space-y-6 text-stone-700 leading-relaxed">
                            <p>
                                Normas como os Decretos Federais nº 10.657/2021 e nº 10.965/2022 simplificam o licenciamento e reduzem a fiscalização, criando um ambiente que facilita a mineração com menos proteções socioambientais. Em todo o mundo, o litígio climático tem sido utilizado nas altas instâncias do Poder Judiciário para obter impacto imediato e conquistas sistêmicas. É essa a nossa aposta.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Section 3: A Coalizão */}
                <section id="coalizao" className="py-16 bg-stone-100 -mx-6 px-6">
                    <div className="container mx-auto">
                        <div className="max-w-4xl mx-auto">
                            <h3 className="text-3xl font-bold mb-4 pl-4 border-l-4 border-amber-600">COALIZÃO VIDA, VERDE, VERSO E VIOLA, VIVOS NO VALE</h3>
                            <div className="text-stone-600 mb-10 pl-4 space-y-4 leading-relaxed">
                                <p>A Coalizão Vida, Verde, Verso e Viola, Vivos no Vale é uma articulação multidisciplinar que emerge do próprio coração do Vale do Jequitinhonha, defendendo a riqueza cultural e socioambiental da região contra os impactos devastadores da mineração. Nosso nome ecoa o lema <strong className="text-stone-700">"Vale, Vida, Verde, Verso e Viola"</strong>, uma consigna do movimento cultural que celebra a capacidade de ressignificação do território pelos seus próprios habitantes e artistas.</p>
                                <p>Historicamente estigmatizado como "vale da miséria", o Jequitinhonha foi transformado em Vale da Vida pela força de sua cultura. Contudo, a mineração e o "Mercador de Minas Gerais", após séculos de exploração, agora tentam rebatizar a região como "Vale do Lítio". Nossa coalizão se levanta para lembrar que a mineração empobrece e destrói, enquanto a cultura enriquece e ressignifica. Viva a cultura popular do Vale!</p>
                                <p>Para representar a sociedade do Vale como <i>amicus curiae</i> e para que arranjos de futuro possam surgir organicamente na região, a coalizão se articula a partir dos seguintes eixos:</p>
                            </div>
                             <div className="space-y-6">
                                {STRATEGIC_AXES_DETAILS.map((axis) => (
                                    <div key={axis.title} className="bg-white p-6 rounded-lg shadow-sm border border-stone-200">
                                        <p className="leading-relaxed text-stone-700">
                                            <strong className="font-black uppercase block mb-2 text-amber-600">{axis.title}</strong> 
                                            {axis.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
                
                {/* Section 4: Dossiê Estratégico */}
                <section id="dossie" className="py-16">
                     <div className="max-w-4xl mx-auto">
                        <h3 className="text-3xl font-bold mb-8 pl-4 border-l-4 border-amber-600">Dossiê: Entenda a Nossa Luta</h3>
                        <p className="text-stone-600 mb-10 pl-4">Para aprofundar o entendimento sobre nossa estratégia, disponibilizamos os documentos centrais que a baseiam. A análise deste material é fundamental para todos que desejam se somar à coalizão.</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {DOSSIER_ITEMS.map((item) => (
                                <DossierCard key={item.title} {...item} />
                            ))}
                        </div>
                    </div>
                </section>

                {/* Section 5: Adhesion */}
                <section id="adesao" className="py-20 text-center">
                    <div className="max-w-2xl mx-auto">
                        <h3 className="text-3xl font-bold mb-4 text-stone-900">Confirmação de Adesão Estratégica</h3>
                        <p className="text-stone-600 mb-8">Sua adesão é vital. Por favor, acesse o formulário para se juntar à coalizão e fortalecer nossa luta. É rápido e fundamental para o sucesso do nosso movimento.</p>
                        <div className="mt-10">
                            <button onClick={() => setFormModalOpen(true)} className="w-full md:w-auto inline-block bg-amber-600 text-white font-bold py-4 px-8 rounded-lg hover:bg-amber-700 transition-shadow shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                                ➜ Junte-se à Coalizão (Formulário Seguro)
                            </button>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
            <Modal isOpen={isFormModalOpen} onClose={() => setFormModalOpen(false)}>
                <RSVPForm />
            </Modal>
        </>
    );
};

export default App;