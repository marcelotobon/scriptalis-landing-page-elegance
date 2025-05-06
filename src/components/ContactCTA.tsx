
import { useRef, useEffect } from "react";
import { Mail, MessageSquare } from "lucide-react";

const ContactCTA = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="contact" className="landing-section bg-scriptalis-dark text-white" ref={sectionRef}>
      <div className="max-w-7xl mx-auto reveal-on-scroll">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Listo para revolucionar tu redacción periodística?</h2>
          <p className="text-lg text-gray-300 mb-8">
            Únete a cientos de periodistas y medios que ya utilizan Scriptalis para crear contenido de mayor calidad en menos tiempo.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
            <a 
              href="https://wa.me/message" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white rounded-md px-6 py-3 transition-colors w-full"
            >
              <MessageSquare className="w-5 h-5" />
              Hablar por WhatsApp
            </a>
            
            <a 
              href="mailto:ventas@scriptalis.com" 
              className="flex items-center justify-center gap-2 bg-scriptalis-accent hover:bg-scriptalis-accent/90 text-white rounded-md px-6 py-3 transition-colors w-full"
            >
              <Mail className="w-5 h-5" />
              Enviar correo
            </a>
          </div>
          
          <p className="text-sm text-gray-400 mt-4">
            Nuestro equipo está listo para mostrarte cómo Scriptalis puede adaptarse a tu sala de redacción.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
