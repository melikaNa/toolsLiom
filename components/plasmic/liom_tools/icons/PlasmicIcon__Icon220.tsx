/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon220IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon220Icon(props: Icon220IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 20 21"}
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
          "M4.917 14.437h10.158c1.583 0 2.417-.833 2.417-2.416V1.937h-15v10.084c.008 1.583.841 2.416 2.425 2.416m-3.25-12.5h16.666M6.667 18.604 10 16.937v-2.5m3.333 4.167L10 16.937"
        }
      ></path>

      <path
        stroke={"currentColor"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
        strokeMiterlimit={"10"}
        strokeWidth={"1.25"}
        d={
          "m6.25 9.437 2.625-2.191c.208-.175.483-.125.625.108l1 1.667a.407.407 0 0 0 .625.108l2.625-2.192"
        }
      ></path>
    </svg>
  );
}

export default Icon220Icon;
/* prettier-ignore-end */
