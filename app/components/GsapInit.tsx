"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/*
  Drop <GsapInit /> once in your layout or page.
  Then add data attributes to any element:

  data-animate   : "fade-up" | "fade-down" | "slide-left" | "slide-right"
                   "blur-up" | "fade-in" | "zoom-in"
                   "fade-up-left" | "fade-up-right"
  data-delay     : seconds (default 0)
  data-duration  : seconds (default 0.8)
  data-distance  : px travel (default 60)
  data-ease      : GSAP ease string (default "power2.out")
  data-once      : "false" to replay on scroll-out (default true)

  Example:
    <h2 data-animate="fade-up" data-delay="0.2" data-distance="40">
*/

export default function GsapInit() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const elements = document.querySelectorAll<HTMLElement>("[data-animate]");

    elements.forEach((el) => {
      const type        = el.dataset.animate    ?? "fade-up";
      const delay       = parseFloat(el.dataset.delay    ?? "0");
      const duration    = parseFloat(el.dataset.duration ?? "0.8");
      const distance    = parseFloat(el.dataset.distance ?? "60");
      const ease        = el.dataset.ease        ?? "power2.out";
      const once        = el.dataset.once        !== "false";
      const opacityEase = el.dataset.opacityEase ?? null;

      const fromVars: gsap.TweenVars = { opacity: 0 };
      const toVars:   gsap.TweenVars = opacityEase ? {} : { opacity: 1 };

      switch (type) {
        case "fade-up":
          fromVars.y = distance;
          toVars.y   = 0;
          break;
        case "fade-down":
          fromVars.y = -distance;
          toVars.y   = 0;
          break;
        case "slide-left":
          fromVars.x = distance;
          toVars.x   = 0;
          break;
        case "slide-right":
          fromVars.x = -distance;
          toVars.x   = 0;
          break;
        case "blur-up":
          fromVars.y      = distance;
          fromVars.filter = "blur(10px)";
          toVars.y        = 0;
          toVars.filter   = "blur(0px)";
          break;
        case "fade-in":
          break;
        case "zoom-in":
          fromVars.scale = 0.75;
          toVars.scale   = 1;
          break;
        case "fade-up-right":
          fromVars.x = -distance;
          fromVars.y =  distance;
          toVars.x   = 0;
          toVars.y   = 0;
          break;
        case "fade-up-left":
          fromVars.x =  distance;
          fromVars.y =  distance;
          toVars.x   = 0;
          toVars.y   = 0;
          break;
      }

      gsap.set(el, fromVars);

      const triggerEl =
        el.dataset.trigger
          ? (document.querySelector<HTMLElement>(el.dataset.trigger) ?? el)
          : el;

      const scrollTriggerCfg: ScrollTrigger.Vars = {
        trigger: triggerEl,
        start: "top 90%",
        toggleActions: once
          ? "play none none none"
          : "play reverse play reverse",
      };

      gsap.to(el, {
        ...toVars,
        duration,
        delay,
        ease,
        onComplete() {
          const cls = el.dataset.animComplete;
          if (cls) el.classList.add(cls);
        },
        scrollTrigger: scrollTriggerCfg,
      });

      if (opacityEase) {
        gsap.to(el, {
          opacity: 1,
          duration,
          delay,
          ease: opacityEase,
          scrollTrigger: scrollTriggerCfg,
        });
      }
    });

    requestAnimationFrame(() => ScrollTrigger.refresh());

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return null;
}
