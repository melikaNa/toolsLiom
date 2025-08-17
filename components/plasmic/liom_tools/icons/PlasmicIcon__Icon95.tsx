/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon95IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon95Icon(props: Icon95IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 16 16"}
      version={"1.1"}
      fill={"currentColor"}
      stroke={"currentColor"}
      strokeLinecap={"round"}
      strokeLinejoin={"round"}
      strokeWidth={"1.5"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path d={"M1.75 9.75l2.5 2.5m3.5-4l2.5-2.5m-4.5 4l2.5 2.5 6-6.5"}></path>
    </svg>
  );
}

export default Icon95Icon;
/* prettier-ignore-end */
