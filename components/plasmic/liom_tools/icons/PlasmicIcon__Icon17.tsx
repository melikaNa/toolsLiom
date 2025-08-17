/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon17IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon17Icon(props: Icon17IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 48 48"}
      fill={"currentColor"}
      transform={"rotate(270)"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g data-name={"Layer 2"}>
        <path fill={"none"} d={"M0 0h48v48H0z"}></path>

        <path
          d={
            "M45 19h-3v-4a4 4 0 00-4-4H6a4 4 0 00-4 4v18a4 4 0 004 4h32a4 4 0 004-4v-4h3a1 1 0 001-1v-8a1 1 0 00-1-1zm-11.8 9.1L24 25v4a1 1 0 01-1.7.7l-12.1-8.9a.5.5 0 01.6-.9L20 23v-4a1 1 0 011.7-.7l12.1 8.9a.5.5 0 01-.6.9z"
          }
        ></path>
      </g>
    </svg>
  );
}

export default Icon17Icon;
/* prettier-ignore-end */
