// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon96IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon96Icon(props: Icon96IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 -0.5 25 25"}
      fill={"none"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M5.03 11.47a.75.75 0 00-1.06 1.06l1.06-1.06zM8.5 16l-.53.53a.75.75 0 001.06 0L8.5 16zm8.53-7.47a.75.75 0 00-1.06-1.06l1.06 1.06zm-8 2.94a.75.75 0 00-1.06 1.06l1.06-1.06zM12.5 16l-.53.53a.75.75 0 001.06 0L12.5 16zm8.53-7.47a.75.75 0 00-1.06-1.06l1.06 1.06zm-17.06 4l4 4 1.06-1.06-4-4-1.06 1.06zm5.06 4l8-8-1.06-1.06-8 8 1.06 1.06zm-1.06-4l4 4 1.06-1.06-4-4-1.06 1.06zm5.06 4l8-8-1.06-1.06-8 8 1.06 1.06z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon96Icon;
/* prettier-ignore-end */
