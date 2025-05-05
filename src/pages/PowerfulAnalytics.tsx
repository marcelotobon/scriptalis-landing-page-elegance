
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactCTA from '@/components/ContactCTA';
import { Button } from '@/components/ui/button';

const PowerfulAnalytics = () => {
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
                <span className="gradient-text">Análisis potente</span> para decisiones informadas
              </h1>
              
              <p className="text-lg text-gray-600 mb-8">
                Transforma datos brutos en información procesable con la potente plataforma de análisis de Scriptalis. Visualiza tendencias de rendimiento, identifica cuellos de botella y toma decisiones basadas en datos para optimizar el flujo de trabajo de tu equipo y maximizar la productividad.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-scriptalis-light/50 p-2 rounded-full mr-4">
                    <div className="w-6 h-6 text-center">✓</div>
                  </div>
                  <p>Paneles e informes personalizables</p>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-scriptalis-light/50 p-2 rounded-full mr-4">
                    <div className="w-6 h-6 text-center">✓</div>
                  </div>
                  <p>Herramientas avanzadas de visualización de datos</p>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-scriptalis-light/50 p-2 rounded-full mr-4">
                    <div className="w-6 h-6 text-center">✓</div>
                  </div>
                  <p>Monitoreo de rendimiento en tiempo real</p>
                </div>
              </div>
              
              <Button className="bg-scriptalis-accent hover:bg-scriptalis-accent/90 text-white mt-8 text-lg px-8 py-6">
                Hablar con ventas
              </Button>
            </div>
            
            <div className="reveal-on-scroll">
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1518770660439-4636190af475" 
                  alt="Análisis potente" 
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

export default PowerfulAnalytics;
