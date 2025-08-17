/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon26IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon26Icon(props: Icon26IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"currentColor"}
      viewBox={"-1 0 19 19"}
      className={classNames("plasmic-default__svg", className, "cf-icon-svg")}
      height={"1em"}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M8.5 15.313a1.026 1.026 0 01-.728-.302l-6.8-6.8a1.03 1.03 0 011.455-1.456L8.5 12.828l6.073-6.073a1.03 1.03 0 011.455 1.456l-6.8 6.8a1.026 1.026 0 01-.728.302z"
        }
      ></path>
    </svg>
  );
}

export default Icon26Icon;
/* prettier-ignore-end */
