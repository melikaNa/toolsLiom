// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon83IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon83Icon(props: Icon83IconProps) {
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
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M15.4 20C6.908 20 0 13.092 0 4.6A4.605 4.605 0 016.091.248a1 1 0 01.647.722l1.37 5.964c.075.328-.02.672-.253.916-.137.142-.14.145-1.38.794a9.947 9.947 0 004.88 4.883c.649-1.241.653-1.245.795-1.381.245-.234.59-.325.917-.253l5.964 1.369a1 1 0 01.721.646c.082.236.143.48.184.731A4.605 4.605 0 0115.4 20"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon83Icon;
/* prettier-ignore-end */
