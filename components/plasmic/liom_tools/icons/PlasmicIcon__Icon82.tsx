// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon82IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon82Icon(props: Icon82IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 20 20"}
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
          "M14 11a1 1 0 110-2.002A1 1 0 0114 11m-4 0a1 1 0 110-2 1 1 0 010 2m-4 0a1 1 0 110-2 1 1 0 010 2m11.07-8.07C14.788.643 11.627-.376 8.398.123 4.32.76.94 4.044.177 8.111a10.016 10.016 0 00.61 5.765c.099.23.129.446.09.64L.02 18.802a.999.999 0 001.176 1.176l4.283-.856c.246-.047.485.022.644.088 1.814.767 3.808.977 5.765.611 4.067-.763 7.35-4.143 7.987-8.22.503-3.228-.52-6.389-2.804-8.674"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon82Icon;
/* prettier-ignore-end */
