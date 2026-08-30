import { gsap } from "gsap";
import { getPreset } from "./presets";
import { ensureStyles } from "./styles";
import type { AnimateTextOptions, AnimationSettings, UnitMode } from "./types";

const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%";
const rnd = (a: number, b: number) => a + Math.random() * (b - a);
const wave = (i: number, amp: number, f: number) => Math.sin(i * f) * amp;
const activeTimers = new WeakMap<HTMLElement, number[]>();

export function animateText(element: HTMLElement, options: AnimateTextOptions = {}) {
  const fontFamily = options.fontFamily ?? "Inter";
  renderAnimation(element, {
    text: options.text ?? "After Effects",
    template: getPreset(options.preset),
    speed: options.speed ?? 1,
    fontSize: options.fontSize ?? 72,
    fontFamily,
    bodyFont: options.bodyFont ?? fontFamily,
    textColor: options.color ?? "#f4f0ea",
    colorMode: options.colorMode ?? "solid",
    gradient: options.gradient ?? "linear-gradient(90deg, #ffdd00, #ff00aa)",
    multiColors: options.multiColors ?? ["#ffdd00", "#ff4400", "#5568ff", "#00d4ff"],
    align: options.align ?? "center",
  });
}

export function destroyAnimation(wrapper: HTMLElement) {
  clearRegisteredTimers(wrapper);
  gsap.killTweensOf([wrapper, ...Array.from(wrapper.querySelectorAll("*"))]);
  wrapper.innerHTML = "";
}

export function renderAnimation(wrapper: HTMLElement, settings: AnimationSettings) {
  ensureStyles();
  clearRegisteredTimers(wrapper);
  gsap.killTweensOf([wrapper, ...Array.from(wrapper.querySelectorAll("*"))]);
  wrapper.innerHTML = "";
  wrapper.classList.add("ae-text-root");
  wrapper.removeAttribute("style");
  wrapper.style.fontFamily = `'${settings.fontFamily}', Inter, system-ui, sans-serif`;
  wrapper.style.fontSize = `${settings.fontSize}px`;
  wrapper.style.textAlign = settings.align;
  wrapper.style.lineHeight = "1.04";
  wrapper.style.letterSpacing = "0";
  wrapper.style.color = settings.textColor;

  const unit = settings.template.unit ?? defaultUnit(settings.template.id);
  const targets = buildTextUnits(wrapper, settings.text, unit, settings.fontFamily, settings.bodyFont);
  applyColor(targets, settings);
  playPreset(wrapper, settings.template.id, targets, settings.speed);
}

function fontStack(font: string) {
  return `'${font}', Inter, system-ui, sans-serif`;
}

function buildTextUnits(wrapper: HTMLElement, text: string, unit: UnitMode, headingFont: string, bodyFont: string) {
  const value = text.trim() || "After Effects";
  const lines = value.split("\n");
  const setLineFont = (element: HTMLElement, lineIndex: number) => {
    element.style.fontFamily = fontStack(lineIndex === 0 ? headingFont : bodyFont);
  };

  if (unit === "wrapper") {
    const span = document.createElement("span");
    span.className = "ae-text-unit ae-text-wrapper";
    lines.forEach((line, lineIndex) => {
      const lineSpan = document.createElement("span");
      lineSpan.className = "ae-text-font-line";
      lineSpan.textContent = line || "\u00A0";
      setLineFont(lineSpan, lineIndex);
      span.appendChild(lineSpan);
    });
    wrapper.appendChild(span);
    return [span];
  }

  if (unit === "line") {
    return lines.map((line, lineIndex) => {
      const span = document.createElement("span");
      span.className = "ae-text-unit ae-text-line";
      span.textContent = line || "\u00A0";
      setLineFont(span, lineIndex);
      wrapper.appendChild(span);
      return span;
    });
  }

  if (unit === "word") {
    const targets: HTMLElement[] = [];
    lines.forEach((line, lineIndex) => {
      line.split(/(\s+)/).forEach((part) => {
        const span = document.createElement("span");
        span.textContent = /^\s+$/.test(part) ? part.replace(/ /g, "\u00A0") : part;
        setLineFont(span, lineIndex);
        if (!/^\s+$/.test(part)) {
          span.className = "ae-text-unit ae-text-word";
          targets.push(span);
        }
        wrapper.appendChild(span);
      });
      if (lineIndex < lines.length - 1) wrapper.appendChild(document.createElement("br"));
    });
    return targets;
  }

  const targets: HTMLElement[] = [];
  lines.forEach((line, lineIndex) => {
    [...line].forEach((char) => {
      const span = document.createElement("span");
      span.className = "ae-text-unit ae-text-char";
      span.textContent = char === " " ? "\u00A0" : char;
      setLineFont(span, lineIndex);
      wrapper.appendChild(span);
      targets.push(span);
    });
    if (lineIndex < lines.length - 1) wrapper.appendChild(document.createElement("br"));
  });
  return targets;
}

function applyColor(targets: HTMLElement[], settings: AnimationSettings) {
  if (settings.colorMode === "gradient") {
    targets.forEach((target) => {
      target.style.background = settings.gradient;
      target.style.webkitBackgroundClip = "text";
      target.style.backgroundClip = "text";
      target.style.color = "transparent";
    });
    return;
  }

  if (settings.colorMode === "multi") {
    targets.forEach((target, index) => {
      target.style.color = settings.multiColors[index % settings.multiColors.length];
    });
    return;
  }

  targets.forEach((target) => {
    target.style.color = settings.textColor;
  });
}

function defaultUnit(id: string): UnitMode {
  if (id.includes("Word") || ["wordFlash", "blurByWord", "rotatePerWord"].includes(id)) return "word";
  if (id.includes("Line")) return "line";
  if (["increaseTracking", "decreaseTracking", "contract", "extend", "stretchy", "emerge"].includes(id)) {
    return "wrapper";
  }
  return "char";
}

function registerTimer(wrapper: HTMLElement, timer: number) {
  activeTimers.set(wrapper, [...(activeTimers.get(wrapper) ?? []), timer]);
}

function clearRegisteredTimers(wrapper: HTMLElement) {
  activeTimers.get(wrapper)?.forEach((timer) => window.clearInterval(timer));
  activeTimers.delete(wrapper);
}

function playPreset(wrapper: HTMLElement, id: string, c: HTMLElement[], speed: number) {
  const s = Math.max(0.3, speed);
  const common = {
    duration: 0.56 / s,
    stagger: 0.045 / s,
    ease: "power2.out",
  };

  switch (id) {
    case "typewriter":
      gsap.set(c, { opacity: 0 });
      gsap.to(c, { opacity: 1, duration: 0.001, stagger: 0.055 / s, ease: "none" });
      break;
    case "fadeUpChars":
    case "fadeUpWords":
      gsap.fromTo(c, { opacity: 0, y: 42 }, { opacity: 1, y: 0, ...common });
      break;
    case "flyInBottom":
      gsap.fromTo(c, { opacity: 0, y: 100 }, { opacity: 1, y: 0, ...common, ease: "back.out(1.5)" });
      break;
    case "flyInWithTwist":
      gsap.fromTo(c, { opacity: 0, y: 70, rotation: -45 }, { opacity: 1, y: 0, rotation: 0, ...common, ease: "back.out(1.25)" });
      break;
    case "spinInChar":
      gsap.fromTo(c, { opacity: 0, rotation: -180, scale: 0 }, { opacity: 1, rotation: 0, scale: 1, ...common, ease: "back.out(1.7)" });
      break;
    case "randomShuffle":
      gsap.fromTo(c, { opacity: 0, x: () => rnd(-70, 70), y: () => rnd(-45, 45) }, { opacity: 1, x: 0, y: 0, ...common });
      break;
    case "decoderFade":
    case "algorithm":
      c.forEach((el, i) => {
        const original = el.textContent || "";
        let tick = 0;
        el.style.opacity = "1";
        const source = id === "algorithm" ? "01" : chars;
        const timer = window.setInterval(() => {
          if (tick > i + 8) {
            el.textContent = original;
            window.clearInterval(timer);
          } else {
            el.textContent = source[Math.floor(Math.random() * source.length)];
          }
          tick += 1;
        }, 38 / s);
        registerTimer(wrapper, timer);
      });
      break;
    case "centerSpiral":
    case "spiralIn":
      c.forEach((el, i) => gsap.fromTo(el, { opacity: 0, scale: 0, rotation: 720 }, { opacity: 1, scale: 1, rotation: 0, duration: 0.9 / s, delay: i * 0.04 / s, ease: "power2.out" }));
      break;
    case "dropInChar":
    case "dropBounce":
      gsap.fromTo(c, { opacity: 0, y: -90 }, { opacity: 1, y: 0, duration: 0.62 / s, stagger: 0.045 / s, ease: "bounce.out" });
      break;
    case "stretchInWord":
    case "stretchy":
      gsap.fromTo(c, { opacity: 0, scaleX: 3.4, transformOrigin: "left center" }, { opacity: 1, scaleX: 1, ...common, ease: "elastic.out(1,.55)" });
      break;
    case "wiperToCenter": {
      const mid = Math.floor(c.length / 2);
      c.forEach((el, i) => {
        const dir = i < mid ? -1 : 1;
        gsap.fromTo(el, { opacity: 0, x: dir * 90 }, { opacity: 1, x: 0, duration: 0.5 / s, delay: Math.abs(i - mid) * 0.035 / s, ease: "power2.out" });
      });
      break;
    }
    case "fadeOutChar":
      gsap.fromTo(c, { opacity: 1 }, { opacity: 0, duration: 0.42 / s, stagger: 0.04 / s, ease: "power2.in" });
      break;
    case "fadeOutSlow":
      gsap.fromTo(c, { opacity: 1 }, { opacity: 0, duration: 1.5 / s, ease: "power1.in" });
      break;
    case "randomFlyOff":
      gsap.fromTo(c, { opacity: 1 }, { opacity: 0, x: () => rnd(-140, 140), y: () => rnd(-90, 90), rotation: () => rnd(-180, 180), duration: 0.65 / s, stagger: 0.025 / s, ease: "power2.in" });
      break;
    case "slideOffRight":
      gsap.fromTo(c, { opacity: 1 }, { opacity: 0, x: 120, duration: 0.42 / s, stagger: 0.04 / s, ease: "power2.in" });
      break;
    case "encoderFadeOut":
      c.forEach((el, i) => {
        let tick = 0;
        const timer = window.setInterval(() => {
          if (tick > 8) {
            el.textContent = "";
            el.style.opacity = "0";
            window.clearInterval(timer);
          } else {
            el.textContent = chars[Math.floor(Math.random() * chars.length)];
          }
          tick += 1;
        }, 42 + i * 4);
        registerTimer(wrapper, timer);
      });
      break;
    case "flipInX":
    case "flipUp":
      gsap.fromTo(c, { opacity: 0, rotationX: 90, transformPerspective: 500 }, { opacity: 1, rotationX: 0, ...common });
      break;
    case "flipInY":
    case "backFlip":
      gsap.fromTo(c, { opacity: 0, rotationY: 180, transformPerspective: 500 }, { opacity: 1, rotationY: 0, ...common });
      break;
    case "posZCascade":
    case "zoomForward":
    case "vanishingPoint":
      gsap.fromTo(c, { opacity: 0, scale: 0.05, z: 240, transformPerspective: 700 }, { opacity: 1, scale: 1, z: 0, ...common, ease: "expo.out" });
      break;
    case "rotXCascade":
      gsap.fromTo(c, { opacity: 0, rotationX: -120, y: 45, transformPerspective: 500 }, { opacity: 1, rotationX: 0, y: 0, ...common });
      break;
    case "rotYCascade":
      gsap.fromTo(c, { opacity: 0, rotationY: -130, x: -35, transformPerspective: 500 }, { opacity: 1, rotationY: 0, x: 0, ...common });
      break;
    case "flyDownUnfold":
      gsap.fromTo(c, { opacity: 0, y: -100, rotationX: -90 }, { opacity: 1, y: 0, rotationX: 0, ...common, ease: "back.out(1.2)" });
      break;
    case "scrambleBlur":
    case "smokey":
      gsap.fromTo(c, { opacity: 0, filter: "blur(18px)", y: -20, scale: 1.3 }, { opacity: 1, filter: "blur(0px)", y: 0, scale: 1, duration: 0.9 / s, stagger: 0.04 / s });
      break;
    case "spiralDown":
      c.forEach((el, i) => gsap.fromTo(el, { opacity: 0, y: -120, rotation: i * 30, scale: 0.25 }, { opacity: 1, y: 0, rotation: 0, scale: 1, duration: 0.7 / s, delay: i * 0.035 / s }));
      break;
    case "tumbleForward":
      gsap.fromTo(c, { opacity: 0, rotationX: -180, y: -45 }, { opacity: 1, rotationX: 0, y: 0, ...common, ease: "back.out(1.4)" });
      break;
    case "blurByWord":
    case "foggy":
      gsap.fromTo(c, { opacity: 0, filter: "blur(16px)" }, { opacity: 1, filter: "blur(0px)", ...common });
      break;
    case "bulletTrain":
    case "warp98":
      gsap.fromTo(c, { opacity: 0, x: -320, scaleX: 3, filter: "blur(8px)" }, { opacity: 1, x: 0, scaleX: 1, filter: "blur(0px)", duration: 0.34 / s, stagger: 0.022 / s, ease: "expo.out" });
      break;
    case "evaporate":
      gsap.fromTo(c, { opacity: 0, y: 60, filter: "blur(12px)" }, { opacity: 1, y: 0, filter: "blur(0px)", ...common });
      break;
    case "transporter":
      gsap.fromTo(c, { opacity: 0, y: () => rnd(-80, 80), filter: "blur(10px)" }, { opacity: 1, y: 0, filter: "blur(0px)", ...common });
      break;
    case "bloomFlower":
    case "radialFlare":
      c.forEach((el, i) => {
        const angle = (i / Math.max(c.length, 1)) * Math.PI * 2;
        gsap.fromTo(el, { opacity: 0, x: Math.cos(angle) * 100, y: Math.sin(angle) * 100, scale: 0 }, { opacity: 1, x: 0, y: 0, scale: 1, duration: 0.7 / s, delay: i * 0.025 / s });
      });
      break;
    case "clockwiseEntry":
    case "pinwheel":
    case "whirlIn":
    case "whirlwind":
      c.forEach((el, i) => {
        const angle = (i / Math.max(c.length, 1)) * Math.PI * 3;
        gsap.fromTo(el, { opacity: 0, x: Math.cos(angle) * 120, y: Math.sin(angle) * 120, rotation: 360 }, { opacity: 1, x: 0, y: 0, rotation: 0, duration: 0.72 / s, delay: i * 0.03 / s });
      });
      break;
    case "chasingStrokes":
    case "wigglyStroke":
      gsap.fromTo(c, { opacity: 0.25, textShadow: "0 0 16px currentColor" }, { opacity: 1, textShadow: "0 0 0 transparent", duration: 0.5 / s, stagger: 0.04 / s, repeat: 1, yoyo: true });
      break;
    case "fillColorWipe":
    case "flickerColor":
    case "rotateHue":
    case "pulseBlue":
      c.forEach((el, i) => {
        const hue = (i / Math.max(c.length, 1)) * 360;
        gsap.fromTo(el, { opacity: 0, color: `hsl(${hue},100%,66%)` }, { opacity: 1, color: `hsl(${(hue + 90) % 360},100%,72%)`, duration: 0.5 / s, delay: i * 0.04 / s, yoyo: id !== "rotateHue", repeat: id === "rotateHue" ? 0 : 1 });
      });
      break;
    case "automation":
    case "mechanical":
      gsap.fromTo(c, { opacity: 0, y: 20, scaleY: 0.35 }, { opacity: 1, y: 0, scaleY: 1, duration: 0.22 / s, stagger: 0.05 / s });
      break;
    case "badReception":
      gsap.set(c, { opacity: 1 });
      c.forEach((el, i) => {
        const tl = gsap.timeline({ delay: i * 0.03 / s });
        for (let j = 0; j < 5; j += 1) tl.to(el, { x: rnd(-5, 5), y: rnd(-3, 3), opacity: rnd(0.35, 1), duration: 0.05 / s }).to(el, { x: 0, y: 0, opacity: 1, duration: 0.05 / s });
      });
      break;
    case "doppler":
      gsap.fromTo(c, { opacity: 0, x: -150, scaleX: 2 }, { opacity: 1, x: 0, scaleX: 1, ...common });
      break;
    case "helicopter":
      gsap.fromTo(c, { opacity: 0, rotation: 720, y: -60, scale: 0.3 }, { opacity: 1, rotation: 0, y: 0, scale: 1, duration: 0.7 / s, stagger: 0.05 / s });
      break;
    case "pistons":
      c.forEach((el, i) => gsap.timeline({ delay: i * 0.04 / s }).fromTo(el, { opacity: 0, y: -50 }, { opacity: 1, y: 0, duration: 0.15 / s }).to(el, { y: 10, duration: 0.1 / s }).to(el, { y: 0, duration: 0.15 / s, ease: "bounce.out" }));
      break;
    case "wobble":
    case "boiling":
    case "oceanTide":
    case "wheatfield":
      gsap.set(c, { opacity: 1 });
      c.forEach((el, i) => gsap.fromTo(el, { y: wave(i, 24, 0.8), rotation: wave(i, 8, 0.7) }, { y: 0, rotation: 0, duration: 0.7 / s, delay: i * 0.035 / s, ease: "elastic.out(1,.55)" }));
      break;
    case "rubber":
      gsap.fromTo(c, { opacity: 1, scaleX: 1.4, scaleY: 0.7 }, { scaleX: 1, scaleY: 1, duration: 0.32 / s, stagger: 0.04 / s, ease: "elastic.out(1,.45)" });
      break;
    case "bounceIn":
      gsap.fromTo(c, { opacity: 0, scale: 0.25 }, { opacity: 1, scale: 1, duration: 0.6 / s, stagger: 0.045 / s, ease: "elastic.out(1,.5)" });
      break;
    case "boomerang":
      gsap.fromTo(c, { opacity: 0, x: 100, rotation: 360 }, { opacity: 1, x: 0, rotation: 0, ...common });
      break;
    case "doubleHelix":
      c.forEach((el, i) => gsap.fromTo(el, { opacity: 0, x: (i % 2 === 0 ? 1 : -1) * 70, y: wave(i, 32, 1) }, { opacity: 1, x: 0, y: 0, duration: 0.62 / s, delay: i * 0.04 / s }));
      break;
    case "flutter":
      c.forEach((el, i) => gsap.fromTo(el, { opacity: 0, x: rnd(-35, 35), y: rnd(-35, 35), rotation: rnd(-24, 24) }, { opacity: 1, x: 0, y: 0, rotation: 0, duration: 0.5 / s, delay: i * 0.035 / s }));
      break;
    case "ripple":
      gsap.fromTo(c, { opacity: 0, scale: 1.6 }, { opacity: 1, scale: 1, ...common });
      break;
    case "dripDown":
      gsap.fromTo(c, { opacity: 0, rotation: -90, transformOrigin: "top center" }, { opacity: 1, rotation: 0, ...common, ease: "back.out(1.4)" });
      break;
    case "fullRotation":
    case "rotateChars":
    case "randomRotation":
      gsap.fromTo(c, { opacity: 0, rotation: () => rnd(-360, 360) }, { opacity: 1, rotation: 0, ...common, ease: "back.out(1.2)" });
      break;
    case "loopyLoop":
    case "swirlyRotation":
      gsap.fromTo(c, { opacity: 0, rotation: 720, scale: 0.25 }, { opacity: 1, rotation: 0, scale: 1, duration: 0.75 / s, stagger: 0.035 / s });
      break;
    case "largeScale":
    case "scaleDown":
      gsap.fromTo(c, { opacity: 0, scale: 3.5 }, { opacity: 1, scale: 1, ...common, ease: "power3.out" });
      break;
    case "letsDance":
    case "scaleUp":
    case "scaleUpWord":
    case "wigglyScaleWipe":
      gsap.fromTo(c, { opacity: 0, scale: 0.1, rotation: () => rnd(-35, 35) }, { opacity: 1, scale: 1, rotation: 0, ...common, ease: "elastic.out(1,.5)" });
      break;
    case "increaseTracking":
      gsap.fromTo(c, { opacity: 0, letterSpacing: "-8px" }, { opacity: 1, letterSpacing: "7px", duration: 1.1 / s, ease: "power2.out" });
      break;
    case "decreaseTracking":
    case "contract":
      gsap.fromTo(c, { opacity: 0, letterSpacing: "22px" }, { opacity: 1, letterSpacing: "0px", duration: 1 / s, ease: "power2.out" });
      break;
    case "extend":
      gsap.fromTo(c, { opacity: 0, letterSpacing: "-14px", scaleX: 0.5 }, { opacity: 1, letterSpacing: "0px", scaleX: 1, duration: 1 / s });
      break;
    case "magnify":
      c.forEach((el, i) => {
        const mid = c.length / 2;
        const dist = Math.abs(i - mid);
        gsap.fromTo(el, { opacity: 0, scale: 1 + dist * 0.15 }, { opacity: 1, scale: 1, duration: 0.6 / s, delay: (c.length - dist) * 0.035 / s });
      });
      break;
    case "spasm":
      gsap.set(c, { opacity: 1 });
      c.forEach((el, i) => gsap.to(el, { letterSpacing: () => `${rnd(-3, 8)}px`, duration: 0.1 / s, repeat: 8, yoyo: true, delay: i * 0.04 / s }));
      break;
    case "angleFlyIn":
    case "chaotic":
    case "explosion":
      c.forEach((el, i) => gsap.fromTo(el, { opacity: 0, x: rnd(-120, 120), y: rnd(-90, 90), rotation: rnd(-360, 360), scale: rnd(0.1, 2.2) }, { opacity: 1, x: 0, y: 0, rotation: 0, scale: 1, duration: 0.62 / s, delay: i * 0.035 / s }));
      break;
    case "bungee":
    case "superhero":
      gsap.fromTo(c, { opacity: 0, y: -180, rotation: -12 }, { opacity: 1, y: 0, rotation: 0, ...common, ease: "elastic.out(1,.35)" });
      break;
    case "pendulum":
      gsap.fromTo(c, { opacity: 0, rotation: -60, transformOrigin: "top center" }, { opacity: 1, rotation: 0, duration: 0.8 / s, stagger: 0.045 / s, ease: "elastic.out(.8,.5)" });
      break;
    case "rollBounce":
      gsap.fromTo(c, { opacity: 0, x: -85, rotation: -360 }, { opacity: 1, x: 0, rotation: 0, ...common, ease: "bounce.out" });
      break;
    case "blueFlash":
    case "bubblePulse":
    case "sonarPing":
      c.forEach((el, i) => gsap.fromTo(el, { opacity: 0, scale: 1.7, textShadow: "0 0 34px currentColor" }, { opacity: 1, scale: 1, textShadow: "0 0 0 transparent", duration: 0.5 / s, delay: i * 0.045 / s }));
      break;
    case "broadway": {
      const colors = ["#ffdd00", "#ff4400", "#ff00aa", "#5568ff", "#00d4ff"];
      c.forEach((el, i) => gsap.fromTo(el, { opacity: 0, scale: 0, color: colors[i % colors.length], textShadow: `0 0 22px ${colors[i % colors.length]}` }, { opacity: 1, scale: 1, duration: 0.42 / s, delay: i * 0.045 / s, ease: "back.out(1.7)" }));
      break;
    }
    case "exposure":
      gsap.fromTo(c, { opacity: 0, filter: "brightness(5)" }, { opacity: 1, filter: "brightness(1)", duration: 0.8 / s, stagger: 0.04 / s });
      break;
    case "flash":
    case "fluorescent":
    case "wordFlash":
      gsap.set(c, { opacity: 0 });
      c.forEach((el, i) => gsap.timeline({ delay: i * 0.055 / s }).to(el, { opacity: 1, duration: 0.05 / s }).to(el, { opacity: 0.15, duration: 0.05 / s }).to(el, { opacity: 1, duration: 0.12 / s }));
      break;
    default:
      gsap.fromTo(c, { opacity: 0, y: 32 }, { opacity: 1, y: 0, ...common });
  }
}
