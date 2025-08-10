/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon207IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon207Icon(props: Icon207IconProps) {
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
        d={
          "m9.32 6.5 2.56-2.56 2.56 2.56m-2.56 7.68V4.01M4 12c0 4.42 3 8 8 8s8-3.58 8-8"
        }
      ></path>
    </svg>
  );
}

export default Icon207Icon;
/* prettier-ignore-end */
