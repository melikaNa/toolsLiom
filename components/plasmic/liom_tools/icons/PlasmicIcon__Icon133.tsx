// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon133IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon133Icon(props: Icon133IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 20 20"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M15.63 20H4.366c-1.812 0-3.197-.699-3.904-1.959-.697-1.26-.604-2.883.28-4.567l5.63-10.728C7.303.974 8.585 0 9.998 0c1.413 0 2.696.974 3.625 2.746l5.633 10.738c.883 1.683.985 3.298.279 4.567C18.828 19.301 17.443 20 15.63 20zM9.999 1.476c-.874 0-1.729.709-2.407 1.989L1.967 14.203c-.632 1.2-.734 2.303-.297 3.1.437.797 1.403 1.23 2.705 1.23H15.64c1.302 0 2.259-.433 2.705-1.23.446-.797.335-1.89-.297-3.1L12.406 3.465c-.679-1.28-1.534-1.989-2.408-1.989z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon133Icon;
/* prettier-ignore-end */
