/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon22IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon22Icon(props: Icon22IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 48 48"}
      fill={"currentColor"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g data-name={"Layer 2"}>
        <path
          fill={"none"}
          d={"M0 0h48v48H0z"}
          data-name={"invisible box"}
        ></path>

        <path
          d={
            "M26.8 24l10.6-10.5a2.1 2.1 0 00.2-2.7 1.9 1.9 0 00-3-.2L24 21.2 13.4 10.6a1.9 1.9 0 00-3 .2 2.1 2.1 0 00.2 2.7L21.2 24 10.6 34.5a2.1 2.1 0 00-.2 2.7 1.9 1.9 0 003 .2L24 26.8l10.6 10.6a1.9 1.9 0 003-.2 2.1 2.1 0 00-.2-2.7z"
          }
          data-name={"icons Q2"}
        ></path>
      </g>
    </svg>
  );
}

export default Icon22Icon;
/* prettier-ignore-end */
