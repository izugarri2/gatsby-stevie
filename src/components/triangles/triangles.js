/** @jsxImportSource theme-ui */
import { transparentize } from "@theme-ui/color";
import { useThemeUI } from "@theme-ui/core";
import React from "react";

export class Orientation {
  static LEFT = {
    key: "left",
    value: "Left",
    adjacent1: () => Orientation.BOTTOM,
    adjacent2: () => Orientation.TOP,
    posUnit: "vh",
    sizeUnit: "vw",
  };

  static TOP = {
    key: "top",
    value: "Top",
    adjacent1: () => Orientation.LEFT,
    adjacent2: () => Orientation.RIGHT,
    posUnit: "vw",
    sizeUnit: "vh",
  };

  static RIGHT = {
    key: "right",
    value: "Right",
    adjacent1: () => Orientation.TOP,
    adjacent2: () => Orientation.BOTTOM,
    posUnit: "vh",
    sizeUnit: "vw",
  };

  static BOTTOM = {
    key: "bottom",
    value: "Bottom",
    adjacent1: () => Orientation.RIGHT,
    adjacent2: () => Orientation.LEFT,
    posUnit: "vw",
    sizeUnit: "vh",
  };
}

const makeBorder = (orientation, size, color) => ({
  [`border${orientation.value}`]: `${size}${orientation.sizeUnit} solid ${color}`,
  [`border${
    orientation.adjacent1().value
  }`]: `${size}${orientation.sizeUnit} solid transparent`,
  [`border${
    orientation.adjacent2().value
  }`]: `${size}${orientation.sizeUnit} solid transparent`,
});

const Triangles = ({
  count = 10,
  size = 50,
  orientation = Orientation.BOTTOM,
  color = "primary",
}) => {
  const pos = 100 / count;
  const { theme } = useThemeUI();
  const colorValue = transparentize(color, 0.75)(theme);

  return [...Array(count).keys()].map((num) => (
    <div
      key={`${count}-${size}-${color}-${num}`}
      sx={{
        ...makeBorder(
          orientation,
          size * (Math.random() * (1.5 - 0.5) + 0.5),
          colorValue
        ),
        position: "absolute",
        [orientation.key]: 0,
        [orientation.adjacent1().key]: `${pos * num}${orientation.posUnit}`,
      }}
    ></div>
  ));
};

export default React.memo(Triangles);
