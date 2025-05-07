
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6 md:px-12 ${
        isScrolled ? "bg-white shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="text-scriptalis-dark font-bold text-xl">
            Scriptalis
          </Link>
        </div>
        
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/contacto2" className="text-scriptalis-dark hover:text-scriptalis-accent transition-colors">
            Contacto
          </Link>
          
          <a href="https://app.scriptalis.com/" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" className="ml-4">Iniciar sesión</Button>
          </a>
          
          <a href="https://calendly.com/marcelotobong/30min" target="_blank" rel="noopener noreferrer">
            <Button className="bg-scriptalis-accent hover:bg-scriptalis-accent/90">
              Obtén una demo
            </Button>
          </a>
        </div>
        
        {/* Mobile menu button */}
        <div className="md:hidden">
          <a href="https://app.scriptalis.com/" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" className="ml-4">Iniciar sesión</Button>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
