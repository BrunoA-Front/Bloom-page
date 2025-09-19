import React, { useState } from 'react';
import { useTranslation, Trans } from 'react-i18next';

const ReadinessTestSection: React.FC = () => {
  const { t } = useTranslation();

  const questions = [
    {
      question: t('readiness.q1'),
      options: [t('readiness.q1_o1'), t('readiness.q1_o2'), t('readiness.q1_o3'), t('readiness.q1_o4')],
    },
    {
      question: t('readiness.q2'),
      options: [t('readiness.q2_o1'), t('readiness.q2_o2'), t('readiness.q2_o3'), t('readiness.q2_o4')],
    },
    {
      question: t('readiness.q3'),
      options: [t('readiness.q3_o1'), t('readiness.q3_o2'), t('readiness.q3_o3'), t('readiness.q3_o4')],
    },
    {
      question: t('readiness.q4'),
      options: [t('readiness.q4_o1'), t('readiness.q4_o2'), t('readiness.q4_o3'), t('readiness.q4_o4')],
    },
    {
      question: t('readiness.q5'),
      options: [t('readiness.q5_o1'), t('readiness.q5_o2'), t('readiness.q5_o3'), t('readiness.q5_o4')],
    },
  ];

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
        title: t('readiness.result_ready_title'),
        description: t('readiness.result_ready_desc'),
      };
    } else if (score > 5) {
      return {
        title: t('readiness.result_almost_title'),
        description: t('readiness.result_almost_desc'),
      };
    } else {
      return {
        title: t('readiness.result_ideation_title'),
        description: t('readiness.result_ideation_desc'),
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
          <Trans i18nKey="readiness.title">
            Test de <span className="text-purple-400">Preparación</span>
          </Trans>
        </h2>
        <p className="text-gray-400 mb-12">{t('readiness.subtitle')}</p>

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
                {t('readiness.retake_test')}
              </button>
            </div>
          ) : (
            <div>
              <div className="flex justify-between items-center mb-4">
                <p className="font-semibold">{t('readiness.question_of', { current: currentQuestion + 1, total: questions.length })}</p>
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
                  {t('readiness.next')}
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
