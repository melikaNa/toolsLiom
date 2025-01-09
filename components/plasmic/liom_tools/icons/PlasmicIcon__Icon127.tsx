// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon127IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon127Icon(props: Icon127IconProps) {
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
          "M5.312 10.761C8.23 5.587 9.689 3 12 3c2.31 0 3.77 2.587 6.688 7.761l.364.645c2.425 4.3 3.638 6.45 2.542 8.022S17.786 21 12.364 21h-.728c-5.422 0-8.134 0-9.23-1.572s.117-3.722 2.542-8.022l.364-.645zM12 7.25a.75.75 0 01.75.75v5a.75.75 0 01-1.5 0V8a.75.75 0 01.75-.75zM12 17a1 1 0 100-2 1 1 0 000 2z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon127Icon;
/* prettier-ignore-end */
