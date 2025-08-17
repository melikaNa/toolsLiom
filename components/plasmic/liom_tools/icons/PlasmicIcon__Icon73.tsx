/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon73IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon73Icon(props: Icon73IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 123 116"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M29.026 100.464l20.79-25.21 9.51 12.13-18.33 23.31c-7.02 8.92-20.01-.48-11.97-10.23zm24.28-57.41c1.98-6.46 1.07-11.98-6.37-20.18l-18.18-21.87c-2.58-3.03-8.66 1.42-6.12 5.09l14.54 17.91c2.75 3.34-2.36 7.76-5.2 4.32l-15.04-18.52c-2.8-3.21-8.59 1.03-5.66 4.7 4.24 5.1 10.8 13.43 15.04 18.53 2.94 2.99-1.53 7.42-4.43 3.69l-14.93-18.4c-2.19-2.38-5.77-.9-6.72 1.88-1.02 2.97 1.49 5.14 3.2 7.34l16.66 21.52c5.17 5.99 10.95 9.54 17.67 7.53 1.03-.31 2.29-.94 3.64-1.77l44.76 57.78c2.41 3.11 7.06 3.44 10.08.93l.69-.57c3.4-2.83 3.95-8 1.04-11.34l-47.4-54.46c1.38-1.54 2.39-3 2.73-4.11zm12.67 12.6l7.37-8.94c-9.48-23.5 25.65-54.82 42.68-40.42 20.69 17.51-10.06 59.71-31.67 49.28l-8.73 11.09-9.65-11.01z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon73Icon;
/* prettier-ignore-end */
