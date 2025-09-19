
import AgustinImg from '../../assets/images/Agustin lanzabequia desarrollador full stack.jpeg';
import BrunoImg from '../../assets/images/Bruno Aruza diseñador web y analista de marketing.jpeg';
import FlorenciaImg from '../../assets/images/Florencia gironi Produc manager .jpeg';
import GabrielImg from '../../assets/images/Gabriel vides desarrollador full stack.jpeg';
import { useTranslation } from 'react-i18next';
import { useMemo } from 'react';

const TeamSection: React.FC = () => {
  const { t } = useTranslation();

  const teamMembers = useMemo(() => [
    {
      name: 'Agustin Lanzabequia',
      role: t('team.agustin_role'),
      skills: 'React, Node.js, Python, AWS',
      avatar: AgustinImg,
    },
    {
      name: 'Bruno Aruza',
      role: t('team.bruno_role'),
      skills: 'Figma, Adobe XD, Google Analytics, SEO',
      avatar: BrunoImg,
    },
    {
      name: 'Florencia Gironi',
      role: t('team.florencia_role'),
      skills: 'Agile, Scrum, Jira, Roadmapping',
      avatar: FlorenciaImg,
    },
    {
      name: 'Gabriel Vides',
      role: t('team.gabriel_role'),
      skills: 'Vue.js, Django, PostgreSQL, Docker',
      avatar: GabrielImg,
    },
  ], [t]);

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">{t('team.title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center bg-gray-800 p-6 rounded-lg border border-gray-700">
              <img
                src={member.avatar}
                alt={member.name}
                className="w-40 h-40 rounded-full mx-auto mb-4 border-4 border-purple-500 object-cover"
              />
              <h3 className="text-2xl font-bold">{member.name}</h3>
              <p className="text-purple-400 font-semibold mb-2">{member.role}</p>
              <p className="text-gray-400 text-sm">{member.skills}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;