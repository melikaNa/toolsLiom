import * as React from "react";
import {
  PlasmicButtonLiom,
  DefaultButtonLiomProps
} from "./plasmic/liom_tools/PlasmicButtonLiom";

import {
  ButtonRef,
  HtmlAnchorOnlyProps,
  HtmlButtonOnlyProps
} from "@plasmicapp/react-web";

export interface ButtonLiomProps extends DefaultButtonLiomProps {
  // Feel free to add any additional props that this component should receive
}
function ButtonLiom_(props: ButtonLiomProps, ref: ButtonRef) {
  const { plasmicProps } = PlasmicButtonLiom.useBehavior<ButtonLiomProps>(
    props,
    ref
  );
  return <PlasmicButtonLiom {...plasmicProps} />;
}

export type ButtonComponentType = {
  (
    props: Omit<ButtonLiomProps, HtmlAnchorOnlyProps> & {
      ref?: React.Ref<HTMLButtonElement>;
    }
  ): React.ReactElement;
  (
    props: Omit<ButtonLiomProps, HtmlButtonOnlyProps> & {
      ref?: React.Ref<HTMLAnchorElement>;
    }
  ): React.ReactElement;
};
const ButtonLiom = React.forwardRef(ButtonLiom_) as any as ButtonComponentType;

export default Object.assign(ButtonLiom, { __plumeType: "button" });
