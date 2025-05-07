
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactCTA from '@/components/ContactCTA';
import { Button } from '@/components/ui/button';

const AIWriting = () => {
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
                <span className="gradient-text">Redacción Asistida por IA</span> para periodistas
              </h1>
              
              <p className="text-lg text-gray-600 mb-8">
                Scriptalis utiliza inteligencia artificial avanzada para generar artículos periodísticos, reportajes y contenido de alta calidad en minutos. Reduce drásticamente el tiempo dedicado a la investigación y escritura, permitiéndote enfocarte en aportar valor editorial único.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-scriptalis-light/50 p-2 rounded-full mr-4">
                    <div className="w-6 h-6 text-center">✓</div>
                  </div>
                  <p>Genera borradores completos a partir de conceptos básicos o titulares</p>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-scriptalis-light/50 p-2 rounded-full mr-4">
                    <div className="w-6 h-6 text-center">✓</div>
                  </div>
                  <p>Investiga múltiples fuentes y sintetiza información automáticamente</p>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-scriptalis-light/50 p-2 rounded-full mr-4">
                    <div className="w-6 h-6 text-center">✓</div>
                  </div>
                  <p>Sugiere ángulos periodísticos alternativos basados en datos</p>
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
                  src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97" 
                  alt="Redacción Asistida por IA" 
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
                  src="https://images.unsplash.com/photo-1586339949916-3e9457bef6d3" 
                  alt="Generación de contenido avanzada" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            
            <div className="reveal-on-scroll order-1 md:order-2">
              <h2 className="text-2xl md:text-4xl font-bold mb-6">
                Generación de contenido avanzada
              </h2>
              
              <p className="text-lg text-gray-600 mb-6">
                Nuestra IA especializada en periodismo puede generar rápidamente:
              </p>
              
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-scriptalis-accent mr-2">•</span>
                  <span>Artículos informativos completos sobre cualquier tema actual</span>
                </li>
                <li className="flex items-start">
                  <span className="text-scriptalis-accent mr-2">•</span>
                  <span>Perfiles de personalidades y entrevistas estructuradas</span>
                </li>
                <li className="flex items-start">
                  <span className="text-scriptalis-accent mr-2">•</span>
                  <span>Análisis detallados de eventos complejos</span>
                </li>
                <li className="flex items-start">
                  <span className="text-scriptalis-accent mr-2">•</span>
                  <span>Reportajes investigativos con múltiples perspectivas</span>
                </li>
                <li className="flex items-start">
                  <span className="text-scriptalis-accent mr-2">•</span>
                  <span>Contenido especializado para diferentes secciones (deportes, economía, cultura)</span>
                </li>
              </ul>
              
              <p className="text-lg text-gray-600">
                Todo ello manteniendo los más altos estándares periodísticos y el estilo editorial de tu medio.
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

export default AIWriting;
