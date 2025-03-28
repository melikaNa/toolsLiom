/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon128IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon128Icon(props: Icon128IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"currentColor"}
      viewBox={"0 0 50 50"}
      version={"1.2"}
      baseProfile={"tiny"}
      overflow={"inherit"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M42.924 13H38V7.774C38 4.038 35.052 1 31.306 1H18.695C14.947 1 12 4.038 12 7.774V13H7.075C3.719 13 1 15.591 1 18.937v23.007C1 45.289 3.719 48 7.075 48h35.849C46.279 48 49 45.289 49 41.943V18.937C49 15.591 46.279 13 42.924 13zM16 7.774C16 6.375 17.292 5 18.695 5h12.611C32.705 5 34 6.375 34 7.774V13H16V7.774zM36 35h-7v7h-8v-7h-7v-8h7v-7h8v7h7v8z"
        }
      ></path>
    </svg>
  );
}

export default Icon128Icon;
/* prettier-ignore-end */
