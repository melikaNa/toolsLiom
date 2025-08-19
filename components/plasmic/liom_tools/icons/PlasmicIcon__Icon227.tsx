/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon227IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon227Icon(props: Icon227IconProps) {
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
        d={"m8.91 19.92 6.52-6.52c.77-.77.77-2.03 0-2.8L8.91 4.08"}
      ></path>
    </svg>
  );
}

export default Icon227Icon;
/* prettier-ignore-end */
