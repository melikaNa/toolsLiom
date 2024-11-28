// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon19IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon19Icon(props: Icon19IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"currentColor"}
      viewBox={"0 0 256 256"}
      transform={"rotate(-45)"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M224 170.349V208a16.018 16.018 0 01-16 16l-42.22.001h-59.56L63.999 224a16.018 16.018 0 01-16-16L48 175.782a36.475 36.475 0 01-4 .218 36 36 0 010-72 36.475 36.475 0 014 .218V72a16.018 16.018 0 0116-16l36.217.001A36.61 36.61 0 01100 52a36 36 0 0172 0 36.61 36.61 0 01-.218 4.001L207.999 56a16.018 16.018 0 0116 16l.001 37.651a8 8 0 01-11.06 7.392 23.255 23.255 0 00-8.94-1.77c-13.233 0-24 11.092-24 24.727s10.767 24.728 24 24.728a23.255 23.255 0 008.94-1.771 8 8 0 0111.06 7.392z"
        }
      ></path>
    </svg>
  );
}

export default Icon19Icon;
/* prettier-ignore-end */
