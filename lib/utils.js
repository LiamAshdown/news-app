import tinycolor from "tinycolor2";

export const DarkenColor = (color, percent) => {
  return tinycolor(color).darken(percent).toString();
};

export const LightenColor = (color, percent) => {
  return tinycolor(color).lighten(percent).toString();
};
