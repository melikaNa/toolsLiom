// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3zKPdhWckw1SJpPYhK46Bs
// Component: VHAYS5YHy7AC

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

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import plasmic_paziresh_24_design_system_css from "../paziresh_24_design_system/plasmic.module.css"; // plasmic-import: 6HBcNwr8dz9LuS1Qe36xa5/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: 3zKPdhWckw1SJpPYhK46Bs/projectcss
import sty from "./PlasmicLineClomp.module.css"; // plasmic-import: VHAYS5YHy7AC/css

createPlasmicElementProxy;

export type PlasmicLineClomp__VariantMembers = {
  more: "more";
};
export type PlasmicLineClomp__VariantsArgs = {
  more?: SingleBooleanChoiceArg<"more">;
};
type VariantPropType = keyof PlasmicLineClomp__VariantsArgs;
export const PlasmicLineClomp__VariantProps = new Array<VariantPropType>(
  "more"
);

export type PlasmicLineClomp__ArgsType = {
  numberOfLine?: number;
  children?: React.ReactNode;
  onLineChange?: (val: string) => void;
};
type ArgPropType = keyof PlasmicLineClomp__ArgsType;
export const PlasmicLineClomp__ArgProps = new Array<ArgPropType>(
  "numberOfLine",
  "children",
  "onLineChange"
);

export type PlasmicLineClomp__OverridesType = {
  root?: Flex__<"div">;
  freeBox?: Flex__<"div">;
};

export interface DefaultLineClompProps {
  numberOfLine?: number;
  children?: React.ReactNode;
  onLineChange?: (val: string) => void;
  more?: SingleBooleanChoiceArg<"more">;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicLineClomp__RenderFunc(props: {
  variants: PlasmicLineClomp__VariantsArgs;
  args: PlasmicLineClomp__ArgsType;
  overrides: PlasmicLineClomp__OverridesType;
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
        path: "more",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.more
      },
      {
        path: "line",
        type: "readonly",
        variableType: "boolean",
        initFunc: ({ $props, $state, $queries, $ctx }) => true,

        onChangeProp: "onLineChange"
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

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
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
        sty.root,
        { [sty.rootmore]: hasVariant($state, "more", "more") }
      )}
    >
      <div
        data-plasmic-name={"freeBox"}
        data-plasmic-override={overrides.freeBox}
        className={classNames(projectcss.all, sty.freeBox, {
          [sty.freeBoxmore]: hasVariant($state, "more", "more")
        })}
        style={
          hasVariant($state, "more", "more")
            ? (() => {
                try {
                  return {
                    overflow: "hidden",
                    "-webkit-line-clamp": $state.line
                      ? $props.numberOfLine.toString()
                      : "",
                    "-webkit-box-orient": "vertical",
                    display: "-webkit-box"
                  };
                } catch (e) {
                  if (
                    e instanceof TypeError ||
                    e?.plasmicType === "PlasmicUndefinedDataError"
                  ) {
                    return undefined;
                  }
                  throw e;
                }
              })()
            : (() => {
                try {
                  return {
                    overflow: "hidden",
                    "-webkit-line-clamp": $props.numberOfLine.toString(),
                    "-webkit-box-orient": "vertical",
                    display: "-webkit-box"
                  };
                } catch (e) {
                  if (
                    e instanceof TypeError ||
                    e?.plasmicType === "PlasmicUndefinedDataError"
                  ) {
                    return undefined;
                  }
                  throw e;
                }
              })()
        }
      >
        {renderPlasmicSlot({
          defaultContents: null,
          value: args.children
        })}
      </div>
      {(
        hasVariant($state, "more", "more")
          ? (() => {
              try {
                return $state.line;
              } catch (e) {
                if (
                  e instanceof TypeError ||
                  e?.plasmicType === "PlasmicUndefinedDataError"
                ) {
                  return true;
                }
                throw e;
              }
            })()
          : true
      ) ? (
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__q2Iy0,
            { [sty.textmore__q2Iy0I41Ch]: hasVariant($state, "more", "more") }
          )}
          onClick={async event => {
            const $steps = {};

            $steps["updateLine"] = true
              ? (() => {
                  const actionArgs = {
                    variable: {
                      objRoot: $state,
                      variablePath: ["line"]
                    },
                    operation: 0,
                    value: false
                  };
                  return (({ variable, value, startIndex, deleteCount }) => {
                    if (!variable) {
                      return;
                    }
                    const { objRoot, variablePath } = variable;

                    $stateSet(objRoot, variablePath, value);
                    return value;
                  })?.apply(null, [actionArgs]);
                })()
              : undefined;
            if (
              $steps["updateLine"] != null &&
              typeof $steps["updateLine"] === "object" &&
              typeof $steps["updateLine"].then === "function"
            ) {
              $steps["updateLine"] = await $steps["updateLine"];
            }
          }}
        >
          {
            "\u0645\u0634\u0627\u0647\u062f\u0647 \u0628\u06cc\u0634\u062a\u0631 ..."
          }
        </div>
      ) : null}
      {(
        hasVariant($state, "more", "more")
          ? (() => {
              try {
                return $state.line == false;
              } catch (e) {
                if (
                  e instanceof TypeError ||
                  e?.plasmicType === "PlasmicUndefinedDataError"
                ) {
                  return true;
                }
                throw e;
              }
            })()
          : false
      ) ? (
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__iBjU,
            { [sty.textmore__iBjUi41Ch]: hasVariant($state, "more", "more") }
          )}
          onClick={async event => {
            const $steps = {};

            $steps["updateLine"] = true
              ? (() => {
                  const actionArgs = {
                    variable: {
                      objRoot: $state,
                      variablePath: ["line"]
                    },
                    operation: 0,
                    value: true
                  };
                  return (({ variable, value, startIndex, deleteCount }) => {
                    if (!variable) {
                      return;
                    }
                    const { objRoot, variablePath } = variable;

                    $stateSet(objRoot, variablePath, value);
                    return value;
                  })?.apply(null, [actionArgs]);
                })()
              : undefined;
            if (
              $steps["updateLine"] != null &&
              typeof $steps["updateLine"] === "object" &&
              typeof $steps["updateLine"].then === "function"
            ) {
              $steps["updateLine"] = await $steps["updateLine"];
            }
          }}
        >
          {"\u0645\u0634\u0627\u0647\u062f\u0647 \u06a9\u0645\u062a\u0631 ..."}
        </div>
      ) : null}
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "freeBox"],
  freeBox: ["freeBox"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  freeBox: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicLineClomp__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicLineClomp__VariantsArgs;
    args?: PlasmicLineClomp__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicLineClomp__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicLineClomp__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
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
          internalArgPropNames: PlasmicLineClomp__ArgProps,
          internalVariantPropNames: PlasmicLineClomp__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicLineClomp__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicLineClomp";
  } else {
    func.displayName = `PlasmicLineClomp.${nodeName}`;
  }
  return func;
}

export const PlasmicLineClomp = Object.assign(
  // Top-level PlasmicLineClomp renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    freeBox: makeNodeComponent("freeBox"),

    // Metadata about props expected for PlasmicLineClomp
    internalVariantProps: PlasmicLineClomp__VariantProps,
    internalArgProps: PlasmicLineClomp__ArgProps
  }
);

export default PlasmicLineClomp;
/* prettier-ignore-end */