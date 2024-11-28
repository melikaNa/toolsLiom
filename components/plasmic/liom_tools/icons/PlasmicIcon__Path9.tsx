// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Path9IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Path9Icon(props: Path9IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 8 8"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path d={"M0 0h7.237v7.47H0V0z"} fill={"currentColor"}></path>
    </svg>
  );
}

export default Path9Icon;
/* prettier-ignore-end */
