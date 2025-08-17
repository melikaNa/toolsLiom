/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Path10IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Path10Icon(props: Path10IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 8 5"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={"M0 3.494l.363.118a10.513 10.513 0 006.511 0l.363-.118V0H0v3.494z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Path10Icon;
/* prettier-ignore-end */
