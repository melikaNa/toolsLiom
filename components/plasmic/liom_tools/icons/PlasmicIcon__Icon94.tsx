// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon94IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon94Icon(props: Icon94IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      viewBox={"0 0 16 16"}
      xmlns={"http://www.w3.org/2000/svg"}
      version={"1.1"}
      fill={"none"}
      stroke={"#000"}
      strokeLinecap={"round"}
      strokeLinejoin={"round"}
      strokeWidth={"1.5"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path d={"M1.75 9.75l2.5 2.5m3.5-4l2.5-2.5m-4.5 4l2.5 2.5 6-6.5"}></path>
    </svg>
  );
}

export default Icon94Icon;
/* prettier-ignore-end */
