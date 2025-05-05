
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";

const LoginModal = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Intento de inicio de sesión",
        description: "Este es un demo. No se ha implementado ninguna funcionalidad de inicio de sesión real.",
      });
    }, 1000);
  };

  return (
    <div className="space-y-6 py-4">
      <div className="text-center mb-2">
        <h2 className="text-2xl font-semibold">Bienvenido de nuevo</h2>
        <p className="text-sm text-gray-500">Inicia sesión en tu cuenta de Scriptalis</p>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">Correo electrónico</Label>
          <Input
            id="email"
            type="email"
            placeholder="tu@correo.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="password">Contraseña</Label>
            <a href="#" className="text-xs text-scriptalis-accent hover:underline">
              ¿Olvidaste la contraseña?
            </a>
          </div>
          <Input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        
        <Button 
          type="submit" 
          className="w-full bg-scriptalis-accent hover:bg-scriptalis-accent/90"
          disabled={loading}
        >
          {loading ? "Iniciando sesión..." : "Iniciar sesión"}
        </Button>
      </form>
      
      <div className="text-center text-sm">
        <span className="text-gray-500">¿No tienes una cuenta?</span>{" "}
        <a href="#" className="text-scriptalis-accent hover:underline">
          Regístrate
        </a>
      </div>
    </div>
  );
};

export default LoginModal;
