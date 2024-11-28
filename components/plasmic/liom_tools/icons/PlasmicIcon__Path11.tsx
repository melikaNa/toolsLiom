// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Path11IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Path11Icon(props: Path11IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 16 5"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M13.97 4.088H1.236A1.233 1.233 0 01.2 2.185l.575-.89A2.831 2.831 0 013.153 0h8.9c.96 0 1.856.487 2.378 1.295l.576.89c.53.821-.06 1.903-1.036 1.903z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Path11Icon;
/* prettier-ignore-end */
