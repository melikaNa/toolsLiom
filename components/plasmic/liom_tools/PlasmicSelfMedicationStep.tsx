// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3zKPdhWckw1SJpPYhK46Bs
// Component: 0RvDxrGTp6lz

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
import * as plasmicAuth from "@plasmicapp/react-web/lib/auth";
import { usePlasmicDataSourceContext } from "@plasmicapp/data-sources-context";

import HeaderLiom from "../../HeaderLiom"; // plasmic-import: 2aT3CU7PBGyt/component
import Paziresh24Avatar from "../../Paziresh24Avatar"; // plasmic-import: zljt-TXjec48/component
import StepsLayout from "../../StepsLayout"; // plasmic-import: usfpaVkTXFYE/component
import LineClomp from "../../LineClomp"; // plasmic-import: VHAYS5YHy7AC/component

import { useScreenVariants as useScreenVariantsqiBuxNlixBgQ } from "../paziresh_24_design_system/PlasmicGlobalVariant__Screen"; // plasmic-import: QiBUXNlixBgQ/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import plasmic_paziresh_24_design_system_css from "../paziresh_24_design_system/plasmic.module.css"; // plasmic-import: 6HBcNwr8dz9LuS1Qe36xa5/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: 3zKPdhWckw1SJpPYhK46Bs/projectcss
import sty from "./PlasmicSelfMedicationStep.module.css"; // plasmic-import: 0RvDxrGTp6lz/css

import Icon22Icon from "./icons/PlasmicIcon__Icon22"; // plasmic-import: CIGrIuwcL9LP/icon
import Icon77Icon from "./icons/PlasmicIcon__Icon77"; // plasmic-import: YKE8ylWcPDbP/icon
import Icon122Icon from "./icons/PlasmicIcon__Icon122"; // plasmic-import: 7szDnb8vqxXD/icon

createPlasmicElementProxy;

export type PlasmicSelfMedicationStep__VariantMembers = {};
export type PlasmicSelfMedicationStep__VariantsArgs = {};
type VariantPropType = keyof PlasmicSelfMedicationStep__VariantsArgs;
export const PlasmicSelfMedicationStep__VariantProps =
  new Array<VariantPropType>();

export type PlasmicSelfMedicationStep__ArgsType = {};
type ArgPropType = keyof PlasmicSelfMedicationStep__ArgsType;
export const PlasmicSelfMedicationStep__ArgProps = new Array<ArgPropType>();

export type PlasmicSelfMedicationStep__OverridesType = {
  root?: Flex__<"div">;
  section?: Flex__<"section">;
  headerLiom?: Flex__<typeof HeaderLiom>;
  paziresh24Avatar?: Flex__<typeof Paziresh24Avatar>;
  stepsLayout?: Flex__<typeof StepsLayout>;
  lineClomp3?: Flex__<typeof LineClomp>;
};

export interface DefaultSelfMedicationStepProps {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicSelfMedicationStep__RenderFunc(props: {
  variants: PlasmicSelfMedicationStep__VariantsArgs;
  args: PlasmicSelfMedicationStep__ArgsType;
  overrides: PlasmicSelfMedicationStep__OverridesType;
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
        path: "lineClomp.line",
        type: "private",
        variableType: "boolean",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined
      },
      {
        path: "lineClomp2.line",
        type: "private",
        variableType: "boolean",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined
      },
      {
        path: "lineClomp3.line",
        type: "private",
        variableType: "boolean",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined
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
    screen: useScreenVariantsqiBuxNlixBgQ()
  });

  return (
    <React.Fragment>
      <Head></Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
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
            sty.root
          )}
        >
          <section
            data-plasmic-name={"section"}
            data-plasmic-override={overrides.section}
            className={classNames(projectcss.all, sty.section)}
          >
            <HeaderLiom
              data-plasmic-name={"headerLiom"}
              data-plasmic-override={overrides.headerLiom}
              className={classNames("__wab_instance", sty.headerLiom)}
              slot={
                <Paziresh24Avatar
                  data-plasmic-name={"paziresh24Avatar"}
                  data-plasmic-override={overrides.paziresh24Avatar}
                  className={classNames("__wab_instance", sty.paziresh24Avatar)}
                />
              }
            >
              {"\u0645\u0633\u06cc\u0631 \u0633\u0644\u0627\u0645\u062a"}
            </HeaderLiom>
          </section>
          <Stack__
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__zomNf)}
          >
            <StepsLayout
              data-plasmic-name={"stepsLayout"}
              data-plasmic-override={overrides.stepsLayout}
              className={classNames("__wab_instance", sty.stepsLayout)}
              slot2={
                <React.Fragment>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__vbVG
                    )}
                  >
                    {"sjdiuhvv"}
                  </div>
                  <LineClomp
                    data-plasmic-name={"lineClomp3"}
                    data-plasmic-override={overrides.lineClomp3}
                    className={classNames("__wab_instance", sty.lineClomp3)}
                    more={true}
                    numberOfLine={2}
                    onLineChange={async (...eventArgs: any) => {
                      generateStateOnChangeProp($state, [
                        "lineClomp3",
                        "line"
                      ]).apply(null, eventArgs);

                      if (
                        eventArgs.length > 1 &&
                        eventArgs[1] &&
                        eventArgs[1]._plasmic_state_init_
                      ) {
                        return;
                      }
                    }}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__sJdcq
                      )}
                    >
                      {hasVariant(globalVariants, "screen", "mobileOnly")
                        ? "sddddddddddddddddddddddddddddddddddddddd\u0633\u062a\u0628\u0647\u0633\u0627\u06cc\u0647\u0639\u0628\u0627\u0647\u06cc\u0639\u0633\u0627\u0628\u0647\u0627\u0647 \u0627\u06cc\u0633 \u062f\u0633\u062e\u06cc\u062a\u0633\u0639\u0647\u0627\u0647\u0639\u06cc\u0627\u0647\u0639\u0627\u0647\u0639\u0627\u0647\u0639\u0627\u0628 \u0633\u062a\u06cc\u0647\u062e\u0639\u062a\u0639\u0647\u062a\u0647\u0639\u062e\u062a\u0633\u062e\u062a\u062e\u062a\u0628 \u0633\u062f\u0627\u0639\u06cc\u0647\u0627\u0647\u0639\u0627\u0628\u0647\u0639\u0627\u0628\u0647\u0627\u0627\u0647\u0639\u0633\u0627 \u062f\u0633\u062e\u06cc\u0627\u0639\u062e\u0647\u0627\u0633\u0639\u0627\u0628\u0627\u0639\u0647\u06cc\u0633\u0627\u0628\u0639\u0647\u0633\u0627\u0628\u0633"
                        : "sddddddddddddddddddddddddddddddddddddddd\u0633\u062a\u0628\u0647\u0633\u0627\u06cc\u0647\u0639\u0628\u0627\u0647\u06cc\u0639\u0633\u0627\u0628\u0647\u0627\u0647 \u0627\u06cc\u0633\u0647\u0639\u062e\u0627\u0628\u0647\u0639\u0627\u0633\u06cc\u0647\u0639\u0628\u0627\u0647\u0627\u0647\u0627\u0647\u0627\u0628 \u062f\u0633\u062e\u06cc\u062a\u0633\u0639\u0647\u0627\u0647\u0639\u06cc\u0627\u0647\u0639\u0627\u0647\u0639\u0627\u0647\u0639\u0627\u0628 \u0633\u062a\u06cc\u0647\u062e\u0639\u062a\u0639\u0647\u062a\u0647\u0639\u062e\u062a\u0633\u062e\u062a\u062e\u062a\u0628 \u0633\u062f\u0627\u0639\u06cc\u0647\u0627\u0647\u0639\u0627\u0628\u0647\u0639\u0627\u0628\u0647\u0627\u0627\u0647\u0639\u0633\u0627 \u062f\u0633\u062e\u06cc\u0627\u0639\u062e\u0647\u0627\u0633\u0639\u0627\u0628\u0627\u0639\u0647\u06cc\u0633\u0627\u0628\u0639\u0647\u0633\u0627\u0628\u0633"}
                    </div>
                  </LineClomp>
                  <Stack__
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__kvZyh)}
                  >
                    <div
                      className={classNames(projectcss.all, sty.freeBox__fvjK)}
                    >
                      <Stack__
                        as={"div"}
                        hasGap={true}
                        className={classNames(
                          projectcss.all,
                          sty.freeBox__n922M
                        )}
                      >
                        <div
                          className={classNames(
                            projectcss.all,
                            sty.freeBox___2IeQe
                          )}
                        />

                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__huDjb
                          )}
                        >
                          {"Enter some text"}
                        </div>
                      </Stack__>
                      <div
                        className={classNames(
                          projectcss.all,
                          sty.freeBox__vdjig
                        )}
                      >
                        <Stack__
                          as={"div"}
                          hasGap={true}
                          className={classNames(
                            projectcss.all,
                            sty.freeBox__xi91K
                          )}
                        >
                          <Stack__
                            as={"div"}
                            hasGap={true}
                            className={classNames(
                              projectcss.all,
                              sty.freeBox__v8R8E
                            )}
                          >
                            <div
                              className={classNames(
                                projectcss.all,
                                projectcss.__wab_text,
                                sty.text__ucOvE
                              )}
                            >
                              {"Enter some text"}
                            </div>
                          </Stack__>
                        </Stack__>
                      </div>
                    </div>
                  </Stack__>
                </React.Fragment>
              }
            />
          </Stack__>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "section",
    "headerLiom",
    "paziresh24Avatar",
    "stepsLayout",
    "lineClomp3"
  ],
  section: ["section", "headerLiom", "paziresh24Avatar"],
  headerLiom: ["headerLiom", "paziresh24Avatar"],
  paziresh24Avatar: ["paziresh24Avatar"],
  stepsLayout: ["stepsLayout", "lineClomp3"],
  lineClomp3: ["lineClomp3"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  section: "section";
  headerLiom: typeof HeaderLiom;
  paziresh24Avatar: typeof Paziresh24Avatar;
  stepsLayout: typeof StepsLayout;
  lineClomp3: typeof LineClomp;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicSelfMedicationStep__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicSelfMedicationStep__VariantsArgs;
    args?: PlasmicSelfMedicationStep__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicSelfMedicationStep__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicSelfMedicationStep__ArgsType,
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
          internalArgPropNames: PlasmicSelfMedicationStep__ArgProps,
          internalVariantPropNames: PlasmicSelfMedicationStep__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicSelfMedicationStep__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicSelfMedicationStep";
  } else {
    func.displayName = `PlasmicSelfMedicationStep.${nodeName}`;
  }
  return func;
}

function withUsePlasmicAuth<P extends object>(
  WrappedComponent: React.ComponentType<P>
) {
  const WithUsePlasmicAuthComponent: React.FC<P> = props => {
    const dataSourceCtx = usePlasmicDataSourceContext() ?? {};
    const { isUserLoading, user, token } = plasmicAuth.usePlasmicAuth({
      appId: "3zKPdhWckw1SJpPYhK46Bs"
    });

    return (
      <PlasmicDataSourceContextProvider__
        value={{
          ...dataSourceCtx,
          isUserLoading,
          userAuthToken: token,
          user
        }}
      >
        <WrappedComponent {...props} />
      </PlasmicDataSourceContextProvider__>
    );
  };
  return WithUsePlasmicAuthComponent;
}

export const PlasmicSelfMedicationStep = Object.assign(
  // Top-level PlasmicSelfMedicationStep renders the root element
  withUsePlasmicAuth(makeNodeComponent("root")),
  {
    // Helper components rendering sub-elements
    section: makeNodeComponent("section"),
    headerLiom: makeNodeComponent("headerLiom"),
    paziresh24Avatar: makeNodeComponent("paziresh24Avatar"),
    stepsLayout: makeNodeComponent("stepsLayout"),
    lineClomp3: makeNodeComponent("lineClomp3"),

    // Metadata about props expected for PlasmicSelfMedicationStep
    internalVariantProps: PlasmicSelfMedicationStep__VariantProps,
    internalArgProps: PlasmicSelfMedicationStep__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicSelfMedicationStep;
/* prettier-ignore-end */
