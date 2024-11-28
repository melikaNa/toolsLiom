// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon59IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon59Icon(props: Icon59IconProps) {
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
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M3 10c0-3.771 0-5.657 1.172-6.828C5.343 2 7.229 2 11 2h2c3.771 0 5.657 0 6.828 1.172C21 4.343 21 6.229 21 10v4c0 3.771 0 5.657-1.172 6.828C18.657 22 16.771 22 13 22h-2c-3.771 0-5.657 0-6.828-1.172C3 19.657 3 17.771 3 14v-4zm4.25 8a.75.75 0 01.75-.75h8a.75.75 0 010 1.5H8a.75.75 0 01-.75-.75zm8.105-11.69a18.322 18.322 0 00-6.71 0l-.476.088c-.88.164-1.4 1.194-1.068 2.118l.744 2.076c.108.301.399.467.68.389.178-.05.356-.095.534-.137l-.64-1.99c-.155-.487.071-1.022.507-1.197.436-.174.917.079 1.073.565l.752 2.342a12.89 12.89 0 014.724.417c.281.078.572-.088.68-.389l.744-2.076c.332-.924-.188-1.954-1.068-2.118l-.476-.088z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon59Icon;
/* prettier-ignore-end */
