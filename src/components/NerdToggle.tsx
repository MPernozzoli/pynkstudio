import { Code2 } from "lucide-react";
import { useNerdMode } from "@/contexts/NerdModeContext";
import { cn } from "@/lib/utils";

const NerdToggle = () => {
  const { nerd, toggleNerd } = useNerdMode();

  return (
    <button
      type="button"
      onClick={toggleNerd}
      className={cn(
        "flex items-center gap-1.5 rounded-full border px-2.5 py-1.5 text-xs font-light transition-all",
        nerd
          ? "border-primary/50 bg-primary/15 text-primary"
          : "border-border/40 bg-card/30 text-muted-foreground hover:border-primary/30 hover:text-foreground"
      )}
      aria-pressed={nerd}
      aria-label={nerd ? "Disattiva modalità tecnica" : "Attiva modalità tecnica"}
      title="Per chi conosce stack e linguaggi"
    >
      <Code2 className="h-3.5 w-3.5 shrink-0" />
      <span className="hidden sm:inline">Nerd</span>
    </button>
  );
};

export default NerdToggle;
