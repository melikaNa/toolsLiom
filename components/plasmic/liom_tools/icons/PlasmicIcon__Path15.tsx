/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Path15IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Path15Icon(props: Path15IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 23 27"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M6.33 25.821l15.388-15.389c.5-.5.78-1.177.78-1.883V.805a.804.804 0 00-1.371-.568L.936 20.427a3.195 3.195 0 000 4.519l.875.875a3.195 3.195 0 004.518 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Path15Icon;
/* prettier-ignore-end */
