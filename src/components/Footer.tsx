
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="bg-white py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <div className="text-scriptalis-dark font-bold text-xl mb-2">Scriptalis</div>
            <p className="text-gray-500 text-sm">
              The all-in-one platform for team productivity
            </p>
          </div>
          
          <div className="flex gap-8 flex-wrap justify-center">
            <div className="space-y-2">
              <div className="font-semibold text-sm">Product</div>
              <div className="space-y-2 text-sm">
                <div><a href="#" className="text-gray-500 hover:text-scriptalis-accent">Features</a></div>
                <div><a href="#" className="text-gray-500 hover:text-scriptalis-accent">Pricing</a></div>
                <div><a href="#" className="text-gray-500 hover:text-scriptalis-accent">Integrations</a></div>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="font-semibold text-sm">Resources</div>
              <div className="space-y-2 text-sm">
                <div><a href="#" className="text-gray-500 hover:text-scriptalis-accent">Documentation</a></div>
                <div><a href="#" className="text-gray-500 hover:text-scriptalis-accent">Guides</a></div>
                <div><a href="#" className="text-gray-500 hover:text-scriptalis-accent">Blog</a></div>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="font-semibold text-sm">Company</div>
              <div className="space-y-2 text-sm">
                <div><a href="#" className="text-gray-500 hover:text-scriptalis-accent">About</a></div>
                <div><a href="#" className="text-gray-500 hover:text-scriptalis-accent">Careers</a></div>
                <div><a href="#" className="text-gray-500 hover:text-scriptalis-accent">Contact</a></div>
              </div>
            </div>
          </div>
        </div>
        
        <Separator className="my-8" />
        
        <div className="flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
          <div>&copy; {new Date().getFullYear()} Scriptalis. All rights reserved.</div>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-scriptalis-accent">Terms</a>
            <a href="#" className="hover:text-scriptalis-accent">Privacy</a>
            <a href="#" className="hover:text-scriptalis-accent">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
