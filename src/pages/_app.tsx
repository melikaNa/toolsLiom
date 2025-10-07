import "@/styles/globals.css";
import "@/styles/date-picker.css";

import { PlasmicRootProvider } from "@plasmicapp/react-web";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useEffect, useState } from "react";

import { NewViewContextProvider } from "../../components/plasmic/liom_tools/PlasmicGlobalVariant__NewView";

export default function MyApp({ Component, pageProps }: AppProps) {
  const [newView, setNewView] = useState<"newView" | undefined>(undefined);

  useEffect(() => {
    if (typeof window !== "undefined") {
          const exists = document.cookie.includes("newView=");
          if (exists) {
            localStorage.setItem("newView","true");
            setNewView("newView");
          } else {
            setNewView(undefined);
          }
          if (document.cookie.includes("loading=true")) {
            const hideLoading = () => {
              document.cookie = "loading=false; path=/; domain=.liom.app; secure; SameSite=Lax";
            };
        
            if (document.readyState !== "complete") {
              window.addEventListener("load", hideLoading, { once: true });
            } else {
              hideLoading();
            }
          }
        }
    
    if (document.cookie.includes("loading=true")) {
          const hideLoading = () => {
            document.cookie = "loading=false; path=/; domain=.liom.app; secure; SameSite=Lax";
          };
      
          if (document.readyState !== "complete") {
            window.addEventListener("load", hideLoading, { once: true });
          } else {
            hideLoading();
          }
        }

  }, []);

  return (
    <PlasmicRootProvider Head={Head}>
      <NewViewContextProvider value={newView}>
        <Component {...pageProps} />
      </NewViewContextProvider>
    </PlasmicRootProvider>
  );
}
