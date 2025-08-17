/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon4IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon4Icon(props: Icon4IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"-2.4 -2.4 28.8 28.8"}
      fill={"none"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <rect
        x={"-2.4"}
        y={"-2.4"}
        width={"28.8"}
        height={"28.8"}
        rx={"14.4"}
        fill={"#8254C61a"}
      ></rect>

      <path
        d={
          "M15 2.5v4m-6-4v4m11.483 5H3.517m16.966 0C20.274 5.793 18.154 4 12 4s-8.274 1.793-8.483 7.5m16.966 0c.011.32.017.654.017 1 0 6.5-2 8.5-8.5 8.5s-8.5-2-8.5-8.5c0-.346.006-.68.017-1"
        }
        stroke={"#8254C6"}
        strokeWidth={".96"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default Icon4Icon;
/* prettier-ignore-end */
