// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Oval2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Oval2Icon(props: Oval2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 18 18"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={"M8.648 17.297A8.648 8.648 0 108.648 0a8.648 8.648 0 000 17.297z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Oval2Icon;
/* prettier-ignore-end */
