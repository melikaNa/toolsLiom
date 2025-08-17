/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon40IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon40Icon(props: Icon40IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 -0.5 25 25"}
      fill={"none"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g
        stroke={"currentColor"}
        strokeWidth={"1.5"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      >
        <path
          clipRule={"evenodd"}
          d={
            "M17.676 14.248a2.928 2.928 0 01-2.928 2.928h-7.32A2.928 2.928 0 014.5 14.248v-7.32A2.928 2.928 0 017.428 4h7.32a2.928 2.928 0 012.928 2.928v7.32z"
          }
        ></path>

        <path d={"M10.252 20h7.32a2.928 2.928 0 002.928-2.928v-7.32"}></path>
      </g>
    </svg>
  );
}

export default Icon40Icon;
/* prettier-ignore-end */
