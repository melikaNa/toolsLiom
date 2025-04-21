/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon163IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon163Icon(props: Icon163IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 24 24"}
      fill={"none"}
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
          "M19.5 12a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0zm1.5 0a9 9 0 11-18 0 9 9 0 0118 0zm-9.75 1.5V8.25h1.5v5.25h-1.5zm0 2.25v-1.5h1.5v1.5h-1.5z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon163Icon;
/* prettier-ignore-end */
