import React, { useEffect, useState } from 'react';
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

function BasicPlus() {
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
  const getEducationDetails = personal.find(item => item.educationDetails)?.educationDetails;
  const getExperienceDetails = personal.find(item => item.experienceDetails)?.experienceDetails;
  const getSkillDetails = personal.find(item => item.skillsDetails)?.skillsDetails;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <header className="text-center mb-6">
        <h1 className="text-3xl font-bold">{getPersonalDetails ? getPersonalDetails.name : "John Doe"}</h1>
        <p className="text-gray-600">{getExperienceDetails ? getExperienceDetails.jobTitle : "Frontend Developer"}</p>
        <p className="mt-2">{getPersonalDetails ? `Email: ${getPersonalDetails.email}` : "Email: johndoe@example.com"} | Phone: (123) 456-7890</p>
        <p>{getPersonalDetails ? `Location: ${getPersonalDetails.location}` : "Location: New York, NY"}</p>
      </header>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Summary</h2>
        <p className="text-gray-700">
          {getPersonalDetails ? getPersonalDetails.introduction : "A passionate web developer with experience in building dynamic and responsive web applications."}
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Experience</h2>
        <div className="mb-2">
          <h3 className="font-bold">{getExperienceDetails ? getExperienceDetails.jobTitle : "Frontend Developer"}</h3>
          <p>{getExperienceDetails ? `${getExperienceDetails.companyName}, ${getExperienceDetails.startDate}` : "Company ABC, Jan 2020"}</p>
          
          <p>{getExperienceDetails ? `${getExperienceDetails.description},` : "Description"}</p>

        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Education</h2>
        <div className="mb-2">
          <h3 className="font-bold">{getEducationDetails ? getEducationDetails.degree : "Bachelor of Science in Computer Science"}</h3>
          <p>{getEducationDetails ? `${getEducationDetails.institutionName}, ${getEducationDetails.startDate}` : "University of Example, 2015 - 2019"}</p>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Skills</h2>
        <ul className="flex flex-wrap">
          {getSkillDetails ? getSkillDetails.skills.split(' ').map(skill => (
            <li key={skill} className="mr-4 mb-2 px-3 py-1 bg-blue-100 text-blue-800 rounded">{skill}</li>
          )) : (
            <>
              <li className="mr-4 mb-2 px-3 py-1 bg-blue-100 text-blue-800 rounded">JavaScript</li>
              <li className="mr-4 mb-2 px-3 py-1 bg-blue-100 text-blue-800 rounded">React</li>
              <li className="mr-4 mb-2 px-3 py-1 bg-blue-100 text-blue-800 rounded">Tailwind CSS</li>
            </>
          )}
        </ul>
      </section>

      <div className="printDiv flex items-center gap-1 mt-8">
        <h3>Feel Free To Download</h3>
        <button
          onClick={downloadCv}
          className="cursor-pointer group relative flex gap-1.5 px-8 py-4 bg-black bg-opacity-80 text-[#f1f1f1] rounded-3xl hover:bg-opacity-70 transition font-semibold shadow-md"
        >
          Download
        </button>
      </div>
    </div>
  );
}

export default BasicPlus