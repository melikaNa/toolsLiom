/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon55IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon55Icon(props: Icon55IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 20 20"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={"M1 10c0-7.412 1.588-9 9-9s9 1.588 9 9-1.588 9-9 9-9-1.588-9-9z"}
        fill={"#7444BC"}
        stroke={"#7444BC"}
        strokeWidth={"2"}
      ></path>

      <path
        d={"M6.44 10l2.374 2.373 4.746-4.746"}
        stroke={"#fff"}
        strokeWidth={"1.5"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default Icon55Icon;
/* prettier-ignore-end */
