
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import LoginModal from "./LoginModal";

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
          <a href="/" className="text-scriptalis-dark font-bold text-xl">
            Scriptalis
          </a>
        </div>
        
        <div className="hidden md:flex items-center space-x-6">
          <a href="#features" className="text-scriptalis-dark hover:text-scriptalis-accent transition-colors">
            Features
          </a>
          <a href="#demo" className="text-scriptalis-dark hover:text-scriptalis-accent transition-colors">
            Demo
          </a>
          <a href="#contact" className="text-scriptalis-dark hover:text-scriptalis-accent transition-colors">
            Contact
          </a>
          
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" className="ml-4">Log in</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <LoginModal />
            </DialogContent>
          </Dialog>
          
          <Button className="bg-scriptalis-accent hover:bg-scriptalis-accent/90">
            Get Started
          </Button>
        </div>
        
        {/* Mobile menu button */}
        <div className="md:hidden">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" className="ml-4">Log in</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <LoginModal />
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
