import React, { useEffect, useState } from "react";
import { FaPython } from "react-icons/fa";
import { HiTemplate } from "react-icons/hi";
import templates, { Template } from "../../utils/supported_templates";
import Dropdown from "../shared/Dropdown/Dropdown";
import DropdownItem from "../shared/Dropdown/DropdownItem";
import DropdownTitle from "../shared/Dropdown/DropdownTitle";
import Input from "../shared/Input/Input";

const TemplateDropdown = () => {
  const [viewTemplates, setViewTemplates] = useState<Template[]>(templates);
  const [open, setOpen] = useState<boolean>(false);
  const [templateName, setTemplateName] = useState("");
  const [selectedTemplate, setSelectedTemplate] = useState<Template>({
    icon: HiTemplate,
    description: "Select a template",
    title: "Pick a template",
  });

  const toggle = () => {
    if (open) setOpen(false);
    else setOpen(true);
  };

  useEffect(() => {
    if (!templateName.trim()) {
      setViewTemplates(templates);
      return;
    }
    setViewTemplates(
      viewTemplates.filter(
        (temp) =>
          temp.title
            .toLowerCase()
            .includes(templateName.trim().toLowerCase()) ||
          temp.description
            .toLowerCase()
            .includes(templateName.trim().toLowerCase())
      )
    );
  }, [templateName]);

  return (
    <Dropdown open={open} toggle={toggle}>
      <DropdownTitle
        title={selectedTemplate.title}
        Icon={selectedTemplate.icon}
        open={open}
      />
      <>
        <Input
          focus={true}
          setValue={setTemplateName}
          value={templateName}
          placeholder={"start typing..."}
        />
        <div className="w-full max-h-40 overflow-auto scrollbar-thin scrollbar-thumb-rounded-lg scrollbar-thumb-[#797777]">
          {viewTemplates.map((temp) => (
            <DropdownItem
              key={temp.title}
              Icon={temp.icon}
              title={temp.title}
              description={temp.description}
              setItem={setSelectedTemplate}
            />
          ))}
        </div>
      </>
    </Dropdown>
  );
};

export default TemplateDropdown;
