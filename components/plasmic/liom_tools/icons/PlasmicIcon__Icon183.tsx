/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon183IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon183Icon(props: Icon183IconProps) {
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

      <g stroke={"currentColor"} strokeWidth={"1.5"}>
        <path
          d={"M20.5 6h-17m6 5l.5 5m4.5-5l-.5 5"}
          strokeLinecap={"round"}
        ></path>

        <path
          d={
            "M6.5 6h.11a2 2 0 001.83-1.32l.034-.103.097-.291c.083-.249.125-.373.18-.479a1.5 1.5 0 011.094-.788C9.962 3 10.093 3 10.355 3h3.29c.262 0 .393 0 .51.019a1.5 1.5 0 011.094.788c.055.106.097.23.18.479l.097.291A2 2 0 0017.5 6"
          }
        ></path>

        <path
          d={
            "M18.373 15.4c-.177 2.654-.265 3.981-1.13 4.79-.865.81-2.195.81-4.856.81h-.774c-2.66 0-3.99 0-4.856-.81-.865-.809-.953-2.136-1.13-4.79l-.46-6.9m13.666 0l-.2 3"
          }
          strokeLinecap={"round"}
        ></path>
      </g>
    </svg>
  );
}

export default Icon183Icon;
/* prettier-ignore-end */
