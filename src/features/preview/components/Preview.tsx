import { useRef } from "react";
import { AiOutlineLock } from "react-icons/ai";
import { BiRefresh } from "react-icons/bi";
import { MdOpenInNew } from "react-icons/md";

const Preview = () => {
  const url = "https://religious-buffalo.codedamn.app:1337/";
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const refresh = () => {
    iframeRef.current?.contentWindow?.location.reload();
  };

  const openNewTab = () => {
    window.open(url, "_blank");
  };

  return (
    <div className="flex h-full w-full flex-col">
      <div className="flex items-center justify-between bg-[#27272a] p-1 shadow-sm">
        <BiRefresh
          size={24}
          className="mr-3 flex cursor-pointer"
          onClick={refresh}
        />
        <div className="flex flex-1 flex-grow select-all items-center gap-2 overflow-hidden whitespace-nowrap bg-[#18181b] px-2 py-1 text-sm text-gray-300">
          <AiOutlineLock size={16} />
          <span>{url}</span>
        </div>
        <MdOpenInNew
          size={20}
          className="ml-3 flex cursor-pointer"
          onClick={openNewTab}
        />
      </div>

      <div className="h-full w-full">
        <iframe
          ref={iframeRef}
          src={url}
          className="h-full w-full border-0 bg-white outline-none"
          sandbox="allow-scripts allow-modal"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture full"
        ></iframe>
      </div>
    </div>
  );
};

export default Preview;
