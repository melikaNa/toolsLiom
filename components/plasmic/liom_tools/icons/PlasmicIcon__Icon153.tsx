/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon153IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon153Icon(props: Icon153IconProps) {
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

      <path
        d={
          "M13 5a1 1 0 10-2 0 1 1 0 002 0zm0 7a1 1 0 10-2 0 1 1 0 002 0zm0 7a1 1 0 10-2 0 1 1 0 002 0z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default Icon153Icon;
/* prettier-ignore-end */
