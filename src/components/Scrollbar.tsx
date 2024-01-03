import { SectionContext } from "@/utils/SectionContext";
import { Section } from "@/utils/SectionData";
import { motion } from "framer-motion";
import React, { useContext } from "react";

interface ScrollbarProps {
  sections: Section[];
}

const Scrollbar: React.FC<ScrollbarProps> = ({ sections }) => {
  const sectionContext = useContext(SectionContext);
  if (sectionContext == null) return;

  const { activeSection, activeSectionProgress } = sectionContext;

  return (
    <motion.div className="fixed right-10 h-screen flex flex-col gap-2 justify-center z-10">
      {sections.map(({ positionId }) => (
        <motion.div
          key={positionId}
          layout
          transition={{ duration: 0.3 }}
          style={{
            height: activeSection == positionId ? "32px" : "8px",
            backgroundColor:
              activeSection == positionId
                ? "rgb(200,200,200)"
                : "rgb(82,82,82)",
            borderRadius: 9999,
          }}
          className="w-2 overflow-hidden"
        >
          {activeSection == positionId && (
            <motion.div
              style={{ height: `calc(${activeSectionProgress * 100}% + 0px)` }}
              className="w-full bg-yellow-400"
            />
          )}
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Scrollbar;
