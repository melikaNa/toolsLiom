// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon85IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon85Icon(props: Icon85IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 25 22"}
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
          "M24.2 19.556c0 .674-.54 1.222-1.21 1.222-.67 0-1.21-.548-1.21-1.222 0-2.022-1.629-3.667-3.63-3.667a3.59 3.59 0 00-2.246.793 8.589 8.589 0 011.036 4.096c0 .674-.54 1.222-1.21 1.222-.67 0-1.21-.548-1.21-1.222 0-3.37-2.714-6.111-6.05-6.111s-6.05 2.741-6.05 6.11c0 .675-.54 1.223-1.21 1.223C.54 22 0 21.452 0 20.778c0-4.718 3.8-8.556 8.47-8.556 2.332 0 4.444.957 5.977 2.5a6.004 6.004 0 013.703-1.278c3.336 0 6.05 2.742 6.05 6.112zM18.15 7.333c.668 0 1.21.55 1.21 1.223s-.542 1.222-1.21 1.222c-.668 0-1.21-.549-1.21-1.222 0-.674.542-1.223 1.21-1.223zm0 4.89c2.001 0 3.63-1.646 3.63-3.667 0-2.022-1.629-3.667-3.63-3.667s-3.63 1.645-3.63 3.667c0 2.021 1.629 3.666 3.63 3.666zm-9.68-9.78c1.335 0 2.42 1.097 2.42 2.445 0 1.348-1.085 2.444-2.42 2.444S6.05 6.237 6.05 4.89c0-1.348 1.085-2.445 2.42-2.445zm0 7.334c2.67 0 4.84-2.193 4.84-4.89C13.31 2.194 11.14 0 8.47 0S3.63 2.193 3.63 4.889 5.8 9.778 8.47 9.778z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon85Icon;
/* prettier-ignore-end */
