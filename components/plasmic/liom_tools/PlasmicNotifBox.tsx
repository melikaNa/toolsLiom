/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3zKPdhWckw1SJpPYhK46Bs
// Component: g06yBWTLLfKJ

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

import { AntdSingleCollapse } from "@plasmicpkgs/antd5/skinny/registerCollapse";
import { singleCollapseHelpers as AntdSingleCollapse_Helpers } from "@plasmicpkgs/antd5/skinny/registerCollapse";
import ButtonLiom from "../../ButtonLiom"; // plasmic-import: HjsnDydNfnF-/component

import { useScreenVariants as useScreenVariantsyg4Uf6WCaaLe } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: YG4uf6WCaaLe/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import plasmic_paziresh_24_design_system_css from "../paziresh_24_design_system/plasmic.module.css"; // plasmic-import: 6HBcNwr8dz9LuS1Qe36xa5/projectcss
import plasmic_hamdast_sdk_css from "../hamdast_sdk/plasmic.module.css"; // plasmic-import: 9yPKYrtYPnCNEj6BTTfHnY/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: 3zKPdhWckw1SJpPYhK46Bs/projectcss
import sty from "./PlasmicNotifBox.module.css"; // plasmic-import: g06yBWTLLfKJ/css

import CheckSvgIcon from "./icons/PlasmicIcon__CheckSvg"; // plasmic-import: C9T5fGoOgKRV/icon
import Icon11Icon from "./icons/PlasmicIcon__Icon11"; // plasmic-import: K1zqSSDSpUrs/icon
import Icon22Icon from "./icons/PlasmicIcon__Icon22"; // plasmic-import: CIGrIuwcL9LP/icon
import Icon35Icon from "./icons/PlasmicIcon__Icon35"; // plasmic-import: NXiDiJvg4zuA/icon

createPlasmicElementProxy;

export type PlasmicNotifBox__VariantMembers = {
  seen: "seen";
  forAll: "forAll";
  delet: "delet";
};
export type PlasmicNotifBox__VariantsArgs = {
  seen?: SingleBooleanChoiceArg<"seen">;
  forAll?: SingleBooleanChoiceArg<"forAll">;
  delet?: SingleBooleanChoiceArg<"delet">;
};
type VariantPropType = keyof PlasmicNotifBox__VariantsArgs;
export const PlasmicNotifBox__VariantProps = new Array<VariantPropType>(
  "seen",
  "forAll",
  "delet"
);

export type PlasmicNotifBox__ArgsType = {
  onSeenChange?: (val: any) => void;
  title?: string;
  onTitleChange?: (val: string) => void;
  text?: string;
  onTextChange?: (val: string) => void;
  date?: string;
  onDateChange?: (val: string) => void;
  open?: boolean;
  onChange?: (activeIds: any) => void;
  onClick?: (event: any) => void;
  onDeletChange?: (val: any) => void;
  children?: React.ReactNode;
  button2?: React.ReactNode;
};
type ArgPropType = keyof PlasmicNotifBox__ArgsType;
export const PlasmicNotifBox__ArgProps = new Array<ArgPropType>(
  "onSeenChange",
  "title",
  "onTitleChange",
  "text",
  "onTextChange",
  "date",
  "onDateChange",
  "open",
  "onChange",
  "onClick",
  "onDeletChange",
  "children",
  "button2"
);

export type PlasmicNotifBox__OverridesType = {
  root?: Flex__<"div">;
  collapse?: Flex__<typeof AntdSingleCollapse>;
};

export interface DefaultNotifBoxProps {
  onSeenChange?: (val: any) => void;
  title?: string;
  onTitleChange?: (val: string) => void;
  text?: string;
  onTextChange?: (val: string) => void;
  date?: string;
  onDateChange?: (val: string) => void;
  open?: boolean;
  onChange?: (activeIds: any) => void;
  onClick?: (event: any) => void;
  onDeletChange?: (val: any) => void;
  children?: React.ReactNode;
  button2?: React.ReactNode;
  seen?: SingleBooleanChoiceArg<"seen">;
  forAll?: SingleBooleanChoiceArg<"forAll">;
  delet?: SingleBooleanChoiceArg<"delet">;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicNotifBox__RenderFunc(props: {
  variants: PlasmicNotifBox__VariantsArgs;
  args: PlasmicNotifBox__ArgsType;
  overrides: PlasmicNotifBox__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(
    () =>
      Object.assign(
        {
          open: false
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
        path: "seen",
        type: "writable",
        variableType: "variant",

        valueProp: "seen",
        onChangeProp: "onSeenChange"
      },
      {
        path: "collapse.open",
        type: "private",
        variableType: "boolean",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props["open"],

        onMutate: generateOnMutateForSpec("open", AntdSingleCollapse_Helpers)
      },
      {
        path: "title",
        type: "writable",
        variableType: "text",

        valueProp: "title",
        onChangeProp: "onTitleChange"
      },
      {
        path: "text",
        type: "writable",
        variableType: "text",

        valueProp: "text",
        onChangeProp: "onTextChange"
      },
      {
        path: "date",
        type: "writable",
        variableType: "text",

        valueProp: "date",
        onChangeProp: "onDateChange"
      },
      {
        path: "forAll",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.forAll
      },
      {
        path: "delet",
        type: "writable",
        variableType: "variant",

        valueProp: "delet",
        onChangeProp: "onDeletChange"
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

  const [isRootHover, triggerRootHoverProps] = useTrigger("useHover", {});
  const triggers = {
    hover_root: isRootHover
  };

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsyg4Uf6WCaaLe()
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
          [sty.rootdelet]: hasVariant($state, "delet", "delet"),
          [sty.rootforAll]: hasVariant($state, "forAll", "forAll"),
          [sty.rootforAll_delet]:
            hasVariant($state, "forAll", "forAll") &&
            hasVariant($state, "delet", "delet"),
          [sty.rootforAll_seen]:
            hasVariant($state, "seen", "seen") &&
            hasVariant($state, "forAll", "forAll"),
          [sty.rootseen]: hasVariant($state, "seen", "seen")
        }
      )}
      data-plasmic-trigger-props={[triggerRootHoverProps]}
    >
      {(() => {
        const child$Props = {
          bordered: true,
          className: classNames("__wab_instance", sty.collapse, {
            [sty.collapseforAll]: hasVariant($state, "forAll", "forAll"),
            [sty.collapseforAll_seen]:
              hasVariant($state, "seen", "seen") &&
              hasVariant($state, "forAll", "forAll"),
            [sty.collapseseen]: hasVariant($state, "seen", "seen")
          }),
          defaultOpen: args.open,
          expandIcon: null,
          expandIconPosition: "end",
          extra: null,
          ghost: true,
          headerClass: classNames({ [sty["pcls_UQstozgKdO0C"]]: true }),
          label2: (
            <div
              className={classNames(projectcss.all, sty.freeBox___6Qc1O, {
                [sty.freeBoxforAll___6Qc1ONeBax]: hasVariant(
                  $state,
                  "forAll",
                  "forAll"
                ),
                [sty.freeBoxforAll_seen___6Qc1ONeBaxWc4Sa]:
                  hasVariant($state, "seen", "seen") &&
                  hasVariant($state, "forAll", "forAll"),
                [sty.freeBoxseen___6Qc1OWc4Sa]: hasVariant(
                  $state,
                  "seen",
                  "seen"
                )
              })}
            >
              {renderPlasmicSlot({
                defaultContents: (
                  <PlasmicImg__
                    alt={""}
                    className={classNames(sty.img__cjSvm)}
                    displayHeight={"30px"}
                    displayMaxHeight={"100%"}
                    displayMaxWidth={"100%"}
                    displayMinHeight={"0"}
                    displayMinWidth={"0"}
                    displayWidth={"30px"}
                    loading={"lazy"}
                    src={{
                      src: "/plasmic/liom_tools/images/image10.ico",
                      fullWidth: 256,
                      fullHeight: 256,
                      aspectRatio: undefined
                    }}
                  />
                ),

                value: args.children
              })}
              <div
                className={classNames(projectcss.all, sty.freeBox__wDvJp, {
                  [sty.freeBoxseen__wDvJpwc4Sa]: hasVariant(
                    $state,
                    "seen",
                    "seen"
                  )
                })}
              >
                <div
                  className={classNames(projectcss.all, sty.freeBox___6HOmQ, {
                    [sty.freeBoxseen___6HOmQwc4Sa]: hasVariant(
                      $state,
                      "seen",
                      "seen"
                    )
                  })}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__hJhrt,
                      {
                        [sty.textseen__hJhrtwc4Sa]: hasVariant(
                          $state,
                          "seen",
                          "seen"
                        )
                      }
                    )}
                  >
                    <React.Fragment>
                      {(() => {
                        try {
                          return $state.title;
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
                      sty.text__iSpz3,
                      {
                        [sty.textseen__iSpz3Wc4Sa]: hasVariant(
                          $state,
                          "seen",
                          "seen"
                        )
                      }
                    )}
                  >
                    <React.Fragment>
                      {(() => {
                        try {
                          return $state.date;
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
                </div>
              </div>
            </div>
          ),
          onChange: async (...eventArgs: any) => {
            generateStateOnChangePropForCodeComponents(
              $state,
              "open",
              ["collapse", "open"],
              AntdSingleCollapse_Helpers
            ).apply(null, eventArgs);

            args.onChange.apply(null, eventArgs);
          },
          open: generateStateValueProp($state, ["collapse", "open"]),
          showArrow: true,
          size: "large"
        };
        initializeCodeComponentStates(
          $state,
          [
            {
              name: "open",
              plasmicStateName: "collapse.open"
            }
          ],
          [],
          AntdSingleCollapse_Helpers ?? {},
          child$Props
        );

        return (
          <AntdSingleCollapse
            data-plasmic-name={"collapse"}
            data-plasmic-override={overrides.collapse}
            {...child$Props}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__hYPsb,
                {
                  [sty.textseen__hYPsbWc4Sa]: hasVariant($state, "seen", "seen")
                }
              )}
            >
              <React.Fragment>
                {(() => {
                  try {
                    return $state.text;
                  } catch (e) {
                    if (
                      e instanceof TypeError ||
                      e?.plasmicType === "PlasmicUndefinedDataError"
                    ) {
                      return "Collapsible text...";
                    }
                    throw e;
                  }
                })()}
              </React.Fragment>
            </div>
            {renderPlasmicSlot({
              defaultContents: (
                <ButtonLiom
                  className={classNames("__wab_instance", sty.buttonLiom__hup2)}
                />
              ),

              value: args.button2
            })}
          </AntdSingleCollapse>
        );
      })()}
      <div
        className={classNames(projectcss.all, sty.freeBox__mH9V, {
          [sty.freeBoxforAll__mH9VNeBax]: hasVariant(
            $state,
            "forAll",
            "forAll"
          ),
          [sty.freeBoxseen__mH9Vwc4Sa]: hasVariant($state, "seen", "seen")
        })}
      />

      <Icon22Icon
        className={classNames(projectcss.all, sty.svg__g72Q9, {
          [sty.svgforAll_seen__g72Q9NeBaxWc4Sa]:
            hasVariant($state, "seen", "seen") &&
            hasVariant($state, "forAll", "forAll")
        })}
        onClick={args.onClick}
        role={"img"}
      />

      <Icon35Icon
        className={classNames(projectcss.all, sty.svg__qUl3K, {
          [sty.svgforAll_seen__qUl3KNeBaxWc4Sa]:
            hasVariant($state, "forAll", "forAll") &&
            hasVariant($state, "seen", "seen"),
          [sty.svgforAll_seen_delet__qUl3KNeBaxWc4SaTIxA]:
            hasVariant($state, "forAll", "forAll") &&
            hasVariant($state, "seen", "seen") &&
            hasVariant($state, "delet", "delet")
        })}
        onClick={args.onClick}
        role={"img"}
      />
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "collapse"],
  collapse: ["collapse"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  collapse: typeof AntdSingleCollapse;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicNotifBox__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicNotifBox__VariantsArgs;
    args?: PlasmicNotifBox__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicNotifBox__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicNotifBox__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicNotifBox__ArgProps,
          internalVariantPropNames: PlasmicNotifBox__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicNotifBox__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicNotifBox";
  } else {
    func.displayName = `PlasmicNotifBox.${nodeName}`;
  }
  return func;
}

export const PlasmicNotifBox = Object.assign(
  // Top-level PlasmicNotifBox renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    collapse: makeNodeComponent("collapse"),

    // Metadata about props expected for PlasmicNotifBox
    internalVariantProps: PlasmicNotifBox__VariantProps,
    internalArgProps: PlasmicNotifBox__ArgProps
  }
);

export default PlasmicNotifBox;
/* prettier-ignore-end */
