// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Path16IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Path16Icon(props: Path16IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 9 13"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M8.844 9.09C7.36 6.923 6.816 2.437 7.148 0L.936 6.212a3.195 3.195 0 000 4.518l.875.875a3.195 3.195 0 004.518 0L8.844 9.09z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Path16Icon;
/* prettier-ignore-end */
