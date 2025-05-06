
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "@/components/ui/sonner";
import { Mail, User, MessageSquare } from "lucide-react";

const Contacto2 = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    motivo: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Datos del formulario:", formData);
    
    // Mostrar mensaje de éxito
    toast.success("Formulario enviado correctamente");
    
    // Resetear el formulario
    setFormData({
      nombre: "",
      correo: "",
      motivo: ""
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <section className="pt-32 md:pt-40 pb-16 md:pb-24 bg-white flex-grow">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-scriptalis-dark">Contáctanos</h1>
            <p className="text-lg text-gray-600">Completa el formulario y nos pondremos en contacto contigo lo antes posible</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="nombre" className="text-scriptalis-dark flex items-center gap-2">
                  <User size={18} className="text-scriptalis-accent" />
                  Nombre completo
                </Label>
                <Input
                  id="nombre"
                  name="nombre"
                  placeholder="Escribe tu nombre completo"
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                  className="w-full"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="correo" className="text-scriptalis-dark flex items-center gap-2">
                  <Mail size={18} className="text-scriptalis-accent" />
                  Correo electrónico
                </Label>
                <Input
                  id="correo"
                  name="correo"
                  type="email"
                  placeholder="tu@correo.com"
                  value={formData.correo}
                  onChange={handleChange}
                  required
                  className="w-full"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="motivo" className="text-scriptalis-dark flex items-center gap-2">
                  <MessageSquare size={18} className="text-scriptalis-accent" />
                  Motivo de consulta
                </Label>
                <Textarea
                  id="motivo"
                  name="motivo"
                  placeholder="Escribe detalladamente tu consulta..."
                  value={formData.motivo}
                  onChange={handleChange}
                  required
                  className="w-full min-h-[150px]"
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-scriptalis-accent hover:bg-scriptalis-accent/90"
              >
                Enviar mensaje
              </Button>
            </form>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Contacto2;
