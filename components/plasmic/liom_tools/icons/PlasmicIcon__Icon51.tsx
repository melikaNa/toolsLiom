/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon51IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon51Icon(props: Icon51IconProps) {
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
          opacity={".4"}
          d={
            "M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2z"
          }
        ></path>

        <path
          d={
            "M15.5 10.13a1.88 1.88 0 100-3.76 1.88 1.88 0 000 3.76zm-7 0a1.88 1.88 0 100-3.76 1.88 1.88 0 000 3.76zm7.1 2.79H8.4c-.7 0-1.27.57-1.27 1.28 0 2.69 2.19 4.88 4.88 4.88s4.88-2.19 4.88-4.88c-.01-.7-.59-1.28-1.29-1.28z"
          }
        ></path>
      </g>
    </svg>
  );
}

export default Icon51Icon;
/* prettier-ignore-end */
