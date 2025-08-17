/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Path14IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Path14Icon(props: Path14IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 12 13"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M0 9.92C.604 8.408 4.584 3.517 10.012.13a.86.86 0 011.298.579c.555 3.029-.884 5.608-2.945 7.67-2.322 2.322-5.574 4.333-5.574 4.333L0 9.92z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Path14Icon;
/* prettier-ignore-end */
