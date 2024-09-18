import React, { useEffect, useState } from 'react';
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

function Basic() {
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

  const downloadCv = () => {
    window.print();
  };

  const getPersonalDetails = personal.find(item => item.personalDetails)?.personalDetails;
  const getEducationDetails = personal.find(item => item.educationDetails)?.educationDetails;
  const getExperienceDetails = personal.find(item => item.experienceDetails)?.experienceDetails;
  const getSkillDetails = personal.find(item => item.skillsDetails)?.skillsDetails;

  return (
    <div className="max-w-3xl mx-auto p-6 bg-gradient-to-r from-purple-500 to-indigo-500 shadow-md rounded-lg text-white">
      <header className="text-center mb-6">
        <h1 className="text-4xl font-bold">{getPersonalDetails ? getPersonalDetails.name : "John Doe"}</h1>
        <p className="text-lg">{getExperienceDetails ? getExperienceDetails.jobTitle : "Web Developer"}</p>
        <p className="text-sm">{getPersonalDetails ? getPersonalDetails.email : "john.doe@example.com"} | LinkedIn Profile</p>
      </header>

      <section className="mb-6">
        <h2 className="text-3xl font-semibold border-b-2 border-white pb-2 mb-4">Summary</h2>
        <p className="text-lg">
          {getPersonalDetails ? getPersonalDetails.introduction : "A passionate web developer with experience in building dynamic and responsive web applications."}
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-3xl font-semibold border-b-2 border-white pb-2 mb-4">Experience</h2>
        <div className="mb-4">
          <h3 className="font-semibold">{getExperienceDetails ? getExperienceDetails.jobTitle : "Web Developer"} - {getExperienceDetails ? getExperienceDetails.companyName : "Company ABC"}</h3>
          <p className="text-sm">{getExperienceDetails ? getExperienceDetails.startDate : "Jan 2020"}</p>
          <p className="text-sm">{getExperienceDetails ? getExperienceDetails.location : "XYZ"}</p>
          <p className="text-sm">{getExperienceDetails ? getExperienceDetails.description : "Description"}</p>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-3xl font-semibold border-b-2 border-white pb-2 mb-4">Education</h2>
        <div className="mb-4">
          <h3 className="font-semibold">{getEducationDetails ? getEducationDetails.degree : 'DEGREE'}</h3>
          <p className="text-sm">{getEducationDetails ? getEducationDetails.institutionName : "XYZ"}, {getEducationDetails ? getEducationDetails.startDate : "2019"}</p>
          <p className="text-sm">{getEducationDetails ? getEducationDetails.location : "XYZ"}</p>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-semibold border-b-2 border-white pb-2 mb-4">Skills</h2>
        <ul className="list-disc ml-5 text-lg">
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

      <div className="flex items-center gap-2 mt-8">
        <h3 className="text-lg">Feel Free To Download</h3>
        <button
          onClick={downloadCv}
          className="cursor-pointer flex gap-1.5 px-8 py-4 bg-white text-black rounded-full hover:bg-gray-200 transition font-semibold shadow-md"
        >
          Download
        </button>
      </div>
    </div>
  );
}

export default Basic;
