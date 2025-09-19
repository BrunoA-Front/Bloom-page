

import { useTranslation } from 'react-i18next';
import { useMemo } from 'react';

const PortfolioSection: React.FC = () => {
  const { t } = useTranslation();

  const projects = useMemo(() => [
    {
      title: t('portfolio.project_alpha_title'),
      description: t('portfolio.project_alpha_desc'),
      imageUrl: 'https://picsum.photos/seed/project1/600/400',
      link: '#',
    },
    {
      title: t('portfolio.project_beta_title'),
      description: t('portfolio.project_beta_desc'),
      imageUrl: 'https://picsum.photos/seed/project2/600/400',
      link: '#',
    },
    {
      title: t('portfolio.project_gamma_title'),
      description: t('portfolio.project_gamma_desc'),
      imageUrl: 'https://picsum.photos/seed/project3/600/400',
      link: '#',
    },
    {
      title: t('portfolio.project_delta_title'),
      description: t('portfolio.project_delta_desc'),
      imageUrl: 'https://picsum.photos/seed/project4/600/400',
      link: '#',
    },
    {
      title: t('portfolio.project_epsilon_title'),
      description: t('portfolio.project_epsilon_desc'),
      imageUrl: 'https://picsum.photos/seed/project5/600/400',
      link: '#',
    },
    {
      title: t('portfolio.project_zeta_title'),
      description: t('portfolio.project_zeta_desc'),
      imageUrl: 'https://picsum.photos/seed/project6/600/400',
      link: '#',
    },
  ], [t]);

  return (
    <section className="py-20 bg-gray-800 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">{t('portfolio.title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-900 rounded-lg overflow-hidden group">
              <img src={project.imageUrl} alt={project.title} className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <a href={project.link} className="text-purple-400 hover:underline">
                  {t('portfolio.view_project')}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;