import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageSEO from "@/components/PageSEO";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Send, Copy, Check, Phone, MessageCircle } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { motion } from "framer-motion";

const Contattaci = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    people: "",
    sector: "",
    message: "",
    email: "",
    phone: "",
  });
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const handleCopy = () => {
    navigator.clipboard.writeText("info@pynkstudio.it");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast({ title: "Errore", description: "Compila nome, email e descrizione del problema.", variant: "destructive" });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({ title: "Errore", description: "Inserisci un indirizzo email valido.", variant: "destructive" });
      return;
    }

    try {
      const { error } = await supabase.functions.invoke("send-contact-email", {
        body: {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          reason: `Azienda: ${formData.company} | Persone: ${formData.people} | Settore: ${formData.sector}`,
          message: formData.message,
        },
      });

      if (error) throw error;

      toast({ title: "Messaggio inviato!", description: "Vi ricontattiamo al più presto." });
      setFormData({ name: "", company: "", people: "", sector: "", message: "", email: "", phone: "" });
    } catch (error) {
      console.error("Error sending email:", error);
      toast({ title: "Errore", description: "Si è verificato un errore. Riprova più tardi.", variant: "destructive" });
    }
  };

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <PageSEO
        title="Contattaci — PYNK STUDIO"
        description="Parliamo del vostro contesto operativo. Call preliminare di 20 minuti, senza impegno."
        path="/contattaci"
      />
      <Navbar />

      <section className="pt-32 pb-28 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="text-center mb-12 space-y-4">
              <h1 className="text-4xl md:text-6xl font-light text-foreground">
                Parliamo del vostro <span className="text-primary">contesto operativo.</span>
              </h1>
              <p className="text-lg text-muted-foreground font-light max-w-xl mx-auto">
                Compilate il form o scriveteci direttamente. La call preliminare è di 20 minuti e senza impegno.
              </p>
            </motion.div>

            {/* Contatti diretti */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="flex flex-wrap items-center justify-center gap-4 mb-12">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-border/30 bg-card/20">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-sm text-foreground font-light">info@pynkstudio.it</span>
                <button onClick={handleCopy} className="p-1 rounded hover:bg-card/40 transition-colors" aria-label="Copia email">
                  {copied ? <Check className="w-4 h-4 text-primary" /> : <Copy className="w-4 h-4 text-muted-foreground" />}
                </button>
              </div>

              <a href="tel:+393513768607" className="flex items-center gap-2 px-4 py-2 rounded-full border border-border/30 bg-card/20 hover:border-primary/30 transition-colors">
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-sm text-foreground font-light">+39 351 3768607</span>
              </a>

              <a href="https://wa.me/393513768607?text=Buongiorno%2C%20vorrei%20informazioni%20sul%20check-up%20operativo." target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-full border border-border/30 bg-card/20 hover:border-primary/30 transition-colors">
                <MessageCircle className="w-4 h-4 text-primary" />
                <span className="text-sm text-foreground font-light">Scrivici su WhatsApp</span>
              </a>
            </motion.div>

            {/* Form */}
            <motion.form initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.4 }} onSubmit={handleSubmit} autoComplete="on" className="glass rounded-3xl p-8 md:p-12 space-y-6 border-primary/10">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-light text-foreground/80">Nome *</label>
                  <Input id="name" name="name" autoComplete="name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="bg-input border-border/50 focus:border-primary" placeholder="Il vostro nome" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="company" className="text-sm font-light text-foreground/80">Azienda</label>
                  <Input id="company" name="company" autoComplete="organization" value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })} className="bg-input border-border/50 focus:border-primary" placeholder="Nome azienda" />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="people" className="text-sm font-light text-foreground/80">Numero persone</label>
                  <Input id="people" name="people" value={formData.people} onChange={(e) => setFormData({ ...formData, people: e.target.value })} className="bg-input border-border/50 focus:border-primary" placeholder="es. 5-10" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="sector" className="text-sm font-light text-foreground/80">Settore</label>
                  <Input id="sector" name="sector" value={formData.sector} onChange={(e) => setFormData({ ...formData, sector: e.target.value })} className="bg-input border-border/50 focus:border-primary" placeholder="es. Servizi, consulenza, logistica" />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-light text-foreground/80">Email *</label>
                <Input id="email" name="email" type="email" autoComplete="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="bg-input border-border/50 focus:border-primary" placeholder="email@azienda.it" />
              </div>

              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-light text-foreground/80">Telefono <span className="text-muted-foreground">(opzionale)</span></label>
                <Input id="phone" name="phone" type="tel" autoComplete="tel" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="bg-input border-border/50 focus:border-primary" placeholder="+39 ..." />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-light text-foreground/80">Breve descrizione del problema *</label>
                <Textarea id="message" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="bg-input border-border/50 focus:border-primary min-h-[150px] resize-none" placeholder="Descrivete brevemente la situazione operativa attuale..." />
              </div>

              <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-2xl py-6 text-lg font-light group hover:shadow-glow hover:scale-[1.02] transition-all">
                <Send className="mr-2 group-hover:translate-x-1 transition-transform" />
                Invia messaggio
              </Button>
            </motion.form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contattaci;
