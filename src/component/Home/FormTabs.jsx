import React, { useState } from "react";
import { Tabs } from 'antd';
import PersonalForm from "./form/PersonalForm";
import { Form } from 'antd';


const FormTabs = () => {
    const [submitButton, setSubmitButton] = useState("");
    const onFinish = (values) => {
        console.log(values);
    }
const onChange = (key) => {
    setSubmitButton(key)
};
    const items = [
        {
          key: '1',
          label: 'Personal Details',
          children: <PersonalForm onFinish={onFinish}/>,
        },
        {
          key: '2',
          label: 'Tab 2',
          children: 'Content of Tab Pane 2',
        },
        {
          key: '3',
          label: 'Tab 3',
          children: "Content of Tab Pane 3",
        },
      ];
    return (
        <div className="w-64 ml-2">
            <Form onFinish={onFinish}>
            <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
            {submitButton === "3" && <button type="submit">Submit</button>}
            </Form>
        </div>
    )
}

export default FormTabs