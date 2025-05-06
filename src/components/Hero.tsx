
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="landing-section pt-32 md:pt-40 pb-16 md:pb-24 bg-gradient-to-b from-white to-scriptalis-light/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-6 max-w-3xl mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Revoluciona tu redacción con <span className="gradient-text">Scriptalis</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            La plataforma de IA para periodistas y redactores que potencia tu creatividad, mantiene tu estilo único y entrega textos listos para publicar.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link to="/contacto2">
              <Button className="bg-scriptalis-accent hover:bg-scriptalis-accent/90 text-white text-lg px-8 py-6">
                Hablar con ventas
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
