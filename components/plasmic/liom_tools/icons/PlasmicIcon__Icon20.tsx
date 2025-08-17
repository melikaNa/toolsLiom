/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon20IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon20Icon(props: Icon20IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      version={"1.1"}
      viewBox={"0 0 50.463 50.463"}
      xmlSpace={"preserve"}
      fill={"#000"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M47.923 29.694c.021-.601-.516-1.063-.901-1.515-.676-2.733-2.016-5.864-3.961-8.971C39.942 14.23 31.688 6.204 28.553 4.966a2.797 2.797 0 00-.429-.126c-.313-1.013-.479-1.708-1.698-2.521C23.072.083 19.327-.547 16.848.476c-2.481 1.023-3.859 6.687-1.19 8.625 2.546 1.857 7.583-1.888 9.195.509 1.609 2.396 3.386 10.374 6.338 15.473a17 17 0 00-2.307-.156c-3.406 0-6.467.998-8.63 2.593-1.85-2.887-5.08-4.806-8.764-4.806-3.82 0-7.141 2.064-8.95 5.13v22.619h4.879l1.042-1.849c3.354-1.287 7.32-4.607 10.076-8.147 11.014 4.322 29.139-3.678 29.386-10.773z"
        }
        fill={"#010002"}
      ></path>
    </svg>
  );
}

export default Icon20Icon;
/* prettier-ignore-end */
