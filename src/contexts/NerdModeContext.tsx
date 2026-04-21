import { createContext, useCallback, useContext, useMemo, useState } from "react";

const STORAGE_KEY = "pynk:nerd-mode";

function readStored(): boolean {
  if (typeof window === "undefined") return false;
  try {
    return localStorage.getItem(STORAGE_KEY) === "1";
  } catch {
    return false;
  }
}

type NerdModeContextValue = {
  nerd: boolean;
  setNerd: (value: boolean) => void;
  toggleNerd: () => void;
};

const NerdModeContext = createContext<NerdModeContextValue | null>(null);

export function NerdModeProvider({ children }: { children: React.ReactNode }) {
  const [nerd, setNerdState] = useState(readStored);

  const setNerd = useCallback((value: boolean) => {
    setNerdState(value);
    try {
      localStorage.setItem(STORAGE_KEY, value ? "1" : "0");
    } catch {
      /* ignore */
    }
  }, []);

  const toggleNerd = useCallback(() => setNerd(!nerd), [nerd, setNerd]);

  const value = useMemo(() => ({ nerd, setNerd, toggleNerd }), [nerd, setNerd, toggleNerd]);

  return <NerdModeContext.Provider value={value}>{children}</NerdModeContext.Provider>;
}

export function useNerdMode() {
  const ctx = useContext(NerdModeContext);
  if (!ctx) throw new Error("useNerdMode must be used within NerdModeProvider");
  return ctx;
}
