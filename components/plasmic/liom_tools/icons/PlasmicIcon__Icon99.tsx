// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon99IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon99Icon(props: Icon99IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 24 24"}
      className={classNames("plasmic-default__svg", className, "icon glyph")}
      fill={"#000"}
      height={"1em"}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M12 2a10 10 0 1010 10A10 10 0 0012 2zm3.71 11.71a1 1 0 01-1.42 0L12 11.41l-2.29 2.3a1 1 0 01-1.42-1.42l3-3a1 1 0 011.42 0l3 3a1 1 0 010 1.42z"
        }
        fill={"#231f20"}
      ></path>
    </svg>
  );
}

export default Icon99Icon;
/* prettier-ignore-end */
