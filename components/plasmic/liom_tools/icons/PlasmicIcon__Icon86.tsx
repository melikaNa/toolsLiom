// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon86IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon86Icon(props: Icon86IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 22"}
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
          "M11.606 16.307c.184 0 .369.044.537.13l4.374 2.287-.832-4.824c-.066-.379.06-.764.337-1.032l3.524-3.408-4.879-.71a1.159 1.159 0 01-.872-.631l-2.19-4.404L9.418 8.12a1.16 1.16 0 01-.873.63l-4.878.711 3.524 3.408c.276.268.402.653.336 1.032l-.832 4.824 4.374-2.286a1.17 1.17 0 01.538-.131zM18.06 22c-.184 0-.369-.043-.537-.131l-5.918-3.092-5.918 3.091a1.161 1.161 0 01-1.68-1.227l1.127-6.531L.353 9.485a1.159 1.159 0 01.64-1.983l6.617-.96 2.956-5.95c.392-.79 1.687-.79 2.08 0l2.956 5.95 6.616.96c.438.064.802.37.937.792.136.421.022.883-.297 1.19l-4.782 4.626 1.128 6.532A1.16 1.16 0 0118.061 22z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon86Icon;
/* prettier-ignore-end */
