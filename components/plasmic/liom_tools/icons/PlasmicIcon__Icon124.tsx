/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon124IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon124Icon(props: Icon124IconProps) {
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

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M20 5.5a3.5 3.5 0 01-5.845 2.598l-5.269 3.513a3.506 3.506 0 010 1.778l4.718 3.145A3.5 3.5 0 1113 18.535l-5.155-3.437a3.5 3.5 0 110-5.197l5.269-3.512A3.5 3.5 0 1120 5.5zM16.5 7a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm-11 7a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM18 18.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon124Icon;
/* prettier-ignore-end */
