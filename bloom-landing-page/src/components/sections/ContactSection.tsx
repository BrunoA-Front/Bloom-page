

const ContactSection: React.FC = () => {
  return (
    <section className="py-20 bg-gray-800 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">Hablemos de tu Proyecto</h2>
          <p className="text-gray-400 mt-4">
            Completa el formulario o contáctanos directamente. Estamos para ayudarte a construir el futuro.
          </p>
        </div>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-gray-900 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-6">Información de Contacto</h3>
            <div className="space-y-4">
              <p><strong>Email:</strong> contacto@bloom.dev</p>
              <p><strong>Teléfono:</strong> +123 456 7890</p>
              <p><strong>Ubicación:</strong> Valencia, España</p>
            </div>
          </div>
          <div className="bg-gray-900 p-8 rounded-lg">
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-400 mb-2">Nombre</label>
                <input type="text" id="name" className="w-full p-3 bg-gray-700 rounded-lg border border-gray-600 focus:outline-none focus:border-purple-500" />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-400 mb-2">Email</label>
                <input type="email" id="email" className="w-full p-3 bg-gray-700 rounded-lg border border-gray-600 focus:outline-none focus:border-purple-500" />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-400 mb-2">Mensaje</label>
                <textarea id="message" rows={4} className="w-full p-3 bg-gray-700 rounded-lg border border-gray-600 focus:outline-none focus:border-purple-500"></textarea>
              </div>
              <button type="submit" className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-3 px-8 rounded-full hover:scale-105 transition-transform">
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;