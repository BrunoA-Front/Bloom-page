import React, { useState } from 'react';

const questions = [
  {
    question: '¿Tienes una idea clara de tu producto o servicio?',
    options: ['Sí, muy clara y detallada', 'Tengo una idea general', 'Está en desarrollo', 'No, solo tengo una vaga idea'],
  },
  {
    question: '¿Has definido a tu público objetivo?',
    options: ['Sí, a fondo', 'Tengo una idea superficial', 'No, no sé por dónde empezar', 'No estoy seguro'],
  },
  {
    question: '¿Cuentas con un presupuesto asignado?',
    options: ['Sí, y es flexible', 'Sí, pero es ajustado', 'No, estoy buscando financiación', 'Prefiero no decirlo'],
  },
  {
    question: '¿Cuál es tu plazo de lanzamiento estimado?',
    options: ['Menos de 3 meses', '3 a 6 meses', 'Más de 6 meses', 'No tengo una fecha límite'],
  },
  {
    question: '¿Tienes un equipo o co-fundadores?',
    options: ['Sí, un equipo completo', 'Sí, uno o dos co-fundadores', 'Estoy solo en esto', 'Estoy en proceso de formación'],
  },
];

const ReadinessTestSection: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResult, setShowResult] = useState(false);

  const handleNext = () => {
    if (selectedOption === null) return;
    const newAnswers = [...answers, selectedOption];
    setAnswers(newAnswers);
    setSelectedOption(null);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };
  
  const getResult = () => {
    const score = answers.reduce((total, answer) => total + (3 - answer), 0); // Simple scoring
    if (score > 10) {
      return {
        title: '¡Estás listo para empezar!',
        description: 'Tienes una base sólida para comenzar a construir tu proyecto. Contáctanos para dar el siguiente paso.',
      };
    } else if (score > 5) {
      return {
        title: 'Casi listo',
        description: 'Tienes una buena idea, pero hay algunas áreas que podemos pulir juntos. Una sesión de consultoría podría ser muy útil.',
      };
    } else {
      return {
        title: 'Fase de ideación',
        description: 'Estás en una etapa temprana, ¡y es el momento perfecto para definir una estrategia sólida! Podemos ayudarte a dar forma a tu idea.',
      };
    }
  };

  const resetTest = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setSelectedOption(null);
    setShowResult(false);
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4">
          Test de <span className="text-purple-400">Preparación</span>
        </h2>
        <p className="text-gray-400 mb-12">Descubre si tu proyecto está listo para el desarrollo</p>

        <div 
          className="max-w-2xl mx-auto p-8 rounded-lg border border-gray-800"
          style={{
            background: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(10px)',
          }}
        >
          {showResult ? (
            <div>
              <h3 className="text-3xl font-bold mb-4 text-purple-400">{getResult().title}</h3>
              <p className="text-lg mb-8">{getResult().description}</p>
              <button
                onClick={resetTest}
                className="bg-gradient-to-r from-purple-600 to-blue-500 text-white font-bold py-3 px-8 rounded-lg hover:scale-105 transition-transform"
              >
                Hacer el test de nuevo
              </button>
            </div>
          ) : (
            <div>
              <div className="flex justify-between items-center mb-4">
                <p className="font-semibold">Pregunta {currentQuestion + 1} de {questions.length}</p>
                <p className="text-sm text-purple-400">{Math.round(progress)}%</p>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2 mb-6">
                <div 
                  className="bg-gradient-to-r from-blue-500 to-pink-500 h-2 rounded-full" 
                  style={{ width: `${progress}%` }}
                ></div>
              </div>

              <h3 className="text-xl font-bold mb-6 text-left">{questions[currentQuestion].question}</h3>
              <div className="grid grid-cols-1 gap-4 text-left">
                {questions[currentQuestion].options.map((option, index) => (
                  <label
                    key={index}
                    className={`flex items-center p-4 rounded-lg border cursor-pointer transition-all duration-300 ${selectedOption === index ? 'border-purple-500 bg-purple-900/30' : 'border-gray-700 hover:border-gray-500'}`}
                  >
                    <input
                      type="radio"
                      name="option"
                      className="hidden"
                      checked={selectedOption === index}
                      onChange={() => setSelectedOption(index)}
                    />
                    <span className={`w-5 h-5 inline-block mr-4 border-2 rounded-full transition-all duration-300 ${selectedOption === index ? 'bg-purple-500 border-purple-500' : 'border-gray-500'}`}></span>
                    {option}
                  </label>
                ))}
              </div>
              <div className="mt-8 text-right">
                <button
                  onClick={handleNext}
                  disabled={selectedOption === null}
                  className="bg-gradient-to-r from-purple-600 to-blue-500 text-white font-bold py-3 px-8 rounded-lg hover:scale-105 transition-transform disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Siguiente
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ReadinessTestSection;