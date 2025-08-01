
import React, { useState } from 'react';
import { STRATEGIC_AXES_DETAILS } from '@/constants';

// IMPORTANTE: This key is for Web3Forms.
const WEB3FORMS_ACCESS_KEY = 'fe971b6d-41b0-4599-81d0-19b83b8b06a2';

export const RSVPForm: React.FC = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [willJoin, setWillJoin] = useState<boolean | null>(null);
    const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'submitting' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');
    const [isWhatsapp, setIsWhatsapp] = useState<boolean | null>(null);

    const handleConfirmationChange = (join: boolean) => {
        setWillJoin(join);
        if (!join) {
            setIsWhatsapp(null);
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        setSubmissionStatus('submitting');
        setErrorMessage('');
        
        const formData = new FormData(e.target as HTMLFormElement);
        formData.append("access_key", WEB3FORMS_ACCESS_KEY);
        
        const guestName = formData.get('name') || 'Novo Membro';
        formData.append('subject', `Nova adesão à Coalizão: ${guestName}`);
        formData.append('from_name', 'Coalizão CLIMAX');
        formData.append('cc', 'irlanacassini@gmail.com,eloa.souzaoliver@gmail.com');

        // Set 'adesao' field based on willJoin state
        formData.set('adesao', willJoin ? 'Sim' : 'Não');

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const result = await response.json();

            if (result.success) {
                setIsSubmitted(true);
            } else {
                setSubmissionStatus('error');
                setErrorMessage(result.message || 'Ocorreu um erro ao enviar sua resposta. Tente novamente mais tarde.');
                console.error("Form submission error:", result);
            }
        } catch (error) {
            setSubmissionStatus('error');
            setErrorMessage('Ocorreu um erro de rede. Verifique sua conexão e tente novamente.');
            console.error("Network error:", error);
        }
    };

    if (isSubmitted) {
        return (
            <div className="text-center bg-white p-8 md:p-12 rounded-lg">
                <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                    <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                </div>
                <h3 className="mt-5 text-2xl font-semibold text-stone-800">Obrigado por se juntar a nós!</h3>
                <p className="mt-2 text-stone-600">Sua adesão foi registrada. Entraremos em contato em breve com os próximos passos. A sua participação é fundamental para virarmos o jogo no Vale!</p>
            </div>
        );
    }
    
    const detailsSectionClasses = `pt-6 border-t border-stone-200 transition-all duration-700 ease-in-out overflow-hidden ${willJoin ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`;
    const whatsappSectionClasses = `transition-all duration-500 ease-in-out overflow-hidden ${isWhatsapp === false ? 'max-h-40 opacity-100 mt-4' : 'max-h-0 opacity-0'}`;


    return (
        <div className="bg-white p-8 md:p-12 rounded-lg">
            <div className="text-center mb-10">
                <h1 className="text-3xl font-bold text-stone-800">Confirmação de Adesão Estratégica</h1>
                <p className="mt-4 text-stone-600">O sucesso desta articulação depende de uma ampla base de apoio. Por favor, preencha o formulário para registrar sua adesão.</p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                <fieldset className="space-y-3">
                    <legend className="text-lg font-medium text-stone-700">Você confirma a adesão à coalizão?</legend>
                    <div className="flex items-center space-x-4">
                        <label className="flex items-center space-x-2 cursor-pointer">
                            <input type="radio" name="adesao" value="yes" required className="h-4 w-4 text-amber-600 border-stone-300 focus:ring-amber-500" onChange={() => handleConfirmationChange(true)} />
                            <span className="text-stone-700">Sim, conte conosco.</span>
                        </label>
                        <label className="flex items-center space-x-2 cursor-pointer">
                            <input type="radio" name="adesao" value="no" required className="h-4 w-4 text-amber-600 border-stone-300 focus:ring-amber-500" onChange={() => handleConfirmationChange(false)} />
                            <span className="text-stone-700">Não posso aderir no momento.</span>
                        </label>
                    </div>
                </fieldset>

                <div className={detailsSectionClasses}>
                    <div className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-stone-700">Seu Nome Completo</label>
                            <input type="text" id="name" name="name" required={willJoin || false} className="mt-1 block w-full px-3 py-2 bg-white border border-stone-300 rounded-md shadow-sm placeholder-stone-400 focus:outline-none focus:ring-amber-500 focus:border-amber-500 sm:text-sm" />
                        </div>
                         <div>
                            <label htmlFor="organization" className="block text-sm font-medium text-stone-700">Organização/Coletivo (Opcional)</label>
                            <input type="text" id="organization" name="organization" className="mt-1 block w-full px-3 py-2 bg-white border border-stone-300 rounded-md shadow-sm placeholder-stone-400 focus:outline-none focus:ring-amber-500 focus:border-amber-500 sm:text-sm" />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-stone-700">E-mail para Contato</label>
                            <input type="email" id="email" name="email" required={willJoin || false} className="mt-1 block w-full px-3 py-2 bg-white border border-stone-300 rounded-md shadow-sm placeholder-stone-400 focus:outline-none focus:ring-amber-500 focus:border-amber-500 sm:text-sm" />
                        </div>
                         <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-stone-700">Telefone</label>
                            <input type="tel" id="phone" name="phone" placeholder="(XX) XXXXX-XXXX" required={willJoin || false} className="mt-1 block w-full px-3 py-2 bg-white border border-stone-300 rounded-md shadow-sm placeholder-stone-400 focus:outline-none focus:ring-amber-500 focus:border-amber-500 sm:text-sm" />
                        </div>
                        <fieldset>
                            <legend className="text-sm font-medium text-stone-700">Este número é WhatsApp?</legend>
                            <div className="mt-2 flex items-center space-x-4">
                                <label className="flex items-center space-x-2 cursor-pointer">
                                    <input type="radio" name="is_whatsapp" value="yes" required={willJoin || false} className="h-4 w-4 text-amber-600 border-stone-300 focus:ring-amber-500" onChange={() => setIsWhatsapp(true)} />
                                    <span className="text-stone-700 text-sm">Sim</span>
                                </label>
                                <label className="flex items-center space-x-2 cursor-pointer">
                                    <input type="radio" name="is_whatsapp" value="no" required={willJoin || false} className="h-4 w-4 text-amber-600 border-stone-300 focus:ring-amber-500" onChange={() => setIsWhatsapp(false)} />
                                    <span className="text-stone-700 text-sm">Não</span>
                                </label>
                            </div>
                        </fieldset>
                        <div className={whatsappSectionClasses}>
                            <label htmlFor="whatsapp_number" className="block text-sm font-medium text-stone-700">Por favor, informe seu WhatsApp</label>
                            <input type="tel" id="whatsapp_number" name="whatsapp_number" placeholder="(XX) XXXXX-XXXX" required={isWhatsapp === false} className="mt-1 block w-full px-3 py-2 bg-white border border-stone-300 rounded-md shadow-sm placeholder-stone-400 focus:outline-none focus:ring-amber-500 focus:border-amber-500 sm:text-sm" />
                        </div>
                        <fieldset>
                            <legend className="block text-sm font-medium text-stone-700 mb-2">
                                Em qual(is) eixo(s) de colaboração você tem mais interesse?
                                <span className="block text-xs text-stone-500">Marque todas as opções que se aplicam.</span>
                            </legend>
                            <div className="space-y-2">
                                {STRATEGIC_AXES_DETAILS.map((axis) => (
                                    <label key={axis.title} className="flex items-start space-x-3 p-3 bg-stone-50 rounded-md border border-stone-200 cursor-pointer hover:bg-stone-100">
                                        <input
                                            type="checkbox"
                                            name="eixos_colaboracao"
                                            value={axis.title}
                                            className="h-5 w-5 mt-0.5 text-amber-600 border-stone-300 rounded focus:ring-amber-500 shrink-0"
                                        />
                                        <span className="text-stone-700">
                                            <strong className="font-bold block">{axis.title.split(' ')[0]} <span className="font-normal">{axis.title.substring(axis.title.indexOf(' '))}</span></strong>
                                            <span className="text-sm text-stone-600">{axis.description}</span>
                                        </span>
                                    </label>
                                ))}
                            </div>
                        </fieldset>
                        <div>
                            <label htmlFor="comments" className="block text-sm font-medium text-stone-700">Observações (opcional)</label>
                            <textarea id="comments" name="comments" rows={3} className="mt-1 block w-full px-3 py-2 bg-white border border-stone-300 rounded-md shadow-sm placeholder-stone-400 focus:outline-none focus:ring-amber-500 focus:border-amber-500 sm:text-sm"></textarea>
                        </div>
                    </div>
                </div>
                
                <div className="pt-5">
                    <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-amber-600 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 disabled:bg-stone-400 disabled:cursor-not-allowed" disabled={willJoin === null || submissionStatus === 'submitting'}>
                        {submissionStatus === 'submitting' ? 'Enviando...' : 'Enviar Adesão'}
                    </button>
                </div>
                {submissionStatus === 'error' && <p className="text-red-600 text-sm mt-4 text-center">{errorMessage}</p>}
            </form>
        </div>
    );
};
