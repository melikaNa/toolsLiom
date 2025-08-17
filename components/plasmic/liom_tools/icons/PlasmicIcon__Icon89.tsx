/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon89IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon89Icon(props: Icon89IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 11 8"}
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
          "M3.909 8a.667.667 0 01-.486-.21L.18 4.337a.666.666 0 11.971-.912l2.75 2.927L9.508.217a.667.667 0 01.984.899L4.401 7.783A.665.665 0 013.914 8h-.005z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon89Icon;
/* prettier-ignore-end */
