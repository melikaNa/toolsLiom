// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon88IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon88Icon(props: Icon88IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 22 22"}
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
          "M5.06 2.2A2.863 2.863 0 002.2 5.06c0 8.127 6.612 14.74 14.74 14.74a2.863 2.863 0 002.837-3.22l-5.082-1.167-.314.6c-.501.957-.864 1.652-1.79 1.279-3.637-1.276-6.606-4.246-7.898-7.927-.393-.863.355-1.255 1.303-1.75l.59-.309-1.165-5.083A2.864 2.864 0 005.06 2.2M16.94 22C7.599 22 0 14.401 0 5.06A5.065 5.065 0 016.7.273a1.1 1.1 0 01.712.794l1.506 6.56c.083.361-.021.74-.279 1.008-.15.156-.152.16-1.516.873 1.104 2.392 3.023 4.305 5.366 5.372.715-1.365.72-1.37.876-1.52a1.11 1.11 0 011.008-.278l6.561 1.506c.369.085.669.353.792.71A5.008 5.008 0 0122 16.94a5.065 5.065 0 01-5.06 5.061"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon88Icon;
/* prettier-ignore-end */
