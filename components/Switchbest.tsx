import * as React from "react";
import {
  PlasmicSwitchbest,
  DefaultSwitchbestProps
} from "./plasmic/liom_tools/PlasmicSwitchbest";

import { SwitchRef } from "@plasmicapp/react-web";

export interface SwitchbestProps extends DefaultSwitchbestProps {
  // Feel free to add any additional props that this component should receive
}
function Switchbest_(props: SwitchbestProps, ref: SwitchRef) {
  const { plasmicProps, state } =
    PlasmicSwitchbest.useBehavior<SwitchbestProps>(props, ref);
  return <PlasmicSwitchbest {...plasmicProps} />;
}

const Switchbest = React.forwardRef(Switchbest_);

export default Object.assign(
  Switchbest,

  {
    __plumeType: "switch",
    __plasmicFormFieldMeta: { valueProp: "isChecked" }
  }
);
