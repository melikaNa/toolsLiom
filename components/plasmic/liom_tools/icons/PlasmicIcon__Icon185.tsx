/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon185IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon185Icon(props: Icon185IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"currentColor"}
      version={"1.1"}
      viewBox={"0 0 100 100"}
      xmlSpace={"preserve"}
      stroke={"currentColor"}
      strokeWidth={"3"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M33.934 54.458l30.822 27.938a1.996 1.996 0 002.826-.138 1.999 1.999 0 00-.139-2.824l-29.642-26.87L64.67 22.921a1.998 1.998 0 10-2.963-2.685L33.768 51.059a1.994 1.994 0 00-.475 1.723 1.988 1.988 0 00.641 1.676z"
        }
      ></path>
    </svg>
  );
}

export default Icon185Icon;
/* prettier-ignore-end */
