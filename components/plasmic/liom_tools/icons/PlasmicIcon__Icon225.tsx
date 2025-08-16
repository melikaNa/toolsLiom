/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon225IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon225Icon(props: Icon225IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        stroke={"currentColor"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
        strokeWidth={"1.5"}
        d={"M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7"}
      ></path>

      <path
        stroke={"currentColor"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
        strokeWidth={"1.5"}
        d={
          "M10 17h4c1.65 0 3-1.35 3-3v-4c0-1.65-1.35-3-3-3h-4c-1.65 0-3 1.35-3 3v4c0 1.65 1.35 3 3 3m2-10v10m-5-5h10"
        }
      ></path>
    </svg>
  );
}

export default Icon225Icon;
/* prettier-ignore-end */
