// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon107IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon107Icon(props: Icon107IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      fill={"none"}
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 16 15"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M4 7c0 5.2-2.667 6.167-4 6.5 1.667.333 5.7.3 8.5-2.5.333 1.333 2.6 4 7 4C11.833 12.833 4 6.9 4 .5V7z"
        }
        fill={"#D9D9D9"}
      ></path>
    </svg>
  );
}

export default Icon107Icon;
/* prettier-ignore-end */
