
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
        title: "Thanks for your interest!",
        description: "We'll be in touch with more information soon.",
      });
    }, 1000);
  };

  return (
    <section id="contact" className="landing-section bg-scriptalis-dark text-white" ref={sectionRef}>
      <div className="max-w-7xl mx-auto reveal-on-scroll">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to transform your workflow?</h2>
          <p className="text-lg text-gray-300 mb-8">
            Join thousands of teams already using Scriptalis to increase productivity and streamline their processes.
          </p>
          
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <Input
                type="email"
                placeholder="Enter your email"
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
                {loading ? "Sending..." : "Get More Info"}
              </Button>
            </div>
          </form>
          
          <p className="text-sm text-gray-400 mt-4">
            We'll never share your email. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
