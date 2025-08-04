/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon206IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon206Icon(props: Icon206IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 240 240"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"none"}
        stroke={"currentColor"}
        strokeWidth={"10"}
        d={"M120 120V40"}
        style={{
          animation: 'spin 4s linear infinite"',
        }}
        transformOrigin={"120px 120px"}
      ></path>

      <path
        fill={"none"}
        stroke={"currentColor"}
        strokeWidth={"10"}
        d={"M120 120h80"}
        style={{
          animation: 'spin 60s linear infinite"',
        }}
        transformOrigin={"120px 120px"}
      ></path>

      <circle
        cx={"120"}
        cy={"120"}
        r={"115"}
        fill={"none"}
        stroke={"currentColor"}
        strokeWidth={"10"}
      ></circle>

      <circle cx={"120"} cy={"120"} r={"10"} fill={"currentColor"}></circle>
    </svg>
  );
}

export default Icon206Icon;
/* prettier-ignore-end */
