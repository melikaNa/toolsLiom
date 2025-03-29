/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Path12IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Path12Icon(props: Path12IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 43 15"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M40.403 13.629l-2.541.826a7.972 7.972 0 01-4.926 0l-2.154-.7a7.965 7.965 0 00-4.925 0l-2.155.7a7.97 7.97 0 01-4.925 0l-2.155-.7a7.965 7.965 0 00-4.925 0l-2.155.7a7.97 7.97 0 01-4.925 0l-2.54-.826A3.005 3.005 0 010 10.77V3.214A3.214 3.214 0 013.214 0h36.05a3.214 3.214 0 013.214 3.214v7.557a3.005 3.005 0 01-2.075 2.858z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Path12Icon;
/* prettier-ignore-end */
