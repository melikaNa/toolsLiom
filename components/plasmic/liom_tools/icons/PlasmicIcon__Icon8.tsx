// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon8IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon8Icon(props: Icon8IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      data-name={"Capa 1"}
      viewBox={"0 0 721.28 840"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M395.71 20c-46.7 0-90.9 10.51-130.6 29.19C160.69 97.56 88.47 203.31 88.47 325.91h0v50.71L26.25 495.55c-15.68 30.02-.83 54.54 33.03 54.54h29.19v113.09c0 35.36 28.86 64.22 64.22 64.22l88.24-13.18.17 88.07v.67h0c.5 11.34 10.01 18.85 21.68 16.68l317.58-56.21c12.01-2.17 21.85-13.84 21.85-26.02V550.93c60.88-55.88 99.08-136.11 99.08-225.18-.17-168.8-136.94-305.74-305.57-305.74z"
        }
        fill={"none"}
        stroke={"currentColor"}
        strokeMiterlimit={"10"}
        strokeWidth={"40"}
      ></path>

      <g fill={"currentColor"}>
        <path
          d={
            "M395.87 113c-119.44 0-216.62 97.17-216.62 216.62s97.17 216.62 216.62 216.62 216.62-97.17 216.62-216.62S515.31 113 395.87 113zm0 387.61c-94.29 0-171-76.71-171-170.99s76.71-171 171-171 171 76.71 171 171-76.71 170.99-171 170.99z"
          }
        ></path>

        <path
          d={
            "M486.19 332.02h-88.8V255.1c0-12.6-10.21-22.81-22.81-22.81s-22.81 10.21-22.81 22.81v99.73c0 12.6 10.21 22.81 22.81 22.81h111.61c12.6 0 22.81-10.21 22.81-22.81s-10.21-22.81-22.81-22.81z"
          }
        ></path>
      </g>
    </svg>
  );
}

export default Icon8Icon;
/* prettier-ignore-end */
