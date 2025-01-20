// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon132IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon132Icon(props: Icon132IconProps) {
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
          "M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12zm9.25-1a1 1 0 011-1h1.5a1 1 0 011 1v7a1 1 0 01-1 1h-1.5a1 1 0 01-1-1v-7zM14 7a2 2 0 10-4 0 2 2 0 004 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon132Icon;
/* prettier-ignore-end */
