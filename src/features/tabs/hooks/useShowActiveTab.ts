import { useEffect } from "react";

type ParamType = React.MutableRefObject<HTMLDivElement | null | undefined>;

export default function useShowActiveTab(ref: ParamType) {
  useEffect(() => {
    if (ref && ref.current) {
      const targetNode = ref.current;
      const config = { attributes: true, childList: false, subtree: true };
      const callback = (mutationList: any, observer: MutationObserver) => {
        for (const mutation of mutationList) {
          if (mutation.target.classList.contains("border-red-400")) {
            mutation.target.scrollIntoView();
          }
        }
      };
      const observer = new MutationObserver(callback);
      observer.observe(targetNode, config);
    }
  }, [ref, ref.current]);
}
