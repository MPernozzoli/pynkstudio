import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { ThemeProvider } from "next-themes";
import Index from "./pages/Index";
import CheckupOperativo from "./pages/CheckupOperativo";
import PerLeAziende from "./pages/PerLeAziende";
import Metodo from "./pages/Metodo";
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
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/checkup-operativo" element={<CheckupOperativo />} />
              <Route path="/per-le-aziende" element={<PerLeAziende />} />
              <Route path="/metodo" element={<Metodo />} />
              <Route path="/contattaci" element={<Contattaci />} />
              <Route path="/altri-progetti" element={<AltriProgetti />} />
              <Route path="/unsubscribe" element={<Unsubscribe />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </ThemeProvider>
  </HelmetProvider>
);

export default App;
