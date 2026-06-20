"use client";

import { useRef, useEffect, useCallback } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useScrollReveal<T extends HTMLElement>(
  config?: {
    from?: gsap.TweenVars;
    to?: gsap.TweenVars;
    trigger?: boolean;
    stagger?: number;
    markers?: boolean;
  }
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || config?.trigger === false) return;

    const ctx = gsap.context(() => {
      const fromVars: gsap.TweenVars = {
        opacity: 0,
        y: 40,
        ...config?.from,
      };
      gsap.fromTo(el, fromVars, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none none",
          markers: config?.markers,
        },
        ...config?.to,
      });
    }, el);
    return () => ctx.revert();
  }, [config?.from, config?.to, config?.trigger, config?.stagger, config?.markers]);

  return ref;
}

export function useStaggerReveal<T extends HTMLElement>(
  config?: {
    from?: gsap.TweenVars;
    stagger?: number;
    trigger?: boolean;
    markers?: boolean;
  }
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || config?.trigger === false) return;

    const ctx = gsap.context(() => {
      const children = el.children;
      if (children.length === 0) return;

      gsap.fromTo(
        children,
        { opacity: 0, y: 30, ...config?.from },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: config?.stagger ?? 0.08,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none",
            markers: config?.markers,
          },
        }
      );
    }, el);
    return () => ctx.revert();
  }, [config?.from, config?.stagger, config?.trigger, config?.markers]);

  return ref;
}

export function useCountUp(
  ref: React.RefObject<HTMLElement | null>,
  value: number,
  suffix?: string
) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      const obj = { val: 0 };
      gsap.to(obj, {
        val: value,
        duration: 1.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none none",
        },
        onUpdate: () => {
          el.textContent = Math.round(obj.val) + (suffix ?? "");
        },
      });
    }, el);
    return () => ctx.revert();
  }, [ref, value, suffix]);
}

export function useHeroAnimation<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        el.querySelectorAll(".hero-animate"),
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.7, stagger: 0.12 },
        0.2
      );

      tl.fromTo(
        el.querySelector(".hero-image"),
        { opacity: 0, scale: 1.1, x: 40 },
        { opacity: 1, scale: 1, x: 0, duration: 0.9 },
        0.3
      );
    }, el);
    return () => ctx.revert();
  }, []);

  return ref;
}
