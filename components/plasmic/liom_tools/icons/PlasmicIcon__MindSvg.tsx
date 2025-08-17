/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type MindSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function MindSvgIcon(props: MindSvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 512 512"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <defs>
        <linearGradient
          id={"irq4h8ZsOoKQa"}
          x1={"208.18"}
          x2={"208.18"}
          y1={"484.5"}
          y2={"125.75"}
          gradientUnits={"userSpaceOnUse"}
        >
          <stop offset={"0"} stopColor={"#edb2ab"}></stop>

          <stop offset={"1"} stopColor={"#f9ded7"}></stop>
        </linearGradient>

        <linearGradient
          id={"irq4h8ZsOoKQb"}
          x1={"242.76"}
          x2={"242.76"}
          y1={"433.4"}
          y2={"377.04"}
          gradientUnits={"userSpaceOnUse"}
        >
          <stop offset={"0"} stopColor={"#e08d82"}></stop>

          <stop offset={"1"} stopColor={"#edb2ab"}></stop>
        </linearGradient>

        <linearGradient
          id={"irq4h8ZsOoKQc"}
          x1={"329.23"}
          x2={"329.23"}
          y1={"322.74"}
          y2={"27.51"}
          gradientUnits={"userSpaceOnUse"}
        >
          <stop offset={"0"} stopColor={"#8448d3"}></stop>

          <stop offset={"1"} stopColor={"#b37ade"}></stop>
        </linearGradient>

        <linearGradient
          id={"irq4h8ZsOoKQd"}
          x1={"331.42"}
          x2={"331.42"}
          y1={"206.6"}
          y2={"121.48"}
          gradientUnits={"userSpaceOnUse"}
        >
          <stop offset={"0"} stopColor={"#b37ade"}></stop>

          <stop offset={"1"} stopColor={"#e2bcff"}></stop>
        </linearGradient>
      </defs>

      <path
        fill={"url(#irq4h8ZsOoKQa)"}
        d={
          "M317.36 165.29c-26.76-26.23-62.16-40.26-99.65-39.51-43.02.86-82.55 21.3-108.46 56.08-17.43 23.39-27.02 52.78-27.02 82.75v6.83c0 7.15-1.46 14.1-4.33 20.65l-18.28 41.73c-2.97 6.78-2.8 14.48.48 21.12a25.033 25.033 0 0016.47 13.24l13.99 3.44 5.92 33.19a34.662 34.662 0 0034.16 28.6h47.76c.55 0 1.02.37 1.15.91l7.25 29.41a27.24 27.24 0 0026.51 20.77h70.45c28.3 0 51.33-23.03 51.33-51.33v-57.44c0-18.9 4.07-37.71 12.08-55.89 7.76-17.61 11.7-36.37 11.7-55.76 0-37.47-14.74-72.55-41.5-98.79z"
        }
      ></path>

      <path
        fill={"url(#irq4h8ZsOoKQb)"}
        d={
          "M227.08 433.4c-6.9 0-12.5-5.6-12.5-12.5s5.6-12.5 12.5-12.5c3.67 0 7.21-1.05 10.26-3.03 5.39-3.5 8.6-9.42 8.6-15.83 0-6.9 5.6-12.5 12.5-12.5s12.5 5.6 12.5 12.5c0 14.9-7.47 28.66-19.97 36.79a43.708 43.708 0 01-23.89 7.07z"
        }
      ></path>

      <path
        fill={"url(#irq4h8ZsOoKQc)"}
        d={
          "M431.41 54.14L337.43 28.6a31.25 31.25 0 00-16.4 0l-93.98 25.54c-13.59 3.69-23.08 16.11-23.08 30.19v110.44c0 29.75 12.2 58.47 33.46 78.79l.37.35c23.39 22.24 52.04 38.71 82.87 47.61 2.8.81 5.68 1.21 8.56 1.21s5.76-.4 8.56-1.21c30.82-8.9 59.48-25.37 82.86-47.6l.38-.36c21.27-20.33 33.47-49.05 33.47-78.8V84.32c0-14.08-9.49-26.5-23.08-30.19z"
        }
      ></path>

      <path
        fill={"url(#irq4h8ZsOoKQd)"}
        d={
          "M316.45 206.6c-3.2 0-6.4-1.22-8.84-3.66l-30.18-30.18c-4.88-4.88-4.88-12.8 0-17.68 4.88-4.88 12.8-4.88 17.68 0l21.34 21.34 51.28-51.28c4.88-4.88 12.8-4.88 17.68 0 4.88 4.88 4.88 12.8 0 17.68l-60.12 60.12a12.463 12.463 0 01-8.84 3.66z"
        }
      ></path>
    </svg>
  );
}

export default MindSvgIcon;
/* prettier-ignore-end */
