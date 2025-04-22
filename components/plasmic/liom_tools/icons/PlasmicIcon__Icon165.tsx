/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon165IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon165Icon(props: Icon165IconProps) {
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
          "M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12zm11.5-6.5a1 1 0 011 1v4h4a1 1 0 011 1v1a1 1 0 01-1 1h-4v4a1 1 0 01-1 1h-1a1 1 0 01-1-1v-4h-4a1 1 0 01-1-1v-1a1 1 0 011-1h4v-4a1 1 0 011-1h1z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon165Icon;
/* prettier-ignore-end */
