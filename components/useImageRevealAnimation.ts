"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useImageRevealAnimation(
  ref: React.RefObject<HTMLDivElement | null>,
) {
  useEffect(() => {
    if (!ref.current) return;

    const ctx = gsap.context(() => {
      const section = ref.current;
      if (!section) return;

      const mother = section.querySelector(".mother");
      const children = section.querySelectorAll(".child");

      if (!mother) return;

      // Initial states
      gsap.set(children, {
        opacity: 0,
        scale: 0.9,
      });

      // Enlarge mother visually (hero state)
      gsap.set(mother, {
        scale: 3, // makes it appear big initially
        zIndex: 10,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=1500",
          scrub: true,
          pin: true,
        },
      });

      // Mother shrinks into grid size
      tl.to(mother, {
        scale: 1,
        ease: "none",
      });

      // Children fade in
      tl.to(
        children,
        {
          opacity: 1,
          scale: 1,
          ease: "none",
          duration: 0.5,
        },
        "<",
      );
    }, ref);

    return () => ctx.revert();
  }, [ref]);
}
