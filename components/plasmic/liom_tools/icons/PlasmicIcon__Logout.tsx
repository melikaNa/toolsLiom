/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type LogoutIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function LogoutIcon(props: LogoutIconProps) {
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
        stroke={"currentColor"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
        strokeWidth={"1.25"}
        d={
          "M7.417 6.3c.258-3 1.8-4.225 5.175-4.225h.108c3.725 0 5.217 1.492 5.217 5.217v5.433c0 3.725-1.492 5.217-5.217 5.217h-.108c-3.35 0-4.892-1.209-5.167-4.159M12.5 10H3.017m1.858-2.792L2.083 10l2.792 2.792"
        }
      ></path>
    </svg>
  );
}

export default LogoutIcon;
/* prettier-ignore-end */
