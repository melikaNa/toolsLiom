/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon74IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon74Icon(props: Icon74IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 16 14"}
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
          "M15 6H3.135l3.633-4.36A1 1 0 105.232.36l-5 6c-.039.047-.059.102-.088.154-.024.042-.053.078-.071.124a.985.985 0 00-.072.358L0 7l.001.004c0 .122.027.243.072.358.018.046.047.082.071.124.029.052.049.107.088.154l5 6a.999.999 0 101.536-1.28L3.135 8H15a1 1 0 000-2"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon74Icon;
/* prettier-ignore-end */
