// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon43IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon43Icon(props: Icon43IconProps) {
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
          "M18.494 3.801c2.095 1.221 3.569 3.7 3.504 6.592-.081 3.61-2.89 6.794-7.679 9.638-.71.422-1.458.969-2.319.969-.845 0-1.625-.557-2.32-.97-4.787-2.843-7.597-6.028-7.678-9.637-.065-2.892 1.409-5.37 3.504-6.592C7.466 2.66 9.928 2.653 12 4.338c2.072-1.685 4.534-1.679 6.494-.537z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon43Icon;
/* prettier-ignore-end */
