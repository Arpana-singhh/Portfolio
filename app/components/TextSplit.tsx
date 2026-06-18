"use client";

import { Fragment, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface TextSplitProps {
  text: string;
  className?: string;
  stagger?: number;
  start?: string;
}

export default function TextSplit({
  text,
  className,
  stagger = 0.018,
  start = "top 88%",
}: TextSplitProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const words = text.trim().split(/\s+/);

  useEffect(() => {
    if (!ref.current) return;
    gsap.registerPlugin(ScrollTrigger);

    const letters = Array.from(
      ref.current.querySelectorAll<HTMLSpanElement>(".letter")
    );

    let pendingCalls: gsap.core.Tween[] = [];

    function revealLetters() {
      pendingCalls.forEach((t) => t.kill());
      pendingCalls = [];
      letters.forEach((letter, i) => {
        const t = gsap.delayedCall(i * stagger, () => {
          letter.classList.add("visible");
        });
        pendingCalls.push(t);
      });
    }

    function hideLetters() {
      pendingCalls.forEach((t) => t.kill());
      pendingCalls = [];
      letters.forEach((letter) => letter.classList.remove("visible"));
    }

    const st = ScrollTrigger.create({
      trigger: ref.current,
      start,
      onEnter: revealLetters,
      onEnterBack: revealLetters,
      onLeaveBack: hideLetters,
    });

    return () => {
      pendingCalls.forEach((t) => t.kill());
      st.kill();
    };
  }, [stagger, start]);

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
