/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon212IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon212Icon(props: Icon212IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 14 14"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        d={
          "m7 8.05-5.075 5.075a.74.74 0 0 1-.512.212.7.7 0 0 1-.538-.212.72.72 0 0 1-.225-.525q0-.3.225-.525L5.95 7 .875 1.925a.74.74 0 0 1-.212-.513.7.7 0 0 1 .212-.537A.72.72 0 0 1 1.4.65q.3 0 .525.225L7 5.95 12.075.875a.74.74 0 0 1 .513-.213.7.7 0 0 1 .537.213.72.72 0 0 1 .225.525.72.72 0 0 1-.225.525L8.05 7l5.075 5.075a.74.74 0 0 1 .212.512.7.7 0 0 1-.212.538.72.72 0 0 1-.525.225.72.72 0 0 1-.525-.225z"
        }
      ></path>
    </svg>
  );
}

export default Icon212Icon;
/* prettier-ignore-end */
