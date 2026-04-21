type StackChipsProps = {
  items: readonly string[] | string[];
  className?: string;
};

const StackChips = ({ items, className = "" }: StackChipsProps) => (
  <div className={`flex flex-wrap gap-2 pt-2 ${className}`}>
    {items.map((tech) => (
      <span
        key={tech}
        className="rounded-full border border-border/30 bg-muted/40 px-3 py-1 text-xs font-light text-muted-foreground"
      >
        {tech}
      </span>
    ))}
  </div>
);

export default StackChips;
