const { animateText, categories, listPresets } = AETextAnimator;

const stage = document.querySelector("#stage");
const textInput = document.querySelector("#text");
const speedInput = document.querySelector("#speed");
const colorInput = document.querySelector("#color");
const tabs = document.querySelector("#tabs");
const presetBox = document.querySelector("#presets");

let category = "animate-in";
let preset = "typewriter";

function play() {
  animateText(stage, {
    text: textInput.value || "AE 动态字体",
    preset,
    speed: Number(speedInput.value),
    color: colorInput.value,
    fontFamily: "Bebas Neue",
    fontSize: Math.min(84, Math.max(42, Math.round(window.innerWidth / 14))),
    align: "center",
  });
}

function renderTabs() {
  tabs.innerHTML = "";
  categories.forEach((item) => {
    const button = document.createElement("button");
    button.className = `tab${item.id === category ? " active" : ""}`;
    button.type = "button";
    button.textContent = `${item.nameZh} / ${item.name}`;
    button.addEventListener("click", () => {
      category = item.id;
      const next = listPresets(category)[0];
      if (next) preset = next.id;
      renderTabs();
      renderPresets();
      play();
    });
    tabs.appendChild(button);
  });
}

function renderPresets() {
  presetBox.innerHTML = "";
  listPresets(category).forEach((item) => {
    const button = document.createElement("button");
    button.className = `preset${item.id === preset ? " active" : ""}`;
    button.type = "button";
    button.textContent = `${item.nameZh} · ${item.name}`;
    button.addEventListener("click", () => {
      preset = item.id;
      renderPresets();
      play();
    });
    presetBox.appendChild(button);
  });
}

document.querySelector("#replay").addEventListener("click", play);
textInput.addEventListener("change", play);
speedInput.addEventListener("change", play);
colorInput.addEventListener("change", play);
window.addEventListener("resize", () => play());

renderTabs();
renderPresets();
play();
