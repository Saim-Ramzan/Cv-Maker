import React from "react";
import { Button, Form, Input,DatePicker } from 'antd';
import { addDoc, collection } from "firebase/firestore"; 
import { auth, db } from "../../../firebase";
import dayjs from "dayjs";

const layout = {
  labelCol: {
    span: 30,
  },
  wrapperCol: {
    span: 30,
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

    const formattedStartDate = rangeValue && rangeValue[0]
      ? dayjs(rangeValue[0]).format('YYYY-MM-DD')
      : null;
    const formattedEndDate = rangeValue && rangeValue[1]
      ? dayjs(rangeValue[1]).format('YYYY-MM-DD')
      : null;

    console.log("value",values);
    
    try {
      if (!auth.currentUser) {
        throw new Error("User is not authenticated");
      }
      
      const Education = {
        educationDetails: {
          degree: values.user.degree,
          institutionName: values.user.institutionName,
          location: values.user.location,
          startDate: formattedStartDate,
          endDate: formattedEndDate,
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
    <div className="flex justify-center ">
      <Form 
      className=""
        {...layout}
        layout="vertical"
        name="nest-messages"
        onFinish={onFinish}
        style={{ maxWidth: 600 }}
        validateMessages={validateMessages}
      >
        <Form.Item
          name={['user', 'degree']}
          label="Degree(s) Obtained"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={['user', 'institutionName']}
          label="Institution Name"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item name="range-picker" label="Graduation Date" 
        >
      <RangePicker />
    </Form.Item>
        <Form.Item
          name={['user', 'location']}
          label="Location"
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
