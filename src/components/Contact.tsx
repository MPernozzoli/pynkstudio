import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Form validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Errore",
        description: "Per favore compila tutti i campi",
        variant: "destructive"
      });
      return;
    }

    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Errore",
        description: "Inserisci un indirizzo email valido",
        variant: "destructive"
      });
      return;
    }

    try {
      const { error } = await supabase.functions.invoke('send-contact-email', {
        body: formData
      });

      if (error) throw error;

      toast({
        title: "Messaggio inviato!",
        description: "Ti risponderemo al più presto.",
      });
      
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error sending email:", error);
      toast({
        title: "Errore",
        description: "Si è verificato un errore. Riprova più tardi.",
        variant: "destructive"
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
              Contatti
            </h2>
            <p className="text-xl text-muted-foreground font-light">
              Hai un progetto in mente? Raccontacelo.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="glass rounded-3xl p-8 md:p-12 space-y-6 hover-glow border-primary/20">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-light text-foreground/80">
                Nome
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
              <label htmlFor="email" className="text-sm font-light text-foreground/80">
                Email
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
              <label htmlFor="message" className="text-sm font-light text-foreground/80">
                Messaggio
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
