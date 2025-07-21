import React, { useState } from 'react';
import { GoogleGenAI } from '@google/genai';

// As per guidelines, this is provided by the execution environment.
const API_KEY = process.env.API_KEY;

const AISection: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const suggestions = [
    "Resuma os dossiês em 3 pontos.",
    "Gere 5 ideias para filmes sobre justiça climática na Amazônia.",
    "Como o audiovisual brasileiro pode liderar a narrativa sobre sustentabilidade?",
    "Crie um pitch para uma série sobre a sociobiodiversidade brasileira.",
  ];

  const handleGenerate = async () => {
    if (!prompt.trim()) {
      setError('Por favor, insira uma pergunta ou selecione uma sugestão.');
      return;
    }
    setError('');
    setLoading(true);
    setResponse('');

    try {
      if (!API_KEY) {
        throw new Error("API Key not found. Please ensure the API_KEY environment variable is set.");
      }
      const ai = new GoogleGenAI({ apiKey: API_KEY });

      const result = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
        config: {
          systemInstruction: 'Você é um assistente de IA para a "Films for Future", uma iniciativa para promover um audiovisual brasileiro mais sustentável e impactante. Os dossiês apontam problemas como negligência climática, falta de sucesso comercial e exclusão de narrativas diversas. Sua missão é ajudar usuários a articular ideias, resumir informações e pensar em soluções para um futuro mais sustentável no audiovisual brasileiro. Responda em português do Brasil.',
        },
      });
      
      setResponse(result.text);

    } catch (e) {
      console.error(e);
      let errorMessage = 'Ocorreu um erro ao gerar a resposta. Por favor, tente novamente mais tarde.';
      if (e instanceof Error && (e.message.includes('API key') || e.message.includes('API Key'))) {
        errorMessage = 'Houve um problema com a configuração da API. Por favor, entre em contato com o administrador do site.';
      }
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="ai-articule" className="py-24 sm:py-32 bg-surface">
      <div className="max-w-4xl mx-auto px-5">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-text-primary sm:text-4xl font-display">Articule o Futuro com IA</h2>
          <p className="mt-4 text-lg leading-8 text-text-secondary">
            Use a inteligência artificial da Gemini para gerar ideias, resumir os dossiês e articular soluções para um audiovisual brasileiro mais sustentável e relevante.
          </p>
        </div>

        <div className="bg-background p-6 sm:p-8 rounded-lg shadow-2xl shadow-black/20">
          <div className="mb-4">
            <label htmlFor="ai-prompt" className="block text-sm font-medium text-text-secondary mb-2">Sugestões de prompt:</label>
            <div className="flex flex-wrap gap-2">
              {suggestions.map((s, i) => (
                <button
                  key={i}
                  onClick={() => setPrompt(s)}
                  className="bg-surface hover:bg-primary-green/20 text-text-secondary text-xs sm:text-sm px-3 py-1.5 rounded-full transition-colors duration-200"
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-6">
            <textarea
              id="ai-prompt"
              rows={4}
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Digite sua pergunta ou refine uma sugestão..."
              aria-label="Caixa de texto para interagir com a IA"
              className="w-full bg-surface rounded-md p-4 text-text-primary placeholder-text-secondary focus:ring-2 focus:ring-primary-green focus:outline-none transition-shadow"
            />
          </div>

          <div className="mt-6 text-center">
            <button
              onClick={handleGenerate}
              disabled={loading || !prompt}
              className="inline-flex items-center justify-center rounded-full bg-primary-green px-12 py-3 text-base font-semibold leading-7 text-dark-text shadow-lg shadow-primary-green/20 hover:bg-green-400 transition-all duration-300 ease-in-out hover:-translate-y-1 disabled:bg-gray-600 disabled:shadow-none disabled:cursor-not-allowed disabled:transform-none"
            >
              {loading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <span>Gerando...</span>
                </>
              ) : 'Gerar Resposta'}
            </button>
          </div>

          {error && <p role="alert" className="mt-4 text-center text-red-400">{error}</p>}

          {response && (
            <div className="mt-8 pt-6 border-t border-surface/50">
              <h3 className="text-xl font-bold text-text-primary mb-4 font-display">Resposta da IA:</h3>
              <div className="bg-surface p-4 rounded-md text-text-secondary whitespace-pre-wrap leading-relaxed">
                {response}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AISection;
