// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3zKPdhWckw1SJpPYhK46Bs
// Component: D10QpezYH8ge

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
import sty from "./PlasmicTabWeek.module.css"; // plasmic-import: D10QpezYH8ge/css

createPlasmicElementProxy;

export type PlasmicTabWeek__VariantMembers = {
  selected: "selected";
  dark: "dark";
  darkSelected: "darkSelected";
};
export type PlasmicTabWeek__VariantsArgs = {
  selected?: SingleBooleanChoiceArg<"selected">;
  dark?: SingleBooleanChoiceArg<"dark">;
  darkSelected?: SingleBooleanChoiceArg<"darkSelected">;
};
type VariantPropType = keyof PlasmicTabWeek__VariantsArgs;
export const PlasmicTabWeek__VariantProps = new Array<VariantPropType>(
  "selected",
  "dark",
  "darkSelected"
);

export type PlasmicTabWeek__ArgsType = {
  currentItem?: any;
  onClick?: (event: any) => void;
};
type ArgPropType = keyof PlasmicTabWeek__ArgsType;
export const PlasmicTabWeek__ArgProps = new Array<ArgPropType>(
  "currentItem",
  "onClick"
);

export type PlasmicTabWeek__OverridesType = {
  root?: Flex__<"div">;
};

export interface DefaultTabWeekProps {
  currentItem?: any;
  onClick?: (event: any) => void;
  selected?: SingleBooleanChoiceArg<"selected">;
  dark?: SingleBooleanChoiceArg<"dark">;
  darkSelected?: SingleBooleanChoiceArg<"darkSelected">;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicTabWeek__RenderFunc(props: {
  variants: PlasmicTabWeek__VariantsArgs;
  args: PlasmicTabWeek__ArgsType;
  overrides: PlasmicTabWeek__OverridesType;
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
        path: "selected",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.selected
      },
      {
        path: "dark",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.dark
      },
      {
        path: "darkSelected",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.darkSelected
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
        {
          [sty.rootdarkSelected]: hasVariant(
            $state,
            "darkSelected",
            "darkSelected"
          ),
          [sty.rootdark]: hasVariant($state, "dark", "dark"),
          [sty.rootselected]: hasVariant($state, "selected", "selected")
        }
      )}
      onClick={args.onClick}
    >
      <div
        className={classNames(
          projectcss.all,
          projectcss.__wab_text,
          sty.text__yxEAh,
          {
            [sty.textdarkSelected__yxEAhKaB2C]: hasVariant(
              $state,
              "darkSelected",
              "darkSelected"
            ),
            [sty.textdark__yxEAhQaaXm]: hasVariant($state, "dark", "dark"),
            [sty.textselected__yxEAhOsPcn]: hasVariant(
              $state,
              "selected",
              "selected"
            )
          }
        )}
      >
        <React.Fragment>
          {(() => {
            try {
              return $props.currentItem;
            } catch (e) {
              if (
                e instanceof TypeError ||
                e?.plasmicType === "PlasmicUndefinedDataError"
              ) {
                return "";
              }
              throw e;
            }
          })()}
        </React.Fragment>
      </div>
      <div
        className={classNames(
          projectcss.all,
          projectcss.__wab_text,
          sty.text__jQpt1,
          {
            [sty.textdarkSelected__jQpt1KaB2C]: hasVariant(
              $state,
              "darkSelected",
              "darkSelected"
            ),
            [sty.textdark__jQpt1QaaXm]: hasVariant($state, "dark", "dark"),
            [sty.textselected__jQpt1OsPcn]: hasVariant(
              $state,
              "selected",
              "selected"
            )
          }
        )}
      >
        {"\u0647\u0641\u062a\u0647"}
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicTabWeek__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicTabWeek__VariantsArgs;
    args?: PlasmicTabWeek__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicTabWeek__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicTabWeek__ArgsType,
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
          internalArgPropNames: PlasmicTabWeek__ArgProps,
          internalVariantPropNames: PlasmicTabWeek__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicTabWeek__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicTabWeek";
  } else {
    func.displayName = `PlasmicTabWeek.${nodeName}`;
  }
  return func;
}

export const PlasmicTabWeek = Object.assign(
  // Top-level PlasmicTabWeek renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicTabWeek
    internalVariantProps: PlasmicTabWeek__VariantProps,
    internalArgProps: PlasmicTabWeek__ArgProps
  }
);

export default PlasmicTabWeek;
/* prettier-ignore-end */