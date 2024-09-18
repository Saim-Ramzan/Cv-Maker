import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import { Avatar, Card, Col, Row, Button, Typography } from "antd";
import avatarImage from "../../assests/images.jpeg";

const { Title, Paragraph } = Typography;

function Max() {
  const [personal, setPersonal] = useState([]);

  const userUid = localStorage.getItem("userToken");

  useEffect(() => {
    const fetchData = async () => {
      const personalData = [];
      const q = collection(db, userUid);

      try {
        const querySnapshot = await getDocs(q);
        querySnapshot.docs.forEach((item) => {
          const data = item.data();
          personalData.push(data);
        });
        setPersonal(personalData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const downloadCv = ()=>{
    window.print()
  }

  const getPersonalDetails = personal.find(item => item.personalDetails)?.personalDetails;
  const getEductionDetails = personal.find(item => item.educationDetails)?.educationDetails;
  const getExperienceDetails = personal.find(item => item.experienceDetails)?.experienceDetails;
  const getSkillDetails = personal.find(item => item.skillsDetails)?.skillsDetails;

  return (
    <div className="p-4">
      <Row gutter={16}>
        <Col span={8}>
          <Card>
            <div className="flex justify-center mb-4">
              <Avatar size={100} src={avatarImage} />
            </div>
            <Title className="bg-orange-300 p-2" level={3}>Profile</Title>
            <Paragraph>Name: {getPersonalDetails ? getPersonalDetails.name : "John"}</Paragraph>
            <Paragraph>Email: {getPersonalDetails ? getPersonalDetails.email : "john.doe@example.com"}</Paragraph>
            <Paragraph>Age: {getPersonalDetails ? getPersonalDetails.age : "19"}</Paragraph>
            <Paragraph>Languages: {getPersonalDetails ? getPersonalDetails.language : "English"}</Paragraph>
            <Title className="bg-orange-300 p-2"  level={4}>About</Title>
            <Paragraph>
              <strong>Introduction:</strong> {getPersonalDetails ? getPersonalDetails.introduction : "Lorem ipsum dolor sit amet."}
            </Paragraph>
            <div  className="printDiv flex gap-3 items-center  mt-8">
          <h3>Feel Free To Download</h3>
          <button
            onClick={downloadCv}
            className=" cursor-pointer group relative flex gap-1.5 px-8 py-4 bg-black bg-opacity-80 text-[#f1f1f1] rounded-3xl hover:bg-opacity-70 transition font-semibold shadow-md"
          >
            Download
          </button>
        </div>
          </Card>
        </Col>
        
        <Col span={16}>
          <Card title="Education"  className="mb-4 bg-white shadow-md rounded-lg ">
            <Paragraph><strong>Degree:</strong> {getEductionDetails ? getEductionDetails.degree : "MCA"}</Paragraph>
            <Paragraph><strong>Institution:</strong> {getEductionDetails ? getEductionDetails.institutionName : "University of Delhi"}</Paragraph>
            <Paragraph><strong>Graduation Date:</strong> {getEductionDetails ? `${getEductionDetails.startDate} - ${getEductionDetails.endDate}` : "2020 - 2022"}</Paragraph>
            <Paragraph><strong>Location:</strong> {getEductionDetails ? getEductionDetails.location : "Punjab"}</Paragraph>

          </Card>

          <Card title="Experience" className="mb-4 bg-white shadow-md rounded-lg">
            <Paragraph><strong>Job Title:</strong> {getExperienceDetails ? getExperienceDetails.jobTitle : "MCA"}</Paragraph>
            <Paragraph><strong>Company Name:</strong> {getExperienceDetails ? getExperienceDetails.companyName : "Enigmatix"}</Paragraph>
            <Paragraph><strong>Start Date:</strong> {getExperienceDetails ? getExperienceDetails.startDate : "2022"}</Paragraph>
            <Paragraph><strong>Location:</strong> {getExperienceDetails ? getExperienceDetails.location : "Punjab"}</Paragraph>
            <Paragraph><strong>Description:</strong> {getExperienceDetails ? getExperienceDetails.description : "Description"}</Paragraph>

          </Card>

          <Card title="Skills" className="bg-white shadow-md rounded-lg">
            <Paragraph>{getSkillDetails ? getSkillDetails.skills : "Programming"}</Paragraph>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Max;
