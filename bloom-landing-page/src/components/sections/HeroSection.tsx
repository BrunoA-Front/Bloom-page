
import { FaBolt } from 'react-icons/fa';
import HeroBg from '../../assets/images/Hero background.jpg';

const HeroSection: React.FC = () => {
  const metrics = [
    { value: '50+', label: 'Proyectos Completados' },
    { value: '100%', label: 'Clientes Satisfechos' },
    { value: '24/7', label: 'Soporte Técnico' },
  ];

  return (
    <section 
      className="min-h-screen flex flex-col justify-center items-center bg-gray-900 text-white p-4 bg-cover bg-center"
      style={{ backgroundImage: `url(${HeroBg})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-center w-full max-w-4xl pt-20">
        <div className="flex justify-center items-center gap-2 mb-4">
          <span className="text-purple-400">
            <FaBolt />
          </span>
          <span className="font-semibold tracking-widest text-sm">SOFTWARE FACTORY</span>
        </div>
        <h1 className="text-7xl md:text-9xl font-bold text-purple-400 mb-4">
          Bloom
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-300 mb-8">
          Transformamos ideas en <span className="text-purple-300 font-semibold">MVPs exitosos</span> y <span className="text-pink-400 font-semibold">startups revolucionarias</span>. Desarrollo web, diseño UX/UI y prototipos que impulsan el futuro.
        </p>
        <div className="flex justify-center gap-4 mb-16">
          <button className="bg-gradient-to-r from-purple-600 to-blue-500 text-white font-bold py-3 px-6 rounded-lg hover:scale-105 transition-transform">
            Iniciar Proyecto &rarr;
          </button>
          <button 
            className="font-bold py-3 px-6 rounded-lg border border-gray-700 hover:border-purple-500 transition-all duration-300"
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(10px)',
            }}
          >
            <span className="flex items-center gap-2">
              <FaBolt size={14} /> Ver Portfolio
            </span>
          </button>
        </div>
      </div>
      <div className="relative z-10 w-full max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="p-8 rounded-lg border border-gray-800"
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(10px)',
              }}
            >
              <p className="text-4xl font-bold text-purple-400 mb-2">{metric.value}</p>
              <p className="text-gray-400">{metric.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;