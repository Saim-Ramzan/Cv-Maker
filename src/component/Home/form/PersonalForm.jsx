import React from "react";
import { Button, Form, Input, InputNumber } from 'antd';
import { addDoc, collection } from "firebase/firestore"; 
import { auth, db } from "../../../firebase";
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
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
  

  
  const PersonalForm = () => {
  const onFinish =  (values) => {
    console.log(values);
    
    try {
      const userData = {
        personalDetails: {
          name: values.user.name,
          email: values.user.email,
          age: values.user.age,
          introduction: values.user.introduction
        },
      };
      const docRef =  addDoc(collection(db, auth.currentUser.uid), userData)
            console.log("Document written with ID: ", docRef);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };
    return <div className="flex ">
         <Form 
    {...layout}
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
    >
      <InputNumber />
    </Form.Item>
    <Form.Item name={['user', 'website']} label="Website">
      <Input />
    </Form.Item>
    <Form.Item name={['user', 'introduction']} label="Introduction">
      <Input.TextArea />
    </Form.Item>
    <Form.Item
      wrapperCol={{
        ...layout.wrapperCol,
        offset: 8,
      }}
    >
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
    </div>;
};

export default PersonalForm;