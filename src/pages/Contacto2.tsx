
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MessageSquare } from "lucide-react";

const Contacto2 = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <section className="pt-32 md:pt-40 pb-16 md:pb-24 bg-white flex-grow">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-scriptalis-dark">Contáctanos</h1>
            <p className="text-lg text-gray-600">Estamos aquí para ayudarte. Contáctanos por cualquiera de estos medios.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <a 
                  href="https://wa.me/526672736089" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex flex-col items-center p-10 h-full hover:bg-gray-50 transition-colors"
                >
                  <div className="bg-green-500 text-white p-4 rounded-full mb-6">
                    <MessageSquare className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-2 text-scriptalis-dark">WhatsApp</h3>
                  <p className="text-gray-600 text-center mb-6">
                    Comunícate directamente con nuestro equipo de ventas por WhatsApp para una respuesta rápida.
                  </p>
                  <div className="mt-auto px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors">
                    Abrir WhatsApp
                  </div>
                </a>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <a 
                  href="mailto:ventas@scriptalis.com" 
                  className="flex flex-col items-center p-10 h-full hover:bg-gray-50 transition-colors"
                >
                  <div className="bg-scriptalis-accent text-white p-4 rounded-full mb-6">
                    <Mail className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-2 text-scriptalis-dark">Correo Electrónico</h3>
                  <p className="text-gray-600 text-center mb-6">
                    Envíanos un correo a nuestra dirección de ventas y te responderemos en menos de 24 horas.
                  </p>
                  <div className="mt-auto px-6 py-2 bg-scriptalis-accent text-white rounded-md hover:bg-scriptalis-accent/90 transition-colors">
                    Enviar Correo
                  </div>
                </a>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-600">
              También puedes llamarnos de lunes a viernes de 9:00 a 18:00 horas
            </p>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Contacto2;
