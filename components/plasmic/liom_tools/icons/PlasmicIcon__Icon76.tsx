/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon76IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon76Icon(props: Icon76IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 24 24"}
      fill={"none"}
      transform={"scale(-1 1)"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g stroke={"currentColor"} strokeWidth={"2"}>
        <path
          d={"M17 17l4 4"}
          strokeLinecap={"round"}
          strokeLinejoin={"round"}
        ></path>

        <path d={"M19 11a8 8 0 11-16 0 8 8 0 0116 0z"}></path>
      </g>
    </svg>
  );
}

export default Icon76Icon;
/* prettier-ignore-end */
