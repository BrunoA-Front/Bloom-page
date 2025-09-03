
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const FooterSection: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <a href="#" className="text-gray-400 hover:text-white">
            <FaGithub size={24} />
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <FaLinkedin size={24} />
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <FaTwitter size={24} />
          </a>
        </div>
        <p className="text-gray-500">
          &copy; {new Date().getFullYear()} Bloom Software Factory. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;