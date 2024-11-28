// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon78IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon78Icon(props: Icon78IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 4 18"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M2 4a2 2 0 10-.001-4.001A2 2 0 002 4zm0 3a2 2 0 10.001 4.001A2 2 0 002 7zm-2 9a2 2 0 114.001.001A2 2 0 010 16z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon78Icon;
/* prettier-ignore-end */
