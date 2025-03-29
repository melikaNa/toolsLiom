/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type OvalIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function OvalIcon(props: OvalIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 13 12"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M6.423 11.143c3.547 0 6.422-2.494 6.422-5.572C12.845 2.494 9.97 0 6.423 0 2.875 0 0 2.494 0 5.571c0 3.078 2.875 5.572 6.423 5.572z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default OvalIcon;
/* prettier-ignore-end */
