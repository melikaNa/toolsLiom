// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3zKPdhWckw1SJpPYhK46Bs
// Component: 0oGpc6YoPalA

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

import { LottieWrapper } from "@plasmicpkgs/lottie-react";

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import plasmic_paziresh_24_design_system_css from "../paziresh_24_design_system/plasmic.module.css"; // plasmic-import: 6HBcNwr8dz9LuS1Qe36xa5/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: 3zKPdhWckw1SJpPYhK46Bs/projectcss
import sty from "./PlasmicSeen.module.css"; // plasmic-import: 0oGpc6YoPalA/css

import CheckSvgIcon from "./icons/PlasmicIcon__CheckSvg"; // plasmic-import: C9T5fGoOgKRV/icon
import Icon97Icon from "./icons/PlasmicIcon__Icon97"; // plasmic-import: 0UrLVbKeb62Y/icon

createPlasmicElementProxy;

export type PlasmicSeen__VariantMembers = {
  unnamedGroupOfVariants: "_0" | "_1" | "_2";
};
export type PlasmicSeen__VariantsArgs = {
  unnamedGroupOfVariants?: SingleChoiceArg<"_0" | "_1" | "_2">;
};
type VariantPropType = keyof PlasmicSeen__VariantsArgs;
export const PlasmicSeen__VariantProps = new Array<VariantPropType>(
  "unnamedGroupOfVariants"
);

export type PlasmicSeen__ArgsType = {};
type ArgPropType = keyof PlasmicSeen__ArgsType;
export const PlasmicSeen__ArgProps = new Array<ArgPropType>();

export type PlasmicSeen__OverridesType = {
  root?: Flex__<"div">;
  lottie?: Flex__<typeof LottieWrapper>;
};

export interface DefaultSeenProps {
  unnamedGroupOfVariants?: SingleChoiceArg<"_0" | "_1" | "_2">;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicSeen__RenderFunc(props: {
  variants: PlasmicSeen__VariantsArgs;
  args: PlasmicSeen__ArgsType;
  overrides: PlasmicSeen__OverridesType;
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
        path: "unnamedGroupOfVariants",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) =>
          $props.unnamedGroupOfVariants
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
          [sty.rootunnamedGroupOfVariants__0]: hasVariant(
            $state,
            "unnamedGroupOfVariants",
            "_0"
          ),
          [sty.rootunnamedGroupOfVariants__1]: hasVariant(
            $state,
            "unnamedGroupOfVariants",
            "_1"
          ),
          [sty.rootunnamedGroupOfVariants__2]: hasVariant(
            $state,
            "unnamedGroupOfVariants",
            "_2"
          )
        }
      )}
    >
      <LottieWrapper
        data-plasmic-name={"lottie"}
        data-plasmic-override={overrides.lottie}
        animationData={{
          v: "5.5.7",
          meta: { g: "LottieFiles AE 0.1.20", a: "", k: "", d: "", tc: "" },
          fr: 30,
          ip: 0,
          op: 101,
          w: 100,
          h: 100,
          nm: "Comp 1",
          ddd: 0,
          assets: [],
          layers: [
            {
              ddd: 0,
              ind: 1,
              ty: 4,
              nm: "time",
              sr: 1,
              ks: {
                o: { a: 0, k: 100, ix: 11 },
                r: { a: 0, k: 0, ix: 10 },
                p: { a: 0, k: [50, 50, 0], ix: 2 },
                a: { a: 0, k: [0, 0, 0], ix: 1 },
                s: { a: 0, k: [100, 100, 100], ix: 6 }
              },
              ao: 0,
              shapes: [
                {
                  ty: "gr",
                  it: [
                    {
                      ind: 0,
                      ty: "sh",
                      ix: 1,
                      ks: {
                        a: 0,
                        k: {
                          i: [
                            [0, -6.075],
                            [-6.075, 0],
                            [0, 6.075],
                            [6.075, 0]
                          ],
                          o: [
                            [0, 6.075],
                            [6.075, 0],
                            [0, -6.075],
                            [-6.075, 0]
                          ],
                          v: [
                            [-11, 0],
                            [0, 11],
                            [11, 0],
                            [0, -11]
                          ],
                          c: true
                        },
                        ix: 2
                      },
                      nm: "Path 1",
                      mn: "ADBE Vector Shape - Group",
                      hd: false
                    },
                    {
                      ind: 1,
                      ty: "sh",
                      ix: 2,
                      ks: {
                        a: 0,
                        k: {
                          i: [
                            [4.971, 0],
                            [0, 4.971],
                            [-4.971, 0],
                            [0, -4.971]
                          ],
                          o: [
                            [-4.971, 0],
                            [0, -4.971],
                            [4.971, 0],
                            [0, 4.971]
                          ],
                          v: [
                            [0, 9],
                            [-9, 0],
                            [0, -9],
                            [9, 0]
                          ],
                          c: true
                        },
                        ix: 2
                      },
                      nm: "Path 2",
                      mn: "ADBE Vector Shape - Group",
                      hd: false
                    },
                    {
                      ty: "mm",
                      mm: 1,
                      nm: "Merge Paths 1",
                      mn: "ADBE Vector Filter - Merge",
                      hd: false
                    },
                    {
                      ty: "fl",
                      c: { a: 0, k: [0.5098, 0.3294, 0.7765, 1], ix: 4 },
                      o: { a: 0, k: 100, ix: 5 },
                      r: 1,
                      bm: 0,
                      nm: "Fill 1",
                      mn: "ADBE Vector Graphic - Fill",
                      hd: false
                    },
                    {
                      ty: "tr",
                      p: { a: 0, k: [0, 0], ix: 2 },
                      a: { a: 0, k: [0, 0], ix: 1 },
                      s: { a: 0, k: [300, 300], ix: 3 },
                      r: { a: 0, k: 0, ix: 6 },
                      o: { a: 0, k: 100, ix: 7 },
                      sk: { a: 0, k: 0, ix: 4 },
                      sa: { a: 0, k: 0, ix: 5 },
                      nm: "Transform"
                    }
                  ],
                  nm: "time",
                  np: 4,
                  cix: 2,
                  bm: 0,
                  ix: 1,
                  mn: "ADBE Vector Group",
                  hd: false
                }
              ],
              ip: 0,
              op: 150,
              st: 0,
              bm: 0
            },
            {
              ddd: 0,
              ind: 2,
              ty: 4,
              nm: "Rectangle 1",
              sr: 1,
              ks: {
                o: { a: 0, k: 100, ix: 11 },
                r: {
                  a: 1,
                  k: [
                    {
                      i: { x: [0.667], y: [1] },
                      o: { x: [0.333], y: [0] },
                      t: 0,
                      s: [0]
                    },
                    { t: 90, s: [360] }
                  ],
                  ix: 10
                },
                p: { a: 0, k: [50, 50, 0], ix: 2 },
                a: { a: 0, k: [0, 9, 0], ix: 1 },
                s: { a: 0, k: [100, 100, 100], ix: 6 }
              },
              ao: 0,
              shapes: [
                {
                  ty: "gr",
                  it: [
                    {
                      ty: "rc",
                      d: 1,
                      s: { a: 0, k: [2, 8], ix: 2 },
                      p: { a: 0, k: [0, 0], ix: 3 },
                      r: { a: 0, k: 1, ix: 4 },
                      nm: "Rectangle Path 1",
                      mn: "ADBE Vector Shape - Rect",
                      hd: false
                    },
                    {
                      ty: "fl",
                      c: { a: 0, k: [0.5098, 0.3294, 0.7765, 1], ix: 4 },
                      o: { a: 0, k: 100, ix: 5 },
                      r: 1,
                      bm: 0,
                      nm: "Fill 1",
                      mn: "ADBE Vector Graphic - Fill",
                      hd: false
                    },
                    {
                      ty: "tr",
                      p: { a: 0, k: [0, 0], ix: 2 },
                      a: { a: 0, k: [0, 0], ix: 1 },
                      s: { a: 0, k: [300, 300], ix: 3 },
                      r: { a: 0, k: 0, ix: 6 },
                      o: { a: 0, k: 100, ix: 7 },
                      sk: { a: 0, k: 0, ix: 4 },
                      sa: { a: 0, k: 0, ix: 5 },
                      nm: "Transform"
                    }
                  ],
                  nm: "Rectangle 1",
                  np: 2,
                  cix: 2,
                  bm: 0,
                  ix: 1,
                  mn: "ADBE Vector Group",
                  hd: false
                }
              ],
              ip: 0,
              op: 150,
              st: 0,
              bm: 0
            },
            {
              ddd: 0,
              ind: 3,
              ty: 4,
              nm: "Rectangle 2",
              sr: 1,
              ks: {
                o: { a: 0, k: 100, ix: 11 },
                r: { a: 0, k: 0, ix: 10 },
                p: { a: 0, k: [57.5, 50, 0], ix: 2 },
                a: { a: 0, k: [0, 0, 0], ix: 1 },
                s: { a: 0, k: [-100, -100, 100], ix: 6 }
              },
              ao: 0,
              shapes: [
                {
                  ty: "gr",
                  it: [
                    {
                      ty: "rc",
                      d: 1,
                      s: { a: 0, k: [2, 7], ix: 2 },
                      p: { a: 0, k: [0, 0], ix: 3 },
                      r: { a: 0, k: 1, ix: 4 },
                      nm: "Rectangle Path 1",
                      mn: "ADBE Vector Shape - Rect",
                      hd: false
                    },
                    {
                      ty: "fl",
                      c: { a: 0, k: [0.5098, 0.3294, 0.7765, 1], ix: 4 },
                      o: { a: 0, k: 100, ix: 5 },
                      r: 1,
                      bm: 0,
                      nm: "Fill 1",
                      mn: "ADBE Vector Graphic - Fill",
                      hd: false
                    },
                    {
                      ty: "tr",
                      p: { a: 0, k: [0, 0], ix: 2 },
                      a: { a: 0, k: [0, 0], ix: 1 },
                      s: { a: 0, k: [300, 300], ix: 3 },
                      r: { a: 0, k: -90, ix: 6 },
                      o: { a: 0, k: 100, ix: 7 },
                      sk: { a: 0, k: 0, ix: 4 },
                      sa: { a: 0, k: 0, ix: 5 },
                      nm: "Transform"
                    }
                  ],
                  nm: "Rectangle 2",
                  np: 2,
                  cix: 2,
                  bm: 0,
                  ix: 1,
                  mn: "ADBE Vector Group",
                  hd: false
                }
              ],
              ip: 0,
              op: 150,
              st: 0,
              bm: 0
            }
          ],
          markers: []
        }}
        className={classNames("__wab_instance", sty.lottie, {
          [sty.lottieunnamedGroupOfVariants__0]: hasVariant(
            $state,
            "unnamedGroupOfVariants",
            "_0"
          ),
          [sty.lottieunnamedGroupOfVariants__1]: hasVariant(
            $state,
            "unnamedGroupOfVariants",
            "_1"
          ),
          [sty.lottieunnamedGroupOfVariants__2]: hasVariant(
            $state,
            "unnamedGroupOfVariants",
            "_2"
          )
        })}
      />

      <CheckSvgIcon
        className={classNames(projectcss.all, sty.svg__ikD5, {
          [sty.svgunnamedGroupOfVariants__1__ikD5CG5Y9]: hasVariant(
            $state,
            "unnamedGroupOfVariants",
            "_1"
          ),
          [sty.svgunnamedGroupOfVariants__2__ikD5JjhB]: hasVariant(
            $state,
            "unnamedGroupOfVariants",
            "_2"
          )
        })}
        role={"img"}
      />

      <Icon97Icon
        className={classNames(projectcss.all, sty.svg__gTzlc, {
          [sty.svgunnamedGroupOfVariants__2__gTzlcJjhB]: hasVariant(
            $state,
            "unnamedGroupOfVariants",
            "_2"
          )
        })}
        role={"img"}
      />
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "lottie"],
  lottie: ["lottie"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  lottie: typeof LottieWrapper;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicSeen__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicSeen__VariantsArgs;
    args?: PlasmicSeen__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicSeen__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicSeen__ArgsType,
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
          internalArgPropNames: PlasmicSeen__ArgProps,
          internalVariantPropNames: PlasmicSeen__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicSeen__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicSeen";
  } else {
    func.displayName = `PlasmicSeen.${nodeName}`;
  }
  return func;
}

export const PlasmicSeen = Object.assign(
  // Top-level PlasmicSeen renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    lottie: makeNodeComponent("lottie"),

    // Metadata about props expected for PlasmicSeen
    internalVariantProps: PlasmicSeen__VariantProps,
    internalArgProps: PlasmicSeen__ArgProps
  }
);

export default PlasmicSeen;
/* prettier-ignore-end */