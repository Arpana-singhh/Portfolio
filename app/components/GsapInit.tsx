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

    const ctx = gsap.context(() => {
      const elements = document.querySelectorAll<HTMLElement>("[data-animate]");

      elements.forEach((el) => {
        const type        : string          = el.dataset.animate    ?? "fade-up";
        const delay       : number          = parseFloat(el.dataset.delay    ?? "0");
        const duration    : number          = parseFloat(el.dataset.duration ?? "0.8");
        const distance    : number          = parseFloat(el.dataset.distance ?? "60");
        const ease        : string          = el.dataset.ease        ?? "power2.out";
        const once        : boolean         = el.dataset.once        !== "false";
        const start       : string          = el.dataset.start       ?? "top 90%";
        const opacityEase : string | null   = el.dataset.opacityEase ?? null;

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
          case "pop":
            fromVars.scale = 0.7;
            fromVars.y     = distance;
            toVars.scale   = 1;
            toVars.y       = 0;
            break;
          case "line-expand":
            fromVars.scaleX          = 0;
            fromVars.transformOrigin = "left center";
            toVars.scaleX            = 1;
            toVars.transformOrigin   = "left center";
            break;
        }

        gsap.set(el, fromVars);

        const triggerEl =
          el.dataset.trigger
            ? (document.querySelector<HTMLElement>(el.dataset.trigger) ?? el)
            : el;

        const scrollTriggerCfg: ScrollTrigger.Vars = {
          trigger: triggerEl,
          start,
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

      // Delay refresh so in-viewport triggers have already fired before recalculation
      setTimeout(() => ScrollTrigger.refresh(), 300);
    });

    return () => ctx.revert();
  }, []);

  return null;
}
