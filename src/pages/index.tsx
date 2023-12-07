import Scrollbar from "@/components/Scrollbar";
import Section from "@/components/Section";
import { SectionContext, sections } from "@/utils/SectionData";
import { useState } from "react";

export default function Home() {
  const [activeSection, setActiveSection] = useState(0);
  const [activeSectionProgress, setActiveSectionProgress] = useState(0);

  return (
    <main className="relative">
      <SectionContext.Provider
        value={{
          activeSection,
          setActiveSection,
          activeSectionProgress,
          setActiveSectionProgress,
        }}
      >
        <Scrollbar sections={sections} />
        <Section
          className="h-[200vh] bg-neutral-400"
          section={sections[0]}
        ></Section>
        <Section
          className="h-[200vh] bg-yellow-400"
          section={sections[1]}
        ></Section>
        <Section
          className="h-[200vh] bg-orange-400"
          section={sections[2]}
        ></Section>
        <Section
          className="h-[200vh] bg-blue-400"
          section={sections[3]}
          isLast
        ></Section>
      </SectionContext.Provider>
    </main>
  );
}
