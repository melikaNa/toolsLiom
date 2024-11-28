// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon33IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon33Icon(props: Icon33IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 512 512"}
      version={"1.1"}
      xmlSpace={"preserve"}
      fill={"#000"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M388.31 110.71h-63.59c-.83-37.2-31.33-67.21-68.72-67.21s-67.89 30.01-68.72 67.21h-63.59c-24.34 0-44.08 19.73-44.08 44.08v1.25c0 24.34 19.73 44.08 44.08 44.08H388.3c24.34 0 44.08-19.73 44.08-44.08v-1.25c0-24.35-19.73-44.08-44.07-44.08zM256 75.05c19.99 0 36.35 15.86 37.16 35.66h-74.33c.82-19.8 17.18-35.66 37.17-35.66zM123.7 231.66c-1.49 0-2.97-.04-4.43-.13v183.29c0 29.64 24.03 53.67 53.67 53.67h166.11c29.64 0 53.67-24.03 53.67-53.67V231.54c-1.46.09-2.94.13-4.43.13H123.7zm107.25 178.25c0 8.71-7.07 15.78-15.78 15.78-8.72 0-15.78-7.07-15.78-15.78V294.28c0-8.72 7.06-15.78 15.78-15.78 8.71 0 15.78 7.06 15.78 15.78v115.63zm81.65 0c0 8.71-7.06 15.78-15.78 15.78-8.71 0-15.78-7.07-15.78-15.78V294.28c0-8.72 7.07-15.78 15.78-15.78 8.72 0 15.78 7.06 15.78 15.78v115.63z"
        }
        fill={"#333"}
      ></path>
    </svg>
  );
}

export default Icon33Icon;
/* prettier-ignore-end */
