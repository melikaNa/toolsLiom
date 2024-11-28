// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon41IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon41Icon(props: Icon41IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 24"}
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
          "M18.494 3.801c2.095 1.221 3.569 3.7 3.504 6.592-.081 3.61-2.89 6.794-7.679 9.638-.71.422-1.458.969-2.319.969-.845 0-1.625-.557-2.32-.97-4.787-2.843-7.597-6.028-7.678-9.637-.065-2.892 1.409-5.37 3.504-6.592C7.466 2.66 9.928 2.653 12 4.338c2.072-1.685 4.534-1.679 6.494-.537zM17.487 5.53c-1.394-.812-3.136-.783-4.644.743a1.188 1.188 0 01-1.686 0c-1.508-1.526-3.25-1.555-4.644-.743-1.444.842-2.56 2.628-2.511 4.82.056 2.511 2.04 5.194 6.7 7.962.408.243.834.554 1.298.683.464-.129.89-.44 1.298-.683 4.66-2.768 6.644-5.45 6.7-7.963.05-2.19-1.067-3.977-2.511-4.819z"
        }
        fill={"currentColor"}
        fillOpacity={".49"}
      ></path>
    </svg>
  );
}

export default Icon41Icon;
/* prettier-ignore-end */
