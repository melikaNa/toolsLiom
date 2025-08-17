/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type StickynoteIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function StickynoteIcon(props: StickynoteIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 20 20"}
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
        strokeMiterlimit={"10"}
        strokeWidth={"1.25"}
        d={
          "M6.667 1.667v2.5m6.666-2.5v2.5m-7.5 5H12.5M5.833 12.5H10m2.5 5.833h-5c-4.167 0-5-1.716-5-5.15V8.042c0-3.917 1.392-4.967 4.167-5.125h6.666c2.775.15 4.167 1.208 4.167 5.125v5.291"
        }
      ></path>

      <path
        stroke={"currentColor"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
        strokeWidth={"1.25"}
        d={"m17.5 13.333-5 5v-2.5q0-2.5 2.5-2.5z"}
      ></path>
    </svg>
  );
}

export default StickynoteIcon;
/* prettier-ignore-end */
