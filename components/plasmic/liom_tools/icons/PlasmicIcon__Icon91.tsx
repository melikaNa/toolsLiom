/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon91IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon91Icon(props: Icon91IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 16 22"}
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
          "M8.8 17.512V19.8h2.316c.542 0 .984.442.984.985v.232a.986.986 0 01-.984.983H4.285a.986.986 0 01-.985-.983v-.232c0-.543.442-.985.985-.985H6.6v-2.288C2.874 16.975 0 13.772 0 9.9a1.1 1.1 0 112.2 0c0 3.033 2.467 5.5 5.5 5.5s5.5-2.467 5.5-5.5a1.1 1.1 0 112.2 0c0 3.872-2.874 7.075-6.6 7.612zM5.5 4.4c0-1.213.987-2.2 2.2-2.2s2.2.987 2.2 2.2v5.5c0 1.213-.987 2.2-2.2 2.2s-2.2-.987-2.2-2.2V4.4zm2.2 9.9c2.427 0 4.4-1.973 4.4-4.4V4.4c0-2.426-1.973-4.4-4.4-4.4a4.405 4.405 0 00-4.4 4.4v5.5c0 2.427 1.973 4.4 4.4 4.4z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon91Icon;
/* prettier-ignore-end */
