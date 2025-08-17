/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Path4IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Path4Icon(props: Path4IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 18 29"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M9.395 14.371c-1.477-1.648-1.741-4.63-1.433-8.362-.525-.645-1.037-3.223.945-6.009-2.24 1.494-3.715 4.033-3.715 6.915v.017C2.11 8.515 0 11.709 0 15.394c0 4.928 3.77 8.982 8.602 9.473a7.324 7.324 0 006.038 3.161 7.37 7.37 0 001.624-.18c.315-.07.598-.211.838-.401-7.279-.755-8.806-9.307-7.566-12.08a.923.923 0 00-.141-.996z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Path4Icon;
/* prettier-ignore-end */
