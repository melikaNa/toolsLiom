/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon18IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon18Icon(props: Icon18IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"currentColor"}
      version={"1.1"}
      viewBox={"0 0 297 297"}
      xmlSpace={"preserve"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M101.643 0C79.737 0 61.917 17.821 61.917 39.725a7.13 7.13 0 01-7.13 7.13c-21.905 0-39.726 17.821-39.726 39.726 0 7.503 5.354 21.531 9.838 25.346a53.669 53.669 0 0129.888-9.048c29.769 0 53.987 24.218 53.987 53.987a7.13 7.13 0 11-14.26 0c0-21.905-17.821-39.726-39.726-39.726-21.905 0-39.728 17.821-39.728 39.727 0 16.847 10.681 31.913 26.577 37.488a7.131 7.131 0 013.562 10.7 39.523 39.523 0 00-6.711 22.096c0 11.89 5.43 23.055 14.349 30.513 5.287-17.018 21.12-29.577 39.779-29.844l.104-.001a7.13 7.13 0 017.127 7.028 7.13 7.13 0 01-7.027 7.232c-14.865.214-27.386 12.381-27.56 27.132C65.081 284.431 78.055 297 93.277 297c11.043 0 34.354-17.309 48.093-29.525V39.725C141.37 17.821 123.549 0 101.643 0zm140.57 117.142c-21.905 0-39.726 17.821-39.726 39.726a7.13 7.13 0 11-14.26 0c0-29.769 24.218-53.987 53.987-53.987a53.667 53.667 0 0129.888 9.048c4.484-3.815 9.838-17.843 9.838-25.346 0-21.905-17.821-39.726-39.726-39.726a7.13 7.13 0 01-7.13-7.13C235.083 17.821 217.262 0 195.357 0c-21.905 0-39.727 17.821-39.727 39.725v227.75C169.37 279.691 192.681 297 203.723 297c15.222 0 28.196-12.569 28.017-27.789-.174-14.751-12.695-26.918-27.561-27.131a7.13 7.13 0 01.204-14.259c18.659.267 34.492 12.826 39.779 29.844 8.919-7.458 14.349-18.623 14.349-30.513a39.523 39.523 0 00-6.711-22.096 7.13 7.13 0 013.562-10.7c15.896-5.576 26.577-20.641 26.577-37.488 0-21.905-17.821-39.726-39.726-39.726z"
        }
      ></path>
    </svg>
  );
}

export default Icon18Icon;
/* prettier-ignore-end */
