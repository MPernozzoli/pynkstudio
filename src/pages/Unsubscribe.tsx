import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Loader2, CheckCircle, XCircle, AlertTriangle } from "lucide-react";

type Status = "loading" | "valid" | "already" | "invalid" | "success" | "error";

const Unsubscribe = () => {
  const [params] = useSearchParams();
  const token = params.get("token");
  const [status, setStatus] = useState<Status>("loading");
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (!token) { setStatus("invalid"); return; }

    const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
    const anonKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;

    fetch(`${supabaseUrl}/functions/v1/handle-email-unsubscribe?token=${token}`, {
      headers: { apikey: anonKey },
    })
      .then(r => r.json())
      .then(data => {
        if (data.valid === true) setStatus("valid");
        else if (data.reason === "already_unsubscribed") setStatus("already");
        else setStatus("invalid");
      })
      .catch(() => setStatus("error"));
  }, [token]);

  const handleUnsubscribe = async () => {
    if (!token) return;
    setSubmitting(true);
    try {
      const { data } = await supabase.functions.invoke("handle-email-unsubscribe", { body: { token } });
      if (data?.success) setStatus("success");
      else if (data?.reason === "already_unsubscribed") setStatus("already");
      else setStatus("error");
    } catch { setStatus("error"); }
    setSubmitting(false);
  };

  const content: Record<Status, { icon: React.ReactNode; title: string; desc: string }> = {
    loading: { icon: <Loader2 className="w-12 h-12 text-primary animate-spin" />, title: "Caricamento...", desc: "" },
    valid: { icon: <AlertTriangle className="w-12 h-12 text-primary" />, title: "Vuoi annullare l'iscrizione?", desc: "Non riceverai più email da Pynk Studio." },
    already: { icon: <CheckCircle className="w-12 h-12 text-muted-foreground" />, title: "Già disiscritto", desc: "Questo indirizzo è già stato rimosso dalla lista." },
    invalid: { icon: <XCircle className="w-12 h-12 text-destructive" />, title: "Link non valido", desc: "Il link di disiscrizione non è valido o è scaduto." },
    success: { icon: <CheckCircle className="w-12 h-12 text-primary" />, title: "Disiscrizione confermata", desc: "Non riceverai più email da noi." },
    error: { icon: <XCircle className="w-12 h-12 text-destructive" />, title: "Errore", desc: "Si è verificato un errore. Riprova più tardi." },
  };

  const c = content[status];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <div className="flex-1 flex items-center justify-center px-6">
        <div className="text-center max-w-md space-y-6">
          {c.icon}
          <h1 className="text-2xl font-light text-foreground">{c.title}</h1>
          <p className="text-muted-foreground font-light">{c.desc}</p>
          {status === "valid" && (
            <Button onClick={handleUnsubscribe} disabled={submitting} className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-2xl px-8 py-5">
              {submitting ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : null}
              Conferma disiscrizione
            </Button>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Unsubscribe;
