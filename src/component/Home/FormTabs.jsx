import React, { useState } from "react";
import { Tabs } from "antd";
import PersonalForm from "./form/PersonalForm";
import EducationForm from "./form/EductionForm";
import { BookFilled, HomeFilled, ToolFilled } from "@ant-design/icons";
import ExperienceForm from "./form/ExperienceForm";
import RenderCard from "../commonComponent/RenderCard";

const FormTabs = () => {
  const onChange = (key) => {
    console.log(key);
  };
  const items = [
    {
      key: "1",
      label: "Personal Details",
      children: <PersonalForm />,
      icon: <HomeFilled />,
    },
    {
      key: "2",
      label: "Education Details",
      children: <EducationForm />,
      icon: <BookFilled />,
    },
    {
      key: "3",
      label: "Experience Details",
      children: <ExperienceForm />,
      icon: <ToolFilled />,
    },
    {
      key: "4",
      label: "Skill",
      children: <ExperienceForm />,
      icon: <ToolFilled />,
    },
  ];
  return (
    <>
      <div className="flex">
        <div className="w-96 relative items-baseline h-[calc(100vh-70px)] bg-slate-50 shadow-2xl">
          <Tabs
            defaultActiveKey="1"
            className="ml-2"
            items={items}
            onChange={onChange}
          />
        </div>
        <div className="flex-1">
          <RenderCard />
        </div>
      </div>
    </>
  );
};

export default FormTabs;
