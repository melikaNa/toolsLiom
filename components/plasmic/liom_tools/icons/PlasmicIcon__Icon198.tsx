/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon198IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon198Icon(props: Icon198IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        d={
          "M16.28 22.1h-3.8c-.56 0-1.78-.17-2.43-.82l-3.03-2.34.92-1.19 3.1 2.4c.25.24.88.44 1.44.44h3.8c.9 0 1.87-.72 2.07-1.53l2.42-7.35c.16-.44.13-.84-.08-1.13-.22-.31-.62-.49-1.11-.49h-4c-.52 0-1-.22-1.33-.6-.34-.39-.49-.91-.41-1.45l.5-3.21c.12-.56-.26-1.19-.8-1.37-.49-.18-1.12.08-1.34.4l-4.1 6.1-1.24-.83 4.1-6.1c.63-.94 2.01-1.39 3.09-.98 1.25.41 2.05 1.79 1.77 3.07l-.49 3.15c-.01.07-.01.17.06.25.05.05.12.08.2.08h4c.98 0 1.83.41 2.33 1.12.49.69.59 1.6.27 2.48l-2.39 7.28c-.37 1.45-1.91 2.62-3.52 2.62"
        }
      ></path>

      <path
        fill={"currentColor"}
        d={
          "M5.38 21h-1c-1.85 0-2.75-.87-2.75-2.65v-9.8c0-1.78.9-2.65 2.75-2.65h1c1.85 0 2.75.87 2.75 2.65v9.8c0 1.78-.9 2.65-2.75 2.65m-1-13.6c-1.09 0-1.25.26-1.25 1.15v9.8c0 .89.16 1.15 1.25 1.15h1c1.09 0 1.25-.26 1.25-1.15v-9.8c0-.89-.16-1.15-1.25-1.15z"
        }
      ></path>
    </svg>
  );
}

export default Icon198Icon;
/* prettier-ignore-end */
