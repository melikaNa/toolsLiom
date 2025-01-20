// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon129IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon129Icon(props: Icon129IconProps) {
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

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M11.958 4.25h.084c1.369 0 2.454 0 3.32.088.888.09 1.629.28 2.277.713.519.346.964.791 1.31 1.31.434.648.623 1.39.713 2.277.088.866.088 1.951.088 3.32v.084c0 1.369 0 2.454-.088 3.32-.09.888-.28 1.629-.712 2.277a4.753 4.753 0 01-1.311 1.31c-.648.434-1.39.623-2.277.713-.866.088-1.951.088-3.32.088h-.084c-1.369 0-2.454 0-3.32-.088-.888-.09-1.629-.28-2.277-.712a4.751 4.751 0 01-1.31-1.311c-.434-.648-.623-1.39-.713-2.277-.088-.866-.088-1.951-.088-3.32v-.084c0-1.369 0-2.454.088-3.32.09-.888.28-1.629.713-2.277a4.75 4.75 0 011.31-1.31c.648-.434 1.39-.623 2.277-.713.866-.088 1.951-.088 3.32-.088zm4.05 5.802a.75.75 0 10-1.016-1.104l-3.86 3.558-1.613-1.547a.75.75 0 00-1.038 1.082l2.121 2.036a.75.75 0 001.028.01l4.378-4.035z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon129Icon;
/* prettier-ignore-end */
