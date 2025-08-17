/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon150IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon150Icon(props: Icon150IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 20 20"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M3.114 20a4.987 4.987 0 01-2.452-.645.773.773 0 01-.309-1.082c.775-1.238 1.055-2.751.7-4.175-.368-1.475-.9-2.718-.896-4.28C.17 4.338 4.732-.104 10.207.002c5.287.106 9.645 4.551 9.645 9.84 0 6.908-7.24 11.758-13.63 9.09A5.058 5.058 0 013.114 20zm-1.04-1.686a3.532 3.532 0 003.485-.823.761.761 0 01.858-.14c5.472 2.617 11.911-1.484 11.911-7.509 0-4.495-3.657-8.227-8.152-8.317-4.633-.092-8.484 3.66-8.495 8.297-.004 1.484.575 2.67.891 4.075a6.797 6.797 0 01-.499 4.417z"
        }
        fill={"currentColor"}
      ></path>

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M13.595 10.036a.809.809 0 01-.809.808H7.255a.809.809 0 110-1.617h5.531c.447 0 .809.362.809.809z"
        }
        fill={"currentColor"}
      ></path>

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M10.004 13.594a.809.809 0 01-.809-.809V7.254a.809.809 0 011.618 0v5.531a.809.809 0 01-.809.809z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon150Icon;
/* prettier-ignore-end */
