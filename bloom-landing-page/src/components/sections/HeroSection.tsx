
import { useMemo } from 'react';
import { FaBolt } from 'react-icons/fa';
import HeroBg from '../../assets/images/Hero background.jpg';
import { useTranslation, Trans } from 'react-i18next';
import LanguageSwitcher from '../ui/LanguageSwitcher';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
  const { t } = useTranslation();

  const metrics = useMemo(() => [
    { value: '50+', label: t('hero.metric_projects') },
    { value: '100%', label: t('hero.metric_clients') },
    { value: '24/7', label: t('hero.metric_support') },
  ], [t]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section 
      className="min-h-screen flex flex-col justify-center items-center bg-gray-900 text-white p-4 bg-cover bg-center relative"
      style={{ backgroundImage: `url(${HeroBg})` }}
    >
      <div className="absolute top-4 left-4 z-20">
        <LanguageSwitcher />
      </div>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <motion.div 
        className="relative z-10 text-center w-full max-w-4xl pt-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="flex justify-center items-center gap-2 mb-4" variants={itemVariants}>
          <span className="text-purple-400">
            <FaBolt />
          </span>
          <span className="font-semibold tracking-widest text-sm">{t('hero.softwareFactory')}</span>
        </motion.div>
        <motion.h1 
          className="text-7xl md:text-9xl font-bold text-purple-400 mb-4"
          variants={itemVariants}
        >
          {t('hero.title')}
        </motion.h1>
        <motion.p 
          className="text-lg md:text-xl max-w-2xl mx-auto text-gray-300 mb-8"
          variants={itemVariants}
        >
          <Trans i18nKey="hero.subtitle">
            Transformamos ideas en <span className="text-purple-300 font-semibold">MVPs exitosos</span> y <span className="text-pink-400 font-semibold">startups revolucionarias</span>. Desarrollo web, diseño UX/UI y prototipos que impulsan el futuro.
          </Trans>
        </motion.p>
        <motion.div className="flex justify-center gap-4 mb-16" variants={itemVariants}>
          <button className="bg-gradient-to-r from-purple-600 to-blue-500 text-white font-bold py-3 px-6 rounded-lg hover:scale-105 transition-transform">
            {t('hero.cta_project')}
          </button>
          <button 
            className="font-bold py-3 px-6 rounded-lg border border-gray-700 hover:border-purple-500 transition-all duration-300"
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(10px)',
            }}
          >
            <span className="flex items-center gap-2">
              <FaBolt size={14} /> {t('hero.cta_portfolio')}
            </span>
          </button>
        </motion.div>
      </motion.div>
      <motion.div 
        className="relative z-10 w-full max-w-5xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              className="p-8 rounded-lg border border-gray-800"
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(10px)',
              }}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1 + index * 0.2 }}
            >
              <p className="text-4xl font-bold text-purple-400 mb-2">{metric.value}</p>
              <p className="text-gray-400">{metric.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;