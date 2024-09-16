import React, { useState } from "react";
import { Tabs } from 'antd';
import PersonalForm from "./form/PersonalForm";
import EducationForm from "./form/EductionForm";


const FormTabs = () => {
    const onFinish = (values) => {
        console.log(values);
      };
const onChange = (key) => {
    console.log(key)
};
    const items = [
        {
          key: '1',
          label: 'Personal Details',
          children: <PersonalForm />,
        },
        {
          key: '2',
          label: 'Education Details',
          children: <EducationForm />,
        },
        {
          key: '3',
          label: 'Experience Details',
          children: "Content of Tab Pane 3",
        },
      ];
    return (
        <div className="w-96 items-baseline  h-[calc(100vh-70px)]  bg-slate-300 ">
            <Tabs  defaultActiveKey="1" items={items} onChange={onChange} />
        </div>
    )
}

export default FormTabs