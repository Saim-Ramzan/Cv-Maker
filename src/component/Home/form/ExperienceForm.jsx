import React from "react";
import { Button, Form, Input,DatePicker } from 'antd';
import { addDoc, collection } from "firebase/firestore"; 
import { auth, db } from "../../../firebase";
import dayjs from "dayjs";
import { toast } from "react-toastify";

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

const ExperienceForm = ({goToNextTab}) => {
  const [form] = Form.useForm()
  const onFinish = async (values) => {
    const rangeValue = values['date-picker'];
    const startDate = dayjs(rangeValue);
    const formattedStartDate = startDate.format('YYYY-MM-DD');
    

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
          description: values.user.description,
        },
      };

      // Use the correct path for the collection
      const docRef = await addDoc(collection(db,  auth.currentUser.uid ), Experience);
      toast.success("Experience added successfully");
      form.resetFields();
      goToNextTab()
    } catch (e) {
      toast.error("Error adding document: ", e);
    }
  };

  return (
    <div className="flex justify-center ">
      <Form 
      form={form}
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
          name={["user", "description"]}
          required
          label="Description"
          rules={[{ min: 10, max: 100 }]}
        >
          <Input.TextArea />
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
