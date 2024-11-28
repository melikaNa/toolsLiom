// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Path13IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Path13Icon(props: Path13IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 28 15"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M27.518 0h-16.82L1.684 9.014a5.764 5.764 0 00-1.442 5.73 7.964 7.964 0 003.722-.289l2.155-.7a7.97 7.97 0 014.925 0l2.154.7c.283.092.57.167.858.226L26.092 2.645A5.19 5.19 0 0027.518 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Path13Icon;
/* prettier-ignore-end */
