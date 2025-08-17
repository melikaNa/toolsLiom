/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BabyBlanketSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BabyBlanketSvgIcon(props: BabyBlanketSvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 48 48"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"#de4a8c"}
        d={
          "M37.21 34.91C29.83 55.89 9 47.78 9 24c0-8.24-.12-9.18.38-11.34 6.06 11.19 15.14 20.62 27.83 22.25z"
        }
      ></path>

      <path
        fill={"#f26da6"}
        d={
          "M37.21 34.91A21.52 21.52 0 0131.45 44C21.25 48.85 12 36.57 12 22v-5c6.37 9.66 14.23 16.5 25.21 17.91z"
        }
      ></path>

      <path
        fill={"#de4a8c"}
        d={
          "M39 16c0 7.28.44 12.5-1.79 18.91a31 31 0 01-13.21-5c6-4.17 11.28-11.06 14.62-17.22A14.68 14.68 0 0139 16z"
        }
      ></path>

      <path
        fill={"#f26da6"}
        d={
          "M39 16c0 8 .27 11.67-1.16 16.86a31.44 31.44 0 01-12-4.4 54.43 54.43 0 0012.75-15.8A14.68 14.68 0 0139 16z"
        }
      ></path>

      <path
        fill={"#d3377f"}
        d={
          "M38.62 12.66c-3.38 6.24-8.57 13-14.62 17.22-6-4.25-11.24-11-14.62-17.22A15 15 0 0122.69 1.08 11 11 0 0022 22.82c-.48 2.87 4.45 2.84 4 0a11 11 0 00-.68-21.74 15 15 0 0113.3 11.58z"
        }
      ></path>

      <path
        fill={"#6fabe6"}
        d={
          "M28 20.5c0 1.05-1 1.83-2 2.17a2 2 0 00-3.94 0c-2.32-.81-2.73-2.82-.82-4 2.51-1.51 6.76-.36 6.76 1.83z"
        }
      ></path>

      <path
        fill={"#f6ccaf"}
        d={
          "M35 12a11 11 0 01-9 10.82.77.77 0 000-.15c3.46-1.22 2.14-4.67-2-4.67s-5.49 3.45-2 4.67a.77.77 0 000 .15C11.45 20.91 9.65 6.38 19.49 2A11 11 0 0135 12z"
        }
      ></path>

      <path
        fill={"#ffdec7"}
        d={
          "M35 12a11 11 0 01-3.48 8 10.86 10.86 0 01-3.6.93c1-2.46-4.62-4.16-7.18-1.91A11 11 0 0119.49 2 11 11 0 0135 12z"
        }
      ></path>

      <path
        fill={"#374f68"}
        d={
          "M16.69 11.13a1 1 0 011.42 0 1.35 1.35 0 001.88 0 1 1 0 011.42 1.42c-2.27 2.27-6.14 0-4.72-1.42zm9.9 0a1 1 0 011.42 0 1.35 1.35 0 001.88 0 1 1 0 011.42 1.42c-2.31 2.27-6.14 0-4.72-1.42z"
        }
      ></path>

      <path
        fill={"#df8761"}
        d={
          "M27.19 4.05c0 4.42-6.59 4.8-6.59.51 0-2.65 3.63-3.48 3.63-1.63a1 1 0 01-1 1 .63.63 0 00-.63.63c0 1.61 2.59 1.28 2.59-.51 0-1.26-.85-2.88-1.84-3a9.68 9.68 0 011.92.05 11.05 11.05 0 011.15.2 5.82 5.82 0 01.77 2.75z"
        }
      ></path>

      <path
        fill={"#5b9ad8"}
        d={"M26 23a2 2 0 11-4-.18c0-2.27 4-2.58 4 .18z"}
      ></path>

      <path
        fill={"#6fabe6"}
        d={"M25.82 23.82a2 2 0 01-2.63-2.64 2 2 0 012.63 2.64z"}
      ></path>

      <path
        fill={"#82bcf4"}
        d={
          "M25.7 22a2 2 0 00-3-.44c-1.26-.56-2.08-1.69-1.45-2.81C25.59 16 31.44 21.31 25.7 22z"
        }
      ></path>
    </svg>
  );
}

export default BabyBlanketSvgIcon;
/* prettier-ignore-end */
