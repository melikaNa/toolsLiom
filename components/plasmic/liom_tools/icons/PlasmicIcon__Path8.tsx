// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Path8IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Path8Icon(props: Path8IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 11 11"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M6.833 2.963V.453A.453.453 0 006.38 0H3.87a.453.453 0 00-.454.453v2.51c0 .25-.202.453-.453.453H.453A.453.453 0 000 3.87v2.51c0 .251.203.454.453.454h2.51c.25 0 .453.203.453.453v2.51c0 .25.203.453.453.453h2.51a.453.453 0 00.454-.453v-2.51c0-.25.203-.453.453-.453h2.51c.25 0 .453-.203.453-.453V3.87a.453.453 0 00-.453-.454h-2.51a.453.453 0 01-.453-.453z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Path8Icon;
/* prettier-ignore-end */
