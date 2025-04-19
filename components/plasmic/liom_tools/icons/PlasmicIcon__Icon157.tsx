/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon157IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon157Icon(props: Icon157IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 18 22"}
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
          "M9 1.55c-2.21 0-3.917 1.668-3.917 3.625S6.791 8.8 9 8.8c2.21 0 3.917-1.668 3.917-3.625S11.21 1.55 9 1.55zM3.583 5.175C3.583 2.3 6.055.05 9 .05s5.417 2.25 5.417 5.125S11.945 10.3 9 10.3 3.583 8.05 3.583 5.175zm8.485 8.842a19.38 19.38 0 00-6.136 0l-.237.038-.114-.708.114.708a4.699 4.699 0 00-3.945 4.647c0 .747.603 1.348 1.34 1.348h11.82c.737 0 1.34-.6 1.34-1.348a4.699 4.699 0 00-3.945-4.647l.103-.64-.103.64-.237-.038zm.237-1.481l-.102.639.102-.64.238.039a6.199 6.199 0 015.207 6.128 2.844 2.844 0 01-2.84 2.848H3.09a2.844 2.844 0 01-2.84-2.848 6.199 6.199 0 015.207-6.128l.238-.038.119.74-.12-.74a20.88 20.88 0 016.611 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon157Icon;
/* prettier-ignore-end */
