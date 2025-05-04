
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="landing-section pt-32 md:pt-40 pb-16 md:pb-24 bg-gradient-to-b from-white to-scriptalis-light/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-6 max-w-3xl mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Streamline your workflow with <span className="gradient-text">Scriptalis</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            The all-in-one platform for teams looking to automate tasks, collaborate seamlessly, and increase productivity.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link to="/contact">
              <Button className="bg-scriptalis-accent hover:bg-scriptalis-accent/90 text-white text-lg px-8 py-6">
                Talk with sales
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
