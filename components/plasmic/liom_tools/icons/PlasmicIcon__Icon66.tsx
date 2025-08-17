/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon66IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon66Icon(props: Icon66IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 16 16"}
      fill={"currentColor"}
      className={classNames(
        "plasmic-default__svg",
        className,
        "bi bi-emoji-expressionless-fill"
      )}
      height={"1em"}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M8 16A8 8 0 108 0a8 8 0 000 16zM4.5 6h2a.5.5 0 010 1h-2a.5.5 0 010-1zm5 0h2a.5.5 0 010 1h-2a.5.5 0 010-1zm-5 4h7a.5.5 0 010 1h-7a.5.5 0 010-1z"
        }
      ></path>
    </svg>
  );
}

export default Icon66Icon;
/* prettier-ignore-end */
