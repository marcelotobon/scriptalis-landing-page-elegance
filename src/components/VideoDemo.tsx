
import { useEffect, useRef } from "react";
import { Play } from "lucide-react";

const VideoDemo = () => {
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
    <section id="demo" className="landing-section bg-white" ref={sectionRef}>
      <div className="max-w-7xl mx-auto reveal-on-scroll">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ve Scriptalis en acción</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Mira nuestro breve demo para ver cómo Scriptalis puede transformar el flujo de trabajo de tu equipo
          </p>
        </div>
        
        <div className="relative aspect-video max-w-4xl mx-auto rounded-xl overflow-hidden border border-gray-200 shadow-lg">
          <div className="absolute inset-0 flex items-center justify-center bg-scriptalis-dark/5">
            <button className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-full bg-white/90 shadow-lg hover:bg-white transition-colors group">
              <Play className="h-6 w-6 md:h-8 md:w-8 text-scriptalis-accent fill-scriptalis-accent/20 group-hover:fill-scriptalis-accent/30 transition-all" />
            </button>
          </div>
          <img 
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085" 
            alt="Demostración de video de Scriptalis" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default VideoDemo;
