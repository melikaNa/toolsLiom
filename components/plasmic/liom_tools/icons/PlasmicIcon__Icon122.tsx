// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon122IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon122Icon(props: Icon122IconProps) {
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

      <g
        stroke={"currentColor"}
        strokeWidth={"1.5"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      >
        <path
          d={
            "M6.76 22h10.48c2.76 0 3.86-1.69 3.99-3.75l.52-8.26A3.753 3.753 0 0018 6c-.61 0-1.17-.35-1.45-.89l-.72-1.45C15.37 2.75 14.17 2 13.15 2h-2.29c-1.03 0-2.23.75-2.69 1.66l-.72 1.45C7.17 5.65 6.61 6 6 6 3.83 6 2.11 7.83 2.25 9.99l.52 8.26C2.89 20.31 4 22 6.76 22zM10.5 8h3"
          }
        ></path>

        <path
          d={
            "M12 18c1.79 0 3.25-1.46 3.25-3.25S13.79 11.5 12 11.5s-3.25 1.46-3.25 3.25S10.21 18 12 18z"
          }
        ></path>
      </g>
    </svg>
  );
}

export default Icon122Icon;
/* prettier-ignore-end */
