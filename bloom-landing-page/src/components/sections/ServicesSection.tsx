import { FaFigma, FaReact, FaNodeJs, FaMobileAlt, FaRocket } from 'react-icons/fa';
import { DiRuby } from 'react-icons/di';
import { useTranslation } from 'react-i18next';
import { useMemo } from 'react';
import { motion } from 'framer-motion';

const ServicesSection: React.FC = () => {
  const { t } = useTranslation();

  const services = useMemo(() => [
    {
      icon: <FaRocket size={40} className="mb-4 text-purple-400" />,
      title: t('services.mvp_title'),
      description: t('services.mvp_desc'),
    },
    {
      icon: <FaReact size={40} className="mb-4 text-blue-400" />,
      title: t('services.web_dev_title'),
      description: t('services.web_dev_desc'),
    },
    {
      icon: <FaFigma size={40} className="mb-4 text-pink-400" />,
      title: t('services.ux_ui_title'),
      description: t('services.ux_ui_desc'),
    },
    {
      icon: <FaMobileAlt size={40} className="mb-4 text-green-400" />,
      title: t('services.mobile_title'),
      description: t('services.mobile_desc'),
    },
    {
      icon: <FaNodeJs size={40} className="mb-4 text-yellow-400" />,
      title: t('services.backend_title'),
      description: t('services.backend_desc'),
    },
    {
      icon: <DiRuby size={40} className="mb-4 text-red-400" />,
      title: t('services.backend_title'),
      description: t('services.backend_desc'),
    },
  ], [t]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {t('services.title')}
        </motion.h2>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-8 rounded-lg border border-gray-700 hover:border-purple-500 transition-all duration-300 transform hover:-translate-y-2"
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(10px)',
              }}
              variants={itemVariants}
            >
              {service.icon}
              <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
