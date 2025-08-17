/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon137IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon137Icon(props: Icon137IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"currentColor"}
      viewBox={"0 0 32 32"}
      version={"1.1"}
      xmlSpace={"preserve"}
      fillRule={"evenodd"}
      clipRule={"evenodd"}
      strokeLinejoin={"round"}
      strokeMiterlimit={"2"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M9.731 14.075A6.979 6.979 0 004 20.942v4.039a3 3 0 003 3h18a3 3 0 003-3v-4.039a6.979 6.979 0 00-5.731-6.867A7.004 7.004 0 0016 3.958a7.004 7.004 0 00-6.269 10.117zm11.169 1.88a6.974 6.974 0 01-4.9 2.003 6.974 6.974 0 01-4.9-2.003.966.966 0 01-.12.007A4.977 4.977 0 006 20.942v4.039a1 1 0 001 1h18a1 1 0 001-1v-4.039a4.98 4.98 0 00-4.98-4.98.966.966 0 01-.12-.007zM16 5.958c2.76 0 5 2.241 5 5 0 2.76-2.24 5-5 5s-5-2.24-5-5c0-2.759 2.24-5 5-5z"
        }
      ></path>

      <path
        d={
          "M20 20.008h-1a1 1 0 000 2h1v1a1 1 0 002 0v-1h1a1 1 0 000-2h-1v-1a1 1 0 00-2 0v1z"
        }
      ></path>
    </svg>
  );
}

export default Icon137Icon;
/* prettier-ignore-end */
