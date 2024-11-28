// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon90IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon90Icon(props: Icon90IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 22 22"}
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
          "M15.4 14.3c0 .605-.495 1.1-1.1 1.1-.605 0-1.1-.495-1.1-1.1V7.7c0-.605.495-1.1 1.1-1.1.605 0 1.1.495 1.1 1.1v6.6zm-6.6 0c0 .605-.495 1.1-1.1 1.1-.605 0-1.1-.495-1.1-1.1V7.7c0-.605.495-1.1 1.1-1.1.605 0 1.1.495 1.1 1.1v6.6zM11 0C4.935 0 0 4.935 0 11s4.935 11 11 11c6.067 0 11-4.935 11-11S17.067 0 11 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon90Icon;
/* prettier-ignore-end */
