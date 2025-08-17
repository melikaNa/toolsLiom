/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Path17IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Path17Icon(props: Path17IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 12 16"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M11.726.805V8.55a2.66 2.66 0 01-.78 1.883l-5.552 5.553c-1.467-.002-2.845-.502-3.869-1.525C.501 13.436.002 12.057 0 10.59L10.354.237a.804.804 0 011.372.568z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Path17Icon;
/* prettier-ignore-end */
