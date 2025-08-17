/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon186IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon186Icon(props: Icon186IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 64 64"}
      strokeWidth={"3"}
      stroke={"currentColor"}
      fill={"none"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <circle cx={"32"} cy={"18.14"} r={"11.14"}></circle>

      <path
        d={"M54.55 56.85A22.55 22.55 0 0032 34.3h0A22.55 22.55 0 009.45 56.85z"}
      ></path>
    </svg>
  );
}

export default Icon186Icon;
/* prettier-ignore-end */
