import React, { useEffect, useState } from 'react';
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

function Alpha() {
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
          console.log("data",data)
          personalData.push(data);
        });
        setPersonal(personalData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const downloadCv = () => {
    window.print();
  };

  const getPersonalDetails = personal.filter(item => item.personalDetails)?.personalDetails;
  const getEducationDetails = personal.find(item => item.educationDetails)?.educationDetails;
  const getExperienceDetails = personal.find(item => item.experienceDetails)?.experienceDetails;
  const getSkillDetails = personal.find(item => item.skillsDetails)?.skillsDetails;

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-200">
      <header className="text-center mb-8">
        <h1 className="text-5xl font-bold text-teal-600">{getPersonalDetails ? getPersonalDetails.name : "John Doe"}</h1>
        <p className="text-lg text-gray-600">{getExperienceDetails ? getExperienceDetails.jobTitle : "Web Developer"}</p>
        <p className="text-sm text-gray-500">{getPersonalDetails ? getPersonalDetails.email : "john.doe@example.com"} | LinkedIn Profile</p>
      </header>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold text-teal-600 border-b-2 border-teal-600 pb-2 mb-4">Summary</h2>
        <p className="text-lg text-gray-700">
          {getPersonalDetails ? getPersonalDetails.introduction : "A passionate web developer with experience in building dynamic and responsive web applications."}
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold text-teal-600 border-b-2 border-teal-600 pb-2 mb-4">Experience</h2>
        <div className="mb-4">
          <h3 className="font-semibold text-gray-800">{getExperienceDetails ? getExperienceDetails.jobTitle : "Web Developer"} - {getExperienceDetails ? getExperienceDetails.companyName : "Company ABC"}</h3>
          <p className="text-sm text-gray-600">{getExperienceDetails ? getExperienceDetails.startDate : "Jan 2020"}</p>
          <p className="text-sm text-gray-600">{getExperienceDetails ? getExperienceDetails.location : "XYZ"}</p>
          <p className="text-sm text-gray-600">{getExperienceDetails ? getExperienceDetails.description : "Description"}</p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold text-teal-600 border-b-2 border-teal-600 pb-2 mb-4">Education</h2>
        <div className="mb-4">
          <h3 className="font-semibold text-gray-800">{getEducationDetails ? getEducationDetails.degree : 'DEGREE'}</h3>
          <p className="text-sm text-gray-600">{getEducationDetails ? getEducationDetails.institutionName : "XYZ"}, {getEducationDetails ? getEducationDetails.startDate : "2019"}</p>
          <p className="text-sm text-gray-600">{getEducationDetails ? getEducationDetails.location : "XYZ"}</p>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-semibold text-teal-600 border-b-2 border-teal-600 pb-2 mb-4">Skills</h2>
        <ul className="list-disc ml-5 text-lg text-gray-700">
          {getSkillDetails ? getSkillDetails.skills.split(' ').map(skill => (
            <li key={skill}>{skill}</li>
          )) : (
            <>
              <li>JavaScript</li>
              <li>React</li>
              <li>Tailwind CSS</li>
            </>
          )}
        </ul>
      </section>

      <div className="printDiv flex items-center gap-2 mt-8 justify-center">
        <h3 className="text-lg text-gray-800">Feel Free To Download</h3>
        <button
          onClick={downloadCv}
          className="flex gap-1.5 px-8 py-4 bg-teal-600 text-white rounded-full hover:bg-teal-700 transition font-semibold shadow-md"
        >
          Download
        </button>
      </div>
    </div>
  );
}

export default Alpha;
