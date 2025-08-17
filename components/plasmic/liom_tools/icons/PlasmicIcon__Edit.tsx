/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type EditIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function EditIcon(props: EditIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 18 18"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        d={
          "M11.61 2.25H5.64c-2.587 0-4.14 1.545-4.14 4.14v5.962c0 2.603 1.553 4.148 4.14 4.148h5.962c2.595 0 4.14-1.545 4.14-4.14V6.39c.008-2.595-1.545-4.14-4.132-4.14"
        }
        opacity={".4"}
      ></path>

      <path
        fill={"currentColor"}
        d={
          "M15.765 2.235c-1.343-1.35-2.655-1.38-4.035 0l-.848.84a.27.27 0 0 0-.067.277 5.62 5.62 0 0 0 3.833 3.833c.022.008.06.008.082.008a.3.3 0 0 0 .202-.083l.833-.84c.683-.682 1.02-1.335 1.02-2.002 0-.675-.337-1.343-1.02-2.033m-2.37 5.58a6 6 0 0 1-1.02-.6 4 4 0 0 1-.39-.3 1 1 0 0 1-.12-.105 5.4 5.4 0 0 1-.713-.72.6.6 0 0 1-.097-.127 3 3 0 0 1-.285-.383 4 4 0 0 1-.27-.412 6 6 0 0 1-.3-.57 7 7 0 0 1-.24-.593L5.925 8.04c-.263.263-.518.758-.57 1.125L5.032 11.4c-.067.473.06.915.353 1.207.247.248.585.376.96.376q.124-.002.247-.016l2.228-.315a2.24 2.24 0 0 0 1.125-.57l4.035-4.035c-.188-.06-.375-.142-.585-.232"
        }
      ></path>
    </svg>
  );
}

export default EditIcon;
/* prettier-ignore-end */
