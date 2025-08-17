/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Path6IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Path6Icon(props: Path6IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 38 39"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M.001 10.466C-.083 4.802 4.43.035 10.094 0c2.64-.016 5.046.975 6.86 2.611a2.899 2.899 0 003.87 0 10.117 10.117 0 016.86-2.61c5.666.034 10.178 4.8 10.093 10.465-.12 8.132-5.022 10.289-5.022 17.174 0 6.84-3.16 11.022-6.252 11.022-3.27 0-5.157-3.82-6.466-7.103-.413-1.034-1.882-1.034-2.295 0-1.31 3.283-3.197 7.103-6.466 7.103-3.092 0-6.252-4.183-6.252-11.022 0-6.885-4.902-9.043-5.023-17.174z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Path6Icon;
/* prettier-ignore-end */
