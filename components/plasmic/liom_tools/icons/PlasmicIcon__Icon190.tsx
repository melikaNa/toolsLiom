/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon190IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon190Icon(props: Icon190IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 14 19"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        fillRule={"evenodd"}
        d={
          "M9.5 12c0 .1-.03.202-.093.29l-2.5 3.5a.5.5 0 1 1-.814-.58l.379-.53-2.326-2.326A.5.5 0 0 1 4 12h-.5c-.632 0-1.489.3-2.187.86C.598 13.43 0 14.314 0 15.5c0 .536.066 1.058.291 1.529.231.482.61.868 1.161 1.162 1.059.565 2.799.809 5.545.809H7c2.748 0 4.489-.244 5.548-.809.55-.294.93-.68 1.16-1.162.226-.47.292-.993.292-1.529 0-1.186-.598-2.069-1.313-2.64-.698-.56-1.555-.86-2.187-.86zm-5.75 2.25a.5.5 0 0 0-1 0v.25H2.5a.5.5 0 0 0 0 1h.25v.25a.5.5 0 0 0 1 0v-.25H4a.5.5 0 0 0 0-1h-.25z"
        }
        clipRule={"evenodd"}
      ></path>

      <path
        stroke={"currentColor"}
        strokeLinecap={"round"}
        d={"M10.5 7.25c0 2.255-1.567 4.667-3.5 4.667S3.5 9.505 3.5 7.25"}
      ></path>

      <path
        fill={"currentColor"}
        fillRule={"evenodd"}
        d={
          "m3.866 2.692.014-.062.023-.107a3 3 0 0 1 .265-.767c.152-.285.393-.578.777-.756.385-.178.861-.219 1.44-.097.133.028.31.056.517.09.637.101 1.562.248 2.38.576 1.124.45 2.197 1.292 2.313 2.915.091 1.27.097 1.963.009 2.45-.075.418-.223.689-.383.98l-.107.2a.44.44 0 0 1-.677.132.6.6 0 0 1-.141-.184V8.06a3 3 0 0 1-.124-.312c-.08-.237-.174-.566-.262-.892a53 53 0 0 1-.256-.989l-.034.001a6.4 6.4 0 0 1-1.082-.07c-.876-.127-2.057-.461-3.338-1.275-.109.03-.253.126-.428.366-.217.297-.41.721-.573 1.177a12 12 0 0 0-.454 1.67l-.022.115-.005.03-.002.007v.001L3.522 9l-.588-.967.364-.214-.364.214-.001-.002-.002-.003-.005-.009a2 2 0 0 1-.074-.136 4.8 4.8 0 0 1-.497-1.676c-.107-1.05.146-2.383 1.511-3.515m7.188 4.994q.009.016 0 0"
        }
        clipRule={"evenodd"}
      ></path>
    </svg>
  );
}

export default Icon190Icon;
/* prettier-ignore-end */
