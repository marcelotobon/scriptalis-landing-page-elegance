
import { useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PhoneCall, Mail, Calendar } from "lucide-react";

const Contact = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    
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

  console.log("Contact page rendering");

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <section className="landing-section pt-32 md:pt-40 pb-16 md:pb-24 bg-white" ref={sectionRef}>
        <div className="max-w-7xl mx-auto px-6 reveal-on-scroll">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">Contact Us</h1>
            
            <div className="grid md:grid-cols-2 gap-12 mb-12">
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold">Get in touch</h2>
                <p className="text-gray-600">
                  Have questions about Scriptalis? Our team is here to help you find the right solution for your business.
                </p>
                
                <div className="space-y-4 mt-8">
                  <div className="flex items-center gap-3">
                    <PhoneCall className="text-scriptalis-accent" />
                    <a href="tel:+14045551234" className="text-scriptalis-dark hover:text-scriptalis-accent">
                      +1 (404) 555-1234
                    </a>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Mail className="text-scriptalis-accent" />
                    <a href="mailto:sales@scriptalis.com" className="text-scriptalis-dark hover:text-scriptalis-accent">
                      sales@scriptalis.com
                    </a>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Calendar className="text-scriptalis-accent mt-1" />
                    <span className="text-scriptalis-dark">
                      Schedule a meeting using the calendar below
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-medium mb-4">Office Location</h3>
                <p className="text-gray-600 mb-2">1234 Tech Park Drive</p>
                <p className="text-gray-600 mb-2">Suite 500</p>
                <p className="text-gray-600 mb-2">Atlanta, GA 30308</p>
                <p className="text-gray-600">United States</p>
              </div>
            </div>
            
            <div className="mt-12">
              <h2 className="text-2xl font-semibold mb-6 text-center">Schedule a Demo</h2>
              {/* Google Calendar Appointment Scheduling */}
              <iframe 
                src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ1lNZMSCevc11rhTxPwF5F3Lyl6t5oUL3e-kzkXvFDvA3ECWP0DN4MHFvjtVP0Wqp64ktprWE3E?gv=true" 
                style={{ border: 0 }} 
                width="100%" 
                height="600" 
                frameBorder="0"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Contact;
