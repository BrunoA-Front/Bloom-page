import { FaFigma, FaReact, FaNodeJs, FaMobileAlt, FaRocket } from 'react-icons/fa';
import { DiRuby } from 'react-icons/di';

const services = [
  {
    icon: <FaRocket size={40} className="mb-4 text-purple-400" />,
    title: 'MVP',
    description: 'Lanzamos tu producto mínimo viable en tiempo récord.',
  },
  {
    icon: <FaReact size={40} className="mb-4 text-blue-400" />,
    title: 'Desarrollo Web',
    description: 'Aplicaciones web modernas, rápidas y escalables.',
  },
  {
    icon: <FaFigma size={40} className="mb-4 text-pink-400" />,
    title: 'Diseño UX/UI',
    description: 'Interfaces intuitivas y atractivas centradas en el usuario.',
  },
  {
    icon: <FaMobileAlt size={40} className="mb-4 text-green-400" />,
    title: 'Móvil',
    description: 'Desarrollo de aplicaciones nativas y multiplataforma.',
  },
  {
    icon: <FaNodeJs size={40} className="mb-4 text-yellow-400" />,
    title: 'Backend',
    description: 'Sistemas robustos y eficientes para potenciar tu aplicación.',
  },
  {
    icon: <DiRuby size={40} className="mb-4 text-red-400" />,
    title: 'Backend',
    description: 'Sistemas robustos y eficientes para potenciar tu aplicación.',
  },
];

const ServicesSection: React.FC = () => {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Nuestros Servicios</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-800 p-8 rounded-lg border border-gray-700 hover:border-purple-500 transition-all duration-300 transform hover:-translate-y-2"
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(10px)',
              }}
            >
              {service.icon}
              <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;