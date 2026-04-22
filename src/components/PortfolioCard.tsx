import { motion } from "framer-motion";
import { ExternalLink, Gamepad2, Globe, Smartphone, Wrench } from "lucide-react";
import type { PortfolioItem, PortfolioKind } from "@/data/portfolio";
import { useNerdMode } from "@/contexts/NerdModeContext";
import StackChips from "@/components/StackChips";
import { cn } from "@/lib/utils";

const kindIcon = (k: PortfolioKind) => {
  switch (k) {
    case "web":
      return Globe;
    case "game":
      return Gamepad2;
    case "tool":
      return Wrench;
    case "mobile":
      return Smartphone;
  }
};

const kindLabel: Record<PortfolioKind, string> = {
  web: "Web",
  game: "Gioco / 3D",
  tool: "Tool",
  mobile: "Mobile",
};

type PortfolioCardProps = {
  item: PortfolioItem;
  index?: number;
};

const PortfolioCard = ({ item, index = 0 }: PortfolioCardProps) => {
  const { nerd } = useNerdMode();
  const Icon = kindIcon(item.kind);

  const content = (
    <>
      <div className="mb-4 flex items-center justify-between gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-secondary shadow-md shadow-primary/15">
          <Icon className="h-5 w-5 text-primary-foreground" />
        </div>
        <span className="rounded-full border border-border/30 bg-muted/30 px-2.5 py-0.5 text-[10px] font-light uppercase tracking-wider text-muted-foreground">
          {kindLabel[item.kind]}
        </span>
      </div>
      <h3 className="text-lg font-light text-foreground md:text-xl">{item.title}</h3>
      <p className="mt-2 text-sm font-light leading-relaxed text-muted-foreground">{nerd ? item.descriptionNerd : item.descriptionPlain}</p>
      {nerd && <StackChips items={[...item.stack]} className="pt-3" />}
    </>
  );

  const cardClass = cn(
    "group block h-full rounded-3xl border border-border/20 bg-card/10 p-6 backdrop-blur-sm transition-all duration-500",
    "hover:border-primary/35 hover:shadow-[0_20px_60px_-20px_hsl(var(--primary)/0.25)]",
    item.href && "cursor-pointer"
  );

  if (item.href) {
    return (
      <motion.a
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.45, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
        whileHover={{ y: -4 }}
        className={cardClass}
      >
        {content}
        <span className="mt-4 inline-flex items-center gap-1 text-xs font-light text-primary opacity-80 transition-opacity group-hover:opacity-100">
          Apri sito
          <ExternalLink className="h-3 w-3" />
        </span>
      </motion.a>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4 }}
      className={cardClass}
    >
      {content}
      <p className="mt-4 text-[11px] font-light text-muted-foreground/70">Deploy pubblico non verificato — referenza da repository locale.</p>
    </motion.div>
  );
};

export default PortfolioCard;
