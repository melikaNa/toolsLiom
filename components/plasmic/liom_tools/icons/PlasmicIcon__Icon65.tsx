// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon65IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon65Icon(props: Icon65IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 16 16"}
      fill={"currentColor"}
      className={classNames(
        "plasmic-default__svg",
        className,
        "bi bi-emoji-dizzy-fill"
      )}
      height={"1em"}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M8 16A8 8 0 108 0a8 8 0 000 16zM4.146 5.146a.5.5 0 01.708 0l.646.647.646-.647a.5.5 0 11.708.708l-.647.646.647.646a.5.5 0 11-.708.708L5.5 7.207l-.646.647a.5.5 0 11-.708-.708l.647-.646-.647-.646a.5.5 0 010-.708zm5 0a.5.5 0 01.708 0l.646.647.646-.647a.5.5 0 01.708.708l-.647.646.647.646a.5.5 0 01-.708.708l-.646-.647-.646.647a.5.5 0 11-.708-.708l.647-.646-.647-.646a.5.5 0 010-.708zM8 13a2 2 0 110-4 2 2 0 010 4z"
        }
      ></path>
    </svg>
  );
}

export default Icon65Icon;
/* prettier-ignore-end */
