/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon219IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon219Icon(props: Icon219IconProps) {
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
        strokeWidth={"1.25"}
        d={
          "M4.558 7.77a2.917 2.917 0 1 0 0-5.833 2.917 2.917 0 0 0 0 5.834Zm9.584 5h2.5c.916 0 1.666.75 1.666 1.667v2.5c0 .917-.75 1.667-1.666 1.667h-2.5c-.917 0-1.667-.75-1.667-1.667v-2.5c0-.916.75-1.666 1.667-1.666Z"
        }
      ></path>

      <path
        stroke={"currentColor"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
        strokeWidth={"1.25"}
        d={
          "M10 4.437h2.233c1.542 0 2.259 1.909 1.1 2.925l-6.658 5.825c-1.158 1.009-.442 2.917 1.092 2.917H10"
        }
      ></path>

      <path
        stroke={"currentColor"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
        strokeWidth={"1.667"}
        d={"M4.572 4.854h.01m10.823 10.833h.01"}
      ></path>
    </svg>
  );
}

export default Icon219Icon;
/* prettier-ignore-end */
