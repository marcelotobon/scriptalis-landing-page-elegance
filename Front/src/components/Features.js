
import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const featureData = [
  {
    title: "Intelligent Automation",
    description: "Create custom workflows to automate repetitive tasks and save valuable time for your team.",
    icon: "✨",
    link: "/intelligent-automation"
  },
  {
    title: "Seamless Collaboration",
    description: "Work together in real-time with your team members, no matter where they're located.",
    icon: "🤝",
    link: "/seamless-collaboration"
  },
  {
    title: "Powerful Analytics",
    description: "Gain insights into your team's performance with detailed analytics and custom reports.",
    icon: "📊",
    link: "/powerful-analytics"
  }
];

const Features = () => {
  const sectionRef = useRef(null);
  const featureRefs = useRef([]);

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

    featureRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      featureRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section id="features" className="landing-section bg-scriptalis-light/30" ref={sectionRef}>
      <div className="max-w-7xl mx-auto reveal-on-scroll">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Key Features</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover how Scriptalis helps teams achieve more with less effort
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 px-4">
          {featureData.map((feature, index) => (
            <div 
              key={index}
              ref={el => featureRefs.current[index] = el}
              className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 reveal-on-scroll"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600 mb-6">{feature.description}</p>
              <Link to={feature.link} className="text-scriptalis-accent font-medium inline-flex items-center group">
                Learn more 
                <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
