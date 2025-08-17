import * as React from "react";
import {
  PlasmicTextInput2,
  DefaultTextInput2Props
} from "./plasmic/liom_tools/PlasmicTextInput2";

import { TextInputRef } from "@plasmicapp/react-web";

export interface TextInput2Props extends DefaultTextInput2Props {
  // Feel free to add any additional props that this component should receive
}
function TextInput2_(props: TextInput2Props, ref: TextInputRef) {
  const { plasmicProps } = PlasmicTextInput2.useBehavior<TextInput2Props>(
    props,
    ref
  );
  return <PlasmicTextInput2 {...plasmicProps} />;
}

const TextInput2 = React.forwardRef(TextInput2_);

export default Object.assign(
  TextInput2,

  {
    __plumeType: "text-input"
  }
);
