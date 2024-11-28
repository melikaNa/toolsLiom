// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Loading3SvgrepoComSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Loading3SvgrepoComSvgIcon(
  props: Loading3SvgrepoComSvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      version={"1.1"}
      viewBox={"0 0 512 512"}
      xmlSpace={"preserve"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M233.929 0h44.143v124.116h-44.143zm0 387.884h44.143V512h-44.143zM59.376 90.589l87.767 87.76 31.214-31.197L90.59 59.384zm274.286 274.269l87.749 87.767 31.215-31.214-87.768-87.759zM0 233.937h124.126v44.126H0zm387.875 0H512v44.134H387.875zM90.592 452.63l-31.196-31.195 87.767-87.767 31.196 31.196zM452.626 90.598l-31.197-31.214-87.767 87.768 31.213 31.205z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Loading3SvgrepoComSvgIcon;
/* prettier-ignore-end */
