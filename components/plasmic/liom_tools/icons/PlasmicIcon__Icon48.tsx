// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon48IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon48Icon(props: Icon48IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 20 20"}
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
          "M6 10a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zM5.25.388C6.55.099 8.124 0 10 0s3.451.1 4.75.388c1.31.291 2.399.788 3.236 1.626.838.837 1.335 1.926 1.626 3.236.289 1.3.388 2.874.388 4.75s-.1 3.451-.388 4.75c-.291 1.31-.788 2.399-1.626 3.236-.837.838-1.926 1.335-3.236 1.626-1.299.289-2.874.388-4.75.388s-3.451-.1-4.75-.388c-1.31-.291-2.399-.788-3.236-1.626C1.176 17.15.679 16.06.388 14.75.099 13.45 0 11.876 0 10s.1-3.451.388-4.75c.291-1.31.788-2.399 1.626-3.236C2.85 1.176 3.94.679 5.25.388z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon48Icon;
/* prettier-ignore-end */
