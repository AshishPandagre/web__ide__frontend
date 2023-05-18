import { useEffect } from "react";

type ParamType = React.MutableRefObject<HTMLDivElement | null | undefined>;

export default function useShowActiveTab(ref: ParamType) {
  useEffect(() => {
    if (ref && ref.current) {
      const targetNode = ref.current;
      const config = { attributes: true, childList: true, subtree: true };

      const callback = (
        mutationList: any,
        observer: MutationObserver
      ) => {
        for (const mutation of mutationList) {
          let target;
          if (mutation.type == "childList" && mutation.addedNodes.length > 0)
            target = mutation.addedNodes[0];
          if (mutation.type=="attributes" && mutation.target.classList.contains("border-red-400"))
            target = mutation.target;
          if(target) target.scrollIntoView();
        }
      };

      const observer = new MutationObserver(callback);
      observer.observe(targetNode, config);
    }
  }, [ref, ref.current]);
}
