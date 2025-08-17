/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon189IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon189Icon(props: Icon189IconProps) {
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

      <g stroke={"currentColor"} strokeWidth={"1.5"} strokeLinecap={"round"}>
        <path
          d={
            "M20.998 10c-.012-2.175-.108-3.353-.877-4.121C19.243 5 17.828 5 15 5h-3c-2.828 0-4.243 0-5.121.879C6 6.757 6 8.172 6 11v5c0 2.828 0 4.243.879 5.121C7.757 22 9.172 22 12 22h3c2.828 0 4.243 0 5.121-.879C21 20.243 21 18.828 21 16v-1"
          }
        ></path>

        <path
          d={
            "M3 10v6a3 3 0 003 3M18 5a3 3 0 00-3-3h-4C7.229 2 5.343 2 4.172 3.172 3.518 3.825 3.229 4.7 3.102 6"
          }
        ></path>
      </g>
    </svg>
  );
}

export default Icon189Icon;
/* prettier-ignore-end */
