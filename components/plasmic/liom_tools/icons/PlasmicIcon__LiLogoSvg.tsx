/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type LiLogoSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function LiLogoSvgIcon(props: LiLogoSvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 724 724"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g filter={"url(#BGzuxRb9hXPFa)"}>
        <path
          d={
            "M198.876 155.319c-20.07-1.792-36.599 4.462-48.469 21.332a86.886 86.886 0 00-8.177 14.509l56.646-35.841zm0 0a62.712 62.712 0 0114.301 2.832l-14.301-2.832zM56.591 569.942v-.014l-.002-.014c-1.181-12.829.272-26.295 1.744-39.94.327-3.031.655-6.071.956-9.115 2.292-23.245 5.749-46.337 9.773-69.357a1220.663 1220.663 0 0122.917-104.1v-.001c11.122-42.226 23.291-84.138 38.218-125.18a470.616 470.616 0 0112.489-30.857l.001-.001a86.413 86.413 0 018.129-14.424c11.753-16.704 28.097-22.9 48.016-21.122v0l.005.001a62.203 62.203 0 0114.185 2.808c10.24 3.395 17.591 9.379 21.631 17.06 4.039 7.682 4.796 17.117 1.741 27.471v.001c-2.049 6.954-5.078 13.494-8.124 20.071-1.289 2.783-2.58 5.572-3.802 8.401-28.736 66.548-52.721 134.744-70.46 205.058-6.027 23.893-11.892 47.839-15.594 72.255l.494.075-.494-.074c-2.93 19.357-4.507 38.828-2.56 58.426.985 9.922 3.607 19.483 9.036 28.054 4.907 7.79 10.982 13.204 18.09 16.432 7.107 3.226 15.214 4.253 24.169 3.319 13.439-1.404 25.384-6.983 36.649-13.936 8.094-4.99 16.136-10.075 24.173-15.158 5.48-3.466 10.958-6.93 16.449-10.362 5.728-3.569 11.711-6.519 18.382-7.698 6.797-1.178 13.205-.26 18.347 4.377h0c10.167 9.159 16.508 20.314 16.131 34.334-.274 10.251-5.102 18.753-11.557 26.514l.384.32-.384-.319c-8.394 10.097-18.708 17.931-29.862 24.706l.258.424-.258-.424c-28.704 17.449-59.844 28.42-92.865 34.222l.085.483-.085-.482c-14.31 2.521-28.731 3.812-43.247 2.473-32.366-2.97-55.17-19.725-69.308-48.609l-.45.22.45-.22c-6.405-13.07-9.37-27.238-11.303-41.66-1.437-11.046-2.105-22.151-2.547-34.438z"
          }
          stroke={"currentColor"}
        ></path>
      </g>

      <g filter={"url(#BGzuxRb9hXPFb)"}>
        <path
          d={
            "M604.642 90.687v0c-.06 34.499-28.057 62.175-62.819 62.075-33.913-.102-61.669-28.177-61.614-62.353a62.27 62.27 0 0162.501-62.08c34.232.124 62.003 28.07 61.932 62.358z"
          }
          stroke={"currentColor"}
        ></path>
      </g>

      <g filter={"url(#BGzuxRb9hXPFc)"}>
        <path
          d={
            "M654.95 544.361l.003.001a62.72 62.72 0 0113.243 4.976c4.477 2.323 7.764 5.193 9.78 8.751 2.013 3.554 2.783 7.841 2.145 13.049-2.155 17.521-10.631 30.3-26.777 37.669-9.007 4.101-18.282 3.287-27.76 1.198a446.607 446.607 0 01-82.116-26.821l-.001-.001c-2.517-1.094-4.524-1.907-6.225-2.372-1.708-.466-3.145-.594-4.512-.289-1.368.304-2.611 1.029-3.955 2.17-1.338 1.136-2.805 2.709-4.612 4.743h-.001c-2.072 2.335-4.138 4.673-6.205 7.011-13.622 15.41-27.231 30.805-42.197 44.928-18.178 17.152-37.822 32.494-58.42 46.646-7.211 4.953-15.018 8.324-23.806 8.442-20.399.272-34.86-9.517-44.771-26.897-2.84-4.979-3.883-9.696-3.312-14.203.571-4.51 2.765-8.865 6.496-13.103 4.868-5.521 10.58-10.096 16.509-14.45 34.232-25.128 63.394-55.441 90.29-88.021h.001c2.21-2.684 3.401-4.964 3.357-7.348-.044-2.378-1.314-4.731-3.682-7.567l-.384.32.384-.32c-10.989-13.158-20.538-27.22-27.743-42.786-12.537-27.135-17.386-55.662-15.08-85.394h0a280.692 280.692 0 0130.685-107.649l.001-.001c16.342-31.72 41.157-54.402 74.992-66.662l-.17-.469.17.469c22.42-8.126 45.049-7.911 67.937-1.815 16.065 4.281 30.525 11.453 42.604 22.854l.343-.363-.343.364c16.026 15.117 23.483 34.471 26.603 55.904a130.196 130.196 0 011.119 17.281c-.716 23.518-5.995 47.162-13.934 70.25-11.944 34.735-28.533 67.312-47.041 98.956-4.636 7.886-9.256 15.774-13.744 23.735v.001c-1.256 2.231-2.166 4.108-2.661 5.723-.497 1.619-.592 3.021-.163 4.277.429 1.259 1.358 2.29 2.746 3.221 1.383.927 3.258 1.78 5.643 2.671h0c21.202 7.898 42.617 15.234 64.564 20.921zm-141.338-81.044l.006-.008c.467-.543.897-1.117 1.287-1.717 19.501-29.049 36.284-59.515 47.95-92.646 5.005-14.218 9.161-28.617 9.361-43.948v-.02c-.198-6.964-.608-13.997-3.685-20.568-5.073-10.833-15.287-16.237-26.986-13.651-12.971 2.866-22.502 10.73-29.416 21.812a166.041 166.041 0 00-21.869 53.923h0c-4.605 21.817-5.4 43.702-.284 65.586v.001a78.115 78.115 0 0015.106 30.99c1.37 1.732 2.709 2.76 4.184 2.801 1.475.041 2.873-.91 4.346-2.555z"
          }
          stroke={"currentColor"}
        ></path>
      </g>

      <defs>
        <filter
          id={"BGzuxRb9hXPFa"}
          x={"55.656"}
          y={"131.802"}
          width={"262.14"}
          height={"563.884"}
          filterUnits={"userSpaceOnUse"}
          colorInterpolationFilters={"sRGB"}
        >
          <feFlood floodOpacity={"0"} result={"BackgroundImageFix"}></feFlood>

          <feBlend
            mode={"normal"}
            in={"SourceGraphic"}
            in2={"BackgroundImageFix"}
            result={"shape"}
          ></feBlend>

          <feColorMatrix
            in={"SourceAlpha"}
            type={"matrix"}
            values={"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"}
            result={"hardAlpha"}
          ></feColorMatrix>

          <feOffset dy={"-23.221"}></feOffset>

          <feGaussianBlur stdDeviation={"18.577"}></feGaussianBlur>

          <feComposite
            in2={"hardAlpha"}
            operator={"arithmetic"}
            k2={"-1"}
            k3={"1"}
          ></feComposite>

          <feColorMatrix
            type={"matrix"}
            values={"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"}
          ></feColorMatrix>

          <feBlend
            mode={"normal"}
            in2={"shape"}
            result={"effect1_innerShadow_15173_8293"}
          ></feBlend>

          <feColorMatrix
            in={"SourceAlpha"}
            type={"matrix"}
            values={"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"}
            result={"hardAlpha"}
          ></feColorMatrix>

          <feOffset dy={"-13.933"}></feOffset>

          <feGaussianBlur stdDeviation={"11.611"}></feGaussianBlur>

          <feComposite
            in2={"hardAlpha"}
            operator={"arithmetic"}
            k2={"-1"}
            k3={"1"}
          ></feComposite>

          <feColorMatrix
            type={"matrix"}
            values={"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"}
          ></feColorMatrix>

          <feBlend
            mode={"normal"}
            in2={"effect1_innerShadow_15173_8293"}
            result={"effect2_innerShadow_15173_8293"}
          ></feBlend>
        </filter>

        <filter
          id={"BGzuxRb9hXPFb"}
          x={"479.709"}
          y={"4.607"}
          width={"125.433"}
          height={"148.655"}
          filterUnits={"userSpaceOnUse"}
          colorInterpolationFilters={"sRGB"}
        >
          <feFlood floodOpacity={"0"} result={"BackgroundImageFix"}></feFlood>

          <feBlend
            mode={"normal"}
            in={"SourceGraphic"}
            in2={"BackgroundImageFix"}
            result={"shape"}
          ></feBlend>

          <feColorMatrix
            in={"SourceAlpha"}
            type={"matrix"}
            values={"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"}
            result={"hardAlpha"}
          ></feColorMatrix>

          <feOffset dy={"-23.221"}></feOffset>

          <feGaussianBlur stdDeviation={"18.577"}></feGaussianBlur>

          <feComposite
            in2={"hardAlpha"}
            operator={"arithmetic"}
            k2={"-1"}
            k3={"1"}
          ></feComposite>

          <feColorMatrix
            type={"matrix"}
            values={"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"}
          ></feColorMatrix>

          <feBlend
            mode={"normal"}
            in2={"shape"}
            result={"effect1_innerShadow_15173_8293"}
          ></feBlend>

          <feColorMatrix
            in={"SourceAlpha"}
            type={"matrix"}
            values={"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"}
            result={"hardAlpha"}
          ></feColorMatrix>

          <feOffset dy={"-13.933"}></feOffset>

          <feGaussianBlur stdDeviation={"11.611"}></feGaussianBlur>

          <feComposite
            in2={"hardAlpha"}
            operator={"arithmetic"}
            k2={"-1"}
            k3={"1"}
          ></feComposite>

          <feColorMatrix
            type={"matrix"}
            values={"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"}
          ></feColorMatrix>

          <feBlend
            mode={"normal"}
            in2={"effect1_innerShadow_15173_8293"}
            result={"effect2_innerShadow_15173_8293"}
          ></feBlend>
        </filter>

        <filter
          id={"BGzuxRb9hXPFc"}
          x={"344.8"}
          y={"190.402"}
          width={"336.04"}
          height={"504.565"}
          filterUnits={"userSpaceOnUse"}
          colorInterpolationFilters={"sRGB"}
        >
          <feFlood floodOpacity={"0"} result={"BackgroundImageFix"}></feFlood>

          <feBlend
            mode={"normal"}
            in={"SourceGraphic"}
            in2={"BackgroundImageFix"}
            result={"shape"}
          ></feBlend>

          <feColorMatrix
            in={"SourceAlpha"}
            type={"matrix"}
            values={"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"}
            result={"hardAlpha"}
          ></feColorMatrix>

          <feOffset dy={"-23.221"}></feOffset>

          <feGaussianBlur stdDeviation={"18.577"}></feGaussianBlur>

          <feComposite
            in2={"hardAlpha"}
            operator={"arithmetic"}
            k2={"-1"}
            k3={"1"}
          ></feComposite>

          <feColorMatrix
            type={"matrix"}
            values={"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"}
          ></feColorMatrix>

          <feBlend
            mode={"normal"}
            in2={"shape"}
            result={"effect1_innerShadow_15173_8293"}
          ></feBlend>

          <feColorMatrix
            in={"SourceAlpha"}
            type={"matrix"}
            values={"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"}
            result={"hardAlpha"}
          ></feColorMatrix>

          <feOffset dy={"-13.933"}></feOffset>

          <feGaussianBlur stdDeviation={"11.611"}></feGaussianBlur>

          <feComposite
            in2={"hardAlpha"}
            operator={"arithmetic"}
            k2={"-1"}
            k3={"1"}
          ></feComposite>

          <feColorMatrix
            type={"matrix"}
            values={"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"}
          ></feColorMatrix>

          <feBlend
            mode={"normal"}
            in2={"effect1_innerShadow_15173_8293"}
            result={"effect2_innerShadow_15173_8293"}
          ></feBlend>
        </filter>
      </defs>
    </svg>
  );
}

export default LiLogoSvgIcon;
/* prettier-ignore-end */
