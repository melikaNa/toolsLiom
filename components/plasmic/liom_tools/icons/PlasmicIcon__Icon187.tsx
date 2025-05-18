/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon187IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon187Icon(props: Icon187IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 1024 1024"}
      className={classNames("plasmic-default__svg", className, "icon")}
      fill={"currentColor"}
      height={"1em"}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g fill={"currentColor"}>
        <path
          d={
            "M512 512a192 192 0 100-384 192 192 0 000 384zm0 64a256 256 0 110-512 256 256 0 010 512z"
          }
        ></path>

        <path
          d={
            "M512 512a32 32 0 0132 32v256a32 32 0 11-64 0V544a32 32 0 0132-32z"
          }
        ></path>

        <path
          d={
            "M384 649.088v64.96C269.76 732.352 192 771.904 192 800c0 37.696 139.904 96 320 96s320-58.304 320-96c0-28.16-77.76-67.648-192-85.952v-64.96C789.12 671.04 896 730.368 896 800c0 88.32-171.904 160-384 160s-384-71.68-384-160c0-69.696 106.88-128.96 256-150.912z"
          }
        ></path>
      </g>
    </svg>
  );
}

export default Icon187Icon;
/* prettier-ignore-end */
