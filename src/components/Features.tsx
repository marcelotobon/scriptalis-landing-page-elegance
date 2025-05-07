
import { useEffect, useRef } from "react";
import { ArrowRight, Brain, Pencil, FileText } from "lucide-react";
import { Link } from "react-router-dom";

const featureData = [
  {
    title: "Redacción Asistida por IA",
    description: "Genera artículos periodísticos, reportajes y contenido de alta calidad en minutos, ahorrando horas de trabajo en investigación y escritura.",
    icon: Brain,
    link: "/ai-writing"
  },
  {
    title: "Preserva tu Estilo Personal",
    description: "Nuestra tecnología aprende y preserva tu voz única como periodista, adaptándose a tu tono y estilo editorial particular.",
    icon: Pencil,
    link: "/personal-style"
  },
  {
    title: "Textos Listos para Publicar",
    description: "Recibe contenido perfectamente formateado que cumple con los estándares periodísticos, listo para ser publicado sin revisiones extensas.",
    icon: FileText,
    link: "/ready-to-publish"
  }
];

const Features = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const featureRefs = useRef<(HTMLDivElement | null)[]>([]);

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

    featureRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      featureRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section id="features" className="landing-section bg-scriptalis-light/30" ref={sectionRef}>
      <div className="max-w-7xl mx-auto reveal-on-scroll">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Características para Periodistas</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Descubre cómo Scriptalis está transformando la redacción periodística moderna
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 px-4">
          {featureData.map((feature, index) => (
            <div 
              key={index}
              ref={el => featureRefs.current[index] = el}
              className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 reveal-on-scroll"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="text-4xl mb-4">
                <feature.icon className="h-10 w-10 text-scriptalis-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600 mb-6">{feature.description}</p>
              <Link to={feature.link} className="text-scriptalis-accent font-medium inline-flex items-center group">
                Saber más 
                <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
