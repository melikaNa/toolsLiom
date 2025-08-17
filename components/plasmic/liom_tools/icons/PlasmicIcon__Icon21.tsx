/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon21IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon21Icon(props: Icon21IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"currentColor"}
      version={"1.1"}
      viewBox={"0 0 471.787 471.787"}
      xmlSpace={"preserve"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M360.852 35.142c-15.477-18.056-102.336-61.626-149.625-12.615-47.29 49.01 2.952 83.636 21.012 91.97 18.057 8.334 69.647 21.066 88.354-11.607 4.99 12.785 1.623 119.131-27.865 146.17-14.942-14.246-36.51-23.19-60.488-23.19-19.689 0-37.746 6.031-51.85 16.073-18.619-29.884-53.845-50.062-94.271-50.062-19.383 0-37.563 4.659-53.308 12.782v10.448l-.056-.013V471.76s74.807 3.87 80.791-82.544c-.002-.005-.005-.01-.005-.015 18.198 26.427 76.18 46.541 111.909 45.355 56.121-1.861 130.693-4.321 193.865-64.881 5.838-5.809 10.52-12.669 13.701-20.259v-.004c29.226-60.797-56.688-296.214-72.164-314.27z"
        }
      ></path>
    </svg>
  );
}

export default Icon21Icon;
/* prettier-ignore-end */
