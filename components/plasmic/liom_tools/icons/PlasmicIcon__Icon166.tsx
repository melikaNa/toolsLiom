/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon166IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon166Icon(props: Icon166IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      viewBox={"0 0 24 24"}
      fill={"none"}
      xmlns={"http://www.w3.org/2000/svg"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g fill={"#1C274C"}>
        <path
          d={
            "M12.079 2.25c-4.794 0-8.734 3.663-9.118 8.333H2a.75.75 0 00-.528 1.283l1.68 1.666a.75.75 0 001.056 0l1.68-1.666a.75.75 0 00-.528-1.283h-.893c.38-3.831 3.638-6.833 7.612-6.833a7.658 7.658 0 016.537 3.643.75.75 0 101.277-.786A9.158 9.158 0 0012.08 2.25z"
          }
        ></path>

        <path
          opacity={".5"}
          d={
            "M20.841 10.467a.75.75 0 00-1.054 0L18.1 12.133a.75.75 0 00.527 1.284h.899c-.381 3.83-3.651 6.833-7.644 6.833a7.697 7.697 0 01-6.565-3.644.75.75 0 10-1.276.788 9.197 9.197 0 007.84 4.356c4.809 0 8.766-3.66 9.151-8.333H22a.75.75 0 00.527-1.284l-1.686-1.666z"
          }
        ></path>
      </g>
    </svg>
  );
}

export default Icon166Icon;
/* prettier-ignore-end */
