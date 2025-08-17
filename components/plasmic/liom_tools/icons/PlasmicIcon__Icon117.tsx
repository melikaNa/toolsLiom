/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon117IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon117Icon(props: Icon117IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"currentColor"}
      version={"1.1"}
      viewBox={"0 0 489.645 489.645"}
      xmlSpace={"preserve"}
      transform={"rotate(90)"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M460.656 132.911c-58.7-122.1-212.2-166.5-331.8-104.1-9.4 5.2-13.5 16.6-8.3 27 5.2 9.4 16.6 13.5 27 8.3 99.9-52 227.4-14.9 276.7 86.3 65.4 134.3-19 236.7-87.4 274.6-93.1 51.7-211.2 17.4-267.6-70.7l69.3 14.5c10.4 2.1 21.8-4.2 23.9-15.6 2.1-10.4-4.2-21.8-15.6-23.9l-122.8-25c-20.6-2-25 16.6-23.9 22.9l15.6 123.8c1 10.4 9.4 17.7 19.8 17.7 12.8 0 20.8-12.5 19.8-23.9l-6-50.5c57.4 70.8 170.3 131.2 307.4 68.2 58.1-30 191.5-147.7 103.9-329.6z"
        }
      ></path>
    </svg>
  );
}

export default Icon117Icon;
/* prettier-ignore-end */
