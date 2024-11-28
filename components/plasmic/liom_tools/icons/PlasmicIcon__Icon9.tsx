// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon9IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon9Icon(props: Icon9IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      data-name={"Capa 1"}
      viewBox={"0 0 681.28 800"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M375.87 138.62c-94.29 0-171 76.71-171 171s76.71 170.99 171 170.99 171-76.71 171-170.99-76.71-171-171-171zm90.32 219.02H354.58c-12.6 0-22.81-10.21-22.81-22.81V235.1c0-12.6 10.21-22.81 22.81-22.81s22.81 10.21 22.81 22.81v76.92h88.8c12.6 0 22.81 10.21 22.81 22.81s-10.21 22.81-22.81 22.81z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M375.71 0c-46.7 0-90.9 10.51-130.6 29.19C140.69 77.56 68.47 183.31 68.47 305.91v50.71L6.25 475.54c-15.68 30.02-.83 54.54 33.03 54.54h29.19v113.09c0 35.36 28.86 64.22 64.22 64.22l88.24-13.18.17 88.07v.67c.5 11.34 10.01 18.85 21.68 16.68l317.58-56.21c12.01-2.17 21.85-13.84 21.85-26.02V530.92c60.88-55.88 99.08-136.11 99.08-225.18C681.11 136.94 544.34 0 375.71 0zm.16 526.23c-119.44 0-216.62-97.17-216.62-216.62S256.42 92.99 375.87 92.99s216.62 97.17 216.62 216.62-97.17 216.62-216.62 216.62z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon9Icon;
/* prettier-ignore-end */
