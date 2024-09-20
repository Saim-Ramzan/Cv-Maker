import React from "react";
import { Button, Form, Input, DatePicker } from "antd";
import { addDoc, collection } from "firebase/firestore";
import { auth, db } from "../../../firebase";
import dayjs from "dayjs";
import { toast } from "react-toastify";

const layout = {
  labelCol: {
    span: 30,
  },
  wrapperCol: {
    span: 30,
  },
};

const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
};
// eslint-disable-next-line
const EducationForm = ({ goToNextTab }) => {
  const [form] = Form.useForm();

  const { RangePicker } = DatePicker;

  const onFinish = async (values) => {
    const rangeValue = values["range-picker"];

    const formattedStartDate =
      rangeValue && rangeValue[0]
        ? dayjs(rangeValue[0]).format("YYYY-MM-DD")
        : null;
    const formattedEndDate =
      rangeValue && rangeValue[1]
        ? dayjs(rangeValue[1]).format("YYYY-MM-DD")
        : null;

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
      // eslint-disable-next-line
      const docRef = await addDoc(
        collection(db, auth.currentUser.uid),
        Education
      );
      form.resetFields();
      toast.success("Education added successfully");
      goToNextTab();
    } catch (e) {
      toast.error("Error adding document: ", e);
    }
  };

  return (
    <div className="flex justify-center ">
      <Form
        form={form}
        className=""
        {...layout}
        layout="vertical"
        name="nest-messages"
        onFinish={onFinish}
        style={{ maxWidth: 600 }}
        validateMessages={validateMessages}
      >
        <Form.Item
          name={["user", "degree"]}
          label="Degree(s) Obtained"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={["user", "institutionName"]}
          label="Institution Name"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item name="range-picker" label="Graduation Date">
          <RangePicker />
        </Form.Item>
        <Form.Item name={["user", "location"]} label="Location">
          <Input />
        </Form.Item>
        
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default EducationForm;
