import React from "react";
import { Button, Form, Input,DatePicker } from 'antd';
import { addDoc, collection } from "firebase/firestore"; 
import { auth, db } from "../../../firebase";
import dayjs from "dayjs";

const layout = {
  labelCol: {
    span: 25,
  },
  wrapperCol: {
    span: 25,
  },
};

const validateMessages = {
    required: '${label} is required!',
    types: {
      email: '${label} is not a valid email!',
      number: '${label} is not a valid number!',
    },
};

const ExperienceForm = () => {

  const onFinish = async (values) => {
    const rangeValue = values['date-picker'];
    const startDate = dayjs(rangeValue);
    const formattedStartDate = startDate.format('YYYY-MM-DD');
    console.log("formattedStartDate",formattedStartDate);
    

    try {
      if (!auth.currentUser) {
        throw new Error("User is not authenticated");
      }
      
      const Experience = {
        experienceDetails: {
          jobTitle: values.user.jobTitle,
          companyName: values.user.companyName,
          location: values.user.location,
          startDate: formattedStartDate,
        },
      };

      // Use the correct path for the collection
      const docRef = await addDoc(collection(db,  auth.currentUser.uid ), Experience);
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <div className="flex justify-center ">
      <Form 
        {...layout}
        className="w-[20rem]"
        layout="vertical"
        name="nest-messages"
        onFinish={onFinish}
        style={{ maxWidth: 600 }}
        validateMessages={validateMessages}
      >
        <Form.Item
          name={['user', 'jobTitle']}
          label="Job Title"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={['user', 'companyName']}
          label="Company Name"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item name="date-picker" label="DatePicker">
      <DatePicker />
    </Form.Item>
        <Form.Item
          name={['user', 'location']}
          label="Location"
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

export default ExperienceForm;
