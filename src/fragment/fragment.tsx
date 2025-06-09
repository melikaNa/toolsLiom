declare global {
  interface Window {
    FlutterChannel?: {
      postMessage: (message: string) => void;
    };
  }
}

import React, { useEffect, useMemo, useState } from "react";
import toast, { ToastPosition, Toaster } from "react-hot-toast";
import {
  DataProvider,
  GlobalActionsProvider,
  GlobalContextMeta,
} from "@plasmicapp/host";
import axios from "axios";

type FragmentProps = React.PropsWithChildren<{
  previewApiConfig: Record<string, any>;
  apiConfig: Record<string, any>;
  rtl: boolean;
  primaryColor: string;
}>;

export const Fragment = ({
  children,
  previewApiConfig,
  apiConfig,
  rtl,
  primaryColor,
}: FragmentProps) => {
  useEffect(() => {
    changeTheme(primaryColor);
  }, [primaryColor]);

  const changeTheme = (color: string) => {
    document.documentElement.style.setProperty("--primary", color);
  };

  const actions = useMemo(
    () => ({
        showToast: (
          type: "success" | "error" | "custom",
          message: string,
          placement: ToastPosition = "top-right",
          duration: number = 3000
        ) => {
          if (type === "custom") {
            toast.custom((t) => (
              <div
                   className={`custom-toast-info ${t.visible ? "animate-enter" : "animate-leave"}`}
                  style={{
                    transition: "all 0.3s ease",
                    maxWidth: "300px",
                    margin: "0.5rem",
                  }}
                >
                    <span className="font-semibold mr-2"><svg viewBox="-0.5 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 21.5C17.1086 21.5 21.25 17.3586 21.25 12.25C21.25 7.14137 17.1086 3 12 3C6.89137 3 2.75 7.14137 2.75 12.25C2.75 17.3586 6.89137 21.5 12 21.5Z" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M12.9309 8.15005C12.9256 8.39231 12.825 8.62272 12.6509 8.79123C12.4767 8.95974 12.2431 9.05271 12.0008 9.05002C11.8242 9.04413 11.6533 8.98641 11.5093 8.884C11.3652 8.7816 11.2546 8.63903 11.1911 8.47415C11.1275 8.30927 11.1139 8.12932 11.152 7.95675C11.19 7.78419 11.278 7.6267 11.405 7.50381C11.532 7.38093 11.6923 7.29814 11.866 7.26578C12.0397 7.23341 12.2192 7.25289 12.3819 7.32181C12.5446 7.39072 12.6834 7.506 12.781 7.65329C12.8787 7.80057 12.9308 7.97335 12.9309 8.15005ZM11.2909 16.5301V11.1501C11.2882 11.0556 11.3046 10.9615 11.3392 10.8736C11.3738 10.7857 11.4258 10.7057 11.4922 10.6385C11.5585 10.5712 11.6378 10.518 11.7252 10.4822C11.8126 10.4464 11.9064 10.4286 12.0008 10.43C12.094 10.4299 12.1863 10.4487 12.272 10.4853C12.3577 10.5218 12.4352 10.5753 12.4997 10.6426C12.5642 10.7099 12.6143 10.7895 12.6472 10.8767C12.6801 10.9639 12.6949 11.0569 12.6908 11.1501V16.5301C12.6908 16.622 12.6727 16.713 12.6376 16.7979C12.6024 16.8828 12.5508 16.96 12.4858 17.025C12.4208 17.09 12.3437 17.1415 12.2588 17.1767C12.1738 17.2119 12.0828 17.23 11.9909 17.23C11.899 17.23 11.8079 17.2119 11.723 17.1767C11.6381 17.1415 11.5609 17.09 11.4959 17.025C11.4309 16.96 11.3793 16.8828 11.3442 16.7979C11.309 16.713 11.2909 16.622 11.2909 16.5301Z" fill="#ffffff"></path> </g></svg></span>
                    {message}
                </div>
                ), {
                  duration,
                  position: placement,
                });
              } else {
                toast[type ?? "success"](message, {
                  duration,
                  position: placement,
                });
              }
            },
      apiRequest: async (
        method: "GET" | "POST" | "DELETE" | "PUT" | "PATCH" = "GET",
        url: string,
        params: Record<string, string | string[]> = {},
        body?: Record<string, any>,
        config?: Record<string, any>
      ) => {
        try {
          let result;
          if (method === "GET") {
            result = await axios.get(url, {
              params,
              ...apiConfig,
              ...previewApiConfig,
              ...config,
            });
          }
          if (method !== "GET") {
            result = await axios[
              method.toLowerCase() as "post" | "delete" | "put" | "patch"
            ](url, body, {
              params,
              ...apiConfig,
              ...previewApiConfig,
              ...config,
            });
          }
          return result;
        } catch (error) {
          if (axios.isAxiosError(error)) {
            return error.response;
          }
        }
      },
      wait: (duration: number = 1000) => {
        return new Promise((resolve) => setTimeout(resolve, duration));
      },
      
      deepLink: (action: string, token: string, userId: string, inApp: string, theme : string ,inWebViow : boolean =false, params: Record<string, string | string[]> = {},) => { 
        
          const sendMessage = (title: string, link: string,inWebViow:boolean) => {
              if (typeof window !== "undefined" && window.FlutterChannel && typeof window.FlutterChannel.postMessage === "function") {
                window.FlutterChannel.postMessage(`#inAppWebView**@@**${title}**@@**${link}`);
              } else if (typeof window !== "undefined") {
                if(inWebViow)
                  link=`/web-viow?link=${encodeURIComponent(link)}`;
                  window.open(link, "_self");
              }
          };
              const buildQueryString = (params: Record<string, string | string[]>): string => {
                  const query = new URLSearchParams();
                
                  for (const key in params) {
                    const value = params[key];
                    if (Array.isArray(value)) {
                      value.forEach((val) => query.append(key, val));
                    } else {
                      query.append(key, value);
                    }
                  }
                
                  return query.toString();
                };


        
          switch (action.split('-')[0]) {
            case "#adhd": {
              const queryString = buildQueryString(params);
              const link = `https://tools.liom.app/self-test/?app=liom&type=adhd&origin=pregnancy&inApp=${inApp}&token=${token}&${queryString}`;
              sendMessage("تست ADHD", link,inWebViow);
              break;
            }
            case "#clinic": {
              const generateRandomString = (length: number) => {
                const chars = "abcdefghijklmnopqrstuvwxyz0123456789";
                return Array.from({ length }, () => chars[Math.floor(Math.random() * chars.length)]).join("");
              };
              
              const randomStr1 = generateRandomString(6);
              const randomStr2 = generateRandomString(6);
              const link = `https://checkup.liom-app.ir/moshavereh/psychology/4?token=${randomStr1 + token + randomStr2}`;
          
              sendMessage("کلینیک لیوم", link,inWebViow);
              break;
            }
            case "#skinCare": {
              const link = `https://tools.liom.app/self-medication/?type=skinCare&inApp=${inApp}&token=${token}&selectStep=0&userId=${userId}&theme=${theme}`;
              sendMessage("روتین پوستی", link,inWebViow);
              break;
            }
            case "#hair_care": {
              const link = `https://tools.liom.app/self-medication/?type=hair_care&inApp=${inApp}&token=${token}&selectStep=0&userId=${userId}&theme=${theme}`;
              sendMessage("روتین مراقبت از مو", link,inWebViow);
              break;
            }
            case "#adhd_treatment_sub": {
              const link = `https://tools.liom.app/self-medication/?type=adhd_treatment_sub&inApp=${inApp}&token=${token}&selectStep=0&userId=${userId}&theme=${theme}`;
              sendMessage("درمان اختلال ADHD", link,inWebViow);
              break;
            }
            case "#danger": {
              const link = `https://tools.liom.app/self-medication/?type=pregnancy_danger_sub&inApp=${inApp}&token=${token}&selectStep=0&userId=${userId}&theme=${theme}`;
              sendMessage("خطرناکه یانه", link,inWebViow);
              break;
            }
              
            case "#pregnancyDiabetes": {
              const queryString = buildQueryString(params);
              const link = `https://tools.liom.app/self-test/?app=liom&type=pregnancyDiabetes&inApp=${inApp}&token=${token}&userId=${userId}&theme=${theme}&${queryString}`;
              sendMessage("تشخیص دیابت بارداری", link,inWebViow);
              break;
            }
            case "#preeclampsia": {
              const queryString = buildQueryString(params);
              const link = `https://tools.liom.app/self-test/?app=liom&type=preeclampsia&inApp=${inApp}&token=${token}&userId=${userId}&theme=${theme}&${queryString}`;
              sendMessage("تشخیص مسمومیت بارداری", link,inWebViow);
              break;
            }
            case "#depression": {
              const queryString = buildQueryString(params);
              const link = `https://tools.liom.app/self-test/?app=liom&type=depression&inApp=${inApp}&token=${token}&userId=${userId}&theme=${theme}&${queryString}`;
              sendMessage("تشخیص افسوردگی بر اساس علائم", link,inWebViow);
              break;
            }
            case "#thyroid": {
              const queryString = buildQueryString(params);
              const link = `https://tools.liom.app/self-test/?app=liom&type=thyroid&inApp=${inApp}&token=${token}&userId=${userId}&theme=${theme}&${queryString}`;
              sendMessage("تشخیص اختلال تیروئید", link,inWebViow);
              break;
            }
            case "#genderDetection": {
              const queryString = buildQueryString(params);
              const link = `https://tools.liom.app/self-test/?app=liom&type=genderDetection&inApp=${inApp}&token=${token}&userId=${userId}&theme=${theme}&${queryString}`;
              sendMessage("تشخیص جنسیت", link,inWebViow);
              break;
            }
            case "#need_therapy": {
              const queryString = buildQueryString(params);
              const link = `https://tools.liom.app/self-test/?app=liom&type=needTherapy&inApp=${inApp}&token=${token}&userId=${userId}&theme=${theme}&${queryString}`;
              sendMessage("آیا نیاز به تراپی دارم؟", link,inWebViow);
              break;
            }
            

            case "#stretch_marks": {
              const link = `https://tools.liom.app/self-medication/?type=stretch_marks&inApp=${inApp}&token=${token}&selectStep=0&userId=${userId}&theme=${theme}`;
              sendMessage("ترک پوستی", link,inWebViow);
              break;
            }

            case "#bioritm": {
                const link = `/bioritm/?token=${token}`;
                sendMessage("بیوریتم", link,inWebViow);
                break;
            }
            case "#appoinment": {
                const queryString = buildQueryString(params);
                const link = `/clinic/?token=${token}&userId=${userId}&${queryString}`;
                sendMessage("نوبت دهی", link,inWebViow);
                break;
            }


            case "#weight": {
                const queryString = buildQueryString(params);
                const link = `https://tools.liom.app/pregnancy-bmi/?inApp=${inApp}&${queryString}`;
                sendMessage("کنترل اضافه وزن بارداری", link,inWebViow);
                break;
            }
              
            case "#directDialog": {
              if (typeof window !== "undefined" && window.FlutterChannel && typeof window.FlutterChannel.postMessage === "function") {
              window.FlutterChannel.postMessage(action);}
              break;
            }
            case "#hamyarInfo": {
              if (typeof window !== "undefined" && window.FlutterChannel && typeof window.FlutterChannel.postMessage === "function") {
                window.FlutterChannel.postMessage(action);}
              else {    
                    toast.error("برای استفاده از این ویژگی لطفا لیوم رو از مارکت های معتبر دانلود و نصب کنید.", {
                      duration: 3000,
                      position: "top-right",
                    });
                  // let link = `/hamyar-add/?token=${token}`;
                  // link=`/web-viow?link=${encodeURIComponent(link)}`;
                  // window.open(link, "_self");
              }
              break;
            }
            case "#sismony": {
              if (typeof window !== "undefined" && window.FlutterChannel && typeof window.FlutterChannel.postMessage === "function") {
                window.FlutterChannel.postMessage(action);}
              else {    
                    toast.error("برای استفاده از این ویژگی لطفا لیوم رو از مارکت های معتبر دانلود و نصب کنید.", {
                      duration: 3000,
                      position: "top-right",
                    });
                  // let link = `/hamyar-add/?token=${token}`;
                  // link=`/web-viow?link=${encodeURIComponent(link)}`;
                  // window.open(link, "_self");
              }
              break;
            }
            case "#hospitalBag": {
              if (typeof window !== "undefined" && window.FlutterChannel && typeof window.FlutterChannel.postMessage === "function") {
                window.FlutterChannel.postMessage(action);}
              else {    
                    toast.error("برای استفاده از این ویژگی لطفا لیوم رو از مارکت های معتبر دانلود و نصب کنید.", {
                      duration: 3000,
                      position: "top-right",
                    });
                  // let link = `/hamyar-add/?token=${token}`;
                  // link=`/web-viow?link=${encodeURIComponent(link)}`;
                  // window.open(link, "_self");
              }
              break;
            }
            case "#breastCancer": {
              if (typeof window !== "undefined" && window.FlutterChannel && typeof window.FlutterChannel.postMessage === "function") {
                window.FlutterChannel.postMessage("#breastCancerDatePage");}
              else {    
                    toast.error("برای استفاده از این ویژگی لطفا لیوم رو از مارکت های معتبر دانلود و نصب کنید.", {
                      duration: 3000,
                      position: "top-right",
                    });
                  // let link = `/hamyar-add/?token=${token}`;
                  // link=`/web-viow?link=${encodeURIComponent(link)}`;
                  // window.open(link, "_self");
              }
              break;
            }
              
            case "#biorhythm": {
              if (typeof window !== "undefined" && window.FlutterChannel && typeof window.FlutterChannel.postMessage === "function") {
                window.FlutterChannel.postMessage("#biorhythm");}
              else {    
                const link = `/Biorhythm/?token=${token}`;
                sendMessage("بیوریتم", link,inWebViow);
              }
                break;
            }

            case "#healthSubscription": {
              if (typeof window !== "undefined" && window.FlutterChannel && typeof window.FlutterChannel.postMessage === "function") {
                window.FlutterChannel.postMessage(action);}
              break;
            }
              
            case "#chatBot": {
                const queryString = buildQueryString(params);
                const link = `https://tools.liom.app/chat-bot/?token=${token}&userId=${userId}&${queryString}&inApp=${inApp}`;
                sendMessage("پزشک هوشمند", link,inWebViow);
                break;
            }
            case "#selfSms": {
                const queryString = buildQueryString(params);
                const link = `https://apps.liom.app/self-sms-page/?inApp=${inApp}&token=${token}&${queryString}`;
                sendMessage("پیامک به خود", link,inWebViow);
                break;
            }
            case "#irregularQuestion": {
                const queryString = buildQueryString(params);
                const link = `https://tools.liom.app/self-test/?app=liom&type=irregular&origin=liom_selfcare_pwa&token=${token}&userId=${userId}&inApp=${inApp}&${queryString}&home-page=https://apps.liom.app/Self-care/`;
                sendMessage("تست نامنظمی", link,inWebViow);
                break;
            }
            case "#irregularPage": {
                const link = `https://tools.liom.app/self-medication/?type=irregular&token=${token}&userId=${userId}&inApp=${inApp}`;
                sendMessage("درمان نامنظمی", link,inWebViow);
                break;
            }
            case "#pcos": {
                const link = `https://tools.liom.app/self-medication/?type=pcos&token=${token}&userId=${userId}&inApp=${inApp}`;
                sendMessage("درمان تنبلی تخمدان", link,inWebViow);
                break;
            }
            case "#rediucePain": {
                const link = `https://tools.liom.app/self-medication/?type=irregular&token=${token}&userId=${userId}&inApp=${inApp}`;
                sendMessage("کاهش درد", link,inWebViow);
                break;
            }
            case "#video": {
                const link = `https://tools.liom.app/play-list/?inApp=${inApp}`;
                sendMessage("محتوا آموزشی", link,inWebViow);
                break;
            }

            default:
            if (action.startsWith("#inAppWebView")) {
              const link = action.split("**@@**");
              let url = new URL(link[2]);
                let param = new URLSearchParams(url.search);
                const queryString = buildQueryString(params);
                let urlLink="";
                if (param.has("inApp")) {
                    param.set("inApp",inApp );
                    url.search = param.toString();
                    urlLink = url.toString();
                }
                sendMessage(link[1], urlLink+`&${queryString}` ,inWebViow);
            }
          }
      }
    }),
    []
  );

  return (
    <GlobalActionsProvider contextName="Fragment" actions={actions}>
      <DataProvider
        name="Fragment"
        data={{
          apiConfig: apiConfig ?? {},
          previewApiConfig: previewApiConfig ?? {},
          rtl,
          primaryColor,
        }}
        hidden
      >
        {children}
        <Toaster
          toastOptions={{
            // کلاس‌های عمومی برای تمام toastها
            className: 'custom-toast',
            // کلاس‌های مخصوص برای انواع مختلف toast
            success: {
              className: 'custom-toast-success',
            },
            error: {
              className: 'custom-toast-error',
            },
            custom: { 
              className: 'custom-toast-info' 
            }
          }}
        />
      </DataProvider>
    </GlobalActionsProvider>
  );
};

export const fragmentMeta: GlobalContextMeta<FragmentProps> = {
  name: "Fragment",
  displayName: "Fragment",
  importPath: "@/fragment/fragment",
  props: {
    apiConfig: {
      displayName: "API Config",
      type: "object",
      description: `e.g. { withCredentials: true }`,
      helpText:
        "Read about request configuration options at https://axios-http.com/docs/req_config",
    },
    previewApiConfig: {
      displayName: "Preview API Config",
      type: "object",
      description: `e.g. { headers: { 'Authorization': 'XXX' } }`,
      editOnly: true,
      helpText:
        "Read about request configuration options at https://axios-http.com/docs/req_config",
    },
    rtl: {
      displayName: "RTL",
      type: "boolean",
      description: `Direction`,
    },
    primaryColor: {
      displayName: "Primary Color",
      type: "color",
      defaultValue: "#000000",
      defaultValueHint: "#000000",
    },
  },
  providesData: true,
  globalActions: {
    showToast: {
      displayName: "Show Toast",
      parameters: [
        {
          name: "type",
          type: {
            type: "choice",
            options: ["success", "error", "custom"],
            defaultValueHint: "success",
          },
        },
        {
          name: "message",
          type: {
            type: "string",
            defaultValueHint: "A message for you!",
            required: true,
          },
        },
        {
          name: "placement",
          type: {
            type: "choice",
            options: [
              "top-left",
              "top-center",
              "top-right",
              "bottom-left",
              "bottom-center",
              "bottom-right",
            ],
            defaultValueHint: "top-right",
          },
        },
        {
          name: "duration",
          type: {
            type: "number",
            defaultValueHint: 3000,
          },
        },
      ],
    },
    wait: {
      displayName: "Wait",
      parameters: [
        {
          name: "duration",
          type: {
            type: "number",
            defaultValueHint: 1000,
            defaultValue: 1000,
            helpText: "executes after a specified delay (in milliseconds).",
          },
        },
      ],
    },
    deepLink: {
      displayName: "Deep Link",
      parameters: [
        {
          name: "action",
          type: { type: "string", required: true },
        },
        {
          name: "token",
          type: { type: "string", required: true },
        },
        {
          name: "userId",
          type: { type: "string", required: true },
        },
        {
          name: "inApp",
          type: { type: "string", required: true },
        },
        {
          name: "theme",
          type: { type: "string", required: true },
        },
               {
          name: "inWebViow",
          type: { type: "boolean", required: false }, 
        },
        {
          name: "params",
          type: {
            type: "object",
            description: `e.g. { id: 20 }`,
            helpText:
              "It will append this to the end of the URL as ?key=value.",
          }
        },
      ]
    },
    apiRequest: {
      displayName: "API Request",
      parameters: [
        {
          name: "method",
          type: {
            type: "choice",
            options: ["GET", "POST", "DELETE", "PUT", "PATCH"],
            defaultValueHint: "GET",
            defaultValue: "GET",
          },
        },
        {
          name: "url",
          displayName: "URL",
          type: {
            type: "string",
            defaultValueHint: "/api/v1/users",
            required: true,
          },
        },
        {
          displayName: "Query Params",
          name: "params",
          type: {
            type: "object",
            description: `e.g. { id: 20 }`,
            helpText:
              "It will append this to the end of the URL as ?key=value.",
          },
        },
        {
          displayName: "Body",
          name: "body",
          type: {
            type: "object",
            helpText: "It is not applicable for the GET method.",
            description: `e.g. { id: 20 }`,
          },
        },
        {
          name: "config",
          displayName: "Request Config",
          type: {
            type: "object",
            description: `e.g. { headers: { 'Authorization': 'XXX' } }`,
            helpText:
              "Read about request configuration options at https://axios-http.com/docs/req_config",
          },
        },
      ],
    },
  },
};
