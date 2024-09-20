import React from "react";
import { Button, Form, Input } from "antd";
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

const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
};

// eslint-disable-next-line
function SkillForm({ goToNextTab }) {
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    try {
      if (!auth.currentUser) {
        throw new Error("User is not authenticated");
      }

      const SkillsDe = {
        skillsDetails: {
          skills: values.user.skills,
        },
      };

      await addDoc(collection(db, auth.currentUser.uid), SkillsDe);
      toast.success("Skills added successfully");
      form.resetFields();
      // goToNextTab("1")
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
        <Form.Item name={["user", "skills"]} label="Skills">
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
}

export default SkillForm;
