"use client";

import { Fragment, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface TextSplitProps {
  text: string;
  className?: string;
  start?: string;
  end?: string;
}

export default function TextSplit({
  text,
  className,
  start = "top+=200 bottom",
  end = "top center",
}: TextSplitProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const words = text.trim().split(/\s+/);

  useEffect(() => {
    if (!ref.current) return;
    gsap.registerPlugin(ScrollTrigger);

    const letters = Array.from(
      ref.current.querySelectorAll<HTMLSpanElement>(".letter")
    );

    const st = ScrollTrigger.create({
      trigger: ref.current,
      start,
      end,
      scrub: true,
      onUpdate: (self) => {
        const progress = self.progress;
        letters.forEach((letter, i) => {
          const letterProgress = i / letters.length;
          letter.classList.toggle("visible", progress >= letterProgress);
        });
      },
    });

    return () => {
      st.kill();
    };
  }, [start, end]);

  return (
    <p ref={ref} className={className}>
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
}
