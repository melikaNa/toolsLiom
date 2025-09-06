/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */

import * as React from "react";
import { createUseScreenVariants } from "@plasmicapp/react-web";

export type NewViewValue = "newView";
export const NewViewContext = React.createContext<NewViewValue | undefined>(
  "PLEASE_RENDER_INSIDE_PROVIDER" as any
);
export function NewViewContextProvider(
  props: React.PropsWithChildren<{ value: NewViewValue | undefined }>
) {
  return (
    <NewViewContext.Provider value={props.value}>
      {props.children}
    </NewViewContext.Provider>
  );
}

export function useNewView() {
  return React.useContext(NewViewContext);
}

export default NewViewContext;
/* prettier-ignore-end */
