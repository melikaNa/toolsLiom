/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ArrowDownIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ArrowDownIcon(props: ArrowDownIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 12 12"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        d={
          "M8.96 4.09H3.04c-.48 0-.72.58-.38.92L5.25 7.6c.415.415 1.09.415 1.505 0l.985-.985L9.345 5.01a.541.541 0 0 0-.385-.92"
        }
      ></path>
    </svg>
  );
}

export default ArrowDownIcon;
/* prettier-ignore-end */
