import { AiFillHtml5 } from "react-icons/ai";
import SingleTab from "./SingleTab";

const tabs = [
  {
    icon: AiFillHtml5,
    title: "main.html",
    active: false,
  },
  {
    icon: AiFillHtml5,
    title: "index.html",
    active: true,
  },
];

const Tabs = () => {
  return (
    <div className="flex bg-[#191919] text-sm">
      {tabs.map((tab) => (
        <SingleTab Icon={tab.icon} active={tab.active} title={tab.title} />
      ))}
    </div>
  );
};

export default Tabs;
