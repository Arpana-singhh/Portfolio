"use client";

import { Fragment, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface TextItem {
  text: string;
  className?: string;
}

interface TextSplitSequenceProps {
  items: TextItem[];
  start?: string;
  end?: string;
}

export default function TextSplitSequence({
  items,
  start = "top+=200 bottom",
  end = "top center",
}: TextSplitSequenceProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    gsap.registerPlugin(ScrollTrigger);

    const letters = Array.from(
      containerRef.current.querySelectorAll<HTMLSpanElement>(".letter")
    );
    const total = letters.length;

    const st = ScrollTrigger.create({
      trigger: containerRef.current,
      start,
      end,
      scrub: true,
      onUpdate: (self) => {
        const progress = self.progress;
        letters.forEach((letter, i) => {
          letter.classList.toggle("visible", progress >= i / total);
        });
      },
    });

    return () => st.kill();
  }, [start, end]);

  return (
    <div ref={containerRef}>
      {items.map((item, pi) => {
        const words = item.text.trim().split(/\s+/);
        return (
          <p key={pi} className={item.className}>
            {words.map((word, wi) => (
              <Fragment key={wi}>
                <span className="word">
                  {word.split("").map((letter, li) => (
                    <span key={li} className="letter">
                      {letter}
                    </span>
                  ))}
                </span>
                {wi < words.length - 1 && " "}
              </Fragment>
            ))}
          </p>
        );
      })}
    </div>
  );
}
