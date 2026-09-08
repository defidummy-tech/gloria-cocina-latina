import { useEffect, useState } from "react";

export function useScrollSpy(sectionIds, offset = 200) {
  const [activeId, setActiveId] = useState(sectionIds[0]);

  useEffect(() => {
    const onScroll = () => {
      const scrollPos = window.scrollY + offset;
      let current = sectionIds[0];
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollPos) current = id;
      }
      setActiveId(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [sectionIds, offset]);

  return activeId;
}
