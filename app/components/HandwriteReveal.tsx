"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface HandwriteRevealProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
}

export default function HandwriteReveal({
  text,
  className,
  delay = 0,
  duration = 2.5,
}: HandwriteRevealProps) {
  const rectRef = useRef<SVGRectElement>(null);

  useEffect(() => {
    if (!rectRef.current) return;
    gsap.fromTo(
      rectRef.current,
      { attr: { width: 0 } },
      { attr: { width: 960 }, duration, delay, ease: "sine.inOut" }
    );
  }, [delay, duration]);

  return (
    <svg
      viewBox="0 0 450 180"
      className={className}
      style={{ overflow: "visible", width: "100%", display: "block" }}
      aria-label={text}
      role="img"
    >
      <defs>
        <linearGradient
          id="nameGrad"
          x1="0"
          y1="0"
          x2="960"
          y2="0"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%"   stopColor="#001a3a" />
          <stop offset="35%"  stopColor="#0077e6" />
          <stop offset="65%"  stopColor="#004e92" />
          <stop offset="100%" stopColor="#0099ff" />
        </linearGradient>

        <clipPath id="revealClip">
          <rect ref={rectRef} x="0" y="-80" width="0" height="360" />
        </clipPath>
      </defs>

      <text
        x="8"
        y="120"
        fontFamily='"Dancing Script", cursive'
        fontSize="100"
        fontWeight="400"
        fontStyle="italic"
        letterSpacing="-5"
        fill="url(#nameGrad)"
        clipPath="url(#revealClip)"
      >
        {text}
      </text>
    </svg>
  );
}
