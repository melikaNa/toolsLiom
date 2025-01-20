// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon130IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon130Icon(props: Icon130IconProps) {
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

      <path
        d={
          "M21.69 4.887c-.102-1.34-1.133-2.475-2.577-2.578C17.052 2.103 14.165 2 12 2s-5.052.103-7.113.31c-.722 0-1.34.309-1.753.824-.412.515-.722 1.031-.825 1.753C2.103 6.948 2 9.835 2 12s.206 5.052.31 7.113c.102 1.34 1.133 2.475 2.577 2.578C6.948 21.897 9.835 22 12 22s5.052-.206 7.113-.31c1.34-.102 2.475-1.133 2.578-2.577.206-2.061.309-4.948.309-7.113s-.103-5.052-.31-7.113zm-6.082 5.567l-4.123 4.123c-.207.103-.31.207-.516.207a.788.788 0 01-.515-.207l-2.062-2.062a.81.81 0 010-1.134.81.81 0 011.134 0l1.546 1.547L14.68 9.32a.809.809 0 011.134 0c.104.412.104.824-.206 1.134z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon130Icon;
/* prettier-ignore-end */
