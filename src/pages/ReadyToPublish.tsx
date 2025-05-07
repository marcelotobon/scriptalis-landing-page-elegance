
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactCTA from '@/components/ContactCTA';
import { Button } from '@/components/ui/button';

const ReadyToPublish = () => {
  useEffect(() => {
    window.scrollTo(0, 0);

    // Initialize intersection observer for scroll reveal animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe all elements with reveal-on-scroll class
    document.querySelectorAll(".reveal-on-scroll").forEach((el) => {
      observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <section className="landing-section pt-32 md:pt-40 pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="reveal-on-scroll">
              <h1 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
                <span className="gradient-text">Textos Listos para Publicar</span> al instante
              </h1>
              
              <p className="text-lg text-gray-600 mb-8">
                Obtén contenido perfectamente formateado que cumple con los estándares periodísticos más exigentes, listo para ser publicado sin necesidad de revisiones extensas o correcciones manuales.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-scriptalis-light/50 p-2 rounded-full mr-4">
                    <div className="w-6 h-6 text-center">✓</div>
                  </div>
                  <p>Formatos predefinidos adaptados a diferentes géneros periodísticos</p>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-scriptalis-light/50 p-2 rounded-full mr-4">
                    <div className="w-6 h-6 text-center">✓</div>
                  </div>
                  <p>Archivo de texto listo para enviar a tu editor</p>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-scriptalis-light/50 p-2 rounded-full mr-4">
                    <div className="w-6 h-6 text-center">✓</div>
                  </div>
                  <p>Ortografía y redacción sin errores</p>
                </div>
              </div>
              
              <a href="https://calendly.com/marcelotobong/30min" target="_blank" rel="noopener noreferrer">
                <Button className="bg-scriptalis-accent hover:bg-scriptalis-accent/90 text-white mt-8 text-lg px-8 py-6">
                  Obtén una demo
                </Button>
              </a>
            </div>
            
            <div className="reveal-on-scroll">
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3" 
                  alt="Textos Listos para Publicar" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="landing-section bg-scriptalis-light/30 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="reveal-on-scroll order-2 md:order-1">
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173" 
                  alt="Características de publicación" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            
            <div className="reveal-on-scroll order-1 md:order-2">
              <h2 className="text-2xl md:text-4xl font-bold mb-6">
                Optimizado para la publicación inmediata
              </h2>
              
              <p className="text-lg text-gray-600 mb-6">
                Scriptalis garantiza que cada texto generado esté:
              </p>
              
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-scriptalis-accent mr-2">•</span>
                  <span>Estructurado según las mejores prácticas periodísticas actuales</span>
                </li>
                <li className="flex items-start">
                  <span className="text-scriptalis-accent mr-2">•</span>
                  <span>Libre de errores gramaticales, ortográficos y de puntuación</span>
                </li>
                <li className="flex items-start">
                  <span className="text-scriptalis-accent mr-2">•</span>
                  <span>Formateado con titulares, subtítulos y elementos visuales optimizados</span>
                </li>
                <li className="flex items-start">
                  <span className="text-scriptalis-accent mr-2">•</span>
                  <span>Adaptado para SEO con palabras clave relevantes integradas naturalmente</span>
                </li>
                <li className="flex items-start">
                  <span className="text-scriptalis-accent mr-2">•</span>
                  <span>Compatible con formatos multiplataforma (web, móvil, newsletters, redes sociales)</span>
                </li>
              </ul>
              
              <p className="text-lg text-gray-600">
                Reduce drásticamente el tiempo entre la creación y la publicación de contenido de calidad.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <ContactCTA />
      <Footer />
    </div>
  );
};

export default ReadyToPublish;
