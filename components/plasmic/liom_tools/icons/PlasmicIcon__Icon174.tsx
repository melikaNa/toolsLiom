/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon174IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon174Icon(props: Icon174IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M19 17.75H5c-2.42 0-3.75-1.33-3.75-3.75v-4c0-2.42 1.33-3.75 3.75-3.75h14c2.42 0 3.75 1.33 3.75 3.75v4c0 2.42-1.33 3.75-3.75 3.75zm-14-10c-1.58 0-2.25.67-2.25 2.25v4c0 1.58.67 2.25 2.25 2.25h14c1.58 0 2.25-.67 2.25-2.25v-4c0-1.58-.67-2.25-2.25-2.25H5z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M18 12.75c-.41 0-.75-.34-.75-.75V7c0-.41.34-.75.75-.75s.75.34.75.75v5c0 .41-.34.75-.75.75zm-12-1c-.41 0-.75-.34-.75-.75V7c0-.41.34-.75.75-.75s.75.34.75.75v4c0 .41-.34.75-.75.75zm4 1c-.42 0-.75-.34-.75-.76l.05-5c0-.41.34-.74.75-.74h.01c.41 0 .75.34.74.76l-.05 5c0 .41-.34.74-.75.74zm4-2c-.41 0-.75-.34-.75-.75V7c0-.41.34-.75.75-.75s.75.34.75.75v3c0 .41-.34.75-.75.75z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon174Icon;
/* prettier-ignore-end */
