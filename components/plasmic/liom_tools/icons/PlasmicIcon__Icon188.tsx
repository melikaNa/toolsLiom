/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon188IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon188Icon(props: Icon188IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 1024 1024"}
      fill={"currentColor"}
      className={classNames("plasmic-default__svg", className, "icon")}
      version={"1.1"}
      height={"1em"}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M512 1012.8C258.4 1012.8.8 958.4.8 854.4c0-92.8 198.4-131.2 283.2-143.2h3.2c12 0 22.4 8.8 24 20.8.8 6.4-.8 12.8-4.8 17.6-4 4.8-9.6 8.8-16 9.6-176.8 25.6-242.4 72-242.4 96 0 44.8 180.8 110.4 463.2 110.4S974.4 900 974.4 855.2c0-24-66.4-70.4-244.8-96-6.4-.8-12-4-16-9.6-4-4.8-5.6-11.2-4.8-17.6 1.6-12 12-20.8 24-20.8h3.2c85.6 12 285.6 50.4 285.6 143.2.8 103.2-256 158.4-509.6 158.4zm-16.8-169.6c-12-11.2-288.8-272.8-288.8-529.6 0-168 136.8-304.8 304.8-304.8S816 145.6 816 313.6c0 249.6-276.8 517.6-288.8 528.8l-16 16-16-15.2zM512 56.8c-141.6 0-256.8 115.2-256.8 256.8 0 200.8 196 416 256.8 477.6 61.6-63.2 257.6-282.4 257.6-477.6-.8-140.8-116-256.8-257.6-256.8zm0 392.8c-80 0-144.8-64.8-144.8-144.8S432 160 512 160c80 0 144.8 64.8 144.8 144.8 0 80-64.8 144.8-144.8 144.8zm0-241.6c-53.6 0-96.8 43.2-96.8 96.8s43.2 96.8 96.8 96.8c53.6 0 96.8-43.2 96.8-96.8S564.8 208 512 208z"
        }
      ></path>
    </svg>
  );
}

export default Icon188Icon;
/* prettier-ignore-end */
