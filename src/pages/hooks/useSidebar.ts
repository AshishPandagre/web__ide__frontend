import { useState } from "react";
import { HandlerProps } from "react-reflex";

export default function useSidebar() {
  const [barSize, setBarSize] = useState<number>(0.2);
  const [enableBar, setEnableBar] = useState(true);

  const openSidebar = () => {
    if (barSize < 0.2) setBarSize(0.2);
    setEnableBar(true);
  };

  const toggleSidebar = () => {
    if (barSize < 0.2) setBarSize(0.2);
    setEnableBar(!enableBar);
  };

  const onStopResize = (args: HandlerProps) => {
    if ((args.component.props.flex || 0) < 0.2) setEnableBar(false);
    setBarSize(args.component.props.flex || 0);
  };

  return { barSize, enableBar, openSidebar, toggleSidebar, onStopResize };
}
