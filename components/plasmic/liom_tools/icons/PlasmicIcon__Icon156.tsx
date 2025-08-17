/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon156IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon156Icon(props: Icon156IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 24 24"}
      fill={"none"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g stroke={"currentColor"} strokeWidth={"1.5"}>
        <path d={"M9 12a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"}></path>

        <path d={"M14 6.5L9 10m5 7.5L9 14"} strokeLinecap={"round"}></path>

        <path
          d={
            "M19 18.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zm0-13a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
          }
        ></path>
      </g>
    </svg>
  );
}

export default Icon156Icon;
/* prettier-ignore-end */
