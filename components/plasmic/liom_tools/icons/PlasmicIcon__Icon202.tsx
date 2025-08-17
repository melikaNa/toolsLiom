/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon202IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon202Icon(props: Icon202IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 18 16"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M5.5 4H5c-1.886 0-2.828 0-3.414.586C1 5.172 1 6.114 1 8v3.5c0 1.886 0 2.828.586 3.414.586.586 1.528.586 3.414.586h8c1.886 0 2.828 0 3.414-.586C17 14.328 17 13.386 17 11.5V8c0-1.886 0-2.828-.586-3.414C15.828 4 14.886 4 13 4h-.5m-7 0v-.5c0-1.414 0-2.121.44-2.56C6.378.5 7.085.5 8.5.5h1c1.414 0 2.121 0 2.56.44.44.439.44 1.146.44 2.56V4m-7 0h7"
        }
        stroke={"currentColor"}
      ></path>

      <path
        d={
          "M7.932 6.963c-.057.138-.057.313-.057.662v.714c0 .017 0 .025-.005.03-.006.006-.014.006-.031.006h-.714c-.35 0-.524 0-.662.057a.75.75 0 00-.406.406C6 8.976 6 9.151 6 9.5c0 .35 0 .524.057.662a.75.75 0 00.406.406c.138.057.313.057.662.057h.714c.017 0 .025 0 .03.005.006.005.006.014.006.031v.714c0 .35 0 .524.057.662a.75.75 0 00.406.406c.138.057.313.057.662.057.35 0 .524 0 .662-.057a.75.75 0 00.406-.406c.057-.138.057-.313.057-.662v-.714c0-.017 0-.025.005-.03.005-.006.014-.006.031-.006h.714c.35 0 .524 0 .662-.057a.75.75 0 00.406-.406C12 10.024 12 9.849 12 9.5c0-.35 0-.524-.057-.662a.75.75 0 00-.406-.406c-.138-.057-.313-.057-.662-.057h-.714c-.017 0-.025 0-.03-.005-.006-.006-.006-.014-.006-.031v-.714c0-.35 0-.524-.057-.662a.75.75 0 00-.406-.406C9.524 6.5 9.349 6.5 9 6.5c-.35 0-.524 0-.662.057a.75.75 0 00-.406.406z"
        }
        stroke={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon202Icon;
/* prettier-ignore-end */
