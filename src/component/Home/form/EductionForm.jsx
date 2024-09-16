import React from "react";
import { Button, Form, Input,DatePicker } from 'antd';
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

const validateMessages = {
    required: '${label} is required!',
    types: {
      email: '${label} is not a valid email!',
      number: '${label} is not a valid number!',
    },
};

const EducationForm = () => {
  const { RangePicker } = DatePicker;

  const onFinish = async (values) => {
    const rangeValue = values['range-picker'];

    const datePicker ={
      'range-picker': [rangeValue[0].format('YYYY-MM-DD'), rangeValue[1].format('YYYY-MM-DD')],
    }
    console.log("value",values);
    
    try {
      if (!auth.currentUser) {
        throw new Error("User is not authenticated");
      }
      
      const Education = {
        educationDetails: {
          name: values.user.name,
          email: values.user.email,
          school: values.user.school,
          website: values.user.website,
          startDate: values.user.datePicker
        },
      };

      // Use the correct path for the collection
      const docRef = await addDoc(collection(db,  auth.currentUser.uid ), Education);
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <div className="flex items-start">
      <Form 
        {...layout}
        layout="vertical"
        name="nest-messages"
        onFinish={onFinish}
        style={{ maxWidth: 600 }}
        validateMessages={validateMessages}
      >
        <Form.Item
          name={['user', 'name']}
          label="Name"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={['user', 'email']}
          label="Email"
          rules={[{ type: 'email' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item name="range-picker" label="StartDate" >
      <RangePicker />
    </Form.Item>
        <Form.Item
          name={['user', 'school']}
          label="School"
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={['user', 'website']}
          label="Website"
        >
          <Input />
        </Form.Item>
        <Form.Item
          wrapperCol={{ ...layout.wrapperCol, offset: 8 }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default EducationForm;
