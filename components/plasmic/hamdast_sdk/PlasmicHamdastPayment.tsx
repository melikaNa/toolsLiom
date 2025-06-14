/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 9yPKYrtYPnCNEj6BTTfHnY
// Component: Us2coAfx-xTz

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

import projectcss from "./plasmic.module.css"; // plasmic-import: 9yPKYrtYPnCNEj6BTTfHnY/projectcss
import sty from "./PlasmicHamdastPayment.module.css"; // plasmic-import: Us2coAfx-xTz/css

createPlasmicElementProxy;

export type PlasmicHamdastPayment__VariantMembers = {};
export type PlasmicHamdastPayment__VariantsArgs = {};
type VariantPropType = keyof PlasmicHamdastPayment__VariantsArgs;
export const PlasmicHamdastPayment__VariantProps = new Array<VariantPropType>();

export type PlasmicHamdastPayment__ArgsType = {
  offer?: React.ReactNode;
  productKey?: string;
  payload?: any;
  onSuccess?: (receiptId: string) => void;
  onCancel?: () => void;
  onError?: (message: string) => void;
};
type ArgPropType = keyof PlasmicHamdastPayment__ArgsType;
export const PlasmicHamdastPayment__ArgProps = new Array<ArgPropType>(
  "offer",
  "productKey",
  "payload",
  "onSuccess",
  "onCancel",
  "onError"
);

export type PlasmicHamdastPayment__OverridesType = {
  root?: Flex__<"div">;
};

export interface DefaultHamdastPaymentProps {
  offer?: React.ReactNode;
  productKey?: string;
  payload?: any;
  onSuccess?: (receiptId: string) => void;
  onCancel?: () => void;
  onError?: (message: string) => void;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicHamdastPayment__RenderFunc(props: {
  variants: PlasmicHamdastPayment__VariantsArgs;
  args: PlasmicHamdastPayment__ArgsType;
  overrides: PlasmicHamdastPayment__OverridesType;
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
        sty.root
      )}
      onClick={async event => {
        const $steps = {};

        $steps["runCode"] = true
          ? (() => {
              const actionArgs = {
                customFunction: async () => {
                  return globalThis?.hamdast?.payment
                    ?.pay?.({
                      product_key: $props.productKey,
                      payload: $props.payload
                    })
                    ?.then?.(event => {
                      if (event.event === "HAMDAST_PAYMENT_SUCCESS") {
                        return $props.onSuccess(event.event.receipt_id);
                      }
                      if (event.event === "HAMDAST_PAYMENT_CANCEL") {
                        return $props.onCancel();
                      }
                      if (event.event === "HAMDAST_PAYMENT_ERROR") {
                        return $props.onError(
                          event.event?.message ?? "خطایی رخ داد."
                        );
                      }
                    });
                }
              };
              return (({ customFunction }) => {
                return customFunction();
              })?.apply(null, [actionArgs]);
            })()
          : undefined;
        if (
          $steps["runCode"] != null &&
          typeof $steps["runCode"] === "object" &&
          typeof $steps["runCode"].then === "function"
        ) {
          $steps["runCode"] = await $steps["runCode"];
        }
      }}
    >
      {renderPlasmicSlot({
        defaultContents: null,
        value: args.offer
      })}
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
  PlasmicHamdastPayment__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicHamdastPayment__VariantsArgs;
    args?: PlasmicHamdastPayment__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicHamdastPayment__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicHamdastPayment__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicHamdastPayment__ArgProps,
          internalVariantPropNames: PlasmicHamdastPayment__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicHamdastPayment__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHamdastPayment";
  } else {
    func.displayName = `PlasmicHamdastPayment.${nodeName}`;
  }
  return func;
}

export const PlasmicHamdastPayment = Object.assign(
  // Top-level PlasmicHamdastPayment renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicHamdastPayment
    internalVariantProps: PlasmicHamdastPayment__VariantProps,
    internalArgProps: PlasmicHamdastPayment__ArgProps
  }
);

export default PlasmicHamdastPayment;
/* prettier-ignore-end */
