/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3zKPdhWckw1SJpPYhK46Bs
// Component: HjsnDydNfnF-

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

import * as pp from "@plasmicapp/react-web";

import { useScreenVariants as useScreenVariantsyg4Uf6WCaaLe } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: YG4uf6WCaaLe/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import plasmic_paziresh_24_design_system_css from "../paziresh_24_design_system/plasmic.module.css"; // plasmic-import: 6HBcNwr8dz9LuS1Qe36xa5/projectcss
import plasmic_hamdast_sdk_css from "../hamdast_sdk/plasmic.module.css"; // plasmic-import: 9yPKYrtYPnCNEj6BTTfHnY/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: 3zKPdhWckw1SJpPYhK46Bs/projectcss
import sty from "./PlasmicButtonLiom.module.css"; // plasmic-import: HjsnDydNfnF-/css

import CheckSvgIcon from "./icons/PlasmicIcon__CheckSvg"; // plasmic-import: C9T5fGoOgKRV/icon
import Icon111Icon from "./icons/PlasmicIcon__Icon111"; // plasmic-import: E5qGXuJrSxC-/icon
import Icon11Icon from "./icons/PlasmicIcon__Icon11"; // plasmic-import: K1zqSSDSpUrs/icon

createPlasmicElementProxy;

export type PlasmicButtonLiom__VariantMembers = {
  showStartIcon: "showStartIcon";
  showEndIcon: "showEndIcon";
  isDisabled: "isDisabled";
  shape: "rounded" | "round" | "sharp";
  size: "compact" | "minimal";
  color:
    | "blue"
    | "green"
    | "yellow"
    | "red"
    | "sand"
    | "white"
    | "softBlue"
    | "softGreen"
    | "softYellow"
    | "softRed"
    | "softSand"
    | "clear"
    | "link"
    | "perper"
    | "line";
  unnamedVariant: "unnamedVariant";
  select: "select";
  loading: "loading";
};
export type PlasmicButtonLiom__VariantsArgs = {
  showStartIcon?: SingleBooleanChoiceArg<"showStartIcon">;
  showEndIcon?: SingleBooleanChoiceArg<"showEndIcon">;
  isDisabled?: SingleBooleanChoiceArg<"isDisabled">;
  shape?: SingleChoiceArg<"rounded" | "round" | "sharp">;
  size?: SingleChoiceArg<"compact" | "minimal">;
  color?: MultiChoiceArg<
    | "blue"
    | "green"
    | "yellow"
    | "red"
    | "sand"
    | "white"
    | "softBlue"
    | "softGreen"
    | "softYellow"
    | "softRed"
    | "softSand"
    | "clear"
    | "link"
    | "perper"
    | "line"
  >;
  unnamedVariant?: SingleBooleanChoiceArg<"unnamedVariant">;
  select?: SingleBooleanChoiceArg<"select">;
  loading?: SingleBooleanChoiceArg<"loading">;
};
type VariantPropType = keyof PlasmicButtonLiom__VariantsArgs;
export const PlasmicButtonLiom__VariantProps = new Array<VariantPropType>(
  "showStartIcon",
  "showEndIcon",
  "isDisabled",
  "shape",
  "size",
  "color",
  "unnamedVariant",
  "select",
  "loading"
);

export type PlasmicButtonLiom__ArgsType = {
  link?: string;
  submitsForm?: boolean;
  target?: boolean;
  onColorChange?: (val: any) => void;
  disabled?: boolean;
  load?: boolean;
  onLoadChange?: (val: string) => void;
  startIcon?: React.ReactNode;
  children?: React.ReactNode;
  endIcon?: React.ReactNode;
};
type ArgPropType = keyof PlasmicButtonLiom__ArgsType;
export const PlasmicButtonLiom__ArgProps = new Array<ArgPropType>(
  "link",
  "submitsForm",
  "target",
  "onColorChange",
  "disabled",
  "load",
  "onLoadChange",
  "startIcon",
  "children",
  "endIcon"
);

export type PlasmicButtonLiom__OverridesType = {
  root?: Flex__<"button">;
  startIconContainer?: Flex__<"div">;
  contentContainer?: Flex__<"div">;
  svg?: Flex__<"svg">;
  endIconContainer?: Flex__<"div">;
};

export interface DefaultButtonLiomProps extends pp.BaseButtonProps {
  submitsForm?: boolean;
  target?: boolean;
  onColorChange?: (val: any) => void;
  disabled?: boolean;
  load?: boolean;
  onLoadChange?: (val: string) => void;
  shape?: SingleChoiceArg<"rounded" | "round" | "sharp">;
  size?: SingleChoiceArg<"compact" | "minimal">;
  color?: MultiChoiceArg<
    | "blue"
    | "green"
    | "yellow"
    | "red"
    | "sand"
    | "white"
    | "softBlue"
    | "softGreen"
    | "softYellow"
    | "softRed"
    | "softSand"
    | "clear"
    | "link"
    | "perper"
    | "line"
  >;
  unnamedVariant?: SingleBooleanChoiceArg<"unnamedVariant">;
  select?: SingleBooleanChoiceArg<"select">;
  loading?: SingleBooleanChoiceArg<"loading">;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicButtonLiom__RenderFunc(props: {
  variants: PlasmicButtonLiom__VariantsArgs;
  args: PlasmicButtonLiom__ArgsType;
  overrides: PlasmicButtonLiom__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(
    () =>
      Object.assign(
        {
          disabled: false
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
        path: "showStartIcon",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.showStartIcon
      },
      {
        path: "showEndIcon",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.showEndIcon
      },
      {
        path: "isDisabled",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.isDisabled
      },
      {
        path: "shape",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.shape
      },
      {
        path: "size",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.size
      },
      {
        path: "color",
        type: "writable",
        variableType: "variant",

        valueProp: "color",
        onChangeProp: "onColorChange"
      },
      {
        path: "unnamedVariant",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.unnamedVariant
      },
      {
        path: "select",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.select
      },
      {
        path: "load",
        type: "writable",
        variableType: "boolean",

        valueProp: "load",
        onChangeProp: "onLoadChange"
      },
      {
        path: "loading",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) =>
          (() => {
            try {
              return $state.load;
            } catch (e) {
              if (
                e instanceof TypeError ||
                e?.plasmicType === "PlasmicUndefinedDataError"
              ) {
                return undefined;
              }
              throw e;
            }
          })() ?? $props.loading
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

  const [isRootFocusVisibleWithin, triggerRootFocusVisibleWithinProps] =
    useTrigger("useFocusVisibleWithin", {
      isTextInput: false
    });
  const triggers = {
    focusVisibleWithin_root: isRootFocusVisibleWithin
  };

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsyg4Uf6WCaaLe()
  });

  return (
    <Stack__
      as={"button"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.button,
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
          [sty.root___focusVisibleWithin]: triggers.focusVisibleWithin_root,
          [sty.rootcolor_blue]: hasVariant($state, "color", "blue"),
          [sty.rootcolor_clear]: hasVariant($state, "color", "clear"),
          [sty.rootcolor_green]: hasVariant($state, "color", "green"),
          [sty.rootcolor_line]: hasVariant($state, "color", "line"),
          [sty.rootcolor_link]: hasVariant($state, "color", "link"),
          [sty.rootcolor_perper]: hasVariant($state, "color", "perper"),
          [sty.rootcolor_red]: hasVariant($state, "color", "red"),
          [sty.rootcolor_sand]: hasVariant($state, "color", "sand"),
          [sty.rootcolor_sand_color_line]:
            hasVariant($state, "color", "line") &&
            hasVariant($state, "color", "sand"),
          [sty.rootcolor_softBlue]: hasVariant($state, "color", "softBlue"),
          [sty.rootcolor_softGreen]: hasVariant($state, "color", "softGreen"),
          [sty.rootcolor_softRed]: hasVariant($state, "color", "softRed"),
          [sty.rootcolor_softSand]: hasVariant($state, "color", "softSand"),
          [sty.rootcolor_softYellow]: hasVariant($state, "color", "softYellow"),
          [sty.rootcolor_white]: hasVariant($state, "color", "white"),
          [sty.rootcolor_yellow]: hasVariant($state, "color", "yellow"),
          [sty.rootisDisabled]: hasVariant($state, "isDisabled", "isDisabled"),
          [sty.rootloading]: hasVariant($state, "loading", "loading"),
          [sty.rootloading_color_clear]:
            hasVariant($state, "loading", "loading") &&
            hasVariant($state, "color", "clear"),
          [sty.rootselect]: hasVariant($state, "select", "select"),
          [sty.rootshape_round]: hasVariant($state, "shape", "round"),
          [sty.rootshape_round_size_compact]:
            hasVariant($state, "shape", "round") &&
            hasVariant($state, "size", "compact"),
          [sty.rootshape_rounded]: hasVariant($state, "shape", "rounded"),
          [sty.rootshape_sharp]: hasVariant($state, "shape", "sharp"),
          [sty.rootshowEndIcon]: hasVariant(
            $state,
            "showEndIcon",
            "showEndIcon"
          ),
          [sty.rootshowEndIcon_shape_rounded]:
            hasVariant($state, "showEndIcon", "showEndIcon") &&
            hasVariant($state, "shape", "rounded"),
          [sty.rootshowStartIcon]: hasVariant(
            $state,
            "showStartIcon",
            "showStartIcon"
          ),
          [sty.rootshowStartIcon_shape_rounded]:
            hasVariant($state, "shape", "rounded") &&
            hasVariant($state, "showStartIcon", "showStartIcon"),
          [sty.rootsize_compact]: hasVariant($state, "size", "compact"),
          [sty.rootsize_compact_loading]:
            hasVariant($state, "loading", "loading") &&
            hasVariant($state, "size", "compact"),
          [sty.rootsize_compact_shape_rounded]:
            hasVariant($state, "size", "compact") &&
            hasVariant($state, "shape", "rounded"),
          [sty.rootsize_compact_showEndIcon]:
            hasVariant($state, "size", "compact") &&
            hasVariant($state, "showEndIcon", "showEndIcon"),
          [sty.rootsize_compact_showStartIcon]:
            hasVariant($state, "size", "compact") &&
            hasVariant($state, "showStartIcon", "showStartIcon"),
          [sty.rootsize_compact_showStartIcon_showEndIcon]:
            hasVariant($state, "size", "compact") &&
            hasVariant($state, "showStartIcon", "showStartIcon") &&
            hasVariant($state, "showEndIcon", "showEndIcon"),
          [sty.rootsize_minimal]: hasVariant($state, "size", "minimal"),
          [sty.rootsize_minimal_color_link]:
            hasVariant($state, "color", "link") &&
            hasVariant($state, "size", "minimal"),
          [sty.rootunnamedVariant]: hasVariant(
            $state,
            "unnamedVariant",
            "unnamedVariant"
          ),
          [sty.rootunnamedVariant_color_clear]:
            hasVariant($state, "unnamedVariant", "unnamedVariant") &&
            hasVariant($state, "color", "clear"),
          [sty.rootunnamedVariant_size_compact]:
            hasVariant($state, "unnamedVariant", "unnamedVariant") &&
            hasVariant($state, "size", "compact")
        }
      )}
      disabled={args.disabled}
      data-plasmic-trigger-props={[triggerRootFocusVisibleWithinProps]}
    >
      {(hasVariant($state, "showStartIcon", "showStartIcon") ? true : false) ? (
        <div
          data-plasmic-name={"startIconContainer"}
          data-plasmic-override={overrides.startIconContainer}
          className={classNames(projectcss.all, sty.startIconContainer, {
            [sty.startIconContainercolor_blue]: hasVariant(
              $state,
              "color",
              "blue"
            ),
            [sty.startIconContainershowStartIcon]: hasVariant(
              $state,
              "showStartIcon",
              "showStartIcon"
            ),
            [sty.startIconContainershowStartIcon_shape_rounded]:
              hasVariant($state, "shape", "rounded") &&
              hasVariant($state, "showStartIcon", "showStartIcon")
          })}
        >
          {renderPlasmicSlot({
            defaultContents: (
              <CheckSvgIcon
                className={classNames(projectcss.all, sty.svg__xUzs8)}
                role={"img"}
              />
            ),

            value: args.startIcon,
            className: classNames(sty.slotTargetStartIcon, {
              [sty.slotTargetStartIconcolor_blue]: hasVariant(
                $state,
                "color",
                "blue"
              ),
              [sty.slotTargetStartIconcolor_clear]: hasVariant(
                $state,
                "color",
                "clear"
              ),
              [sty.slotTargetStartIconcolor_link]: hasVariant(
                $state,
                "color",
                "link"
              ),
              [sty.slotTargetStartIconcolor_softBlue]: hasVariant(
                $state,
                "color",
                "softBlue"
              ),
              [sty.slotTargetStartIconcolor_softGreen]: hasVariant(
                $state,
                "color",
                "softGreen"
              ),
              [sty.slotTargetStartIconcolor_softRed]: hasVariant(
                $state,
                "color",
                "softRed"
              ),
              [sty.slotTargetStartIconcolor_softSand]: hasVariant(
                $state,
                "color",
                "softSand"
              ),
              [sty.slotTargetStartIconcolor_softYellow]: hasVariant(
                $state,
                "color",
                "softYellow"
              ),
              [sty.slotTargetStartIconcolor_white]: hasVariant(
                $state,
                "color",
                "white"
              ),
              [sty.slotTargetStartIconcolor_yellow]: hasVariant(
                $state,
                "color",
                "yellow"
              ),
              [sty.slotTargetStartIconshowStartIcon]: hasVariant(
                $state,
                "showStartIcon",
                "showStartIcon"
              )
            })
          })}
        </div>
      ) : null}
      <div
        data-plasmic-name={"contentContainer"}
        data-plasmic-override={overrides.contentContainer}
        className={classNames(projectcss.all, sty.contentContainer, {
          [sty.contentContainer___focusVisibleWithin]:
            triggers.focusVisibleWithin_root,
          [sty.contentContainerisDisabled]: hasVariant(
            $state,
            "isDisabled",
            "isDisabled"
          ),
          [sty.contentContainerloading]: hasVariant(
            $state,
            "loading",
            "loading"
          ),
          [sty.contentContainershape_rounded]: hasVariant(
            $state,
            "shape",
            "rounded"
          ),
          [sty.contentContainershowEndIcon]: hasVariant(
            $state,
            "showEndIcon",
            "showEndIcon"
          )
        })}
      >
        {(
          hasVariant($state, "loading", "loading")
            ? false
            : hasVariant($state, "unnamedVariant", "unnamedVariant")
            ? false
            : true
        )
          ? renderPlasmicSlot({
              defaultContents: (
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__hlkC6
                  )}
                >
                  {"Button"}
                </div>
              ),
              value: args.children,
              className: classNames(sty.slotTargetChildren, {
                [sty.slotTargetChildren___focusVisibleWithin]:
                  triggers.focusVisibleWithin_root,
                [sty.slotTargetChildrencolor_blue]: hasVariant(
                  $state,
                  "color",
                  "blue"
                ),
                [sty.slotTargetChildrencolor_clear]: hasVariant(
                  $state,
                  "color",
                  "clear"
                ),
                [sty.slotTargetChildrencolor_green]: hasVariant(
                  $state,
                  "color",
                  "green"
                ),
                [sty.slotTargetChildrencolor_line]: hasVariant(
                  $state,
                  "color",
                  "line"
                ),
                [sty.slotTargetChildrencolor_link]: hasVariant(
                  $state,
                  "color",
                  "link"
                ),
                [sty.slotTargetChildrencolor_perper]: hasVariant(
                  $state,
                  "color",
                  "perper"
                ),
                [sty.slotTargetChildrencolor_red]: hasVariant(
                  $state,
                  "color",
                  "red"
                ),
                [sty.slotTargetChildrencolor_sand]: hasVariant(
                  $state,
                  "color",
                  "sand"
                ),
                [sty.slotTargetChildrencolor_softBlue]: hasVariant(
                  $state,
                  "color",
                  "softBlue"
                ),
                [sty.slotTargetChildrencolor_softGreen]: hasVariant(
                  $state,
                  "color",
                  "softGreen"
                ),
                [sty.slotTargetChildrencolor_softRed]: hasVariant(
                  $state,
                  "color",
                  "softRed"
                ),
                [sty.slotTargetChildrencolor_softSand]: hasVariant(
                  $state,
                  "color",
                  "softSand"
                ),
                [sty.slotTargetChildrencolor_softYellow]: hasVariant(
                  $state,
                  "color",
                  "softYellow"
                ),
                [sty.slotTargetChildrencolor_white]: hasVariant(
                  $state,
                  "color",
                  "white"
                ),
                [sty.slotTargetChildrencolor_yellow]: hasVariant(
                  $state,
                  "color",
                  "yellow"
                ),
                [sty.slotTargetChildrenisDisabled]: hasVariant(
                  $state,
                  "isDisabled",
                  "isDisabled"
                ),
                [sty.slotTargetChildrenloading]: hasVariant(
                  $state,
                  "loading",
                  "loading"
                ),
                [sty.slotTargetChildrenshape_rounded]: hasVariant(
                  $state,
                  "shape",
                  "rounded"
                ),
                [sty.slotTargetChildrenshowEndIcon]: hasVariant(
                  $state,
                  "showEndIcon",
                  "showEndIcon"
                ),
                [sty.slotTargetChildrenshowStartIcon]: hasVariant(
                  $state,
                  "showStartIcon",
                  "showStartIcon"
                ),
                [sty.slotTargetChildrensize_minimal]: hasVariant(
                  $state,
                  "size",
                  "minimal"
                ),
                [sty.slotTargetChildrensize_minimal_color_link]:
                  hasVariant($state, "color", "link") &&
                  hasVariant($state, "size", "minimal"),
                [sty.slotTargetChildrenunnamedVariant]: hasVariant(
                  $state,
                  "unnamedVariant",
                  "unnamedVariant"
                )
              })
            })
          : null}
        <Icon111Icon
          data-plasmic-name={"svg"}
          data-plasmic-override={overrides.svg}
          className={classNames(projectcss.all, sty.svg, {
            [sty.svgcolor_line_loading]:
              hasVariant($state, "loading", "loading") &&
              hasVariant($state, "color", "line"),
            [sty.svgloading]: hasVariant($state, "loading", "loading"),
            [sty.svgloading_color_clear]:
              hasVariant($state, "loading", "loading") &&
              hasVariant($state, "color", "clear"),
            [sty.svgsize_compact_loading]:
              hasVariant($state, "loading", "loading") &&
              hasVariant($state, "size", "compact"),
            [sty.svgsize_minimal]: hasVariant($state, "size", "minimal"),
            [sty.svgsize_minimal_loading]:
              hasVariant($state, "loading", "loading") &&
              hasVariant($state, "size", "minimal"),
            [sty.svgunnamedVariant]: hasVariant(
              $state,
              "unnamedVariant",
              "unnamedVariant"
            ),
            [sty.svgunnamedVariant_color_clear]:
              hasVariant($state, "unnamedVariant", "unnamedVariant") &&
              hasVariant($state, "color", "clear"),
            [sty.svgunnamedVariant_color_line]:
              hasVariant($state, "unnamedVariant", "unnamedVariant") &&
              hasVariant($state, "color", "line"),
            [sty.svgunnamedVariant_size_compact]:
              hasVariant($state, "unnamedVariant", "unnamedVariant") &&
              hasVariant($state, "size", "compact"),
            [sty.svgunnamedVariant_size_minimal]:
              hasVariant($state, "unnamedVariant", "unnamedVariant") &&
              hasVariant($state, "size", "minimal")
          })}
          role={"img"}
        />
      </div>
      {(hasVariant($state, "showEndIcon", "showEndIcon") ? true : false) ? (
        <div
          data-plasmic-name={"endIconContainer"}
          data-plasmic-override={overrides.endIconContainer}
          className={classNames(projectcss.all, sty.endIconContainer, {
            [sty.endIconContainercolor_white]: hasVariant(
              $state,
              "color",
              "white"
            ),
            [sty.endIconContainercolor_yellow]: hasVariant(
              $state,
              "color",
              "yellow"
            ),
            [sty.endIconContainershowEndIcon]: hasVariant(
              $state,
              "showEndIcon",
              "showEndIcon"
            )
          })}
        >
          {renderPlasmicSlot({
            defaultContents: (
              <Icon11Icon
                className={classNames(projectcss.all, sty.svg__muQP)}
                role={"img"}
              />
            ),

            value: args.endIcon,
            className: classNames(sty.slotTargetEndIcon, {
              [sty.slotTargetEndIconcolor_clear]: hasVariant(
                $state,
                "color",
                "clear"
              ),
              [sty.slotTargetEndIconcolor_link]: hasVariant(
                $state,
                "color",
                "link"
              ),
              [sty.slotTargetEndIconcolor_softBlue]: hasVariant(
                $state,
                "color",
                "softBlue"
              ),
              [sty.slotTargetEndIconcolor_softGreen]: hasVariant(
                $state,
                "color",
                "softGreen"
              ),
              [sty.slotTargetEndIconcolor_softRed]: hasVariant(
                $state,
                "color",
                "softRed"
              ),
              [sty.slotTargetEndIconcolor_softSand]: hasVariant(
                $state,
                "color",
                "softSand"
              ),
              [sty.slotTargetEndIconcolor_softYellow]: hasVariant(
                $state,
                "color",
                "softYellow"
              ),
              [sty.slotTargetEndIconcolor_white]: hasVariant(
                $state,
                "color",
                "white"
              ),
              [sty.slotTargetEndIconcolor_yellow]: hasVariant(
                $state,
                "color",
                "yellow"
              ),
              [sty.slotTargetEndIconshowEndIcon]: hasVariant(
                $state,
                "showEndIcon",
                "showEndIcon"
              )
            })
          })}
        </div>
      ) : null}
    </Stack__>
  ) as React.ReactElement | null;
}

function useBehavior<P extends pp.PlumeButtonProps>(
  props: P,
  ref: pp.ButtonRef
) {
  const b = pp.useButton<P, typeof PlasmicButtonLiom>(
    PlasmicButtonLiom,
    props,
    {
      showStartIconVariant: {
        group: "showStartIcon",
        variant: "showStartIcon"
      },
      showEndIconVariant: { group: "showEndIcon", variant: "showEndIcon" },
      isDisabledVariant: { group: "isDisabled", variant: "isDisabled" },
      contentSlot: "children",
      startIconSlot: "startIcon",
      endIconSlot: "endIcon",
      root: "root"
    },
    ref
  );
  if (b.plasmicProps.overrides.root.as === "a") {
    b.plasmicProps.overrides.root.as = PlasmicLink__;
    b.plasmicProps.overrides.root.props.component = Link;
    b.plasmicProps.overrides.root.props.platform = "nextjs";
  }
  return b;
}

const PlasmicDescendants = {
  root: [
    "root",
    "startIconContainer",
    "contentContainer",
    "svg",
    "endIconContainer"
  ],
  startIconContainer: ["startIconContainer"],
  contentContainer: ["contentContainer", "svg"],
  svg: ["svg"],
  endIconContainer: ["endIconContainer"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "button";
  startIconContainer: "div";
  contentContainer: "div";
  svg: "svg";
  endIconContainer: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicButtonLiom__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicButtonLiom__VariantsArgs;
    args?: PlasmicButtonLiom__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicButtonLiom__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicButtonLiom__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicButtonLiom__ArgProps,
          internalVariantPropNames: PlasmicButtonLiom__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicButtonLiom__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicButtonLiom";
  } else {
    func.displayName = `PlasmicButtonLiom.${nodeName}`;
  }
  return func;
}

export const PlasmicButtonLiom = Object.assign(
  // Top-level PlasmicButtonLiom renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    startIconContainer: makeNodeComponent("startIconContainer"),
    contentContainer: makeNodeComponent("contentContainer"),
    svg: makeNodeComponent("svg"),
    endIconContainer: makeNodeComponent("endIconContainer"),

    // Metadata about props expected for PlasmicButtonLiom
    internalVariantProps: PlasmicButtonLiom__VariantProps,
    internalArgProps: PlasmicButtonLiom__ArgProps,

    useBehavior
  }
);

export default PlasmicButtonLiom;
/* prettier-ignore-end */
