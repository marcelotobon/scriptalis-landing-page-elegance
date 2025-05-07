
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactCTA from '@/components/ContactCTA';
import { Button } from '@/components/ui/button';

const PersonalStyle = () => {
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
            <div className="reveal-on-scroll order-2 md:order-1">
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2" 
                  alt="Preserva tu Estilo Personal" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            
            <div className="reveal-on-scroll order-1 md:order-2">
              <h1 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
                <span className="gradient-text">Preserva tu Estilo Personal</span> en cada texto
              </h1>
              
              <p className="text-lg text-gray-600 mb-8">
                Nuestra tecnología revolucionaria aprende y preserva tu voz única como periodista o la línea editorial de tu medio, adaptándose a tu tono y estilo particular para crear contenido que suena auténticamente tuyo.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-scriptalis-light/50 p-2 rounded-full mr-4">
                    <div className="w-6 h-6 text-center">✓</div>
                  </div>
                  <p>Analiza y aprende de tus textos existentes para capturar tu estilo único</p>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-scriptalis-light/50 p-2 rounded-full mr-4">
                    <div className="w-6 h-6 text-center">✓</div>
                  </div>
                  <p>Mantiene consistencia en tono, vocabulario y estructura narrativa</p>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-scriptalis-light/50 p-2 rounded-full mr-4">
                    <div className="w-6 h-6 text-center">✓</div>
                  </div>
                  <p>Adapta el contenido a diferentes formatos manteniendo tu identidad editorial</p>
                </div>
              </div>
              
              <a href="https://calendly.com/marcelotobong/30min" target="_blank" rel="noopener noreferrer">
                <Button className="bg-scriptalis-accent hover:bg-scriptalis-accent/90 text-white mt-8 text-lg px-8 py-6">
                  Obtén una demo
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
      
      <section className="landing-section bg-scriptalis-light/30 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="reveal-on-scroll">
              <h2 className="text-2xl md:text-4xl font-bold mb-6">
                Tecnología de Adaptación Estilística
              </h2>
              
              <p className="text-lg text-gray-600 mb-6">
                Nuestra plataforma utiliza algoritmos avanzados para:
              </p>
              
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-scriptalis-accent mr-2">•</span>
                  <span>Crear perfiles lingüísticos personalizados para cada periodista o medio</span>
                </li>
                <li className="flex items-start">
                  <span className="text-scriptalis-accent mr-2">•</span>
                  <span>Identificar patrones léxicos, sintácticos y narrativos únicos</span>
                </li>
                <li className="flex items-start">
                  <span className="text-scriptalis-accent mr-2">•</span>
                  <span>Adaptar la generación de texto según múltiples variables estilísticas</span>
                </li>
                <li className="flex items-start">
                  <span className="text-scriptalis-accent mr-2">•</span>
                  <span>Evolucionar continuamente con cada nueva pieza editorial</span>
                </li>
                <li className="flex items-start">
                  <span className="text-scriptalis-accent mr-2">•</span>
                  <span>Preservar matices culturales y contextuales específicos</span>
                </li>
              </ul>
              
              <p className="text-lg text-gray-600">
                El resultado es contenido que refleja auténticamente tu voz periodística, sin sacrificar eficiencia o productividad.
              </p>
            </div>
            
            <div className="reveal-on-scroll">
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85" 
                  alt="Tecnología de Adaptación Estilística" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <ContactCTA />
      <Footer />
    </div>
  );
};

export default PersonalStyle;
