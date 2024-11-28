// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon6IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon6Icon(props: Icon6IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      data-name={"Layer 1"}
      viewBox={"0 0 702.51 640.84"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M625 215.47c0-61.9-16.96-109.52-44.38-141.66S515.32 25 473.48 25c-20.09 0-39.77 4.14-57.99 11.96s-34.95 19.33-49.16 34.06l-8.67 8.99-8.67 8.99c-6.55 6.8-15.27 10.2-23.99 10.2s-17.44-3.4-23.99-10.2l-8.67-8.99-8.67-8.99c-14.21-14.73-30.95-26.24-49.16-34.06S196.62 25 176.52 25c-42.43 0-80.31 16.67-107.58 48.81S25 153.57 25 215.47c0 104.77 75 190.48 150 250.01s150 92.86 150 92.86"
        }
        fill={"none"}
        stroke={"currentColor"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
        strokeWidth={"50"}
        data-name={"SVGRepo iconCarrier"}
      ></path>

      <path
        d={
          "M448.89 621.33S683 517.28 683 353.77c0-96.61-52.94-148.64-118.25-148.64-31.36 0-61.44 12.92-83.61 35.92l-13.53 14.03c-10.23 10.61-27.22 10.61-37.45 0l-13.53-14.03c-22.18-23-52.25-35.92-83.61-35.92-66.22 0-118.25 52.03-118.25 148.64 0 163.51 234.11 267.56 234.11 267.56z"
        }
        strokeWidth={"39.02"}
        fill={"none"}
        stroke={"currentColor"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
        data-name={"SVGRepo iconCarrier"}
      ></path>
    </svg>
  );
}

export default Icon6Icon;
/* prettier-ignore-end */
