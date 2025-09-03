

const projects = [
  {
    title: 'Proyecto Alpha',
    description: 'Una plataforma de e-commerce para una startup de moda.',
    imageUrl: 'https://picsum.photos/seed/project1/600/400',
    link: '#',
  },
  {
    title: 'Proyecto Beta',
    description: 'Aplicación móvil para gestión de finanzas personales.',
    imageUrl: 'https://picsum.photos/seed/project2/600/400',
    link: '#',
  },
  {
    title: 'Proyecto Gamma',
    description: 'Dashboard de análisis de datos para una empresa de logística.',
    imageUrl: 'https://picsum.photos/seed/project3/600/400',
    link: '#',
  },
  {
    title: 'Proyecto Delta',
    description: 'Red social para amantes de las mascotas.',
    imageUrl: 'https://picsum.photos/seed/project4/600/400',
    link: '#',
  },
  {
    title: 'Proyecto Epsilon',
    description: 'Sistema de reservas para una cadena de restaurantes.',
    imageUrl: 'https://picsum.photos/seed/project5/600/400',
    link: '#',
  },
  {
    title: 'Proyecto Zeta',
    description: 'Plataforma de e-learning con contenido interactivo.',
    imageUrl: 'https://picsum.photos/seed/project6/600/400',
    link: '#',
  },
];

const PortfolioSection: React.FC = () => {
  return (
    <section className="py-20 bg-gray-800 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Nuestro Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-900 rounded-lg overflow-hidden group">
              <img src={project.imageUrl} alt={project.title} className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <a href={project.link} className="text-purple-400 hover:underline">
                  Ver Proyecto
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