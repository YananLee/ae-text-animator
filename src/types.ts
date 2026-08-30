export type PresetCategoryId =
  | "animate-in"
  | "animate-out"
  | "3d"
  | "blurs"
  | "curves"
  | "fill"
  | "mechanical"
  | "organic"
  | "rotation"
  | "scale"
  | "tracking"
  | "misc"
  | "light";

export type UnitMode = "char" | "word" | "line" | "wrapper";

export type TextPreset = {
  id: string;
  name: string;
  nameZh: string;
  category: PresetCategoryId;
  unit?: UnitMode;
  featured?: boolean;
};

export type AnimateTextOptions = {
  text?: string;
  preset?: string;
  speed?: number;
  fontSize?: number;
  fontFamily?: string;
  bodyFont?: string;
  color?: string;
  colorMode?: "solid" | "gradient" | "multi";
  gradient?: string;
  multiColors?: string[];
  align?: "left" | "center" | "right";
};

export type AnimationSettings = {
  text: string;
  template: TextPreset;
  speed: number;
  fontSize: number;
  fontFamily: string;
  bodyFont: string;
  textColor: string;
  colorMode: "solid" | "gradient" | "multi";
  gradient: string;
  multiColors: string[];
  align: "left" | "center" | "right";
};
