/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon145IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon145Icon(props: Icon145IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      version={"1.1"}
      viewBox={"0 0 512 512"}
      xmlSpace={"preserve"}
      fill={"currentColor"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g fill={"currentColor"}>
        <path
          d={
            "M471.78 276.233l.114.107-237.5-234.786.008.016C207.637 14.79 172.395 1.335 137.31 1.357c-35.088-.022-70.322 13.432-97.094 40.213C13.431 68.341-.024 103.584 0 138.673c-.024 35.081 13.431 70.323 40.216 97.095L277.655 470.5l-.065-.069c26.772 26.78 62.006 40.235 97.103 40.212 35.081.023 70.316-13.432 97.088-40.204 26.788-26.78 40.242-62.022 40.22-97.111.022-35.089-13.433-70.331-40.221-97.095zm-307.237 35.648c-.069.214-.119.413-.191.628L63.327 212.633l.008.016c-20.454-20.47-30.62-47.15-30.636-73.976.015-26.834 10.181-53.507 30.636-73.976 20.47-20.454 47.146-30.624 73.976-30.639 26.826.015 53.503 10.185 73.972 30.639l.108.108 104.753 103.55c-20.662 4.335-39.32 11.962-55.704 21.78-35.46 21.274-60.67 52.043-77.273 80.876-8.305 14.442-14.459 28.448-18.624 40.87zm284.117 135.43c-20.469 20.447-47.142 30.617-73.968 30.632-26.838-.015-53.514-10.177-73.984-30.639l-.061-.061-109.409-108.162c.326-2.105.808-4.58 1.508-7.321 2.531-10.132 7.628-23.786 15.316-38.221 11.525-21.695 28.886-45.204 51.829-63.339 22.84-18.02 50.857-30.892 85.582-32.845l103.142 101.958.045.038c20.462 20.47 30.624 47.15 30.64 73.976-.015 26.826-10.177 53.507-30.64 73.984z"
          }
        ></path>

        <path
          d={
            "M81.477 170.66l35.747-85.456c-13.417 0-26.026 5.216-35.503 14.696-19.573 19.573-19.573 51.431-.244 70.76z"
          }
        ></path>
      </g>
    </svg>
  );
}

export default Icon145Icon;
/* prettier-ignore-end */
