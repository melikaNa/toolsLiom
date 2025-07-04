/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3zKPdhWckw1SJpPYhK46Bs
// Component: KwkDL9piaz_z

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import {
  Flex as Flex__,
  MultiChoiceArg,
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicIcon as PlasmicIcon__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  PlasmicPageGuard as PlasmicPageGuard__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  hasVariant,
  initializeCodeComponentStates,
  initializePlasmicStates,
  makeFragment,
  omit,
  pick,
  renderPlasmicSlot,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator,
  useTrigger,
  wrapWithClassName
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions
} from "@plasmicapp/react-web/lib/host";

import { usePlasmicDataSourceContext } from "@plasmicapp/data-sources-context";
import {
  executePlasmicDataOp,
  usePlasmicDataOp,
  usePlasmicInvalidate
} from "@plasmicapp/react-web/lib/data-sources";

import { ThemeValue, useTheme } from "./PlasmicGlobalVariant__Theme"; // plasmic-import: Qg_AcB6aGxxK/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import plasmic_paziresh_24_design_system_css from "../paziresh_24_design_system/plasmic.module.css"; // plasmic-import: 6HBcNwr8dz9LuS1Qe36xa5/projectcss
import plasmic_hamdast_sdk_css from "../hamdast_sdk/plasmic.module.css"; // plasmic-import: 9yPKYrtYPnCNEj6BTTfHnY/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: 3zKPdhWckw1SJpPYhK46Bs/projectcss
import sty from "./PlasmicHeader.module.css"; // plasmic-import: KwkDL9piaz_z/css

createPlasmicElementProxy;

export type PlasmicHeader__VariantMembers = {
  state: "empty" | "allChecked";
};
export type PlasmicHeader__VariantsArgs = {
  state?: SingleChoiceArg<"empty" | "allChecked">;
};
type VariantPropType = keyof PlasmicHeader__VariantsArgs;
export const PlasmicHeader__VariantProps = new Array<VariantPropType>("state");

export type PlasmicHeader__ArgsType = {};
type ArgPropType = keyof PlasmicHeader__ArgsType;
export const PlasmicHeader__ArgProps = new Array<ArgPropType>();

export type PlasmicHeader__OverridesType = {
  headerContainer?: Flex__<"div">;
  freeBox?: Flex__<"div">;
  img?: Flex__<typeof PlasmicImg__>;
  textbox?: Flex__<"input">;
};

export interface DefaultHeaderProps {
  state?: SingleChoiceArg<"empty" | "allChecked">;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicHeader__RenderFunc(props: {
  variants: PlasmicHeader__VariantsArgs;
  args: PlasmicHeader__ArgsType;
  overrides: PlasmicHeader__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(
    () =>
      Object.assign(
        {},
        Object.fromEntries(
          Object.entries(props.args).filter(([_, v]) => v !== undefined)
        )
      ),
    [props.args]
  );

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();

  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = useCurrentUser?.() || {};

  const stateSpecs: Parameters<typeof useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "state",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.state
      },
      {
        path: "textbox.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) =>
          hasVariant(globalVariants, "theme", "dark") ? "My Task" : undefined
      }
    ],
    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
  });
  const dataSourcesCtx = usePlasmicDataSourceContext();
  const plasmicInvalidate = usePlasmicInvalidate();

  const globalVariants = ensureGlobalVariants({
    theme: useTheme()
  });

  return (
    <div
      data-plasmic-name={"headerContainer"}
      data-plasmic-override={overrides.headerContainer}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        plasmic_plasmic_rich_components_css.plasmic_tokens,
        plasmic_paziresh_24_design_system_css.plasmic_tokens,
        plasmic_hamdast_sdk_css.plasmic_tokens,
        sty.headerContainer,
        {
          [sty.headerContainerglobal_theme_dark]: hasVariant(
            globalVariants,
            "theme",
            "dark"
          ),
          [sty.headerContainerstate_allChecked]: hasVariant(
            $state,
            "state",
            "allChecked"
          ),
          [sty.headerContainerstate_empty]: hasVariant($state, "state", "empty")
        }
      )}
    >
      <div
        data-plasmic-name={"freeBox"}
        data-plasmic-override={overrides.freeBox}
        className={classNames(projectcss.all, sty.freeBox, {
          [sty.freeBoxstate_empty]: hasVariant($state, "state", "empty")
        })}
      >
        {(hasVariant($state, "state", "empty") ? false : true) ? (
          <PlasmicImg__
            data-plasmic-name={"img"}
            data-plasmic-override={overrides.img}
            alt={""}
            className={classNames(sty.img, {
              [sty.imgglobal_theme_dark]: hasVariant(
                globalVariants,
                "theme",
                "dark"
              ),
              [sty.imgstate_allChecked]: hasVariant(
                $state,
                "state",
                "allChecked"
              ),
              [sty.imgstate_empty]: hasVariant($state, "state", "empty")
            })}
            displayHeight={"30px"}
            displayMaxHeight={"none"}
            displayMaxWidth={"none"}
            displayMinHeight={"0"}
            displayMinWidth={"0"}
            displayWidth={"30px"}
            src={
              hasVariant(globalVariants, "theme", "dark")
                ? "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAxMiA2IiBoZWlnaHQ9IjYiIHdpZHRoPSIxMiIgc3R5bGU9ImZpbGw6IHJnYigyMTMsIDIwNiwgMjA2KTsiPgo8cGF0aCBmaWxsPSJibGFjayIgZD0iTTAuNjEyIDAuMTEyTDUuODQ0IDMuMjJMMTEuMDc2IDAuMTEyVjIuNUw1Ljg0NCA1LjUyNEwwLjYxMiAyLjQ4OFYwLjExMloiLz4KPC9zdmc+"
                : "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAxMiA2IiBoZWlnaHQ9IjYiIHdpZHRoPSIxMiI+CjxwYXRoIGZpbGw9ImJsYWNrIiBkPSJNMC42MTIgMC4xMTJMNS44NDQgMy4yMkwxMS4wNzYgMC4xMTJWMi41TDUuODQ0IDUuNTI0TDAuNjEyIDIuNDg4VjAuMTEyWiIvPgo8L3N2Zz4K"
            }
          />
        ) : null}
      </div>
      <input
        data-plasmic-name={"textbox"}
        data-plasmic-override={overrides.textbox}
        className={classNames(projectcss.all, projectcss.input, sty.textbox, {
          [sty.textboxglobal_theme_dark]: hasVariant(
            globalVariants,
            "theme",
            "dark"
          ),
          [sty.textboxstate_allChecked]: hasVariant(
            $state,
            "state",
            "allChecked"
          ),
          [sty.textboxstate_empty]: hasVariant($state, "state", "empty")
        })}
        onChange={async (...eventArgs: any) => {
          (e => {
            generateStateOnChangeProp($state, ["textbox", "value"])(
              e.target.value
            );
          }).apply(null, eventArgs);
        }}
        onKeyDown={async event => {
          const $steps = {};

          $steps["postgresCreate"] =
            event.key === "Enter"
              ? (() => {
                  const actionArgs = {
                    dataOp: {
                      sourceId: "wRV1ZvJALFdNnnYHscHeaX",
                      opId: "921fce48-ac6d-413d-ac10-2b6fbd4abc9e",
                      userArgs: {
                        variables: [$state.textbox.value]
                      },
                      cacheKey: null,
                      invalidatedKeys: ["plasmic_refresh_all"],
                      roleId: null
                    }
                  };
                  return (async ({ dataOp, continueOnError }) => {
                    try {
                      const response = await executePlasmicDataOp(dataOp, {
                        userAuthToken: dataSourcesCtx?.userAuthToken,
                        user: dataSourcesCtx?.user
                      });
                      await plasmicInvalidate(dataOp.invalidatedKeys);
                      return response;
                    } catch (e) {
                      if (!continueOnError) {
                        throw e;
                      }
                      return e;
                    }
                  })?.apply(null, [actionArgs]);
                })()
              : undefined;
          if (
            $steps["postgresCreate"] != null &&
            typeof $steps["postgresCreate"] === "object" &&
            typeof $steps["postgresCreate"].then === "function"
          ) {
            $steps["postgresCreate"] = await $steps["postgresCreate"];
          }

          $steps["updateTextboxValue"] =
            event.key === "Enter"
              ? (() => {
                  const actionArgs = {
                    variable: {
                      objRoot: $state,
                      variablePath: ["textbox", "value"]
                    },
                    operation: 1
                  };
                  return (({ variable, value, startIndex, deleteCount }) => {
                    if (!variable) {
                      return;
                    }
                    const { objRoot, variablePath } = variable;

                    $stateSet(objRoot, variablePath, undefined);
                    return undefined;
                  })?.apply(null, [actionArgs]);
                })()
              : undefined;
          if (
            $steps["updateTextboxValue"] != null &&
            typeof $steps["updateTextboxValue"] === "object" &&
            typeof $steps["updateTextboxValue"].then === "function"
          ) {
            $steps["updateTextboxValue"] = await $steps["updateTextboxValue"];
          }
        }}
        placeholder={"What needs to be done?"}
        ref={ref => {
          $refs["textbox"] = ref;
        }}
        type={"text"}
        value={generateStateValueProp($state, ["textbox", "value"]) ?? ""}
      />
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  headerContainer: ["headerContainer", "freeBox", "img", "textbox"],
  freeBox: ["freeBox", "img"],
  img: ["img"],
  textbox: ["textbox"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  headerContainer: "div";
  freeBox: "div";
  img: typeof PlasmicImg__;
  textbox: "input";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicHeader__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicHeader__VariantsArgs;
    args?: PlasmicHeader__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicHeader__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicHeader__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicHeader__ArgProps,
          internalVariantPropNames: PlasmicHeader__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicHeader__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "headerContainer") {
    func.displayName = "PlasmicHeader";
  } else {
    func.displayName = `PlasmicHeader.${nodeName}`;
  }
  return func;
}

export const PlasmicHeader = Object.assign(
  // Top-level PlasmicHeader renders the root element
  makeNodeComponent("headerContainer"),
  {
    // Helper components rendering sub-elements
    freeBox: makeNodeComponent("freeBox"),
    img: makeNodeComponent("img"),
    textbox: makeNodeComponent("textbox"),

    // Metadata about props expected for PlasmicHeader
    internalVariantProps: PlasmicHeader__VariantProps,
    internalArgProps: PlasmicHeader__ArgProps
  }
);

export default PlasmicHeader;
/* prettier-ignore-end */
