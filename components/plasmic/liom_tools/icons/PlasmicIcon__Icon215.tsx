/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon215IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon215Icon(props: Icon215IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 32 32"}
      version={"1.1"}
      fill={"currentColor"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M22 17h-5v5a1.001 1.001 0 01-2 0v-5h-5a1.001 1.001 0 010-2h5v-5a1.001 1.001 0 012 0v5h5a1.001 1.001 0 010 2zM16 0C7.163 0 0 7.16 0 16s7.163 16 16 16 16-7.16 16-16S24.837 0 16 0z"
        }
        fill={"currentColor"}
        fillRule={"evenodd"}
      ></path>
    </svg>
  );
}

export default Icon215Icon;
/* prettier-ignore-end */
