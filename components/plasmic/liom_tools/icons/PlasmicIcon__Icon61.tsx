// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon61IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon61Icon(props: Icon61IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      version={"1.1"}
      viewBox={"0 0 32 32"}
      xmlSpace={"preserve"}
      fill={"currentColor"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M16 2c-3.9 0-7 3.1-7 7s3.1 7 7 7 7-3.1 7-7-3.1-7-7-7zm3 5.3c-.5 1.2-1.2 2.7-1.6 3.1-.4.4-.9.6-1.4.6s-1-.2-1.4-.6c-.8-.8-.8-2 0-2.8.4-.4 2-1.1 3.1-1.6.4-.2.8-.1 1.1.2s.4.7.2 1.1z"
        }
      ></path>

      <path
        d={
          "M7 9c0-.3 0-.7.1-1H6c-1.7 0-3 1.3-3 3v16c0 1.7 1.3 3 3 3h9V17.9c-4.5-.5-8-4.3-8-8.9zm19-1h-1.1c.1.3.1.7.1 1 0 4.6-3.5 8.4-8 8.9V30h9c1.7 0 3-1.3 3-3V11c0-1.7-1.3-3-3-3z"
        }
      ></path>
    </svg>
  );
}

export default Icon61Icon;
/* prettier-ignore-end */
