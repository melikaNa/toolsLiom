// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon80IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon80Icon(props: Icon80IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 16 22"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M8.036 16.178a1.094 1.094 0 00-1.089.014l-4.123 2.42 1.615-6.281a6.553 6.553 0 006.522 0l1.638 6.371-4.563-2.524zM7.7 2.2c2.426 0 4.4 1.973 4.4 4.4 0 2.427-1.974 4.4-4.4 4.4a4.404 4.404 0 01-4.4-4.4c0-2.427 1.973-4.4 4.4-4.4zm7.666 18.426l-2.54-9.877A6.57 6.57 0 0014.3 6.6c0-3.64-2.96-6.6-6.6-6.6-3.64 0-6.6 2.96-6.6 6.6a6.57 6.57 0 001.474 4.15l-2.54 9.876a1.099 1.099 0 001.622 1.222l5.863-3.442 6.248 3.457a1.101 1.101 0 001.598-1.236z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon80Icon;
/* prettier-ignore-end */
