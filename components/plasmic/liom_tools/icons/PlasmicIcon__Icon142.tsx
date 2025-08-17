/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon142IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon142Icon(props: Icon142IconProps) {
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
          "M19.53 2.348a3.75 3.75 0 10-5.303 5.304 3.75 3.75 0 005.303-5.304zM15.288 3.41a2.25 2.25 0 113.182 3.182 2.25 2.25 0 01-3.182-3.182zm-5.076 2.377a5.25 5.25 0 10-7.424 7.425 5.25 5.25 0 007.424-7.425zM3.848 6.848a3.75 3.75 0 016.327 1.902h-7.35a3.73 3.73 0 011.023-1.902zM2.825 10.25h7.35a3.75 3.75 0 01-7.35 0zm18.611 1.314a4.488 4.488 0 00-6.347 0l-3.524 3.524a4.488 4.488 0 106.346 6.347l3.524-3.524a4.488 4.488 0 000-6.347zm-5.287 1.06a2.988 2.988 0 114.226 4.226L19 18.224a4.539 4.539 0 01-.609-.244c-.5-.241-1.2-.672-1.95-1.421-.75-.75-1.181-1.452-1.422-1.951a4.534 4.534 0 01-.236-.583L14.775 14l1.374-1.374zm-2.53 2.53l.05.105c.307.637.832 1.48 1.712 2.36.88.88 1.723 1.405 2.36 1.712a6.6 6.6 0 00.104.05l-.994.994a2.988 2.988 0 11-4.226-4.226l.995-.994z"
        }
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon142Icon;
/* prettier-ignore-end */
