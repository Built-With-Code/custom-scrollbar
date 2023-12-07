import {
  Section,
  SectionContext,
  SectionContextType,
} from "@/utils/SectionData";
import { useMotionValueEvent, useScroll } from "framer-motion";
import React, { HTMLAttributes, useContext, useRef } from "react";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  section: Section;
  isLast?: boolean;
}

const Section: React.FC<SectionProps> = ({
  section,
  isLast = false,
  ...props
}) => {
  const { setActiveSection, setActiveSectionProgress } = useContext(
    SectionContext
  ) as SectionContextType;

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: isLast ? ["start start", "end end"] : ["start start", "end start"],
  });

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    if (value > 0 && value < 1) {
      // Update active section
      setActiveSection(section.positionId);
      setActiveSectionProgress(value);
    }
  });

  return (
    <section {...props} ref={container}>
      {section.title}
    </section>
  );
};

export default Section;
