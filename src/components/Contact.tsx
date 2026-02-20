import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const reasons = [
  "Migliorare la mia azienda",
  "Sviluppare un'idea o un business",
  "Creare un gioco o un'app",
  "Aggiungere un servizio a un sistema esistente",
  "Sito web o portfolio personale",
  "Consulenza o formazione",
  "Altro",
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    reason: "",
    message: "",
  });
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.reason || !formData.message) {
      toast({
        title: "Errore",
        description: "Per favore compila tutti i campi obbligatori",
        variant: "destructive",
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Errore",
        description: "Inserisci un indirizzo email valido",
        variant: "destructive",
      });
      return;
    }

    try {
      const { error } = await supabase.functions.invoke("send-contact-email", {
        body: formData,
      });

      if (error) throw error;

      toast({
        title: "Messaggio inviato!",
        description: "Ti risponderemo al più presto.",
      });

      setFormData({ name: "", email: "", phone: "", reason: "", message: "" });
    } catch (error) {
      console.error("Error sending email:", error);
      toast({
        title: "Errore",
        description: "Si è verificato un errore. Riprova più tardi.",
        variant: "destructive",
      });
    }
  };

  return (
    <section id="contact" className="py-32 relative bg-gradient-to-b from-background to-card/20">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <Mail className="w-16 h-16 mx-auto mb-6 text-primary animate-float" />
            <h2 className="text-4xl md:text-6xl font-light mb-6 text-foreground">
              Parliamone 15 minuti. Poi decidi tu.
            </h2>
            <p className="text-xl text-muted-foreground font-light">
              Raccontaci com'è la situazione oggi. Ti diciamo se e come possiamo aiutarti.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="glass rounded-3xl p-8 md:p-12 space-y-6 hover-glow border-primary/20">
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-light text-foreground/80">
                  Nome *
                </label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-input border-border/50 focus:border-primary transition-colors"
                  placeholder="Il tuo nome"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-light text-foreground/80">
                  Telefono <span className="text-muted-foreground">(opzionale)</span>
                </label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="bg-input border-border/50 focus:border-primary transition-colors"
                  placeholder="+39 ..."
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-light text-foreground/80">
                Email *
              </label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="bg-input border-border/50 focus:border-primary transition-colors"
                placeholder="tua@email.com"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="reason" className="text-sm font-light text-foreground/80">
                Motivo del contatto *
              </label>
              <Select value={formData.reason} onValueChange={(value) => setFormData({ ...formData, reason: value })}>
                <SelectTrigger className="bg-input border-border/50 focus:border-primary transition-colors">
                  <SelectValue placeholder="Seleziona un motivo..." />
                </SelectTrigger>
                <SelectContent className="bg-popover border-border z-50">
                  {reasons.map((reason) => (
                    <SelectItem key={reason} value={reason}>
                      {reason}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-light text-foreground/80">
                Messaggio *
              </label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="bg-input border-border/50 focus:border-primary transition-colors min-h-[150px] resize-none"
                placeholder="Parlaci del tuo progetto..."
              />
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-2xl py-6 text-lg font-light group hover:shadow-glow hover:scale-[1.02] transition-all"
            >
              <Send className="mr-2 group-hover:translate-x-1 transition-transform" />
              Invia Messaggio
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
