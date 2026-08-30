"use strict";
var AETextAnimator = (() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // src/index.ts
  var index_exports = {};
  __export(index_exports, {
    animateText: () => animateText,
    categories: () => categories,
    destroyAnimation: () => destroyAnimation,
    getPreset: () => getPreset,
    listPresets: () => listPresets,
    presets: () => presets,
    renderAnimation: () => renderAnimation
  });

  // <data:text/javascript,export const gsap = globalThis.gsap;>
  var gsap = globalThis.gsap;

  // src/presets.ts
  var categories = [
    { id: "animate-in", name: "Animate In", nameZh: "\u5165\u573A" },
    { id: "animate-out", name: "Animate Out", nameZh: "\u51FA\u573A" },
    { id: "3d", name: "3D", nameZh: "3D" },
    { id: "blurs", name: "Blurs", nameZh: "\u6A21\u7CCA" },
    { id: "curves", name: "Curves", nameZh: "\u66F2\u7EBF" },
    { id: "fill", name: "Fill", nameZh: "\u586B\u5145" },
    { id: "mechanical", name: "Mechanical", nameZh: "\u673A\u68B0" },
    { id: "organic", name: "Organic", nameZh: "\u6709\u673A" },
    { id: "rotation", name: "Rotation", nameZh: "\u65CB\u8F6C" },
    { id: "scale", name: "Scale", nameZh: "\u7F29\u653E" },
    { id: "tracking", name: "Tracking", nameZh: "\u5B57\u8DDD" },
    { id: "misc", name: "Misc", nameZh: "\u5176\u4ED6" },
    { id: "light", name: "Light", nameZh: "\u706F\u5149" }
  ];
  var presets = [
    { id: "typewriter", name: "Typewriter", nameZh: "\u6253\u5B57\u673A", category: "animate-in", featured: true },
    { id: "fadeUpChars", name: "Fade Up Chars", nameZh: "\u9010\u5B57\u4E0A\u6D6E", category: "animate-in", featured: true },
    { id: "fadeUpWords", name: "Fade Up Words", nameZh: "\u9010\u8BCD\u4E0A\u6D6E", category: "animate-in", unit: "word" },
    { id: "flyInBottom", name: "Fly In Bottom", nameZh: "\u5E95\u90E8\u98DE\u5165", category: "animate-in", featured: true },
    { id: "flyInWithTwist", name: "Fly In Twist", nameZh: "\u626D\u8F6C\u98DE\u5165", category: "animate-in" },
    { id: "spinInChar", name: "Spin In Char", nameZh: "\u9010\u5B57\u65CB\u5165", category: "animate-in" },
    { id: "randomShuffle", name: "Random Shuffle", nameZh: "\u968F\u673A\u6563\u5165", category: "animate-in" },
    { id: "decoderFade", name: "Decoder Fade", nameZh: "\u89E3\u7801\u6DE1\u5165", category: "animate-in", featured: true },
    { id: "centerSpiral", name: "Center Spiral", nameZh: "\u4E2D\u5FC3\u87BA\u65CB", category: "animate-in" },
    { id: "dropInChar", name: "Drop In Char", nameZh: "\u9010\u5B57\u843D\u4E0B", category: "animate-in" },
    { id: "stretchInWord", name: "Stretch Word", nameZh: "\u5355\u8BCD\u62C9\u4F38", category: "animate-in", unit: "word" },
    { id: "wiperToCenter", name: "Wipe Center", nameZh: "\u5411\u4E2D\u64E6\u5165", category: "animate-in" },
    { id: "fadeOutChar", name: "Fade Out Char", nameZh: "\u9010\u5B57\u6DE1\u51FA", category: "animate-out" },
    { id: "fadeOutSlow", name: "Fade Out Slow", nameZh: "\u7F13\u6162\u6DE1\u51FA", category: "animate-out" },
    { id: "randomFlyOff", name: "Random Fly Off", nameZh: "\u968F\u673A\u98DE\u51FA", category: "animate-out" },
    { id: "slideOffRight", name: "Slide Off", nameZh: "\u5411\u53F3\u6ED1\u51FA", category: "animate-out" },
    { id: "encoderFadeOut", name: "Encoder Out", nameZh: "\u7F16\u7801\u6DE1\u51FA", category: "animate-out" },
    { id: "flipInX", name: "Flip In X", nameZh: "X \u8F74\u7FFB\u8F6C", category: "3d", featured: true },
    { id: "flipInY", name: "Flip In Y", nameZh: "Y \u8F74\u7FFB\u8F6C", category: "3d" },
    { id: "posZCascade", name: "Pos Z Cascade", nameZh: "Z \u8F74\u5C42\u53E0", category: "3d" },
    { id: "rotXCascade", name: "Rot X Cascade", nameZh: "X \u8F74\u5C42\u53E0", category: "3d" },
    { id: "rotYCascade", name: "Rot Y Cascade", nameZh: "Y \u8F74\u5C42\u53E0", category: "3d" },
    { id: "flyDownUnfold", name: "Fly Unfold", nameZh: "\u4E0B\u843D\u5C55\u5F00", category: "3d" },
    { id: "scrambleBlur", name: "Scramble Blur", nameZh: "\u6A21\u7CCA\u6253\u4E71", category: "3d" },
    { id: "spiralDown", name: "Spiral Down", nameZh: "\u87BA\u65CB\u4E0B\u843D", category: "3d" },
    { id: "tumbleForward", name: "Tumble Fwd", nameZh: "\u5411\u524D\u7FFB\u6EDA", category: "3d" },
    { id: "blurByWord", name: "Blur Word", nameZh: "\u9010\u8BCD\u6A21\u7CCA", category: "blurs", unit: "word" },
    { id: "bulletTrain", name: "Bullet Train", nameZh: "\u5B50\u5F39\u5217\u8F66", category: "blurs" },
    { id: "evaporate", name: "Evaporate", nameZh: "\u84B8\u53D1", category: "blurs" },
    { id: "foggy", name: "Foggy", nameZh: "\u96FE\u5316", category: "blurs" },
    { id: "transporter", name: "Transporter", nameZh: "\u4F20\u9001", category: "blurs" },
    { id: "bloomFlower", name: "Bloom Flower", nameZh: "\u7EFD\u653E", category: "curves" },
    { id: "clockwiseEntry", name: "Clockwise", nameZh: "\u987A\u65F6\u9488\u5165\u573A", category: "curves" },
    { id: "pinwheel", name: "Pinwheel", nameZh: "\u98CE\u8F66", category: "curves" },
    { id: "radialFlare", name: "Radial Flare", nameZh: "\u5F84\u5411\u5149\u6655", category: "curves" },
    { id: "spiralIn", name: "Spiral In", nameZh: "\u87BA\u65CB\u5165\u573A", category: "curves", featured: true },
    { id: "whirlIn", name: "Whirl In", nameZh: "\u65CB\u6DA1\u5165\u573A", category: "curves" },
    { id: "chasingStrokes", name: "Chasing Strokes", nameZh: "\u8FFD\u9010\u63CF\u8FB9", category: "fill" },
    { id: "fillColorWipe", name: "Color Wipe", nameZh: "\u8272\u5757\u64E6\u9664", category: "fill" },
    { id: "flickerColor", name: "Flicker Color", nameZh: "\u95EA\u70C1\u53D8\u8272", category: "fill" },
    { id: "pulseBlue", name: "Pulse Blue", nameZh: "\u84DD\u8272\u8109\u51B2", category: "fill" },
    { id: "rotateHue", name: "Rotate Hue", nameZh: "\u8272\u76F8\u65CB\u8F6C", category: "fill" },
    { id: "wigglyStroke", name: "Wiggly Stroke", nameZh: "\u6296\u52A8\u63CF\u8FB9", category: "fill" },
    { id: "algorithm", name: "Algorithm", nameZh: "\u7B97\u6CD5", category: "mechanical" },
    { id: "automation", name: "Automation", nameZh: "\u81EA\u52A8\u5316", category: "mechanical" },
    { id: "badReception", name: "Bad Reception", nameZh: "\u4FE1\u53F7\u4E0D\u826F", category: "mechanical" },
    { id: "doppler", name: "Doppler", nameZh: "\u591A\u666E\u52D2", category: "mechanical" },
    { id: "helicopter", name: "Helicopter", nameZh: "\u76F4\u5347\u673A", category: "mechanical" },
    { id: "mechanical", name: "Mechanical", nameZh: "\u673A\u68B0", category: "mechanical" },
    { id: "pistons", name: "Pistons", nameZh: "\u6D3B\u585E", category: "mechanical" },
    { id: "warp98", name: "Warp 9.8", nameZh: "\u66F2\u901F 9.8", category: "mechanical", featured: true },
    { id: "wobble", name: "Wobble", nameZh: "\u6447\u6446", category: "organic" },
    { id: "rubber", name: "Rubber", nameZh: "\u6A61\u80F6", category: "organic" },
    { id: "bounceIn", name: "Bounce In", nameZh: "\u5F39\u8DF3\u5165\u573A", category: "organic" },
    { id: "boiling", name: "Boiling", nameZh: "\u6CB8\u817E", category: "organic" },
    { id: "boomerang", name: "Boomerang", nameZh: "\u56DE\u65CB\u9556", category: "organic" },
    { id: "doubleHelix", name: "Double Helix", nameZh: "\u53CC\u87BA\u65CB", category: "organic" },
    { id: "dropBounce", name: "Drop Bounce", nameZh: "\u843D\u4E0B\u5F39\u8DF3", category: "organic" },
    { id: "flutter", name: "Flutter", nameZh: "\u98D8\u52A8", category: "organic" },
    { id: "oceanTide", name: "Ocean Tide", nameZh: "\u6F6E\u6C50", category: "organic" },
    { id: "ripple", name: "Ripple", nameZh: "\u6D9F\u6F2A", category: "organic" },
    { id: "wheatfield", name: "Wheatfield", nameZh: "\u9EA6\u6D6A", category: "organic" },
    { id: "dripDown", name: "Drip Down", nameZh: "\u6EF4\u843D", category: "rotation" },
    { id: "flipUp", name: "Flip Up", nameZh: "\u4E0A\u7FFB", category: "rotation" },
    { id: "fullRotation", name: "Full Rotation", nameZh: "\u5168\u65CB\u8F6C", category: "rotation" },
    { id: "loopyLoop", name: "Loopy Loop", nameZh: "\u5FAA\u73AF\u65CB\u8F6C", category: "rotation" },
    { id: "randomRotation", name: "Random Rot", nameZh: "\u968F\u673A\u65CB\u8F6C", category: "rotation" },
    { id: "rotateChars", name: "Rotate Chars", nameZh: "\u9010\u5B57\u65CB\u8F6C", category: "rotation" },
    { id: "swirlyRotation", name: "Swirly Rot", nameZh: "\u6F29\u6DA1\u65CB\u8F6C", category: "rotation" },
    { id: "whirlwind", name: "Whirlwind", nameZh: "\u65CB\u98CE", category: "rotation" },
    { id: "largeScale", name: "Large Scale", nameZh: "\u5927\u7F29\u653E", category: "scale" },
    { id: "letsDance", name: "Let's Dance", nameZh: "\u821E\u52A8", category: "scale" },
    { id: "scaleDown", name: "Scale Down", nameZh: "\u7F29\u5C0F\u5165\u573A", category: "scale" },
    { id: "scaleUp", name: "Scale Up", nameZh: "\u653E\u5927\u5165\u573A", category: "scale" },
    { id: "scaleUpWord", name: "Scale Up Word", nameZh: "\u9010\u8BCD\u653E\u5927", category: "scale", unit: "word" },
    { id: "wigglyScaleWipe", name: "Wiggly Scale", nameZh: "\u6296\u52A8\u7F29\u653E", category: "scale" },
    { id: "zoomForward", name: "Zoom Fwd", nameZh: "\u524D\u51B2\u7F29\u653E", category: "scale" },
    { id: "increaseTracking", name: "Increase", nameZh: "\u5B57\u8DDD\u5C55\u5F00", category: "tracking", unit: "wrapper" },
    { id: "decreaseTracking", name: "Decrease", nameZh: "\u5B57\u8DDD\u6536\u7F29", category: "tracking", unit: "wrapper" },
    { id: "contract", name: "Contract", nameZh: "\u6536\u7F29", category: "tracking", unit: "wrapper" },
    { id: "extend", name: "Extend", nameZh: "\u5EF6\u4F38", category: "tracking", unit: "wrapper" },
    { id: "magnify", name: "Magnify", nameZh: "\u653E\u5927\u955C", category: "tracking" },
    { id: "spasm", name: "Spasm", nameZh: "\u75C9\u631B", category: "tracking" },
    { id: "angleFlyIn", name: "Angle Fly-In", nameZh: "\u659C\u5411\u98DE\u5165", category: "misc" },
    { id: "backFlip", name: "Back Flip", nameZh: "\u540E\u7A7A\u7FFB", category: "misc" },
    { id: "bungee", name: "Bungee", nameZh: "\u8E66\u6781", category: "misc" },
    { id: "chaotic", name: "Chaotic", nameZh: "\u6DF7\u6C8C", category: "misc" },
    { id: "explosion", name: "Explosion", nameZh: "\u7206\u70B8", category: "misc" },
    { id: "pendulum", name: "Pendulum", nameZh: "\u949F\u6446", category: "misc" },
    { id: "rollBounce", name: "Roll Bounce", nameZh: "\u6EDA\u52A8\u5F39\u8DF3", category: "misc" },
    { id: "smokey", name: "Smokey", nameZh: "\u70DF\u96FE", category: "misc" },
    { id: "superhero", name: "Superhero", nameZh: "\u8D85\u7EA7\u82F1\u96C4", category: "misc" },
    { id: "vanishingPoint", name: "Vanish Point", nameZh: "\u6D88\u5931\u70B9", category: "misc" },
    { id: "blueFlash", name: "Blue Flash", nameZh: "\u84DD\u5149\u95EA", category: "light" },
    { id: "broadway", name: "Broadway", nameZh: "\u767E\u8001\u6C47", category: "light", featured: true },
    { id: "bubblePulse", name: "Bubble Pulse", nameZh: "\u6C14\u6CE1\u8109\u51B2", category: "light" },
    { id: "exposure", name: "Exposure", nameZh: "\u66DD\u5149", category: "light" },
    { id: "flash", name: "Flash", nameZh: "\u95EA\u5149", category: "light" },
    { id: "fluorescent", name: "Fluorescent", nameZh: "\u8367\u5149", category: "light" },
    { id: "sonarPing", name: "Sonar Ping", nameZh: "\u58F0\u5450", category: "light" },
    { id: "wordFlash", name: "Word Flash", nameZh: "\u9010\u8BCD\u95EA\u5149", category: "light", unit: "word" }
  ];
  function getPreset(id) {
    return presets.find((preset) => preset.id === id) ?? presets[0];
  }
  function listPresets(category) {
    if (!category) return presets;
    return presets.filter((preset) => preset.category === category);
  }

  // src/styles.ts
  var STYLE_ID = "ae-text-animator-styles";
  var CSS = `
.ae-text-root {
  position: relative;
  display: inline-block;
  max-width: 100%;
  transform-style: preserve-3d;
  line-height: 1.04;
}
.ae-text-unit {
  display: inline-block;
  white-space: pre;
  will-change: transform, opacity, filter;
}
.ae-text-line,
.ae-text-font-line {
  display: block;
  white-space: nowrap;
}
.ae-text-wrapper {
  display: inline-block;
}
`;
  function ensureStyles() {
    if (typeof document === "undefined") return;
    if (document.getElementById(STYLE_ID)) return;
    const style = document.createElement("style");
    style.id = STYLE_ID;
    style.textContent = CSS;
    document.head.appendChild(style);
  }

  // src/engine.ts
  var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%";
  var rnd = (a, b) => a + Math.random() * (b - a);
  var wave = (i, amp, f) => Math.sin(i * f) * amp;
  var activeTimers = /* @__PURE__ */ new WeakMap();
  function animateText(element, options = {}) {
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
      align: options.align ?? "center"
    });
  }
  function destroyAnimation(wrapper) {
    clearRegisteredTimers(wrapper);
    gsap.killTweensOf([wrapper, ...Array.from(wrapper.querySelectorAll("*"))]);
    wrapper.innerHTML = "";
  }
  function renderAnimation(wrapper, settings) {
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
  function fontStack(font) {
    return `'${font}', Inter, system-ui, sans-serif`;
  }
  function buildTextUnits(wrapper, text, unit, headingFont, bodyFont) {
    const value = text.trim() || "After Effects";
    const lines = value.split("\n");
    const setLineFont = (element, lineIndex) => {
      element.style.fontFamily = fontStack(lineIndex === 0 ? headingFont : bodyFont);
    };
    if (unit === "wrapper") {
      const span = document.createElement("span");
      span.className = "ae-text-unit ae-text-wrapper";
      lines.forEach((line, lineIndex) => {
        const lineSpan = document.createElement("span");
        lineSpan.className = "ae-text-font-line";
        lineSpan.textContent = line || "\xA0";
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
        span.textContent = line || "\xA0";
        setLineFont(span, lineIndex);
        wrapper.appendChild(span);
        return span;
      });
    }
    if (unit === "word") {
      const targets2 = [];
      lines.forEach((line, lineIndex) => {
        line.split(/(\s+)/).forEach((part) => {
          const span = document.createElement("span");
          span.textContent = /^\s+$/.test(part) ? part.replace(/ /g, "\xA0") : part;
          setLineFont(span, lineIndex);
          if (!/^\s+$/.test(part)) {
            span.className = "ae-text-unit ae-text-word";
            targets2.push(span);
          }
          wrapper.appendChild(span);
        });
        if (lineIndex < lines.length - 1) wrapper.appendChild(document.createElement("br"));
      });
      return targets2;
    }
    const targets = [];
    lines.forEach((line, lineIndex) => {
      [...line].forEach((char) => {
        const span = document.createElement("span");
        span.className = "ae-text-unit ae-text-char";
        span.textContent = char === " " ? "\xA0" : char;
        setLineFont(span, lineIndex);
        wrapper.appendChild(span);
        targets.push(span);
      });
      if (lineIndex < lines.length - 1) wrapper.appendChild(document.createElement("br"));
    });
    return targets;
  }
  function applyColor(targets, settings) {
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
  function defaultUnit(id) {
    if (id.includes("Word") || ["wordFlash", "blurByWord", "rotatePerWord"].includes(id)) return "word";
    if (id.includes("Line")) return "line";
    if (["increaseTracking", "decreaseTracking", "contract", "extend", "stretchy", "emerge"].includes(id)) {
      return "wrapper";
    }
    return "char";
  }
  function registerTimer(wrapper, timer) {
    activeTimers.set(wrapper, [...activeTimers.get(wrapper) ?? [], timer]);
  }
  function clearRegisteredTimers(wrapper) {
    activeTimers.get(wrapper)?.forEach((timer) => window.clearInterval(timer));
    activeTimers.delete(wrapper);
  }
  function playPreset(wrapper, id, c, speed) {
    const s = Math.max(0.3, speed);
    const common = {
      duration: 0.56 / s,
      stagger: 0.045 / s,
      ease: "power2.out"
    };
    switch (id) {
      case "typewriter":
        gsap.set(c, { opacity: 0 });
        gsap.to(c, { opacity: 1, duration: 1e-3, stagger: 0.055 / s, ease: "none" });
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
          const angle = i / Math.max(c.length, 1) * Math.PI * 2;
          gsap.fromTo(el, { opacity: 0, x: Math.cos(angle) * 100, y: Math.sin(angle) * 100, scale: 0 }, { opacity: 1, x: 0, y: 0, scale: 1, duration: 0.7 / s, delay: i * 0.025 / s });
        });
        break;
      case "clockwiseEntry":
      case "pinwheel":
      case "whirlIn":
      case "whirlwind":
        c.forEach((el, i) => {
          const angle = i / Math.max(c.length, 1) * Math.PI * 3;
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
          const hue = i / Math.max(c.length, 1) * 360;
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
  return __toCommonJS(index_exports);
})();
//# sourceMappingURL=index.global.js.map