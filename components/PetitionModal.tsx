import React from 'react';
import { GoogleGenAI } from '@google/genai';

interface PetitionModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const Loader: React.FC = () => (
    <div className="loader"></div>
);

const CopyFeedback: React.FC<{ message: string }> = ({ message }) => (
    <p className="text-sm text-green-400 h-4 mt-1" aria-live="polite">{message}</p>
);

export const PetitionModal: React.FC<PetitionModalProps> = ({ isOpen, onClose }) => {
    const [activeTab, setActiveTab] = React.useState<'email' | 'social'>('email');
    const [userName, setUserName] = React.useState('');
    const [emailContent, setEmailContent] = React.useState('');
    const [socialContent, setSocialContent] = React.useState('');
    const [isGeneratingEmail, setIsGeneratingEmail] = React.useState(false);
    const [isGeneratingSocial, setIsGeneratingSocial] = React.useState(false);
    const [emailCopyFeedback, setEmailCopyFeedback] = React.useState('');
    const [socialCopyFeedback, setSocialCopyFeedback] = React.useState('');
    const [socialPlatform, setSocialPlatform] = React.useState('');

    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    React.useEffect(() => {
        const handleEsc = (event: KeyboardEvent) => {
           if (event.key === 'Escape') {
              onClose();
           }
        };
        if (isOpen) {
            document.body.style.overflow = 'hidden';
            window.addEventListener('keydown', handleEsc);
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { 
            document.body.style.overflow = 'unset';
            window.removeEventListener('keydown', handleEsc);
        };
    }, [isOpen, onClose]);

    const handleGenerateEmail = async () => {
        setIsGeneratingEmail(true);
        setEmailContent('');
        const name = userName.trim() || "Um(a) cidadão(ã) preocupado(a)";
        const prompt = `Gere um e-mail formal e contundente em português do Brasil para o Comitê Gestor do Fundo Setorial do Audiovisual (CGFSA), assinado por "${name}". O e-mail deve expressar urgência sobre a negligência climática do FSA às vésperas da COP30, mencionar que o fundo movimenta bilhões mas ignora o Acordo de Paris e a PNMC, e exigir a criação de uma Resolução Emergencial para uma linha de fomento "Audiovisual & Clima – Gestão Social". Conclua com um apelo à responsabilidade histórica.`;

        try {
            const response = await ai.models.generateContent({
                model: 'gemini-2.5-flash',
                contents: prompt,
            });
            setEmailContent(response.text);
        } catch (error) {
            console.error("Error generating email:", error);
            setEmailContent("Erro ao gerar e-mail. Por favor, tente novamente.");
        } finally {
            setIsGeneratingEmail(false);
        }
    };

    const handleGenerateSocial = async (platform: 'Twitter' | 'Instagram') => {
        setIsGeneratingSocial(true);
        setSocialContent('');
        setSocialPlatform(platform);

        let prompt = `Gere um post para ${platform} em português do Brasil sobre a negligência climática do Fundo Setorial do Audiovisual (FSA). Dados: +R$2 bilhões movimentados, 0% de investimento climático, às vésperas da COP30 no Brasil. Tom: urgente, convocando à ação.`;
        if (platform === 'Twitter') {
            prompt += ` Máximo 280 caracteres. Hashtags: #FSAClimaJá, #COP30.`;
        } else if (platform === 'Instagram') {
            prompt += ` Legenda para imagem. Comece com impacto, use emojis e parágrafos curtos. Hashtags: #FSAClimaJá, #COP30, #AudiovisualPeloClima, #EmergenciaClimatica.`;
        }

        try {
            const response = await ai.models.generateContent({
                model: 'gemini-2.5-flash',
                contents: prompt,
            });
            setSocialContent(response.text);
        } catch (error) {
            console.error(`Error generating post for ${platform}:`, error);
            setSocialContent(`Erro ao gerar post para ${platform}. Por favor, tente novamente.`);
        } finally {
            setIsGeneratingSocial(false);
        }
    };

    const copyToClipboard = (text: string, setFeedback: (msg: string) => void) => {
        navigator.clipboard.writeText(text).then(() => {
            setFeedback('Copiado!');
            setTimeout(() => setFeedback(''), 2000);
        });
    };

    if (!isOpen) return null;

    return (
        <div 
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
            onClick={onClose}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
        >
            <div 
                className="bg-gray-800 rounded-lg shadow-xl w-full max-w-2xl p-6 relative animate-fade-in border border-gray-700"
                onClick={(e) => e.stopPropagation()}
            >
                <button onClick={onClose} className="absolute top-2 right-4 text-gray-400 hover:text-white text-3xl font-bold" aria-label="Fechar modal">&times;</button>
                <h3 id="modal-title" className="text-2xl font-bold text-yellow-400 mb-4 text-center">Apoie as Petições</h3>
                
                <div className="border-b border-gray-700 mb-4">
                    <nav className="flex -mb-px space-x-4" aria-label="Tabs">
                        <button 
                            role="tab"
                            aria-selected={activeTab === 'email'}
                            aria-controls="email-tab-panel"
                            className={`modal-tab whitespace-nowrap py-3 px-1 border-b-2 font-medium text-sm ${activeTab === 'email' ? 'active' : 'border-transparent text-gray-400 hover:border-gray-500'}`}
                            onClick={() => setActiveTab('email')}
                        >
                            1. Enviar E-mail
                        </button>
                        <button 
                            role="tab"
                            aria-selected={activeTab === 'social'}
                            aria-controls="social-tab-panel"
                            className={`modal-tab whitespace-nowrap py-3 px-1 border-b-2 font-medium text-sm ${activeTab === 'social' ? 'active' : 'border-transparent text-gray-400 hover:border-gray-500'}`}
                            onClick={() => setActiveTab('social')}
                        >
                            2. Divulgar nas Redes
                        </button>
                    </nav>
                </div>

                <div id="email-tab-panel" role="tabpanel" hidden={activeTab !== 'email'}>
                    <p className="text-gray-300 mb-4 text-sm">Use a IA para gerar uma minuta de e-mail para o Comitê Gestor do FSA. Preencha seu nome e pressione gerar.</p>
                    <div className="space-y-4">
                        <div>
                            <label htmlFor="userName" className="block text-xs font-medium text-gray-300">Seu Nome</label>
                            <input 
                                type="text" 
                                id="userName" 
                                value={userName}
                                onChange={(e) => setUserName(e.target.value)}
                                className="mt-1 block w-full bg-gray-900 border-gray-600 rounded-md shadow-sm focus:border-yellow-500 focus:ring-yellow-500 sm:text-sm text-white p-2" 
                                placeholder="Seu Nome Completo"
                            />
                        </div>
                        <button 
                            onClick={handleGenerateEmail}
                            disabled={isGeneratingEmail}
                            className="w-full bg-yellow-500 text-gray-900 font-bold py-2 px-4 rounded-lg hover:bg-yellow-400 flex items-center justify-center transition-all duration-300 h-10 disabled:opacity-50"
                        >
                            {isGeneratingEmail ? <Loader /> : 'Gerar E-mail ✨'}
                        </button>
                    </div>
                    {emailContent && (
                        <div className="mt-4">
                            <div className="flex justify-between items-center">
                                <h4 className="font-bold text-md text-gray-200">E-mail Gerado:</h4>
                                <button onClick={() => copyToClipboard(emailContent, setEmailCopyFeedback)} className="bg-gray-600 text-gray-200 text-xs font-bold py-1 px-3 rounded-lg hover:bg-gray-500">Copiar</button>
                            </div>
                            <textarea 
                                readOnly 
                                value={emailContent} 
                                className="mt-2 w-full h-48 p-2 border border-gray-600 rounded-md bg-gray-900 text-gray-300"
                                aria-label="E-mail gerado"
                            ></textarea>
                            <CopyFeedback message={emailCopyFeedback} />
                        </div>
                    )}
                </div>
                
                <div id="social-tab-panel" role="tabpanel" hidden={activeTab !== 'social'}>
                     <p className="text-gray-300 mb-4 text-sm">Escolha uma plataforma para gerar um post pronto para compartilhar e ajudar a pressionar por mudanças.</p>
                    <div className="flex justify-center space-x-4 mb-4">
                        <button disabled={isGeneratingSocial} onClick={() => handleGenerateSocial('Twitter')} className="bg-blue-400 text-white font-bold py-2 px-4 rounded-lg hover:bg-opacity-90 disabled:opacity-50">Twitter / X</button>
                        <button disabled={isGeneratingSocial} onClick={() => handleGenerateSocial('Instagram')} className="bg-pink-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-opacity-90 disabled:opacity-50">Instagram</button>
                    </div>
                    {isGeneratingSocial && (
                        <div className="text-center p-8 flex justify-center"><Loader /></div>
                    )}
                    {socialContent && !isGeneratingSocial && (
                        <div className="mt-4">
                            <div className="flex justify-between items-center">
                                <h4 className="font-bold text-md text-gray-200">Post para {socialPlatform}:</h4>
                                <button onClick={() => copyToClipboard(socialContent, setSocialCopyFeedback)} className="bg-gray-600 text-gray-200 text-xs font-bold py-1 px-3 rounded-lg hover:bg-gray-500">Copiar</button>
                            </div>
                            <textarea 
                                readOnly 
                                value={socialContent} 
                                className="mt-2 w-full h-48 p-2 border border-gray-600 rounded-md bg-gray-900 text-gray-300"
                                aria-label="Post de rede social gerado"
                            ></textarea>
                            <CopyFeedback message={socialCopyFeedback} />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
