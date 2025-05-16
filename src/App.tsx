
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Contacto2 from "./pages/Contacto2";
import AIWriting from "./pages/AIWriting";
import PersonalStyle from "./pages/PersonalStyle";
import ReadyToPublish from "./pages/ReadyToPublish";
import Terminos from "./pages/Terminos";
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
          <Route path="/ai-writing" element={<AIWriting />} />
          <Route path="/personal-style" element={<PersonalStyle />} />
          <Route path="/ready-to-publish" element={<ReadyToPublish />} />
          <Route path="/terminos" element={<Terminos />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
