import React, { useState } from "react";
import { Tabs } from "antd";
import PersonalForm from "./form/PersonalForm";
import EducationForm from "./form/EductionForm";
import { AimOutlined, BookFilled, HomeFilled, ToolFilled } from "@ant-design/icons";
import ExperienceForm from "./form/ExperienceForm";
import RenderCard from "../commonComponent/RenderCard";
import SkillForm from "./form/SkillForm";


const FormTabs = () => {
  const [activeKey, setActiveKey] = useState("1");

  const onChangeTab = (key) => {
    console.log(key);
    
    setActiveKey(key);
  };
  
  const goToNextTab = (currentKey) => {
    const nextKey = (parseInt(currentKey) + 1).toString();
    setActiveKey(nextKey);
  };

  const items = [
    {
      key: "1",
      label: "Personal Details",
      children: <PersonalForm goToNextTab={() => goToNextTab("1")} />,
      icon: <HomeFilled />,
    },
    {
      key: "2",
      label: "Education Details",
      children: <EducationForm goToNextTab={() => goToNextTab("2")} />,
      icon: <BookFilled />,
    },
    {
      key: "3",
      label: "Experience Details",
      children: <ExperienceForm goToNextTab={() => goToNextTab("3")} />,
      icon: <ToolFilled />,
    },
    {
      key: "4",
      label: "Skills",
      children: <SkillForm goToNextTab={() => goToNextTab("4")} />,
      icon: <AimOutlined />,
    },
  ];

  return (
    <>
      <div className="flex">
        <div className="w-96 h-[calc(100vh-70px)] bg-slate-50 shadow-2xl">
          <Tabs
            activeKey={activeKey}
            className="ml-2"
            items={items}
            onChange={onChangeTab}
          />
        </div>
        <div className="flex-1 h-[calc(100vh-70px)] overflow-y-auto">
          <RenderCard />
        </div>
      </div>
    </>
  );
};

export default FormTabs;
