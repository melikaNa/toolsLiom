/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon84IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon84Icon(props: Icon84IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 20 14"}
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
          "M19.012 2.146a1.719 1.719 0 00-1.851.306l-2.161 2V3c0-1.654-1.345-3-3-3H3C1.346 0 0 1.346 0 3v8c0 1.655 1.346 3 3 3h9c1.655 0 3-1.345 3-3V9.549l2.161 1.999c.321.297.736.452 1.159.452.233 0 .468-.047.692-.145.609-.266.988-.835.988-1.484V3.63c0-.649-.379-1.218-.988-1.484"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon84Icon;
/* prettier-ignore-end */
