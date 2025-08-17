/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Path5IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Path5Icon(props: Path5IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 11 11"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M6.733 2.9V.443c0-.245-.2-.443-.446-.443H3.813a.445.445 0 00-.446.443V2.9c0 .245-.2.443-.447.443H.447A.445.445 0 000 3.786v2.457c0 .245.2.443.447.443H2.92c.247 0 .447.199.447.443v2.457c0 .245.2.443.446.443h2.474a.445.445 0 00.446-.443V7.129c0-.244.2-.443.447-.443h2.474a.445.445 0 00.446-.443V3.786c0-.244-.2-.443-.446-.443H7.18a.445.445 0 01-.447-.443z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Path5Icon;
/* prettier-ignore-end */
