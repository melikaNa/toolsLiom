/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type TrashIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function TrashIcon(props: TrashIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 16 16"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        stroke={"currentColor"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
        d={
          "M14 3.987a68 68 0 0 0-6.68-.334q-1.98 0-3.96.2L2 3.987m3.667-.674.146-.873C5.92 1.807 6 1.333 7.127 1.333h1.746c1.127 0 1.214.5 1.314 1.114l.146.866m2.234 2.78-.434 6.714c-.073 1.046-.133 1.86-1.993 1.86H5.86c-1.86 0-1.92-.814-1.993-1.86l-.434-6.714M6.887 11h2.22M6.333 8.333h3.334"
        }
      ></path>
    </svg>
  );
}

export default TrashIcon;
/* prettier-ignore-end */
