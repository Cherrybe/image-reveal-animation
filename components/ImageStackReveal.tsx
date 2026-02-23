"use client";

import { useRef } from "react";
import { useImageRevealAnimation } from "./useImageRevealAnimation";

export default function ImageStackReveal() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useImageRevealAnimation(sectionRef);

  return (
    <section ref={sectionRef} className="reveal-section relative h-[300vh]">
      <div className="relative w-250 h-200 mx-auto">
        <div className="grid grid-cols-5 grid-rows-3 gap-12 place-items-center">
          {[...Array(15)].map((_, i) => {
            // If index 7 → render mother
            if (i === 7) {
              return (
                <div
                  key={i}
                  className="relative flex items-center justify-center"
                >
                  <img
                    src="/main.jpg"
                    className="mother w-45 h-55 object-cover rounded-2xl"
                  />
                </div>
              );
            }

            // Otherwise render children
            const childIndex = i > 7 ? i - 1 : i;

            return (
              <img
                key={i}
                src={`/img${childIndex + 1}.jpg`}
                className="child w-45 h-55 object-cover rounded-2xl"
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
