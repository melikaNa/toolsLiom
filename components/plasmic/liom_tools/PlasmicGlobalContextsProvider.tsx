// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3zKPdhWckw1SJpPYhK46Bs

import * as React from "react";
import { hasVariant, ensureGlobalVariants } from "@plasmicapp/react-web";
import { Fragment } from "@/fragment/fragment"; // plasmic-import: oDNXsPr9-5Gq/codeComponent
import { GrowthBook } from "@/fragment/growthbook"; // plasmic-import: _M36Uo-hLV9L/codeComponent
import { Splunk } from "@/fragment/splunk"; // plasmic-import: WaYZseRlxlNx/codeComponent
import { EmbedCss } from "@plasmicpkgs/plasmic-embed-css";
import { AntdConfigProvider } from "@plasmicpkgs/antd5/skinny/registerConfigProvider";
import { CmsCredentialsProvider } from "@plasmicpkgs/plasmic-cms";
import { ParallaxProviderWrapper } from "@plasmicpkgs/react-scroll-parallax";

export interface GlobalContextsProviderProps {
  children?: React.ReactElement;
  fragmentProps?: Partial<
    Omit<React.ComponentProps<typeof Fragment>, "children">
  >;

  growthBookProps?: Partial<
    Omit<React.ComponentProps<typeof GrowthBook>, "children">
  >;

  splunkProps?: Partial<Omit<React.ComponentProps<typeof Splunk>, "children">>;
  embedCssProps?: Partial<
    Omit<React.ComponentProps<typeof EmbedCss>, "children">
  >;

  antdConfigProviderProps?: Partial<
    Omit<React.ComponentProps<typeof AntdConfigProvider>, "children">
  >;

  cmsCredentialsProviderProps?: Partial<
    Omit<React.ComponentProps<typeof CmsCredentialsProvider>, "children">
  >;

  parallaxProviderWrapperProps?: Partial<
    Omit<React.ComponentProps<typeof ParallaxProviderWrapper>, "children">
  >;
}

export default function GlobalContextsProvider(
  props: GlobalContextsProviderProps
) {
  const {
    children,
    fragmentProps,
    growthBookProps,
    splunkProps,
    embedCssProps,
    antdConfigProviderProps,
    cmsCredentialsProviderProps,
    parallaxProviderWrapperProps
  } = props;

  return (
    <Fragment
      {...fragmentProps}
      apiConfig={
        fragmentProps && "apiConfig" in fragmentProps
          ? fragmentProps.apiConfig!
          : undefined
      }
      previewApiConfig={
        fragmentProps && "previewApiConfig" in fragmentProps
          ? fragmentProps.previewApiConfig!
          : undefined
      }
      primaryColor={
        fragmentProps && "primaryColor" in fragmentProps
          ? fragmentProps.primaryColor!
          : "#000000"
      }
      rtl={
        fragmentProps && "rtl" in fragmentProps ? fragmentProps.rtl! : undefined
      }
    >
      <GrowthBook
        {...growthBookProps}
        apiHost={
          growthBookProps && "apiHost" in growthBookProps
            ? growthBookProps.apiHost!
            : undefined
        }
        clientKey={
          growthBookProps && "clientKey" in growthBookProps
            ? growthBookProps.clientKey!
            : undefined
        }
        previewAttributes={
          growthBookProps && "previewAttributes" in growthBookProps
            ? growthBookProps.previewAttributes!
            : undefined
        }
      >
        <Splunk
          {...splunkProps}
          defaultApiHost={
            splunkProps && "defaultApiHost" in splunkProps
              ? splunkProps.defaultApiHost!
              : undefined
          }
          defaultApiKey={
            splunkProps && "defaultApiKey" in splunkProps
              ? splunkProps.defaultApiKey!
              : undefined
          }
        >
          <EmbedCss
            {...embedCssProps}
            css={
              embedCssProps && "css" in embedCssProps
                ? embedCssProps.css!
                : "@font-face{\r\n  font-family: 'yekan bakh';\r\n  src: url('https://site-assets.plasmic.app/c58d0b8f205d4a8e1119286e283f8c57.ttf');\r\n  font-weight: normal;\r\n}\r\n@font-face{\r\n  font-family: 'yekan bakh';\r\n  src: url('https://site-assets.plasmic.app/f4245c3ba835c7d36591a79a325b23bb.ttf');\r\n  font-weight: bold;\r\n}\r\n@font-face{\r\n  font-family: 'yekan bakh';\r\n  src: url('https://site-assets.plasmic.app/3fdc0c37a33abe0cbac6028b62e78c77.ttf');\r\n  font-weight: 500;\r\n}\r\n*{\r\n  direction: rtl;\r\n  font-family: 'yekan bakh' !important;\r\n  font-feature-settings: 'lnum' 0, 'tnum' 0;\r\n}\r\n    @media (max-width: 780px) {\r\n      body::-webkit-scrollbar {\r\n        display: none; \r\n      }\r\n}\r\n\r\n.negative {\r\n    direction: ltr;\r\n}\r\n.ant-collapse-arrow{\r\n      transform: scaleX(-1);\r\n      position: relative;\r\n      top: 50%;\r\n}\r\n.bioritmbox .ant-progress-inner{\r\n  width: 90px !important;\r\n  height: 90px !important;\r\n}\r\n.bioritmbox .ant-progress-text{\r\n      position: relative 1!important;\r\n      top: 75%  !important;\r\n      opacity: 0;\r\n}\r\n.food .ant-progress-text{\r\n      position: relative 1!important;\r\n      top: 75%  !important;\r\n      opacity: 0;\r\n}\r\n.ant-progress-text {\r\n    margin-inline-start: 5px !important;\r\n    color: rgba(221, 145, 30 , 0.88) !important;\r\n}\r\n.ant-progress-show-info .ant-progress-outer {\r\n    margin-right: calc(-2em + 20px) !important;\r\n    padding-right: calc(2em - 20px) !important;\r\n}\r\n\r\n.hamyarBioritm .ant-progress-inner .ant-progress-bg{\r\n  height: 25px !important;\r\n}\r\n.hamyarBioritm .ant-progress-text{\r\n      display: none;\r\n}\r\n.ant-input{\r\n  border: none !important;\r\n  max-height: 100px !important;\r\n}\r\n\r\n:where(.css-j5cnp7).ant-input:focus, :where(.css-j5cnp7).ant-input:focus-within{\r\n  border: none !important;\r\n  box-shadow: none !important;\r\n}\r\n    #fileInput {\r\n        display: none;\r\n    }\r\n    \r\n.ant-slider-handle.ant-slider-handle-1 {\r\n  display: none !important;\r\n}\r\n.ant-slider-track{\r\n  left: 0px !important;\r\n}\r\ninput[type=\"number\"] {\r\n  direction: ltr !important;\r\n}\r\n.ant-modal-close{\r\n  display: none;\r\n}"
            }
          >
            <AntdConfigProvider
              {...antdConfigProviderProps}
              borderRadius={
                antdConfigProviderProps &&
                "borderRadius" in antdConfigProviderProps
                  ? antdConfigProviderProps.borderRadius!
                  : 6
              }
              colorBgBase={
                antdConfigProviderProps &&
                "colorBgBase" in antdConfigProviderProps
                  ? antdConfigProviderProps.colorBgBase!
                  : "#ffffff"
              }
              colorError={
                antdConfigProviderProps &&
                "colorError" in antdConfigProviderProps
                  ? antdConfigProviderProps.colorError!
                  : "#ff4d4f"
              }
              colorInfo={
                antdConfigProviderProps &&
                "colorInfo" in antdConfigProviderProps
                  ? antdConfigProviderProps.colorInfo!
                  : "#1677ff"
              }
              colorPrimary={
                antdConfigProviderProps &&
                "colorPrimary" in antdConfigProviderProps
                  ? antdConfigProviderProps.colorPrimary!
                  : "#327CE4"
              }
              colorSuccess={
                antdConfigProviderProps &&
                "colorSuccess" in antdConfigProviderProps
                  ? antdConfigProviderProps.colorSuccess!
                  : "#52c41a"
              }
              colorWarning={
                antdConfigProviderProps &&
                "colorWarning" in antdConfigProviderProps
                  ? antdConfigProviderProps.colorWarning!
                  : "#faad14"
              }
              controlHeight={
                antdConfigProviderProps &&
                "controlHeight" in antdConfigProviderProps
                  ? antdConfigProviderProps.controlHeight!
                  : 32
              }
              defaultDark={
                antdConfigProviderProps &&
                "defaultDark" in antdConfigProviderProps
                  ? antdConfigProviderProps.defaultDark!
                  : false
              }
              lineWidth={
                antdConfigProviderProps &&
                "lineWidth" in antdConfigProviderProps
                  ? antdConfigProviderProps.lineWidth!
                  : 1
              }
              loadingText={
                antdConfigProviderProps &&
                "loadingText" in antdConfigProviderProps
                  ? antdConfigProviderProps.loadingText!
                  : "."
              }
              removeLoading={
                antdConfigProviderProps &&
                "removeLoading" in antdConfigProviderProps
                  ? antdConfigProviderProps.removeLoading!
                  : false
              }
              sizeStep={
                antdConfigProviderProps && "sizeStep" in antdConfigProviderProps
                  ? antdConfigProviderProps.sizeStep!
                  : 4
              }
              sizeUnit={
                antdConfigProviderProps && "sizeUnit" in antdConfigProviderProps
                  ? antdConfigProviderProps.sizeUnit!
                  : 4
              }
              themeStyles={
                antdConfigProviderProps &&
                "themeStyles" in antdConfigProviderProps
                  ? antdConfigProviderProps.themeStyles!
                  : true
                  ? {
                      fontFamily: "Roboto",
                      fontSize: "14px",
                      fontWeight: "normal",
                      lineHeight: "1.5",
                      color: "#535353",
                      letterSpacing: "normal"
                    }
                  : undefined
              }
              wireframe={
                antdConfigProviderProps &&
                "wireframe" in antdConfigProviderProps
                  ? antdConfigProviderProps.wireframe!
                  : false
              }
            >
              <CmsCredentialsProvider
                {...cmsCredentialsProviderProps}
                databaseId={
                  cmsCredentialsProviderProps &&
                  "databaseId" in cmsCredentialsProviderProps
                    ? cmsCredentialsProviderProps.databaseId!
                    : undefined
                }
                databaseToken={
                  cmsCredentialsProviderProps &&
                  "databaseToken" in cmsCredentialsProviderProps
                    ? cmsCredentialsProviderProps.databaseToken!
                    : undefined
                }
                host={
                  cmsCredentialsProviderProps &&
                  "host" in cmsCredentialsProviderProps
                    ? cmsCredentialsProviderProps.host!
                    : "https://data.plasmic.app"
                }
                locale={
                  cmsCredentialsProviderProps &&
                  "locale" in cmsCredentialsProviderProps
                    ? cmsCredentialsProviderProps.locale!
                    : undefined
                }
              >
                <ParallaxProviderWrapper
                  {...parallaxProviderWrapperProps}
                  scrollAxis={
                    parallaxProviderWrapperProps &&
                    "scrollAxis" in parallaxProviderWrapperProps
                      ? parallaxProviderWrapperProps.scrollAxis!
                      : undefined
                  }
                >
                  {children}
                </ParallaxProviderWrapper>
              </CmsCredentialsProvider>
            </AntdConfigProvider>
          </EmbedCss>
        </Splunk>
      </GrowthBook>
    </Fragment>
  );
}