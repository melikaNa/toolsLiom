// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon14IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon14Icon(props: Icon14IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 200 200"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <radialGradient
        id={"kswWE76uSYh_a"}
        cx={".66"}
        fx={".66"}
        cy={".313"}
        fy={".313"}
        gradientTransform={"scale(1.5)"}
      >
        <stop offset={"0"} stopColor={"#FFF"}></stop>

        <stop offset={".3"} stopColor={"#FFF"} stopOpacity={".9"}></stop>

        <stop offset={".6"} stopColor={"#FFF"} stopOpacity={".6"}></stop>

        <stop offset={".8"} stopColor={"#FFF"} stopOpacity={".3"}></stop>

        <stop offset={"1"} stopColor={"#FFF"} stopOpacity={"0"}></stop>
      </radialGradient>

      <circle
        transformOrigin={"center"}
        fill={"none"}
        stroke={"url(#kswWE76uSYh_a)"}
        strokeWidth={"26"}
        strokeLinecap={"round"}
        strokeDasharray={"200 1000"}
        strokeDashoffset={"0"}
        cx={"100"}
        cy={"100"}
        r={"70"}
      >
        <animateTransform
          type={"rotate"}
          attributeName={"transform"}
          calcMode={"spline"}
          dur={"2"}
          values={"360;0"}
          keyTimes={"0;1"}
          keySplines={"0 0 1 1"}
          repeatCount={"indefinite"}
        ></animateTransform>
      </circle>

      <circle
        transformOrigin={"center"}
        fill={"none"}
        opacity={".2"}
        stroke={"#FFF"}
        strokeWidth={"26"}
        strokeLinecap={"round"}
        cx={"100"}
        cy={"100"}
        r={"70"}
      ></circle>
    </svg>
  );
}

export default Icon14Icon;
/* prettier-ignore-end */
