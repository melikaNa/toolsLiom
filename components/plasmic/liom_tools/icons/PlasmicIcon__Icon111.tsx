/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon111IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon111Icon(props: Icon111IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 100 100"}
      preserveAspectRatio={"xMidYMid"}
      style={{
        background: '0 0"',

        ...(style || {}),
      }}
      shapeRendering={"auto"}
      display={"block"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <circle fill={"currentColor"} r={"10"} cy={"50"} cx={"84"}>
        <animate
          begin={"0s"}
          keySplines={"0 0.5 0.5 1"}
          values={"10;0"}
          keyTimes={"0;1"}
          calcMode={"spline"}
          dur={"0.625s"}
          repeatCount={"indefinite"}
          attributeName={"r"}
        ></animate>

        <animate
          begin={"0s"}
          values={"#ffffff;#ffffff;#ffffff;#ffffff;#ffffff"}
          keyTimes={"0;0.25;0.5;0.75;1"}
          calcMode={"discrete"}
          dur={"2.5s"}
          repeatCount={"indefinite"}
          attributeName={"fill"}
        ></animate>
      </circle>

      <circle fill={"currentColor"} r={"10"} cy={"50"} cx={"16"}>
        <animate
          begin={"0s"}
          keySplines={"0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"}
          values={"0;0;10;10;10"}
          keyTimes={"0;0.25;0.5;0.75;1"}
          calcMode={"spline"}
          dur={"2.5s"}
          repeatCount={"indefinite"}
          attributeName={"r"}
        ></animate>

        <animate
          begin={"0s"}
          keySplines={"0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"}
          values={"16;16;16;50;84"}
          keyTimes={"0;0.25;0.5;0.75;1"}
          calcMode={"spline"}
          dur={"2.5s"}
          repeatCount={"indefinite"}
          attributeName={"cx"}
        ></animate>
      </circle>

      <circle fill={"currentColor"} r={"10"} cy={"50"} cx={"50"}>
        <animate
          begin={"-0.625s"}
          keySplines={"0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"}
          values={"0;0;10;10;10"}
          keyTimes={"0;0.25;0.5;0.75;1"}
          calcMode={"spline"}
          dur={"2.5s"}
          repeatCount={"indefinite"}
          attributeName={"r"}
        ></animate>

        <animate
          begin={"-0.625s"}
          keySplines={"0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"}
          values={"16;16;16;50;84"}
          keyTimes={"0;0.25;0.5;0.75;1"}
          calcMode={"spline"}
          dur={"2.5s"}
          repeatCount={"indefinite"}
          attributeName={"cx"}
        ></animate>
      </circle>

      <circle fill={"currentColor"} r={"10"} cy={"50"} cx={"84"}>
        <animate
          begin={"-1.25s"}
          keySplines={"0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"}
          values={"0;0;10;10;10"}
          keyTimes={"0;0.25;0.5;0.75;1"}
          calcMode={"spline"}
          dur={"2.5s"}
          repeatCount={"indefinite"}
          attributeName={"r"}
        ></animate>

        <animate
          begin={"-1.25s"}
          keySplines={"0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"}
          values={"16;16;16;50;84"}
          keyTimes={"0;0.25;0.5;0.75;1"}
          calcMode={"spline"}
          dur={"2.5s"}
          repeatCount={"indefinite"}
          attributeName={"cx"}
        ></animate>
      </circle>

      <circle fill={"currentColor"} r={"10"} cy={"50"} cx={"16"}>
        <animate
          begin={"-1.875s"}
          keySplines={"0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"}
          values={"0;0;10;10;10"}
          keyTimes={"0;0.25;0.5;0.75;1"}
          calcMode={"spline"}
          dur={"2.5s"}
          repeatCount={"indefinite"}
          attributeName={"r"}
        ></animate>

        <animate
          begin={"-1.875s"}
          keySplines={"0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"}
          values={"16;16;16;50;84"}
          keyTimes={"0;0.25;0.5;0.75;1"}
          calcMode={"spline"}
          dur={"2.5s"}
          repeatCount={"indefinite"}
          attributeName={"cx"}
        ></animate>
      </circle>
    </svg>
  );
}

export default Icon111Icon;
/* prettier-ignore-end */
