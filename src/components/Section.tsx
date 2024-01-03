import { SectionContext } from "@/utils/SectionContext";
import { Section } from "@/utils/SectionData";
import { useMotionValueEvent, useScroll } from "framer-motion";
import React, { HTMLAttributes, useContext, useRef } from "react";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  section: Section;
  isFirst?: boolean;
  isLast?: boolean;
}

const Section: React.FC<SectionProps> = ({
  section,
  isFirst = false,
  isLast = false,
  children,
  ...props
}) => {
  const sectionContext = useContext(SectionContext);
  if (sectionContext == null) return;

  const { setActiveSection, setActiveSectionProgress } = sectionContext;

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: isFirst
      ? ["start start", "end center"]
      : isLast
      ? ["start center", "end end"]
      : ["start center", "end center"],
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
      {children || (
        <div className="w-full flex justify-center pt-20">
          <h1 className="text-6xl font-semibold">{section.title}</h1>
        </div>
      )}
    </section>
  );
};

export default Section;
