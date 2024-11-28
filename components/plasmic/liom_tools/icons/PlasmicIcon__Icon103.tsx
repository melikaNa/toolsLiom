// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon103IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon103Icon(props: Icon103IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      version={"1.1"}
      viewBox={"0 0 32 32"}
      xmlSpace={"preserve"}
      fill={"#000"}
      transform={"rotate(180)"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M20.414 26.414l9-9a2 2 0 000-2.828l-9-9a2 2 0 10-2.828 2.828L23.172 14H4a2 2 0 000 4h19.172l-5.586 5.586a2 2 0 102.828 2.828z"
        }
        fill={"#111918"}
      ></path>
    </svg>
  );
}

export default Icon103Icon;
/* prettier-ignore-end */
