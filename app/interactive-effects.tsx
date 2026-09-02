"use client";

import { useEffect } from "react";

export default function InteractiveEffects() {
  useEffect(() => {
    const root = document.documentElement;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const revealTargets = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]"),
    );
    const reactiveCards = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reactive-card]"),
    );
    const parallaxTargets = Array.from(
      document.querySelectorAll<HTMLElement>("[data-parallax]"),
    );
    const magneticTargets = Array.from(
      document.querySelectorAll<HTMLElement>("[data-magnetic]"),
    );
    const navigationLinks = Array.from(
      document.querySelectorAll<HTMLAnchorElement>(
        ".desktop-nav a[href^='#'], .mobile-section-nav a[href^='#']",
      ),
    );
    const productSection = document.querySelector<HTMLElement>("#product");
    const snapTargets = Array.from(
      document.querySelectorAll<HTMLElement>("main > section"),
    );
    const desktopSnap = window.matchMedia("(min-width: 901px)");
    const cleanupCards: Array<() => void> = [];
    const cleanupMagneticTargets: Array<() => void> = [];

    let snapLocked = false;
    let snapUnlockTimer = 0;
    let snapAnimationFrame = 0;
    let snapAnimationComplete = true;
    let lastSnapWheelAt = 0;
    let wheelAccumulator = 0;
    let activeSnapIndex = -1;
    const sectionScrollDuration = 1200;

    const setActiveSnap = (index: number) => {
      if (index === activeSnapIndex || !snapTargets[index]) return;
      snapTargets.forEach((target, targetIndex) => {
        target.classList.toggle("is-snap-active", targetIndex === index);
      });
      activeSnapIndex = index;
    };

    const getSectionAnchorOffset = () => {
      const value = window.getComputedStyle(root).getPropertyValue("--section-anchor-offset");
      return Number.parseFloat(value) || 0;
    };

    const findCurrentSnapIndex = () => {
      if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 4) {
        return snapTargets.length - 1;
      }

      const position = window.scrollY + getSectionAnchorOffset() + 2;
      let index = 0;
      snapTargets.forEach((target, targetIndex) => {
        if (target.offsetTop <= position) index = targetIndex;
      });
      return index;
    };

    const snapIsEnabled = () => desktopSnap.matches && !reducedMotion.matches;

    const getSnapStops = () => {
      const maximumScroll = Math.max(
        0,
        document.documentElement.scrollHeight - window.innerHeight,
      );
      const stops: Array<{ position: number; sectionIndex: number }> = [];
      const anchorOffset = getSectionAnchorOffset();

      snapTargets.forEach((target, sectionIndex) => {
        const start = Math.max(
          0,
          Math.min(Math.round(target.offsetTop - anchorOffset), maximumScroll),
        );
        const end = Math.max(
          start,
          Math.min(
            Math.round(target.offsetTop + target.offsetHeight - window.innerHeight),
            maximumScroll,
          ),
        );

        stops.push({ position: start, sectionIndex });
        if (end - start > 48) stops.push({ position: end, sectionIndex });
      });

      return stops.filter((stop, index) => (
        index === 0 || Math.abs(stop.position - stops[index - 1].position) > 2
      ));
    };

    const cancelSectionScroll = () => {
      if (snapAnimationFrame) window.cancelAnimationFrame(snapAnimationFrame);
      snapAnimationFrame = 0;
      root.style.removeProperty("scroll-behavior");
    };

    const syncSnapMode = () => {
      if (snapIsEnabled()) {
        root.dataset.sectionSnap = "enabled";
        setActiveSnap(findCurrentSnapIndex());
        return;
      }

      delete root.dataset.sectionSnap;
      delete root.dataset.snapDirection;
      snapTargets.forEach((target) => target.classList.remove("is-snap-active"));
      activeSnapIndex = -1;
      snapLocked = false;
      snapAnimationComplete = true;
      wheelAccumulator = 0;
      cancelSectionScroll();
      if (snapUnlockTimer) window.clearTimeout(snapUnlockTimer);
    };

    const scheduleSnapUnlock = () => {
      if (!snapAnimationComplete) return;
      if (snapUnlockTimer) window.clearTimeout(snapUnlockTimer);
      const delay = Math.max(180, lastSnapWheelAt + 220 - performance.now());
      snapUnlockTimer = window.setTimeout(() => {
        if (performance.now() - lastSnapWheelAt < 210) {
          scheduleSnapUnlock();
          return;
        }
        snapLocked = false;
        wheelAccumulator = 0;
        delete root.dataset.snapDirection;
        setActiveSnap(findCurrentSnapIndex());
        window.dispatchEvent(new Event("scroll"));
      }, delay);
    };

    const animateSectionScroll = (destination: number) => {
      cancelSectionScroll();
      const startingPosition = window.scrollY;
      const distance = destination - startingPosition;
      const startedAt = performance.now();

      root.style.scrollBehavior = "auto";
      snapAnimationComplete = false;

      const step = (now: number) => {
        const progress = Math.min((now - startedAt) / sectionScrollDuration, 1);
        const easedProgress = .5 - Math.cos(Math.PI * progress) / 2;

        window.scrollTo(0, startingPosition + distance * easedProgress);

        if (progress < 1) {
          snapAnimationFrame = window.requestAnimationFrame(step);
          return;
        }

        window.scrollTo(0, Math.round(destination));
        snapAnimationFrame = 0;
        snapAnimationComplete = true;
        root.style.removeProperty("scroll-behavior");
        scheduleSnapUnlock();
      };

      snapAnimationFrame = window.requestAnimationFrame(step);
    };

    const handleSectionWheel = (event: WheelEvent) => {
      if (!snapIsEnabled() || event.ctrlKey || Math.abs(event.deltaX) > Math.abs(event.deltaY)) {
        return;
      }

      if (snapLocked) {
        event.preventDefault();
        lastSnapWheelAt = performance.now();
        if (snapAnimationComplete) scheduleSnapUnlock();
        return;
      }

      const deltaMultiplier = event.deltaMode === 1
        ? 16
        : event.deltaMode === 2
          ? window.innerHeight
          : 1;
      const normalizedDelta = event.deltaY * deltaMultiplier;
      const direction = normalizedDelta > 0 ? 1 : -1;
      if (normalizedDelta === 0) return;

      const currentPosition = Math.round(window.scrollY);
      const stops = getSnapStops();
      const nextStop = direction > 0
        ? stops.find((stop) => stop.position > currentPosition + 2)
        : [...stops].reverse().find((stop) => stop.position < currentPosition - 2);

      if (!nextStop) return;

      event.preventDefault();

      if (Math.sign(wheelAccumulator) !== Math.sign(normalizedDelta)) {
        wheelAccumulator = 0;
      }
      wheelAccumulator += normalizedDelta;
      if (Math.abs(wheelAccumulator) < 32) return;

      snapLocked = true;
      lastSnapWheelAt = performance.now();
      wheelAccumulator = 0;
      root.dataset.snapDirection = direction > 0 ? "down" : "up";
      setActiveSnap(nextStop.sectionIndex);
      animateSectionScroll(nextStop.position);
    };

    root.dataset.motion = "ready";
    syncSnapMode();

    let observer: IntersectionObserver | undefined;
    let aromaObserver: IntersectionObserver | undefined;
    let aromaFrame = 0;

    const restartAromaProfile = () => {
      if (!productSection || reducedMotion.matches) return;
      productSection.classList.remove("is-aroma-active");
      if (aromaFrame) window.cancelAnimationFrame(aromaFrame);
      aromaFrame = window.requestAnimationFrame(() => {
        productSection.classList.add("is-aroma-active");
        aromaFrame = 0;
      });
    };

    if (reducedMotion.matches) {
      revealTargets.forEach((target) => target.classList.add("is-visible"));
    } else {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add("is-visible");
            observer?.unobserve(entry.target);
          });
        },
        { rootMargin: "0px 0px -10%", threshold: 0.12 },
      );

      revealTargets.forEach((target) => observer?.observe(target));
    }

    if (productSection && !reducedMotion.matches) {
      aromaObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) restartAromaProfile();
            else productSection.classList.remove("is-aroma-active");
          });
        },
        { threshold: 0.45 },
      );
      aromaObserver.observe(productSection);
    }

    const navigationSections = navigationLinks
      .map((link) => document.querySelector<HTMLElement>(link.hash))
      .filter((section): section is HTMLElement => section !== null);

    const navigationObserver = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (!visibleEntry) return;

        root.dataset.floatingSurface = visibleEntry.target.matches(
          ".technology-section, .closing-section",
        )
          ? "dark"
          : "light";

        navigationLinks.forEach((link) => {
          const isActive = link.hash === `#${visibleEntry.target.id}`;
          link.classList.toggle("is-active", isActive);
          if (isActive) link.setAttribute("aria-current", "location");
          else link.removeAttribute("aria-current");
        });
      },
      { rootMargin: "-22% 0px -62%", threshold: [0, 0.2, 0.5] },
    );

    navigationSections.forEach((section) => navigationObserver?.observe(section));

    let animationFrame = 0;
    const updateScrollEffects = () => {
      const scrollRange = Math.max(
        document.documentElement.scrollHeight - window.innerHeight,
        1,
      );
      const progress = Math.min(Math.max(window.scrollY / scrollRange, 0), 1);
      const heroShift = Math.min(window.scrollY * 0.055, 42);

      root.style.setProperty("--scroll-progress", progress.toString());
      root.style.setProperty("--hero-shift", `${heroShift}px`);
      root.dataset.scrolled = window.scrollY > 48 ? "true" : "false";

      if (snapIsEnabled() && !snapLocked) {
        setActiveSnap(findCurrentSnapIndex());
      }

      if (!reducedMotion.matches && !snapLocked) {
        parallaxTargets.forEach((target) => {
          const bounds = target.getBoundingClientRect();
          const viewportCenter = window.innerHeight / 2;
          const targetCenter = bounds.top + bounds.height / 2;
          const distance = (targetCenter - viewportCenter) / window.innerHeight;
          const shift = Math.max(-22, Math.min(22, distance * -24));
          target.style.setProperty("--media-shift", `${shift}px`);
        });
      }
      animationFrame = 0;
    };

    const requestScrollUpdate = () => {
      if (animationFrame || snapLocked) return;
      animationFrame = window.requestAnimationFrame(updateScrollEffects);
    };

    const updatePointerGlow = (event: PointerEvent) => {
      if (event.pointerType === "touch") return;
      root.style.setProperty("--pointer-page-x", `${event.clientX}px`);
      root.style.setProperty("--pointer-page-y", `${event.clientY}px`);
    };

    reactiveCards.forEach((card) => {
      const updateCard = (event: PointerEvent) => {
        if (event.pointerType === "touch") return;
        const bounds = card.getBoundingClientRect();
        const x = (event.clientX - bounds.left) / bounds.width;
        const y = (event.clientY - bounds.top) / bounds.height;

        card.style.setProperty("--pointer-x", `${x * 100}%`);
        card.style.setProperty("--pointer-y", `${y * 100}%`);
        card.style.setProperty("--tilt-x", `${(0.5 - y) * 5}deg`);
        card.style.setProperty("--tilt-y", `${(x - 0.5) * 6}deg`);
      };

      const resetCard = () => {
        card.style.setProperty("--tilt-x", "0deg");
        card.style.setProperty("--tilt-y", "0deg");
      };

      card.addEventListener("pointermove", updateCard);
      card.addEventListener("pointerleave", resetCard);
      cleanupCards.push(() => {
        card.removeEventListener("pointermove", updateCard);
        card.removeEventListener("pointerleave", resetCard);
      });
    });

    magneticTargets.forEach((target) => {
      const updateMagneticPosition = (event: PointerEvent) => {
        if (event.pointerType === "touch" || reducedMotion.matches) return;
        const bounds = target.getBoundingClientRect();
        const x = (event.clientX - (bounds.left + bounds.width / 2)) * 0.14;
        const y = (event.clientY - (bounds.top + bounds.height / 2)) * 0.18;
        target.style.setProperty("--magnetic-x", `${x}px`);
        target.style.setProperty("--magnetic-y", `${y}px`);
      };

      const resetMagneticPosition = () => {
        target.style.setProperty("--magnetic-x", "0px");
        target.style.setProperty("--magnetic-y", "0px");
      };

      target.addEventListener("pointermove", updateMagneticPosition);
      target.addEventListener("pointerleave", resetMagneticPosition);
      cleanupMagneticTargets.push(() => {
        target.removeEventListener("pointermove", updateMagneticPosition);
        target.removeEventListener("pointerleave", resetMagneticPosition);
      });
    });

    updateScrollEffects();
    window.addEventListener("scroll", requestScrollUpdate, { passive: true });
    window.addEventListener("resize", requestScrollUpdate, { passive: true });
    window.addEventListener("pointermove", updatePointerGlow, { passive: true });
    window.addEventListener("wheel", handleSectionWheel, { passive: false });
    desktopSnap.addEventListener("change", syncSnapMode);
    reducedMotion.addEventListener("change", syncSnapMode);

    return () => {
      observer?.disconnect();
      aromaObserver?.disconnect();
      navigationObserver?.disconnect();
      cleanupCards.forEach((cleanup) => cleanup());
      cleanupMagneticTargets.forEach((cleanup) => cleanup());
      window.removeEventListener("scroll", requestScrollUpdate);
      window.removeEventListener("resize", requestScrollUpdate);
      window.removeEventListener("pointermove", updatePointerGlow);
      window.removeEventListener("wheel", handleSectionWheel);
      desktopSnap.removeEventListener("change", syncSnapMode);
      reducedMotion.removeEventListener("change", syncSnapMode);
      if (snapUnlockTimer) window.clearTimeout(snapUnlockTimer);
      if (aromaFrame) window.cancelAnimationFrame(aromaFrame);
      cancelSectionScroll();
      if (animationFrame) window.cancelAnimationFrame(animationFrame);
      delete root.dataset.motion;
      delete root.dataset.scrolled;
      delete root.dataset.sectionSnap;
      delete root.dataset.snapDirection;
      delete root.dataset.floatingSurface;
      productSection?.classList.remove("is-aroma-active");
      snapTargets.forEach((target) => target.classList.remove("is-snap-active"));
    };
  }, []);

  return (
    <>
      <div className="scroll-progress" aria-hidden="true"><span /></div>
      <div className="pointer-glow" aria-hidden="true" />
    </>
  );
}
