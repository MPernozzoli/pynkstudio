import { useRef, useState, useCallback, useEffect } from "react";

interface MagneticTextProps {
  text: string;
  className?: string;
}

const MagneticText = ({ text, className = "" }: MagneticTextProps) => {
  const containerRef = useRef<HTMLSpanElement>(null);
  const [letterStyles, setLetterStyles] = useState<Array<{ scale: number; color: number }>>([]);
  const rafRef = useRef<number | null>(null);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!containerRef.current) return;

    if (rafRef.current) cancelAnimationFrame(rafRef.current);

    rafRef.current = requestAnimationFrame(() => {
      const spans = containerRef.current?.querySelectorAll<HTMLSpanElement>("[data-letter]");
      if (!spans) return;

      const newStyles: Array<{ scale: number; color: number }> = [];

      spans.forEach((span) => {
        const rect = span.getBoundingClientRect();
        const letterCenterX = rect.left + rect.width / 2;
        const letterCenterY = rect.top + rect.height / 2;
        const dist = Math.sqrt(
          (e.clientX - letterCenterX) ** 2 + (e.clientY - letterCenterY) ** 2
        );

        const maxDist = 120;
        const influence = Math.max(0, 1 - dist / maxDist);
        const scale = 1 + influence * 0.35;
        const color = influence;

        newStyles.push({ scale, color });
      });

      setLetterStyles(newStyles);
    });
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    setLetterStyles([]);
  }, []);

  useEffect(() => {
    const nav = containerRef.current?.closest("nav");
    if (!nav) return;

    nav.addEventListener("mousemove", handleMouseMove);
    nav.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      nav.removeEventListener("mousemove", handleMouseMove);
      nav.removeEventListener("mouseleave", handleMouseLeave);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [handleMouseMove, handleMouseLeave]);

  const letters = text.split("");

  return (
    <span ref={containerRef} className={className} aria-label={text}>
      {letters.map((letter, i) => {
        const style = letterStyles[i];
        const scale = style?.scale ?? 1;
        const colorIntensity = style?.color ?? 0;

        // Interpolate from foreground (white) to primary pink
        // primary is hsl(330, 80%, 60%)
        const r = Math.round(250 + (233 - 250) * colorIntensity);
        const g = Math.round(250 + (75 - 250) * colorIntensity);
        const b = Math.round(250 + (151 - 250) * colorIntensity);

        return (
          <span
            key={i}
            data-letter
            className="inline-block transition-none will-change-transform"
            style={{
              transform: `scale(${scale})`,
              color: colorIntensity > 0.01 ? `rgb(${r}, ${g}, ${b})` : undefined,
              transformOrigin: "center bottom",
            }}
          >
            {letter === " " ? "\u00A0" : letter}
          </span>
        );
      })}
    </span>
  );
};

export default MagneticText;
