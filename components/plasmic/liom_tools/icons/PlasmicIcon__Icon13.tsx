/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon13IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon13Icon(props: Icon13IconProps) {
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
        id={"yFA2-jf3rpyva"}
        cx={".66"}
        fx={".66"}
        cy={".313"}
        fy={".313"}
        gradientTransform={"scale(1.5)"}
      >
        <stop offset={"0"} stopColor={"#FF156D"}></stop>

        <stop offset={".3"} stopColor={"#FF156D"} stopOpacity={".9"}></stop>

        <stop offset={".6"} stopColor={"#FF156D"} stopOpacity={".6"}></stop>

        <stop offset={".8"} stopColor={"#FF156D"} stopOpacity={".3"}></stop>

        <stop offset={"1"} stopColor={"#FF156D"} stopOpacity={"0"}></stop>
      </radialGradient>

      <circle
        transformOrigin={"center"}
        fill={"none"}
        stroke={"url(#yFA2-jf3rpyva)"}
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
        stroke={"#FF156D"}
        strokeWidth={"26"}
        strokeLinecap={"round"}
        cx={"100"}
        cy={"100"}
        r={"70"}
      ></circle>
    </svg>
  );
}

export default Icon13Icon;
/* prettier-ignore-end */
