import { useEffect, useState } from "react";
import { HiTemplate } from "react-icons/hi";
import Dropdown from "../../../components/Dropdown/Dropdown";
import DropdownItem from "../../../components/Dropdown/DropdownItem";
import DropdownTitle from "../../../components/Dropdown/DropdownTitle";
import Input from "../../../components/Input/Input";
import templates, { Template } from "../../../data/supported_templates";

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

    // filter the list containing the typed template
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
