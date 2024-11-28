// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon38IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon38Icon(props: Icon38IconProps) {
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

      <g fill={"currentColor"}>
        <path
          d={
            "M8 12a1 1 0 100 2h8a1 1 0 100-2H8zm-1 5a1 1 0 011-1h4a1 1 0 110 2H8a1 1 0 01-1-1z"
          }
        ></path>

        <path
          fillRule={"evenodd"}
          clipRule={"evenodd"}
          d={
            "M7 2a1 1 0 011 1v1h8V3a1 1 0 112 0v1.1c2.282.463 4 2.481 4 4.9v8a5 5 0 01-5 5H7a5 5 0 01-5-5V9a5.002 5.002 0 014-4.9V3a1 1 0 011-1zm13 8H4v7a3 3 0 003 3h10a3 3 0 003-3v-7z"
          }
        ></path>
      </g>
    </svg>
  );
}

export default Icon38Icon;
/* prettier-ignore-end */
