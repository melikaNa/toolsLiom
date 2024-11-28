// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon93IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon93Icon(props: Icon93IconProps) {
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
        d={
          "M4.468 17.532C5.623 19.715 7.928 20.5 12 20.5c5.625 0 7.88-1.498 8.385-6.115M4.468 17.532C3.78 16.229 3.5 14.429 3.5 12c0-6.5 2-8.5 8.5-8.5s8.5 2 8.5 8.5c0 .874-.036 1.668-.115 2.385M4.468 17.532l3.118-3.118a2 2 0 012.828 0l.172.172a2 2 0 002.828 0l2.172-2.172a2 2 0 012.828 0l1.971 1.971m-9.694-5.539a1.847 1.847 0 11-3.693-.001 1.847 1.847 0 013.693.001z"
        }
        stroke={"currentColor"}
        strokeWidth={"1.5"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default Icon93Icon;
/* prettier-ignore-end */
