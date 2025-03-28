/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3zKPdhWckw1SJpPYhK46Bs
// Component: xCdoITDvZVKn

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

import LoadingCompopnentGray from "../../LoadingCompopnentGray"; // plasmic-import: OUwywVcxKl5x/component

import { ThemeValue, useTheme } from "./PlasmicGlobalVariant__Theme"; // plasmic-import: Qg_AcB6aGxxK/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import plasmic_paziresh_24_design_system_css from "../paziresh_24_design_system/plasmic.module.css"; // plasmic-import: 6HBcNwr8dz9LuS1Qe36xa5/projectcss
import plasmic_hamdast_sdk_css from "../hamdast_sdk/plasmic.module.css"; // plasmic-import: 9yPKYrtYPnCNEj6BTTfHnY/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: 3zKPdhWckw1SJpPYhK46Bs/projectcss
import sty from "./PlasmicMessageLiom.module.css"; // plasmic-import: xCdoITDvZVKn/css

import Icon109Icon from "./icons/PlasmicIcon__Icon109"; // plasmic-import: FdWVKA90TGYv/icon
import Icon119Icon from "./icons/PlasmicIcon__Icon119"; // plasmic-import: JdBtCI53tCN5/icon

createPlasmicElementProxy;

export type PlasmicMessageLiom__VariantMembers = {
  pazireshAnswer: "pazireshAnswer";
  liomAnswer: "liomAnswer";
  loadingMessage: "loadingMessage";
  endMessege: "endMessege";
  hint: "hint";
};
export type PlasmicMessageLiom__VariantsArgs = {
  pazireshAnswer?: SingleBooleanChoiceArg<"pazireshAnswer">;
  liomAnswer?: SingleBooleanChoiceArg<"liomAnswer">;
  loadingMessage?: SingleBooleanChoiceArg<"loadingMessage">;
  endMessege?: SingleBooleanChoiceArg<"endMessege">;
  hint?: SingleBooleanChoiceArg<"hint">;
};
type VariantPropType = keyof PlasmicMessageLiom__VariantsArgs;
export const PlasmicMessageLiom__VariantProps = new Array<VariantPropType>(
  "pazireshAnswer",
  "liomAnswer",
  "loadingMessage",
  "endMessege",
  "hint"
);

export type PlasmicMessageLiom__ArgsType = {
  inApp?: boolean;
  children?: React.ReactNode;
  slot?: React.ReactNode;
};
type ArgPropType = keyof PlasmicMessageLiom__ArgsType;
export const PlasmicMessageLiom__ArgProps = new Array<ArgPropType>(
  "inApp",
  "children",
  "slot"
);

export type PlasmicMessageLiom__OverridesType = {
  root?: Flex__<"div">;
  loadingCompopnentGray?: Flex__<typeof LoadingCompopnentGray>;
  svg?: Flex__<"svg">;
  img?: Flex__<typeof PlasmicImg__>;
};

export interface DefaultMessageLiomProps {
  inApp?: boolean;
  children?: React.ReactNode;
  slot?: React.ReactNode;
  pazireshAnswer?: SingleBooleanChoiceArg<"pazireshAnswer">;
  liomAnswer?: SingleBooleanChoiceArg<"liomAnswer">;
  loadingMessage?: SingleBooleanChoiceArg<"loadingMessage">;
  endMessege?: SingleBooleanChoiceArg<"endMessege">;
  hint?: SingleBooleanChoiceArg<"hint">;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicMessageLiom__RenderFunc(props: {
  variants: PlasmicMessageLiom__VariantsArgs;
  args: PlasmicMessageLiom__ArgsType;
  overrides: PlasmicMessageLiom__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(
    () =>
      Object.assign(
        {
          inApp: false
        },
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
        path: "pazireshAnswer",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.pazireshAnswer
      },
      {
        path: "liomAnswer",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.liomAnswer
      },
      {
        path: "loadingMessage",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.loadingMessage
      },
      {
        path: "endMessege",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.endMessege
      },
      {
        path: "hint",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.hint
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

  const globalVariants = ensureGlobalVariants({
    theme: useTheme()
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
        plasmic_hamdast_sdk_css.plasmic_tokens,
        sty.root,
        {
          [sty.rootendMessege]: hasVariant($state, "endMessege", "endMessege"),
          [sty.rootendMessege_hint]:
            hasVariant($state, "hint", "hint") &&
            hasVariant($state, "endMessege", "endMessege"),
          [sty.rootendMessege_pazireshAnswer]:
            hasVariant($state, "pazireshAnswer", "pazireshAnswer") &&
            hasVariant($state, "endMessege", "endMessege"),
          [sty.roothint]: hasVariant($state, "hint", "hint"),
          [sty.rootliomAnswer]: hasVariant($state, "liomAnswer", "liomAnswer"),
          [sty.rootliomAnswer_endMessege]:
            hasVariant($state, "endMessege", "endMessege") &&
            hasVariant($state, "liomAnswer", "liomAnswer"),
          [sty.rootliomAnswer_hint]:
            hasVariant($state, "hint", "hint") &&
            hasVariant($state, "liomAnswer", "liomAnswer"),
          [sty.rootliomAnswer_pazireshAnswer]:
            hasVariant($state, "liomAnswer", "liomAnswer") &&
            hasVariant($state, "pazireshAnswer", "pazireshAnswer"),
          [sty.rootloadingMessage]: hasVariant(
            $state,
            "loadingMessage",
            "loadingMessage"
          ),
          [sty.rootloadingMessage_endMessege]:
            hasVariant($state, "endMessege", "endMessege") &&
            hasVariant($state, "loadingMessage", "loadingMessage"),
          [sty.rootpazireshAnswer]: hasVariant(
            $state,
            "pazireshAnswer",
            "pazireshAnswer"
          )
        }
      )}
    >
      <div
        className={classNames(
          projectcss.all,
          sty.freeBox___7TlWy,
          hasVariant($state, "endMessege", "endMessege")
            ? "text-box"
            : hasVariant($state, "liomAnswer", "liomAnswer")
            ? ``
            : hasVariant($state, "pazireshAnswer", "pazireshAnswer")
            ? ``
            : "text-box",
          {
            [sty.freeBoxendMessege___7TlWyTjzqg]: hasVariant(
              $state,
              "endMessege",
              "endMessege"
            ),
            [sty.freeBoxendMessege_hint___7TlWyTjzqgETAel]:
              hasVariant($state, "hint", "hint") &&
              hasVariant($state, "endMessege", "endMessege"),
            [sty.freeBoxhint___7TlWyeTAel]: hasVariant($state, "hint", "hint"),
            [sty.freeBoxliomAnswer___7TlWy6WM5Z]: hasVariant(
              $state,
              "liomAnswer",
              "liomAnswer"
            ),
            [sty.freeBoxliomAnswer_hint___7TlWy6WM5ZETAel]:
              hasVariant($state, "hint", "hint") &&
              hasVariant($state, "liomAnswer", "liomAnswer"),
            [sty.freeBoxliomAnswer_loadingMessage___7TlWy6WM5ZNjKFm]:
              hasVariant($state, "liomAnswer", "liomAnswer") &&
              hasVariant($state, "loadingMessage", "loadingMessage"),
            [sty.freeBoxliomAnswer_pazireshAnswer___7TlWy6WM5ZYPoRs]:
              hasVariant($state, "pazireshAnswer", "pazireshAnswer") &&
              hasVariant($state, "liomAnswer", "liomAnswer"),
            [sty.freeBoxloadingMessage___7TlWyNjKFm]: hasVariant(
              $state,
              "loadingMessage",
              "loadingMessage"
            ),
            [sty.freeBoxloadingMessage_endMessege___7TlWyNjKFmTjzqg]:
              hasVariant($state, "loadingMessage", "loadingMessage") &&
              hasVariant($state, "endMessege", "endMessege"),
            [sty.freeBoxpazireshAnswer___7TlWyyPoRs]: hasVariant(
              $state,
              "pazireshAnswer",
              "pazireshAnswer"
            )
          }
        )}
        style={
          hasVariant($state, "endMessege", "endMessege")
            ? {
                display: "inline-block",
                width: "auto",
                height: "auto",
                "overflow-wrap": " break-word",
                transition: "all 0.3s ease"
              }
            : {
                display: "flex",
                width: "auto",
                height: "auto",
                "overflow-wrap": " break-word"
              }
        }
      >
        <div
          className={classNames(
            projectcss.all,
            sty.freeBox__fCi1Q,
            "text-box",
            {
              [sty.freeBoxendMessege__fCi1Qtjzqg]: hasVariant(
                $state,
                "endMessege",
                "endMessege"
              ),
              [sty.freeBoxhint__fCi1QeTAel]: hasVariant($state, "hint", "hint"),
              [sty.freeBoxliomAnswer__fCi1Q6WM5Z]: hasVariant(
                $state,
                "liomAnswer",
                "liomAnswer"
              ),
              [sty.freeBoxloadingMessage__fCi1QNjKFm]: hasVariant(
                $state,
                "loadingMessage",
                "loadingMessage"
              ),
              [sty.freeBoxpazireshAnswer__fCi1QyPoRs]: hasVariant(
                $state,
                "pazireshAnswer",
                "pazireshAnswer"
              )
            }
          )}
          style={{
            display: "inline-block",
            width: "auto",
            height: "auto",
            "overflow-wrap": " break-word"
          }}
        >
          {renderPlasmicSlot({
            defaultContents: "             ",
            value: args.children,
            className: classNames(sty.slotTargetChildren, {
              [sty.slotTargetChildrenendMessege]: hasVariant(
                $state,
                "endMessege",
                "endMessege"
              ),
              [sty.slotTargetChildrenendMessege_global_theme_dark]:
                hasVariant($state, "endMessege", "endMessege") &&
                hasVariant(globalVariants, "theme", "dark"),
              [sty.slotTargetChildrenendMessege_global_theme_dark_hint]:
                hasVariant($state, "endMessege", "endMessege") &&
                hasVariant($state, "hint", "hint") &&
                hasVariant(globalVariants, "theme", "dark"),
              [sty.slotTargetChildrenendMessege_hint]:
                hasVariant($state, "hint", "hint") &&
                hasVariant($state, "endMessege", "endMessege"),
              [sty.slotTargetChildrenendMessege_pazireshAnswer]:
                hasVariant($state, "pazireshAnswer", "pazireshAnswer") &&
                hasVariant($state, "endMessege", "endMessege"),
              [sty.slotTargetChildrenglobal_theme_dark_hint]:
                hasVariant($state, "hint", "hint") &&
                hasVariant(globalVariants, "theme", "dark"),
              [sty.slotTargetChildrenhint]: hasVariant($state, "hint", "hint"),
              [sty.slotTargetChildrenliomAnswer]: hasVariant(
                $state,
                "liomAnswer",
                "liomAnswer"
              ),
              [sty.slotTargetChildrenloadingMessage]: hasVariant(
                $state,
                "loadingMessage",
                "loadingMessage"
              ),
              [sty.slotTargetChildrenloadingMessage_endMessege]:
                hasVariant($state, "endMessege", "endMessege") &&
                hasVariant($state, "loadingMessage", "loadingMessage"),
              [sty.slotTargetChildrenloadingMessage_endMessege_pazireshAnswer]:
                hasVariant($state, "pazireshAnswer", "pazireshAnswer") &&
                hasVariant($state, "loadingMessage", "loadingMessage") &&
                hasVariant($state, "endMessege", "endMessege"),
              [sty.slotTargetChildrenloadingMessage_pazireshAnswer]:
                hasVariant($state, "pazireshAnswer", "pazireshAnswer") &&
                hasVariant($state, "loadingMessage", "loadingMessage"),
              [sty.slotTargetChildrenpazireshAnswer]: hasVariant(
                $state,
                "pazireshAnswer",
                "pazireshAnswer"
              )
            })
          })}
          <LoadingCompopnentGray
            data-plasmic-name={"loadingCompopnentGray"}
            data-plasmic-override={overrides.loadingCompopnentGray}
            className={classNames("__wab_instance", sty.loadingCompopnentGray, {
              [sty.loadingCompopnentGrayendMessege]: hasVariant(
                $state,
                "endMessege",
                "endMessege"
              ),
              [sty.loadingCompopnentGrayliomAnswer_endMessege]:
                hasVariant($state, "endMessege", "endMessege") &&
                hasVariant($state, "liomAnswer", "liomAnswer"),
              [sty.loadingCompopnentGrayliomAnswer_loadingMessage_endMessege]:
                hasVariant($state, "loadingMessage", "loadingMessage") &&
                hasVariant($state, "endMessege", "endMessege") &&
                hasVariant($state, "liomAnswer", "liomAnswer"),
              [sty.loadingCompopnentGrayloadingMessage]: hasVariant(
                $state,
                "loadingMessage",
                "loadingMessage"
              ),
              [sty.loadingCompopnentGrayloadingMessage_endMessege]:
                hasVariant($state, "endMessege", "endMessege") &&
                hasVariant($state, "loadingMessage", "loadingMessage")
            })}
          />
        </div>
        {(
          hasVariant($state, "endMessege", "endMessege")
            ? true
            : hasVariant($state, "liomAnswer", "liomAnswer")
            ? true
            : hasVariant($state, "pazireshAnswer", "pazireshAnswer")
            ? true
            : false
        ) ? (
          <Icon109Icon
            data-plasmic-name={"svg"}
            data-plasmic-override={overrides.svg}
            className={classNames(projectcss.all, sty.svg, {
              [sty.svgendMessege]: hasVariant(
                $state,
                "endMessege",
                "endMessege"
              ),
              [sty.svgendMessege_hint]:
                hasVariant($state, "hint", "hint") &&
                hasVariant($state, "endMessege", "endMessege"),
              [sty.svgendMessege_pazireshAnswer]:
                hasVariant($state, "endMessege", "endMessege") &&
                hasVariant($state, "pazireshAnswer", "pazireshAnswer"),
              [sty.svghint]: hasVariant($state, "hint", "hint"),
              [sty.svgliomAnswer]: hasVariant(
                $state,
                "liomAnswer",
                "liomAnswer"
              ),
              [sty.svgliomAnswer_pazireshAnswer]:
                hasVariant($state, "pazireshAnswer", "pazireshAnswer") &&
                hasVariant($state, "liomAnswer", "liomAnswer"),
              [sty.svgloadingMessage_endMessege]:
                hasVariant($state, "loadingMessage", "loadingMessage") &&
                hasVariant($state, "endMessege", "endMessege"),
              [sty.svgloadingMessage_pazireshAnswer]:
                hasVariant($state, "pazireshAnswer", "pazireshAnswer") &&
                hasVariant($state, "loadingMessage", "loadingMessage"),
              [sty.svgpazireshAnswer]: hasVariant(
                $state,
                "pazireshAnswer",
                "pazireshAnswer"
              )
            })}
            role={"img"}
          />
        ) : null}
        <div
          className={classNames(projectcss.all, sty.freeBox__q3Toq, {
            [sty.freeBoxendMessege__q3ToqTjzqg]: hasVariant(
              $state,
              "endMessege",
              "endMessege"
            ),
            [sty.freeBoxhint__q3ToqeTAel]: hasVariant($state, "hint", "hint"),
            [sty.freeBoxliomAnswer__q3Toq6WM5Z]: hasVariant(
              $state,
              "liomAnswer",
              "liomAnswer"
            ),
            [sty.freeBoxliomAnswer_hint__q3Toq6WM5ZETAel]:
              hasVariant($state, "hint", "hint") &&
              hasVariant($state, "liomAnswer", "liomAnswer"),
            [sty.freeBoxliomAnswer_pazireshAnswer__q3Toq6WM5ZYPoRs]:
              hasVariant($state, "pazireshAnswer", "pazireshAnswer") &&
              hasVariant($state, "liomAnswer", "liomAnswer"),
            [sty.freeBoxloadingMessage__q3ToqNjKFm]: hasVariant(
              $state,
              "loadingMessage",
              "loadingMessage"
            ),
            [sty.freeBoxpazireshAnswer__q3ToqyPoRs]: hasVariant(
              $state,
              "pazireshAnswer",
              "pazireshAnswer"
            )
          })}
        >
          {renderPlasmicSlot({
            defaultContents: (
              <Icon119Icon
                className={classNames(projectcss.all, sty.svg__l4GC)}
                role={"img"}
              />
            ),

            value: args.slot
          })}
        </div>
      </div>
      {(() => {
        try {
          return $props.inApp;
        } catch (e) {
          if (
            e instanceof TypeError ||
            e?.plasmicType === "PlasmicUndefinedDataError"
          ) {
            return true;
          }
          throw e;
        }
      })() ? (
        <div
          className={classNames(projectcss.all, sty.freeBox__cZks, {
            [sty.freeBoxendMessege__cZksTjzqg]: hasVariant(
              $state,
              "endMessege",
              "endMessege"
            )
          })}
        >
          <PlasmicImg__
            data-plasmic-name={"img"}
            data-plasmic-override={overrides.img}
            alt={""}
            className={classNames(sty.img, {
              [sty.imgendMessege]: hasVariant(
                $state,
                "endMessege",
                "endMessege"
              ),
              [sty.imgliomAnswer]: hasVariant(
                $state,
                "liomAnswer",
                "liomAnswer"
              ),
              [sty.imgpazireshAnswer]: hasVariant(
                $state,
                "pazireshAnswer",
                "pazireshAnswer"
              )
            })}
            displayHeight={"30px"}
            displayMaxHeight={"none"}
            displayMaxWidth={"100%"}
            displayMinHeight={"0"}
            displayMinWidth={"0"}
            displayWidth={"30px"}
            height={
              hasVariant($state, "endMessege", "endMessege") ? "30" : undefined
            }
            loading={"lazy"}
            src={
              hasVariant($state, "endMessege", "endMessege")
                ? (() => {
                    try {
                      return "https://apps.liom.app/plasmic/liom_hamyar/images/image35.png";
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
                : undefined
            }
            width={
              hasVariant($state, "endMessege", "endMessege") ? "30" : undefined
            }
          />
        </div>
      ) : null}
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "loadingCompopnentGray", "svg", "img"],
  loadingCompopnentGray: ["loadingCompopnentGray"],
  svg: ["svg"],
  img: ["img"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  loadingCompopnentGray: typeof LoadingCompopnentGray;
  svg: "svg";
  img: typeof PlasmicImg__;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicMessageLiom__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicMessageLiom__VariantsArgs;
    args?: PlasmicMessageLiom__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicMessageLiom__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicMessageLiom__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicMessageLiom__ArgProps,
          internalVariantPropNames: PlasmicMessageLiom__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicMessageLiom__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicMessageLiom";
  } else {
    func.displayName = `PlasmicMessageLiom.${nodeName}`;
  }
  return func;
}

export const PlasmicMessageLiom = Object.assign(
  // Top-level PlasmicMessageLiom renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    loadingCompopnentGray: makeNodeComponent("loadingCompopnentGray"),
    svg: makeNodeComponent("svg"),
    img: makeNodeComponent("img"),

    // Metadata about props expected for PlasmicMessageLiom
    internalVariantProps: PlasmicMessageLiom__VariantProps,
    internalArgProps: PlasmicMessageLiom__ArgProps
  }
);

export default PlasmicMessageLiom;
/* prettier-ignore-end */
