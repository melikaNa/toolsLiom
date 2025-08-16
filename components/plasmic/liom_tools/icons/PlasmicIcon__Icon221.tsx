/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon221IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon221Icon(props: Icon221IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 20 21"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        stroke={"currentColor"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
        strokeWidth={"1.25"}
        d={
          "m18.05 8.97-.817 3.484c-.7 3.008-2.083 4.225-4.683 3.975a9 9 0 0 1-1.35-.225l-1.4-.333c-3.475-.825-4.55-2.542-3.733-6.025l.816-3.492c.167-.708.367-1.325.617-1.833.975-2.017 2.633-2.559 5.417-1.9l1.391.325c3.492.816 4.559 2.541 3.742 6.025"
        }
      ></path>

      <path
        stroke={"currentColor"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
        strokeWidth={"1.25"}
        d={
          "M12.55 16.429c-.517.35-1.167.642-1.958.9l-1.317.433c-3.308 1.067-5.05.175-6.125-3.133l-1.067-3.292C1.017 8.03 1.9 6.28 5.208 5.212l1.317-.433c.342-.108.667-.2.975-.258-.25.508-.45 1.125-.617 1.833l-.816 3.492c-.817 3.483.258 5.2 3.733 6.025l1.4.333a9 9 0 0 0 1.35.225m-2.017-9.05 4.042 1.025m-4.858 2.2 2.416.617"
        }
      ></path>
    </svg>
  );
}

export default Icon221Icon;
/* prettier-ignore-end */
