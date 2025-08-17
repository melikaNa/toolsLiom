/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon87IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon87Icon(props: Icon87IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 22 16"}
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
          "M19.8 10.56L16.71 7.7l3.09-2.859v5.719zm-5.5 1.54a1.1 1.1 0 01-1.1 1.1H3.3a1.1 1.1 0 01-1.1-1.1V3.3c0-.606.493-1.1 1.1-1.1h9.9c.607 0 1.1.494 1.1 1.1v8.8zm6.613-9.74a1.888 1.888 0 00-2.036.337l-2.377 2.2V3.3c0-1.82-1.48-3.3-3.3-3.3H3.3C1.48 0 0 1.48 0 3.3v8.8c0 1.82 1.48 3.3 3.3 3.3h9.9c1.82 0 3.3-1.48 3.3-3.3v-1.596l2.377 2.199a1.892 1.892 0 002.036.337A1.769 1.769 0 0022 11.409V3.993c0-.714-.417-1.34-1.087-1.632z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon87Icon;
/* prettier-ignore-end */
