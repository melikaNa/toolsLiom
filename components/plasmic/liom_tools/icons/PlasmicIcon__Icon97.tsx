/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon97IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon97Icon(props: Icon97IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 24 24"}
      fill={"none"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g stroke={"currentColor"} strokeWidth={"1.5"} strokeLinecap={"round"}>
        <path d={"M1.5 12.5l4.076 4.076a.6.6 0 00.848 0L9 14m7-7l-4 4"}></path>

        <path d={"M7 12l4.576 4.576a.6.6 0 00.848 0L22 7"}></path>
      </g>
    </svg>
  );
}

export default Icon97Icon;
/* prettier-ignore-end */
