import { createContext, useState } from "react";

export type SectionContextType = {
  activeSection: number;
  setActiveSection: (_: number) => void;
  activeSectionProgress: number;
  setActiveSectionProgress: (_: number) => void;
};

export const SectionContext = createContext<SectionContextType | null>(null);

export const useSectionContextValues = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [activeSectionProgress, setActiveSectionProgress] = useState(0);

  return {
    values: {
      activeSection,
      setActiveSection,
      activeSectionProgress,
      setActiveSectionProgress,
    },
  };
};
