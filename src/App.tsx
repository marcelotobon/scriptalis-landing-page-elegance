
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Contacto2 from "./pages/Contacto2";
import IntelligentAutomation from "./pages/IntelligentAutomation";
import SeamlessCollaboration from "./pages/SeamlessCollaboration";
import PowerfulAnalytics from "./pages/PowerfulAnalytics";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/contacto2" element={<Contacto2 />} />
          <Route path="/intelligent-automation" element={<IntelligentAutomation />} />
          <Route path="/seamless-collaboration" element={<SeamlessCollaboration />} />
          <Route path="/powerful-analytics" element={<PowerfulAnalytics />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
