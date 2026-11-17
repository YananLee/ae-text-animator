# AE Text Animator

**After Effects–style kinetic typography for the web. / AE 动态字体库 · AE 文字动画开源库**

Browser presets for classic After Effects text animation: typewriter, fade, flip, blur, scale, tracking, 3D, mechanical, organic, and light effects. 90+ AE-style kinetic type presets, no After Effects plugin required.

- Live editor: [TypeMotion.Art](https://www.typemotion.art)
- Text animation templates: [typemotion.art/templates/text-animation](https://www.typemotion.art/templates/text-animation)
- Demo playground: [GitHub Pages](https://yananlee.github.io/ae-text-animator/)

This repository is the open-source animation engine. TypeMotion.Art is the full visual editor — change copy, fonts, color, timing, canvas, and export from the browser.

## 中文简介

`ae-text-animator` 是一套 **AE 动态字体 / AE 文字动画** 开源库，把 After Effects 里常见的文字入场、出场、翻转、模糊、缩放、字距、灯光预设搬到网页里。

适合做标题动画、片头字效、kinetic typography、动态字体演示。完整可视化编辑请用 [TypeMotion.Art](https://www.typemotion.art)。

## Install

```bash
npm install typemotion-art-text-animation gsap
```

GSAP is a peer dependency. Use it under the [GSAP license](https://gsap.com/community/standard-license/).

## Usage

```js
import { animateText, presets } from "typemotion-art-text-animation";

const el = document.querySelector("#headline");

animateText(el, {
  text: "After Effects",
  preset: "typewriter",
  speed: 1,
  fontSize: 72,
  fontFamily: "Inter",
  color: "#f4f0ea",
  align: "center",
});
```

CDN / browser:

```html
<script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/typemotion-art-text-animation/dist/index.global.js"></script>
<script>
  AETextAnimator.animateText(document.querySelector("#headline"), {
    text: "AE 动态字体",
    preset: "flyInBottom",
  });
</script>
```

Replay the same node with another preset, or call `destroyAnimation(el)` to stop timers and tweens.

## Options

| Option | Type | Default | Description |
| --- | --- | --- | --- |
| `text` | `string` | `"After Effects"` | Supports `\n` line breaks |
| `preset` | `string` | `"typewriter"` | Preset id from the catalog |
| `speed` | `number` | `1` | Playback speed |
| `fontSize` | `number` | `72` | Font size in px |
| `fontFamily` | `string` | `"Inter"` | Heading / first-line font |
| `bodyFont` | `string` | same as `fontFamily` | Extra lines |
| `color` | `string` | `"#f4f0ea"` | Solid color |
| `colorMode` | `"solid" \| "gradient" \| "multi"` | `"solid"` | Color mode |
| `gradient` | `string` | yellow → pink | CSS gradient when `colorMode` is `gradient` |
| `multiColors` | `string[]` | — | Per-character colors |
| `align` | `"left" \| "center" \| "right"` | `"center"` | Alignment |

## Preset catalog / 预设目录

90+ After Effects–style text animation presets, grouped like AE text animators.

<details>
<summary>Animate In / 入场</summary>

`typewriter` 打字机 · `fadeUpChars` 逐字上浮 · `fadeUpWords` 逐词上浮 · `flyInBottom` 底部飞入 · `flyInWithTwist` 扭转飞入 · `spinInChar` 逐字旋入 · `randomShuffle` 随机散入 · `decoderFade` 解码淡入 · `centerSpiral` 中心螺旋 · `dropInChar` 逐字落下 · `stretchInWord` 单词拉伸 · `wiperToCenter` 向中擦入
</details>

<details>
<summary>Animate Out / 出场</summary>

`fadeOutChar` 逐字淡出 · `fadeOutSlow` 缓慢淡出 · `randomFlyOff` 随机飞出 · `slideOffRight` 向右滑出 · `encoderFadeOut` 编码淡出
</details>

<details>
<summary>3D</summary>

`flipInX` X 轴翻转 · `flipInY` Y 轴翻转 · `posZCascade` Z 轴层叠 · `rotXCascade` X 轴层叠 · `rotYCascade` Y 轴层叠 · `flyDownUnfold` 下落展开 · `scrambleBlur` 模糊打乱 · `spiralDown` 螺旋下落 · `tumbleForward` 向前翻滚
</details>

<details>
<summary>Blurs / 模糊</summary>

`blurByWord` 逐词模糊 · `bulletTrain` 子弹列车 · `evaporate` 蒸发 · `foggy` 雾化 · `transporter` 传送
</details>

<details>
<summary>Curves / 曲线</summary>

`bloomFlower` 绽放 · `clockwiseEntry` 顺时针入场 · `pinwheel` 风车 · `radialFlare` 径向光晕 · `spiralIn` 螺旋入场 · `whirlIn` 旋涡入场
</details>

<details>
<summary>Fill / 填充</summary>

`chasingStrokes` 追逐描边 · `fillColorWipe` 色块擦除 · `flickerColor` 闪烁变色 · `pulseBlue` 蓝色脉冲 · `rotateHue` 色相旋转 · `wigglyStroke` 抖动描边
</details>

<details>
<summary>Mechanical / 机械</summary>

`algorithm` 算法 · `automation` 自动化 · `badReception` 信号不良 · `doppler` 多普勒 · `helicopter` 直升机 · `mechanical` 机械 · `pistons` 活塞 · `warp98` 曲速 9.8
</details>

<details>
<summary>Organic / 有机</summary>

`wobble` 摇摆 · `rubber` 橡胶 · `bounceIn` 弹跳入场 · `boiling` 沸腾 · `boomerang` 回旋镖 · `doubleHelix` 双螺旋 · `dropBounce` 落下弹跳 · `flutter` 飘动 · `oceanTide` 潮汐 · `ripple` 涟漪 · `wheatfield` 麦浪
</details>

<details>
<summary>Rotation / 旋转</summary>

`dripDown` 滴落 · `flipUp` 上翻 · `fullRotation` 全旋转 · `loopyLoop` 循环旋转 · `randomRotation` 随机旋转 · `rotateChars` 逐字旋转 · `swirlyRotation` 漩涡旋转 · `whirlwind` 旋风
</details>

<details>
<summary>Scale / 缩放</summary>

`largeScale` 大缩放 · `letsDance` 舞动 · `scaleDown` 缩小入场 · `scaleUp` 放大入场 · `scaleUpWord` 逐词放大 · `wigglyScaleWipe` 抖动缩放 · `zoomForward` 前冲缩放
</details>

<details>
<summary>Tracking / 字距</summary>

`increaseTracking` 字距展开 · `decreaseTracking` 字距收缩 · `contract` 收缩 · `extend` 延伸 · `magnify` 放大镜 · `spasm` 痉挛
</details>

<details>
<summary>Misc / 其他</summary>

`angleFlyIn` 斜向飞入 · `backFlip` 后空翻 · `bungee` 蹦极 · `chaotic` 混沌 · `explosion` 爆炸 · `pendulum` 钟摆 · `rollBounce` 滚动弹跳 · `smokey` 烟雾 · `superhero` 超级英雄 · `vanishingPoint` 消失点
</details>

<details>
<summary>Light / 灯光</summary>

`blueFlash` 蓝光闪 · `broadway` 百老汇 · `bubblePulse` 气泡脉冲 · `exposure` 曝光 · `flash` 闪光 · `fluorescent` 荧光 · `sonarPing` 声呐 · `wordFlash` 逐词闪光
</details>

```js
import { categories, listPresets, presets } from "typemotion-art-text-animation";

listPresets("animate-in");
presets.filter((item) => item.featured);
```

## Related / 相关产品

Build, preview, and export these AE text animations in the browser:

**[TypeMotion.Art](https://www.typemotion.art)** — online text animation maker / 在线 AE 动态字体与文字动画编辑器.

## License

MIT. GSAP remains under its own license.

## Additional SVG packages

Small local SVG utilities are maintained in [`python/`](./python/), [`jsr/`](./jsr/), and [`rust/`](./rust/). They do not call the website's export or AI service.

- JSR: [`@yananlee/typemotion-art-svg`](https://jsr.io/@yananlee/typemotion-art-svg)
- Rust: [`typemotion-art-svg`](https://crates.io/crates/typemotion-art-svg)
- Python: `typemotion-art-svg` source and built distributions are ready in `python/`; PyPI upload is pending an account publishing credential.
