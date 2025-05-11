/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon172IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon172Icon(props: Icon172IconProps) {
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

      <g
        clipPath={"url(#YU9kPeALowDaa)"}
        stroke={"#292D32"}
        strokeWidth={"1.5"}
        strokeLinecap={"round"}
      >
        <path
          d={
            "M5 17h14c2 0 3-1 3-3v-4c0-2-1-3-3-3H5c-2 0-3 1-3 3v4c0 2 1 3 3 3zM18 7v5M6 7v4m4.05-4L10 12m4-5v3"
          }
        ></path>
      </g>

      <defs>
        <clipPath id={"YU9kPeALowDaa"}>
          <path fill={"#fff"} d={"M0 0h24v24H0z"}></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default Icon172Icon;
/* prettier-ignore-end */
