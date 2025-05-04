
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
        title: "Login attempted",
        description: "This is a demo. No actual login functionality implemented.",
      });
    }, 1000);
  };

  return (
    <div className="space-y-6 py-4">
      <div className="text-center mb-2">
        <h2 className="text-2xl font-semibold">Welcome back</h2>
        <p className="text-sm text-gray-500">Log in to your Scriptalis account</p>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="password">Password</Label>
            <a href="#" className="text-xs text-scriptalis-accent hover:underline">
              Forgot password?
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
          {loading ? "Logging in..." : "Log in"}
        </Button>
      </form>
      
      <div className="text-center text-sm">
        <span className="text-gray-500">Don't have an account?</span>{" "}
        <a href="#" className="text-scriptalis-accent hover:underline">
          Sign up
        </a>
      </div>
    </div>
  );
};

export default LoginModal;
