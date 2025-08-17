/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Path3IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Path3Icon(props: Path3IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 36 30"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M30.572 8.342v-.018C30.573 3.727 26.82 0 22.19 0a8.42 8.42 0 00-2.565.398 2.488 2.488 0 00-1.741 2.365c0-1.08-.706-2.035-1.742-2.365A8.422 8.422 0 0013.576 0c-4.63 0-8.384 3.727-8.384 8.324v.018C2.11 9.925 0 13.119 0 16.804c0 4.928 3.77 8.981 8.602 9.472a7.324 7.324 0 006.038 3.162 7.37 7.37 0 001.624-.18 2.063 2.063 0 001.619-2.007c0 .962.673 1.794 1.618 2.007a7.37 7.37 0 001.623.18 7.324 7.324 0 006.039-3.162c4.832-.49 8.602-4.544 8.602-9.472 0-3.685-2.11-6.879-5.193-8.462z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Path3Icon;
/* prettier-ignore-end */
