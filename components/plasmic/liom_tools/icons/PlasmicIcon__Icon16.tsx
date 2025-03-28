/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon16IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon16Icon(props: Icon16IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 24 24"}
      fill={"none"}
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
          "M8.962 19.37C6.019 16.972 2 13.009 2 9.26 2 3.35 7.5.663 12 5.5 16.5.663 22 3.349 22 9.26c0 3.748-4.02 7.711-6.962 10.11C13.706 20.458 13.04 21 12 21c-1.04 0-1.706-.543-3.038-1.63zm1.131-8.624c.09-.128.164-.234.23-.325.056.098.119.211.194.348l1.71 3.11c.166.302.33.598.493.813.175.23.482.545.975.555.493.009.813-.295.996-.518.172-.209.345-.498.523-.794l.055-.093c.221-.367.36-.598.483-.764.113-.153.179-.203.228-.23.049-.028.125-.059.315-.077.206-.02.474-.02.904-.02H18a.75.75 0 000-1.5h-.834c-.387 0-.73 0-1.016.027a2.23 2.23 0 00-.91.264 2.222 2.222 0 00-.694.644c-.171.231-.347.525-.546.857l-.048.08c-.087.144-.159.264-.224.368l-.21-.377-1.709-3.108c-.154-.28-.307-.56-.463-.765-.17-.223-.462-.52-.93-.544-.467-.026-.789.237-.982.441-.177.187-.36.448-.543.71l-.31.442c-.227.325-.37.527-.493.673-.113.134-.176.178-.223.202-.046.025-.118.051-.293.067-.19.017-.438.018-.834.018H6a.75.75 0 000 1.5h.768c.357 0 .674 0 .94-.024.29-.027.571-.085.85-.23.28-.146.489-.343.676-.565.173-.204.354-.463.559-.756l.3-.429z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon16Icon;
/* prettier-ignore-end */
