// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon92IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon92Icon(props: Icon92IconProps) {
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
          "M20.625 9.625h-8.25v-8.25a1.375 1.375 0 10-2.75 0v8.25h-8.25a1.375 1.375 0 100 2.75h8.25v8.25a1.375 1.375 0 102.75 0v-8.25h8.25a1.375 1.375 0 100-2.75"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon92Icon;
/* prettier-ignore-end */
