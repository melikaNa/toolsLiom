/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Trash2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Trash2Icon(props: Trash2IconProps) {
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
          "M15.803 3.922a84 84 0 0 0-3.63-.277v-.007l-.165-.975c-.113-.69-.278-1.725-2.033-1.725H8.01c-1.747 0-1.912.99-2.032 1.717l-.158.96c-.697.045-1.395.09-2.092.157l-1.53.15a.564.564 0 0 0-.51.615c.03.308.3.533.615.503l1.53-.15c3.93-.39 7.89-.24 11.865.158h.06a.57.57 0 0 0 .562-.51.575.575 0 0 0-.517-.616"
        }
      ></path>

      <path
        fill={"currentColor"}
        d={
          "M14.423 6.105a.95.95 0 0 0-.683-.293H4.26a.936.936 0 0 0-.937.998l.465 7.695c.082 1.14.187 2.565 2.805 2.565h4.815c2.617 0 2.722-1.418 2.805-2.565l.465-7.688a.97.97 0 0 0-.255-.712"
        }
        opacity={".399"}
      ></path>

      <path
        fill={"currentColor"}
        fillRule={"evenodd"}
        d={
          "M7.185 12.75c0-.31.252-.563.563-.563h2.497a.563.563 0 0 1 0 1.126H7.748a.56.56 0 0 1-.563-.563m-.622-3c0-.31.251-.563.562-.563h3.75a.562.562 0 1 1 0 1.126h-3.75a.56.56 0 0 1-.563-.563z"
        }
        clipRule={"evenodd"}
      ></path>
    </svg>
  );
}

export default Trash2Icon;
/* prettier-ignore-end */
