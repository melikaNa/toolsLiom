/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type EmojiHappySquareSvgrepoComSvg2IconProps =
  React.ComponentProps<"svg"> & {
    title?: string;
  };

export function EmojiHappySquareSvgrepoComSvg2Icon(
  props: EmojiHappySquareSvgrepoComSvg2IconProps
) {
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

      <path fill={"#fff"} d={"M0 0h24v24H0z"}></path>

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M7.25 2.388C8.55 2.099 10.124 2 12 2s3.451.1 4.75.388c1.31.291 2.399.788 3.236 1.626.838.837 1.335 1.926 1.626 3.236.289 1.3.388 2.874.388 4.75s-.1 3.451-.388 4.75c-.291 1.31-.788 2.399-1.626 3.236-.837.838-1.926 1.335-3.236 1.626-1.299.289-2.874.388-4.75.388s-3.451-.1-4.75-.388c-1.31-.291-2.399-.788-3.236-1.626-.838-.837-1.335-1.926-1.626-3.236C2.099 15.45 2 13.876 2 12s.1-3.451.388-4.75c.291-1.31.788-2.399 1.626-3.236.837-.838 1.926-1.335 3.236-1.626zM9 9a1 1 0 011 1v.011a1 1 0 01-2 0V10a1 1 0 011-1zm-1.6 4.2a1 1 0 011.4.2A3.992 3.992 0 0012 15c1.308 0 2.47-.627 3.201-1.6a1 1 0 011.6 1.2A5.992 5.992 0 0112 17a5.992 5.992 0 01-4.8-2.4 1 1 0 01.198-1.4zM16 10a1 1 0 00-2 0v.011a1 1 0 102 0V10z"
        }
        fill={"#00C371"}
      ></path>
    </svg>
  );
}

export default EmojiHappySquareSvgrepoComSvg2Icon;
/* prettier-ignore-end */
