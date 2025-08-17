/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon10IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon10Icon(props: Icon10IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 64 64"}
      strokeWidth={"3"}
      stroke={"currentColor"}
      fill={"none"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M46.84 15.43l1 3a4.43 4.43 0 001.75 2.31l2.53 1.7a4.47 4.47 0 011.66 5.37l-1 2.43a4.46 4.46 0 000 3.35l1 2.37a4.47 4.47 0 01-1.54 5.32L50 42.92a4.44 4.44 0 00-1.7 2.41l-.81 2.84a4.46 4.46 0 01-4.67 3.23l-2.43-.2a4.41 4.41 0 00-3.18 1l-2.34 1.89a4.47 4.47 0 01-5.65 0l-2-1.64a4.45 4.45 0 00-2.84-1h-3.56a4.45 4.45 0 01-4.35-3.46l-.64-2.72A4.44 4.44 0 0014 42.51L11.84 41a4.45 4.45 0 01-1.69-5.21l1-2.74a4.44 4.44 0 000-3.09l-.9-2.4A4.46 4.46 0 0112 22.28l2.37-1.53a4.48 4.48 0 001.88-2.55l.7-2.52a4.47 4.47 0 014.69-3.25l2.24.19a4.48 4.48 0 003.19-1L29.2 9.9a4.48 4.48 0 015.67 0l1.86 1.56a4.44 4.44 0 003.2 1l2.35-.17a4.47 4.47 0 014.56 3.14z"
        }
      ></path>

      <circle cx={"26.44"} cy={"24.08"} r={"3.77"}></circle>

      <circle cx={"37.94"} cy={"39.92"} r={"3.77"}></circle>

      <path d={"M41.71 22.19L21.85 42.06"}></path>
    </svg>
  );
}

export default Icon10Icon;
/* prettier-ignore-end */
