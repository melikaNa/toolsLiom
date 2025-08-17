/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Path7IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Path7Icon(props: Path7IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 18 39"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M7.18 0C2.96 1.319-.067 5.363.002 10.013c.121 8.132 5.023 10.29 5.023 17.174 0 6.84 3.16 11.022 6.252 11.022 3.022 0 4.863-3.264 6.159-6.35C9.36 28.972 4.023 9.12 7.18 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Path7Icon;
/* prettier-ignore-end */
