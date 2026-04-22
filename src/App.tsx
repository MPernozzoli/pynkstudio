import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { ThemeProvider } from "next-themes";
import { NerdModeProvider } from "@/contexts/NerdModeContext";
import Index from "./pages/Index";
import Servizi from "./pages/Servizi";
import Settori from "./pages/Settori";
import Consulenza from "./pages/Consulenza";
import Lavori from "./pages/Lavori";
import Contattaci from "./pages/Contattaci";
import AltriProgetti from "./pages/AltriProgetti";
import NotFound from "./pages/NotFound";
import Unsubscribe from "./pages/Unsubscribe";
import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem={true}>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <NerdModeProvider>
              <ScrollToTop />
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/servizi" element={<Servizi />} />
                <Route path="/settori" element={<Settori />} />
                <Route path="/consulenza" element={<Consulenza />} />
                <Route path="/lavori" element={<Lavori />} />
                <Route path="/checkup-operativo" element={<Navigate to="/consulenza" replace />} />
                <Route path="/per-le-aziende" element={<Navigate to="/consulenza" replace />} />
                <Route path="/metodo" element={<Navigate to="/consulenza" replace />} />
                <Route path="/contattaci" element={<Contattaci />} />
                <Route path="/altri-progetti" element={<AltriProgetti />} />
                <Route path="/unsubscribe" element={<Unsubscribe />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </NerdModeProvider>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </ThemeProvider>
  </HelmetProvider>
);

export default App;
