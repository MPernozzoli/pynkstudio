import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Download, Share2, Mail, Phone, Building2 } from "lucide-react";
import pynkLogo from "@/assets/pynk-logo-transparent.png";
import { useToast } from "@/hooks/use-toast";

const VCARD_FILENAME = "massimo-pernozzoli-pynkstudio.vcf";

const buildVCard = () =>
  [
    "BEGIN:VCARD",
    "VERSION:3.0",
    "FN:Massimo Pernozzoli",
    "N:Pernozzoli;Massimo;;;",
    "ORG:Pynk Studio",
    "TITLE:CEO",
    "TEL;TYPE=CELL:+393483782051",
    "EMAIL;TYPE=INTERNET:info@pynkstudio.it",
    "URL:https://pynkstudio.it",
    "END:VCARD",
    "",
  ].join("\r\n");

const triggerDownload = (body: string) => {
  const blob = new Blob([body], { type: "text/vcard;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = VCARD_FILENAME;
  a.rel = "noopener";
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
};

const VisitCardAd = () => {
  const { toast } = useToast();
  const vcard = buildVCard();

  const handleDownload = () => {
    triggerDownload(vcard);
    toast({ title: "vCard scaricata", description: "Apri il file per aggiungere il contatto alla rubrica." });
  };

  const handleShare = async () => {
    const blob = new Blob([vcard], { type: "text/vcard;charset=utf-8" });
    const file = new File([blob], VCARD_FILENAME, { type: "text/vcard" });

    if (navigator.share && navigator.canShare?.({ files: [file] })) {
      try {
        await navigator.share({ files: [file], title: "Massimo Pernozzoli — Pynk Studio" });
        toast({ title: "Condivisione avviata", description: "Scegli Contatti o l’app di rubrica dal menu." });
        return;
      } catch (e) {
        if ((e as Error).name === "AbortError") return;
      }
    }
    triggerDownload(vcard);
    toast({ title: "vCard scaricata", description: "Su questo dispositivo usa il download per importare il contatto." });
  };

  return (
    <>
      <Helmet>
        <title>Massimo Pernozzoli · Pynk Studio</title>
        <meta name="robots" content="noindex, nofollow" />
        <meta name="description" content="Contatto diretto — Pynk Studio." />
      </Helmet>

      <div className="min-h-screen bg-background flex flex-col items-center justify-center px-6 py-16">
        <div className="w-full max-w-md rounded-2xl border border-border/40 bg-card/40 backdrop-blur-sm p-8 shadow-lg">
          <div className="flex flex-col items-center text-center gap-6">
            <img src={pynkLogo} alt="" className="h-10 w-auto opacity-90" />

            <div className="space-y-1">
              <h1 className="text-2xl font-light tracking-wide text-foreground">Massimo Pernozzoli</h1>
              <p className="text-sm text-muted-foreground font-light flex items-center justify-center gap-2">
                <Building2 className="w-4 h-4 shrink-0" />
                CEO · Pynk Studio
              </p>
            </div>

            <div className="w-full space-y-3 text-left">
              <a
                href="tel:+393483782051"
                className="flex items-center gap-3 rounded-xl border border-border/30 bg-background/50 px-4 py-3 text-sm font-light transition-colors hover:border-primary/40 hover:bg-primary/5"
              >
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <span className="text-foreground">+39 348 378 2051</span>
              </a>
              <a
                href="mailto:info@pynkstudio.it"
                className="flex items-center gap-3 rounded-xl border border-border/30 bg-background/50 px-4 py-3 text-sm font-light transition-colors hover:border-primary/40 hover:bg-primary/5"
              >
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <span className="text-foreground break-all">info@pynkstudio.it</span>
              </a>
            </div>

            <div className="flex w-full flex-col gap-2 sm:flex-row">
              <Button type="button" variant="default" className="flex-1 gap-2 font-light" onClick={handleShare}>
                <Share2 className="w-4 h-4" />
                Salva in rubrica
              </Button>
              <Button type="button" variant="outline" className="flex-1 gap-2 font-light" onClick={handleDownload}>
                <Download className="w-4 h-4" />
                Scarica .vcf
              </Button>
            </div>
          </div>
        </div>

        <p className="mt-10 text-center text-xs text-muted-foreground/60 font-light">
          <Link to="/" className="hover:text-primary transition-colors">
            pynkstudio.it
          </Link>
        </p>
      </div>
    </>
  );
};

export default VisitCardAd;
