// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon35IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon35Icon(props: Icon35IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"currentColor"}
      viewBox={"0 0 24 24"}
      className={classNames("plasmic-default__svg", className, "icon glyph")}
      height={"1em"}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M17 4v1h-2V4H9v1H7V4a2 2 0 012-2h6a2 2 0 012 2zm3 2H4a1 1 0 000 2h1v12a2 2 0 002 2h10a2 2 0 002-2V8h1a1 1 0 000-2z"
        }
      ></path>
    </svg>
  );
}

export default Icon35Icon;
/* prettier-ignore-end */
