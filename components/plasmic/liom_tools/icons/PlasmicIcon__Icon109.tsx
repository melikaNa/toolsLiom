/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon109IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon109Icon(props: Icon109IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 17 20"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={"M16.5 20C7 20 2.667 17.167.5 13.5L9 0v8c0 8 4.333 11 7.5 12z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon109Icon;
/* prettier-ignore-end */
