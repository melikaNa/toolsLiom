/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon240IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon240Icon(props: Icon240IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      xmlnsXlink={"http://www.w3.org/1999/xlink"}
      fill={"none"}
      viewBox={"0 0 1170 1170"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g clipPath={"url(#a)"} filter={"url(#b)"}>
        <path fill={"url(#c)"} d={"M0 0h1169v1169H0z"}></path>
      </g>

      <g filter={"url(#d)"}>
        <path
          fill={"#fff"}
          d={
            "M274.068 770.901c-1.473-15.988 1.068-32.953 2.742-49.924 2.33-23.627 5.843-47.096 9.933-70.486a1240 1240 0 0 1 23.287-105.782c11.298-42.898 23.663-85.486 38.833-127.195a479 479 0 0 1 12.699-31.376 88.3 88.3 0 0 1 8.307-14.738c12.056-17.135 28.845-23.488 49.232-21.667a63.7 63.7 0 0 1 14.525 2.876c21.009 6.965 30.338 24.616 24.07 45.859-2.973 10.09-7.984 19.366-12.135 28.978-29.178 67.575-53.532 136.818-71.542 208.209-6.123 24.271-12.075 48.572-15.831 73.345-2.972 19.641-4.569 39.373-2.596 59.22.995 10.023 3.64 19.653 9.101 28.275 9.878 15.678 24.392 21.71 42.443 19.829 13.542-1.416 25.599-7.039 37.012-14.083 13.828-8.525 27.492-17.317 41.26-25.921 5.843-3.641 11.984-6.675 18.852-7.888 7.001-1.214 13.688-.279 19.064 4.569 10.406 9.374 16.941 20.838 16.552 35.265-.283 10.576-5.266 19.319-11.856 27.243-8.574 10.315-19.101 18.306-30.459 25.205-29.216 17.76-60.907 28.924-94.503 34.827-14.562 2.567-29.258 3.884-44.063 2.518-33.062-3.034-56.373-20.168-70.808-49.656-6.541-13.349-9.563-27.804-11.529-42.474-1.462-11.243-2.141-22.541-2.59-35.028"
          }
        ></path>
      </g>

      <g filter={"url(#e)"}>
        <path
          fill={"#fff"}
          d={
            "M704.359 283.799a63.75 63.75 0 0 1 39.568-58.797 63.8 63.8 0 0 1 24.427-4.767c35.051.127 63.485 28.742 63.412 63.849-.061 35.326-28.73 63.661-64.317 63.559-34.731-.104-63.147-28.852-63.09-63.844"
          }
        ></path>
      </g>

      <g filter={"url(#f)"}>
        <path
          fill={"#fff"}
          d={
            "M896.043 749.519a64.3 64.3 0 0 0-13.561-5.097c-22.268-5.77-44.002-13.215-65.53-21.234-9.647-3.604-10.473-6.383-5.388-15.418 4.557-8.082 9.247-16.091 13.956-24.1 18.809-32.158 35.677-65.281 47.825-100.606 8.076-23.488 13.452-47.558 14.18-71.513.011-5.896-.37-11.787-1.141-17.632-3.18-21.844-10.789-41.624-27.177-57.084-12.342-11.65-27.11-18.97-43.493-23.336-23.329-6.213-46.423-6.438-69.31 1.857-34.494 12.499-59.796 35.629-76.451 67.957a285.6 285.6 0 0 0-31.224 109.538c-2.348 30.283 2.591 59.347 15.363 86.991 7.342 15.861 17.068 30.181 28.251 43.571 4.775 5.719 4.775 9.102.328 14.501-27.305 33.075-56.896 63.831-91.621 89.321-6.031 4.43-11.868 9.102-16.849 14.751-7.676 8.72-9.151 18.057-3.295 28.323 10.145 17.791 24.992 27.857 45.924 27.577 9.06-.121 17.086-3.598 24.462-8.664 20.939-14.386 40.914-29.986 59.4-47.43 17.529-16.54 33.227-34.798 49.196-52.788 7.348-8.267 8.798-8.64 19.026-4.19a454 454 0 0 0 83.502 27.273c9.66 2.13 19.216 2.986 28.518-1.249 16.577-7.567 25.284-20.709 27.492-38.663 1.318-10.752-3.166-17.875-12.383-22.656m-107.712-182.95c-11.832 33.602-28.857 64.51-48.65 93.993a16 16 0 0 1-1.268 1.693c-2.955 3.301-5.139 3.247-7.888-.226a78.8 78.8 0 0 1-15.247-31.279c-5.176-22.141-4.375-44.293.291-66.398a168.2 168.2 0 0 1 22.147-54.608c6.965-11.164 16.54-19.052 29.558-21.928 11.638-2.573 21.783 2.785 26.841 13.585 3.077 6.568 3.495 13.615 3.695 20.69-.201 15.487-4.4 30.049-9.479 44.478"
          }
        ></path>
      </g>

      <defs>
        <filter
          id={"b"}
          width={"1175.41"}
          height={"1179.31"}
          x={"-6.41"}
          y={"-10.305"}
          colorInterpolationFilters={"sRGB"}
          filterUnits={"userSpaceOnUse"}
        >
          <feFlood floodOpacity={"0"} result={"BackgroundImageFix"}></feFlood>

          <feBlend
            in={"SourceGraphic"}
            in2={"BackgroundImageFix"}
            mode={"normal"}
            result={"shape"}
          ></feBlend>

          <feColorMatrix
            in={"SourceAlpha"}
            result={"hardAlpha"}
            type={"matrix"}
            values={"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"}
          ></feColorMatrix>

          <feOffset dx={"-6.41"} dy={"-10.305"}></feOffset>

          <feGaussianBlur stdDeviation={"11.668"}></feGaussianBlur>

          <feComposite
            in2={"hardAlpha"}
            k2={"-1"}
            k3={"1"}
            operator={"arithmetic"}
          ></feComposite>

          <feColorMatrix
            type={"matrix"}
            values={"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"}
          ></feColorMatrix>

          <feBlend
            in2={"shape"}
            mode={"normal"}
            result={"effect1_innerShadow_6109_33670"}
          ></feBlend>
        </filter>

        <filter
          id={"d"}
          width={"266.267"}
          height={"572.762"}
          x={"273.626"}
          y={"325.845"}
          colorInterpolationFilters={"sRGB"}
          filterUnits={"userSpaceOnUse"}
        >
          <feFlood floodOpacity={"0"} result={"BackgroundImageFix"}></feFlood>

          <feBlend
            in={"SourceGraphic"}
            in2={"BackgroundImageFix"}
            mode={"normal"}
            result={"shape"}
          ></feBlend>

          <feColorMatrix
            in={"SourceAlpha"}
            result={"hardAlpha"}
            type={"matrix"}
            values={"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"}
          ></feColorMatrix>

          <feOffset dy={"-23.587"}></feOffset>

          <feGaussianBlur stdDeviation={"18.87"}></feGaussianBlur>

          <feComposite
            in2={"hardAlpha"}
            k2={"-1"}
            k3={"1"}
            operator={"arithmetic"}
          ></feComposite>

          <feColorMatrix
            type={"matrix"}
            values={"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"}
          ></feColorMatrix>

          <feBlend
            in2={"shape"}
            mode={"normal"}
            result={"effect1_innerShadow_6109_33670"}
          ></feBlend>

          <feColorMatrix
            in={"SourceAlpha"}
            result={"hardAlpha"}
            type={"matrix"}
            values={"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"}
          ></feColorMatrix>

          <feOffset dy={"-14.152"}></feOffset>

          <feGaussianBlur stdDeviation={"11.794"}></feGaussianBlur>

          <feComposite
            in2={"hardAlpha"}
            k2={"-1"}
            k3={"1"}
            operator={"arithmetic"}
          ></feComposite>

          <feColorMatrix
            type={"matrix"}
            values={"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"}
          ></feColorMatrix>

          <feBlend
            in2={"effect1_innerShadow_6109_33670"}
            mode={"normal"}
            result={"effect2_innerShadow_6109_33670"}
          ></feBlend>
        </filter>

        <filter
          id={"e"}
          width={"127.408"}
          height={"150.996"}
          x={"704.358"}
          y={"196.647"}
          colorInterpolationFilters={"sRGB"}
          filterUnits={"userSpaceOnUse"}
        >
          <feFlood floodOpacity={"0"} result={"BackgroundImageFix"}></feFlood>

          <feBlend
            in={"SourceGraphic"}
            in2={"BackgroundImageFix"}
            mode={"normal"}
            result={"shape"}
          ></feBlend>

          <feColorMatrix
            in={"SourceAlpha"}
            result={"hardAlpha"}
            type={"matrix"}
            values={"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"}
          ></feColorMatrix>

          <feOffset dy={"-23.587"}></feOffset>

          <feGaussianBlur stdDeviation={"18.87"}></feGaussianBlur>

          <feComposite
            in2={"hardAlpha"}
            k2={"-1"}
            k3={"1"}
            operator={"arithmetic"}
          ></feComposite>

          <feColorMatrix
            type={"matrix"}
            values={"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"}
          ></feColorMatrix>

          <feBlend
            in2={"shape"}
            mode={"normal"}
            result={"effect1_innerShadow_6109_33670"}
          ></feBlend>

          <feColorMatrix
            in={"SourceAlpha"}
            result={"hardAlpha"}
            type={"matrix"}
            values={"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"}
          ></feColorMatrix>

          <feOffset dy={"-14.152"}></feOffset>

          <feGaussianBlur stdDeviation={"11.794"}></feGaussianBlur>

          <feComposite
            in2={"hardAlpha"}
            k2={"-1"}
            k3={"1"}
            operator={"arithmetic"}
          ></feComposite>

          <feColorMatrix
            type={"matrix"}
            values={"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"}
          ></feColorMatrix>

          <feBlend
            in2={"effect1_innerShadow_6109_33670"}
            mode={"normal"}
            result={"effect2_innerShadow_6109_33670"}
          ></feBlend>
        </filter>

        <filter
          id={"f"}
          width={"341.33"}
          height={"512.509"}
          x={"567.322"}
          y={"385.383"}
          colorInterpolationFilters={"sRGB"}
          filterUnits={"userSpaceOnUse"}
        >
          <feFlood floodOpacity={"0"} result={"BackgroundImageFix"}></feFlood>

          <feBlend
            in={"SourceGraphic"}
            in2={"BackgroundImageFix"}
            mode={"normal"}
            result={"shape"}
          ></feBlend>

          <feColorMatrix
            in={"SourceAlpha"}
            result={"hardAlpha"}
            type={"matrix"}
            values={"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"}
          ></feColorMatrix>

          <feOffset dy={"-23.587"}></feOffset>

          <feGaussianBlur stdDeviation={"18.87"}></feGaussianBlur>

          <feComposite
            in2={"hardAlpha"}
            k2={"-1"}
            k3={"1"}
            operator={"arithmetic"}
          ></feComposite>

          <feColorMatrix
            type={"matrix"}
            values={"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"}
          ></feColorMatrix>

          <feBlend
            in2={"shape"}
            mode={"normal"}
            result={"effect1_innerShadow_6109_33670"}
          ></feBlend>

          <feColorMatrix
            in={"SourceAlpha"}
            result={"hardAlpha"}
            type={"matrix"}
            values={"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"}
          ></feColorMatrix>

          <feOffset dy={"-14.152"}></feOffset>

          <feGaussianBlur stdDeviation={"11.794"}></feGaussianBlur>

          <feComposite
            in2={"hardAlpha"}
            k2={"-1"}
            k3={"1"}
            operator={"arithmetic"}
          ></feComposite>

          <feColorMatrix
            type={"matrix"}
            values={"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"}
          ></feColorMatrix>

          <feBlend
            in2={"effect1_innerShadow_6109_33670"}
            mode={"normal"}
            result={"effect2_innerShadow_6109_33670"}
          ></feBlend>
        </filter>

        <linearGradient
          id={"c"}
          x1={"932"}
          x2={"232.051"}
          y1={"238"}
          y2={"950.05"}
          gradientUnits={"userSpaceOnUse"}
        >
          <stop stopColor={"#EF70B7"}></stop>

          <stop offset={"1"} stopColor={"#7242BA"}></stop>
        </linearGradient>

        <clipPath id={"a"}>
          <path fill={"#fff"} d={"M0 0h1169v1169H0z"}></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default Icon240Icon;
/* prettier-ignore-end */
