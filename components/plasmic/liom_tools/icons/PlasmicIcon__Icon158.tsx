/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon158IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon158Icon(props: Icon158IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M5.114 22a4.987 4.987 0 01-2.452-.645.773.773 0 01-.309-1.082c.775-1.238 1.055-2.751.7-4.175-.368-1.475-.9-2.718-.896-4.28.013-5.48 4.575-9.922 10.05-9.816 5.287.106 9.645 4.551 9.645 9.84 0 6.908-7.24 11.758-13.63 9.09A5.058 5.058 0 015.114 22zm-1.04-1.686a3.532 3.532 0 003.485-.823.761.761 0 01.858-.14c5.472 2.617 11.911-1.484 11.911-7.509 0-4.495-3.657-8.227-8.152-8.317-4.633-.092-8.484 3.66-8.495 8.297-.004 1.484.575 2.67.891 4.075a6.797 6.797 0 01-.499 4.417z"
        }
        fill={"currentColor"}
      ></path>

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M15.595 12.036a.809.809 0 01-.809.808H9.255a.809.809 0 110-1.617h5.531c.447 0 .809.362.809.809z"
        }
        fill={"currentColor"}
      ></path>

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M12.004 15.594a.809.809 0 01-.809-.809V9.254a.809.809 0 011.618 0v5.531a.809.809 0 01-.809.809z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon158Icon;
/* prettier-ignore-end */
