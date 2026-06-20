"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useHeroParallax<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        ".hero-badge",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6 }
      )
      .fromTo(
        ".hero-title-line",
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.1 },
        "-=0.3"
      )
      .fromTo(
        ".hero-sub",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6 },
        "-=0.4"
      )
      .fromTo(
        ".hero-cta",
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.08 },
        "-=0.3"
      )
      .fromTo(
        ".hero-image-wrap",
        { opacity: 0, scale: 1.1, x: 30 },
        { opacity: 1, scale: 1, x: 0, duration: 0.9 },
        "-=0.4"
      )
      .fromTo(
        ".hero-stats-row",
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.5 },
        "-=0.3"
      );

      const orbs = el.querySelectorAll<HTMLElement>(".hero-orb");
      orbs.forEach((orb, i) => {
        gsap.to(orb, {
          y: i === 0 ? -40 : 40,
          x: i === 0 ? 20 : -20,
          duration: 4 + i * 2,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      });
    }, el);
    return () => ctx.revert();
  }, []);

  return ref;
}

export function useScrollFadeIn<T extends HTMLElement>(
  config?: { from?: gsap.TweenVars; to?: gsap.TweenVars; trigger?: boolean }
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || config?.trigger === false) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 50, ...config?.from },
        {
          opacity: 1, y: 0, duration: 0.9, ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 88%", toggleActions: "play none none none", once: true },
          ...config?.to,
        }
      );
    }, el);
    return () => ctx.revert();
  }, [config?.from, config?.to, config?.trigger]);

  return ref;
}

export function useStaggerFadeIn<T extends HTMLElement>(
  config?: { stagger?: number; from?: gsap.TweenVars; trigger?: boolean }
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || config?.trigger === false) return;

    const ctx = gsap.context(() => {
      const children = Array.from(el.children).filter(
        (c) => c instanceof HTMLElement && !c.classList.contains("skip-stagger")
      );
      if (children.length === 0) return;

      gsap.fromTo(
        children,
        { opacity: 0, y: 30, ...config?.from },
        {
          opacity: 1, y: 0, duration: 0.7, ease: "power3.out",
          stagger: config?.stagger ?? 0.08,
          scrollTrigger: { trigger: el, start: "top 88%", toggleActions: "play none none none", once: true },
        }
      );
    }, el);
    return () => ctx.revert();
  }, [config?.stagger, config?.from, config?.trigger]);

  return ref;
}

export function useCountUp(
  ref: React.RefObject<HTMLElement | null>,
  value: number,
  suffix = ""
) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      const obj = { val: 0 };
      gsap.to(obj, {
        val: value,
        duration: 2,
        ease: "power2.out",
        scrollTrigger: { trigger: el.closest("section"), start: "top 85%", toggleActions: "play none none none", once: true },
        onUpdate: () => { el.textContent = Math.round(obj.val) + suffix; },
      });
    }, el);
    return () => ctx.revert();
  }, [ref, value, suffix]);
}

export function usePinnedTimeline<T extends HTMLElement>(
  scenes: { trigger: string; animation: (tl: gsap.core.Timeline) => void }[]
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: "top top",
          end: "+=200%",
          pin: true,
          scrub: 1,
          anticipatePin: 1,
        },
      });

      scenes.forEach((scene) => scene.animation(tl));
    }, el);
    return () => ctx.revert();
  }, []);

  return ref;
}
