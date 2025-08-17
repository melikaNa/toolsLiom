/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon167IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon167Icon(props: Icon167IconProps) {
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
        d={
          "M6 12c0-3.328 2.64-6 5.866-6 2.164 0 4.063 1.201 5.08 3H15v1.5h4.5V6H18v1.848C16.683 5.834 14.431 4.5 11.866 4.5 7.783 4.5 4.5 7.872 4.5 12H6zm12 0c0 3.328-2.64 6-5.865 6-2.165 0-4.064-1.201-5.081-3H9v-1.5H4.5V18H6v-1.848c1.317 2.014 3.569 3.348 6.135 3.348 4.082 0 7.365-3.372 7.365-7.5H18z"
        }
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon167Icon;
/* prettier-ignore-end */
