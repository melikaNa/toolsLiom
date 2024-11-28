// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon15IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon15Icon(props: Icon15IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 32 32"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M30.77 14.627a2.01 2.01 0 010 2.746c-2.392 2.557-8.104 7.792-14.77 7.792S3.622 19.931 1.23 17.374a2.01 2.01 0 010-2.746C3.622 12.07 9.334 6.836 16 6.836s12.378 5.235 14.77 7.792z"
        }
        fill={"#F7F5FB"}
      ></path>

      <path
        d={
          "M16 9.17a6.83 6.83 0 100 13.66 6.83 6.83 0 000-13.66zm0 10.237a3.406 3.406 0 110-6.812 3.406 3.406 0 010 6.812z"
        }
        fill={"#F17B89"}
      ></path>

      <path
        d={
          "M16 19.407v3.423A6.83 6.83 0 019.17 16h3.424A3.406 3.406 0 0016 19.407z"
        }
        fill={"#F5D367"}
      ></path>

      <path
        d={
          "M16 9.171v3.424A3.406 3.406 0 0012.594 16H9.17A6.83 6.83 0 0116 9.171z"
        }
        fill={"#A9DEFC"}
      ></path>

      <path
        d={
          "M22.83 16A6.83 6.83 0 0116 22.83v-3.423A3.406 3.406 0 0019.406 16h3.424z"
        }
        fill={"#74D1D1"}
      ></path>

      <path
        d={"M16 19.407a3.406 3.406 0 100-6.812 3.406 3.406 0 000 6.812z"}
        fill={"#25333F"}
      ></path>

      <path
        d={
          "M12.882 24.795C7.59 23.558 3.239 19.521 1.23 17.373a2.009 2.009 0 010-2.745 32.259 32.259 0 013.683-3.37 31.222 31.222 0 007.969 13.537z"
        }
        fill={"#E4E3E8"}
      ></path>
    </svg>
  );
}

export default Icon15Icon;
/* prettier-ignore-end */
