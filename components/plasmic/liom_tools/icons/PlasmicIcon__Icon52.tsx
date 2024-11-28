// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon52IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon52Icon(props: Icon52IconProps) {
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

      <g fill={"currentColor"}>
        <path
          opacity={".5"}
          d={
            "M2 9.318c0 3.729 4.02 7.673 6.962 10.06C10.294 20.46 10.96 21 12 21c1.04 0 1.706-.54 3.038-1.621C17.981 16.99 22 13.047 22 9.317c0-6.23-5.5-8.556-10-3.743C7.5.761 2 3.087 2 9.318z"
          }
        ></path>

        <path
          fillRule={"evenodd"}
          clipRule={"evenodd"}
          d={
            "M16.5 6.25a.75.75 0 01.75.75v1.25h1.25a.75.75 0 010 1.5h-1.25V11a.75.75 0 01-1.5 0V9.75H14.5a.75.75 0 010-1.5h1.25V7a.75.75 0 01.75-.75z"
          }
        ></path>
      </g>
    </svg>
  );
}

export default Icon52Icon;
/* prettier-ignore-end */
