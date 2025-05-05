
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

const ContactCTA = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setEmail("");
      toast({
        title: "¡Gracias por tu interés!",
        description: "Nos pondremos en contacto contigo próximamente con más información.",
      });
    }, 1000);
  };

  return (
    <section id="contact" className="landing-section bg-scriptalis-dark text-white" ref={sectionRef}>
      <div className="max-w-7xl mx-auto reveal-on-scroll">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Listo para transformar tu flujo de trabajo?</h2>
          <p className="text-lg text-gray-300 mb-8">
            Únete a miles de equipos que ya utilizan Scriptalis para aumentar la productividad y simplificar sus procesos.
          </p>
          
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <Input
                type="email"
                placeholder="Ingresa tu correo electrónico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
              />
              <Button 
                type="submit" 
                className="bg-white text-scriptalis-dark hover:bg-white/90 hover:text-scriptalis-dark"
                disabled={loading}
              >
                {loading ? "Enviando..." : "Obtener Más Información"}
              </Button>
            </div>
          </form>
          
          <p className="text-sm text-gray-400 mt-4">
            Nunca compartiremos tu correo electrónico. Cancela la suscripción cuando quieras.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
