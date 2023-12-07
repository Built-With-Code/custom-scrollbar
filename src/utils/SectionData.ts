import { createContext } from "react";

export type Section = {
  positionId: number;
  title: string;
};

export const sections: Section[] = [
  {
    positionId: 0,
    title: "Ai Pin",
  },
  {
    positionId: 1,
    title: "New Interactions",
  },
  {
    positionId: 2,
    title: "Ai Mic",
  },
  {
    positionId: 3,
    title: "Trusted Contacts",
  },
];

export type SectionContextType = {
  activeSection: number;
  setActiveSection: (_: number) => void;
  activeSectionProgress: number;
  setActiveSectionProgress: (_: number) => void;
};

export const SectionContext = createContext<SectionContextType | null>(null);
