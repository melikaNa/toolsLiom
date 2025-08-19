/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon226IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon226Icon(props: Icon226IconProps) {
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
        strokeMiterlimit={"10"}
        strokeWidth={"1.5"}
        d={"M15 19.92 8.48 13.4c-.77-.77-.77-2.03 0-2.8L15 4.08"}
      ></path>
    </svg>
  );
}

export default Icon226Icon;
/* prettier-ignore-end */
