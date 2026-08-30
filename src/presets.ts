import type { PresetCategoryId, TextPreset } from "./types";

export const categories: { id: PresetCategoryId; name: string; nameZh: string }[] = [
  { id: "animate-in", name: "Animate In", nameZh: "入场" },
  { id: "animate-out", name: "Animate Out", nameZh: "出场" },
  { id: "3d", name: "3D", nameZh: "3D" },
  { id: "blurs", name: "Blurs", nameZh: "模糊" },
  { id: "curves", name: "Curves", nameZh: "曲线" },
  { id: "fill", name: "Fill", nameZh: "填充" },
  { id: "mechanical", name: "Mechanical", nameZh: "机械" },
  { id: "organic", name: "Organic", nameZh: "有机" },
  { id: "rotation", name: "Rotation", nameZh: "旋转" },
  { id: "scale", name: "Scale", nameZh: "缩放" },
  { id: "tracking", name: "Tracking", nameZh: "字距" },
  { id: "misc", name: "Misc", nameZh: "其他" },
  { id: "light", name: "Light", nameZh: "灯光" },
];

export const presets: TextPreset[] = [
  { id: "typewriter", name: "Typewriter", nameZh: "打字机", category: "animate-in", featured: true },
  { id: "fadeUpChars", name: "Fade Up Chars", nameZh: "逐字上浮", category: "animate-in", featured: true },
  { id: "fadeUpWords", name: "Fade Up Words", nameZh: "逐词上浮", category: "animate-in", unit: "word" },
  { id: "flyInBottom", name: "Fly In Bottom", nameZh: "底部飞入", category: "animate-in", featured: true },
  { id: "flyInWithTwist", name: "Fly In Twist", nameZh: "扭转飞入", category: "animate-in" },
  { id: "spinInChar", name: "Spin In Char", nameZh: "逐字旋入", category: "animate-in" },
  { id: "randomShuffle", name: "Random Shuffle", nameZh: "随机散入", category: "animate-in" },
  { id: "decoderFade", name: "Decoder Fade", nameZh: "解码淡入", category: "animate-in", featured: true },
  { id: "centerSpiral", name: "Center Spiral", nameZh: "中心螺旋", category: "animate-in" },
  { id: "dropInChar", name: "Drop In Char", nameZh: "逐字落下", category: "animate-in" },
  { id: "stretchInWord", name: "Stretch Word", nameZh: "单词拉伸", category: "animate-in", unit: "word" },
  { id: "wiperToCenter", name: "Wipe Center", nameZh: "向中擦入", category: "animate-in" },

  { id: "fadeOutChar", name: "Fade Out Char", nameZh: "逐字淡出", category: "animate-out" },
  { id: "fadeOutSlow", name: "Fade Out Slow", nameZh: "缓慢淡出", category: "animate-out" },
  { id: "randomFlyOff", name: "Random Fly Off", nameZh: "随机飞出", category: "animate-out" },
  { id: "slideOffRight", name: "Slide Off", nameZh: "向右滑出", category: "animate-out" },
  { id: "encoderFadeOut", name: "Encoder Out", nameZh: "编码淡出", category: "animate-out" },

  { id: "flipInX", name: "Flip In X", nameZh: "X 轴翻转", category: "3d", featured: true },
  { id: "flipInY", name: "Flip In Y", nameZh: "Y 轴翻转", category: "3d" },
  { id: "posZCascade", name: "Pos Z Cascade", nameZh: "Z 轴层叠", category: "3d" },
  { id: "rotXCascade", name: "Rot X Cascade", nameZh: "X 轴层叠", category: "3d" },
  { id: "rotYCascade", name: "Rot Y Cascade", nameZh: "Y 轴层叠", category: "3d" },
  { id: "flyDownUnfold", name: "Fly Unfold", nameZh: "下落展开", category: "3d" },
  { id: "scrambleBlur", name: "Scramble Blur", nameZh: "模糊打乱", category: "3d" },
  { id: "spiralDown", name: "Spiral Down", nameZh: "螺旋下落", category: "3d" },
  { id: "tumbleForward", name: "Tumble Fwd", nameZh: "向前翻滚", category: "3d" },

  { id: "blurByWord", name: "Blur Word", nameZh: "逐词模糊", category: "blurs", unit: "word" },
  { id: "bulletTrain", name: "Bullet Train", nameZh: "子弹列车", category: "blurs" },
  { id: "evaporate", name: "Evaporate", nameZh: "蒸发", category: "blurs" },
  { id: "foggy", name: "Foggy", nameZh: "雾化", category: "blurs" },
  { id: "transporter", name: "Transporter", nameZh: "传送", category: "blurs" },

  { id: "bloomFlower", name: "Bloom Flower", nameZh: "绽放", category: "curves" },
  { id: "clockwiseEntry", name: "Clockwise", nameZh: "顺时针入场", category: "curves" },
  { id: "pinwheel", name: "Pinwheel", nameZh: "风车", category: "curves" },
  { id: "radialFlare", name: "Radial Flare", nameZh: "径向光晕", category: "curves" },
  { id: "spiralIn", name: "Spiral In", nameZh: "螺旋入场", category: "curves", featured: true },
  { id: "whirlIn", name: "Whirl In", nameZh: "旋涡入场", category: "curves" },

  { id: "chasingStrokes", name: "Chasing Strokes", nameZh: "追逐描边", category: "fill" },
  { id: "fillColorWipe", name: "Color Wipe", nameZh: "色块擦除", category: "fill" },
  { id: "flickerColor", name: "Flicker Color", nameZh: "闪烁变色", category: "fill" },
  { id: "pulseBlue", name: "Pulse Blue", nameZh: "蓝色脉冲", category: "fill" },
  { id: "rotateHue", name: "Rotate Hue", nameZh: "色相旋转", category: "fill" },
  { id: "wigglyStroke", name: "Wiggly Stroke", nameZh: "抖动描边", category: "fill" },

  { id: "algorithm", name: "Algorithm", nameZh: "算法", category: "mechanical" },
  { id: "automation", name: "Automation", nameZh: "自动化", category: "mechanical" },
  { id: "badReception", name: "Bad Reception", nameZh: "信号不良", category: "mechanical" },
  { id: "doppler", name: "Doppler", nameZh: "多普勒", category: "mechanical" },
  { id: "helicopter", name: "Helicopter", nameZh: "直升机", category: "mechanical" },
  { id: "mechanical", name: "Mechanical", nameZh: "机械", category: "mechanical" },
  { id: "pistons", name: "Pistons", nameZh: "活塞", category: "mechanical" },
  { id: "warp98", name: "Warp 9.8", nameZh: "曲速 9.8", category: "mechanical", featured: true },

  { id: "wobble", name: "Wobble", nameZh: "摇摆", category: "organic" },
  { id: "rubber", name: "Rubber", nameZh: "橡胶", category: "organic" },
  { id: "bounceIn", name: "Bounce In", nameZh: "弹跳入场", category: "organic" },
  { id: "boiling", name: "Boiling", nameZh: "沸腾", category: "organic" },
  { id: "boomerang", name: "Boomerang", nameZh: "回旋镖", category: "organic" },
  { id: "doubleHelix", name: "Double Helix", nameZh: "双螺旋", category: "organic" },
  { id: "dropBounce", name: "Drop Bounce", nameZh: "落下弹跳", category: "organic" },
  { id: "flutter", name: "Flutter", nameZh: "飘动", category: "organic" },
  { id: "oceanTide", name: "Ocean Tide", nameZh: "潮汐", category: "organic" },
  { id: "ripple", name: "Ripple", nameZh: "涟漪", category: "organic" },
  { id: "wheatfield", name: "Wheatfield", nameZh: "麦浪", category: "organic" },

  { id: "dripDown", name: "Drip Down", nameZh: "滴落", category: "rotation" },
  { id: "flipUp", name: "Flip Up", nameZh: "上翻", category: "rotation" },
  { id: "fullRotation", name: "Full Rotation", nameZh: "全旋转", category: "rotation" },
  { id: "loopyLoop", name: "Loopy Loop", nameZh: "循环旋转", category: "rotation" },
  { id: "randomRotation", name: "Random Rot", nameZh: "随机旋转", category: "rotation" },
  { id: "rotateChars", name: "Rotate Chars", nameZh: "逐字旋转", category: "rotation" },
  { id: "swirlyRotation", name: "Swirly Rot", nameZh: "漩涡旋转", category: "rotation" },
  { id: "whirlwind", name: "Whirlwind", nameZh: "旋风", category: "rotation" },

  { id: "largeScale", name: "Large Scale", nameZh: "大缩放", category: "scale" },
  { id: "letsDance", name: "Let's Dance", nameZh: "舞动", category: "scale" },
  { id: "scaleDown", name: "Scale Down", nameZh: "缩小入场", category: "scale" },
  { id: "scaleUp", name: "Scale Up", nameZh: "放大入场", category: "scale" },
  { id: "scaleUpWord", name: "Scale Up Word", nameZh: "逐词放大", category: "scale", unit: "word" },
  { id: "wigglyScaleWipe", name: "Wiggly Scale", nameZh: "抖动缩放", category: "scale" },
  { id: "zoomForward", name: "Zoom Fwd", nameZh: "前冲缩放", category: "scale" },

  { id: "increaseTracking", name: "Increase", nameZh: "字距展开", category: "tracking", unit: "wrapper" },
  { id: "decreaseTracking", name: "Decrease", nameZh: "字距收缩", category: "tracking", unit: "wrapper" },
  { id: "contract", name: "Contract", nameZh: "收缩", category: "tracking", unit: "wrapper" },
  { id: "extend", name: "Extend", nameZh: "延伸", category: "tracking", unit: "wrapper" },
  { id: "magnify", name: "Magnify", nameZh: "放大镜", category: "tracking" },
  { id: "spasm", name: "Spasm", nameZh: "痉挛", category: "tracking" },

  { id: "angleFlyIn", name: "Angle Fly-In", nameZh: "斜向飞入", category: "misc" },
  { id: "backFlip", name: "Back Flip", nameZh: "后空翻", category: "misc" },
  { id: "bungee", name: "Bungee", nameZh: "蹦极", category: "misc" },
  { id: "chaotic", name: "Chaotic", nameZh: "混沌", category: "misc" },
  { id: "explosion", name: "Explosion", nameZh: "爆炸", category: "misc" },
  { id: "pendulum", name: "Pendulum", nameZh: "钟摆", category: "misc" },
  { id: "rollBounce", name: "Roll Bounce", nameZh: "滚动弹跳", category: "misc" },
  { id: "smokey", name: "Smokey", nameZh: "烟雾", category: "misc" },
  { id: "superhero", name: "Superhero", nameZh: "超级英雄", category: "misc" },
  { id: "vanishingPoint", name: "Vanish Point", nameZh: "消失点", category: "misc" },

  { id: "blueFlash", name: "Blue Flash", nameZh: "蓝光闪", category: "light" },
  { id: "broadway", name: "Broadway", nameZh: "百老汇", category: "light", featured: true },
  { id: "bubblePulse", name: "Bubble Pulse", nameZh: "气泡脉冲", category: "light" },
  { id: "exposure", name: "Exposure", nameZh: "曝光", category: "light" },
  { id: "flash", name: "Flash", nameZh: "闪光", category: "light" },
  { id: "fluorescent", name: "Fluorescent", nameZh: "荧光", category: "light" },
  { id: "sonarPing", name: "Sonar Ping", nameZh: "声呐", category: "light" },
  { id: "wordFlash", name: "Word Flash", nameZh: "逐词闪光", category: "light", unit: "word" },
];

export function getPreset(id?: string): TextPreset {
  return presets.find((preset) => preset.id === id) ?? presets[0];
}

export function listPresets(category?: PresetCategoryId): TextPreset[] {
  if (!category) return presets;
  return presets.filter((preset) => preset.category === category);
}
