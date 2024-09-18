import React, { useEffect } from "react";
import { Button, Form, Input, InputNumber } from 'antd';
import { addDoc, collection } from "firebase/firestore"; 
import { auth, db } from "../../../firebase";
import { toast } from "react-toastify";
const layout = {
  labelCol: {
    span: 25,
  },
  wrapperCol: {
    span: 25,
  },
};

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
    required: '${label} is required!',
    types: {
      email: '${label} is not a valid email!',
      number: '${label} is not a valid number!',
    },
    number: {
      range: '${label} must be between ${min} and ${max}',
    },
  };
  /* eslint-enable no-template-curly-in-string */
  
  const PersonalForm = ({ goToNextTab }) => {
    const [form] = Form.useForm()
    

    const onFinish =  (values) => {
    try {
      const personal = {
        personalDetails: {
          name: values.user.name,
          email: values.user.email,
          age: values.user.age,
          introduction: values.user.introduction,
          language: values.user.language
        },
      };
      const docRef =  addDoc(collection(db, auth.currentUser.uid), personal)
      toast.success("Personal added successfully");
            form.resetFields()
      goToNextTab()
    } catch (e) {
      toast.error("Error adding document: ", e);
    }
  };
    return <div className="flex justify-center">
         <Form 
         form={form}
    {...layout}
    className="w-[20rem]"
    layout="vertical"
    name="nest-messages"
    onFinish={onFinish}
    style={{
      maxWidth: 600,
    }}
    validateMessages={validateMessages}
  >
    <Form.Item
      name={['user', 'name']}
      label="Name"
      rules={[
        {
          required: true,
        },
      ]}
    >
      <Input />
    </Form.Item>
    <Form.Item
      name={['user', 'email']}
      label="Email"
      rules={[
        {
          type: 'email',
        },
      ]}
      required
    >
      <Input />
    </Form.Item>
    <Form.Item
      name={['user', 'age']}
      label="Age"
      rules={[
        {
          type: 'number',
          min: 0,
          max: 99,
        },
      ]}
      required
    >
      <InputNumber />
    </Form.Item>
    
    <Form.Item name={['user', 'language']} required label="Language">
      <Input />
    </Form.Item>
    <Form.Item name={['user', 'introduction']} required label="Introduction" rules={
      [{  min: 10, max: 100 }]
  }>
      <Input.TextArea />
    </Form.Item>
    <Form.Item
      wrapperCol={{
        ...layout.wrapperCol,
        offset: 8,
      }}
    >
      <Button  type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
    </div>;
};

export default PersonalForm;