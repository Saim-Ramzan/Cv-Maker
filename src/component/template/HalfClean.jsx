import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import {  db } from "../../firebase";
import avatarImage from "../../assests/images.jpeg";

function HalfClean() {
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

  console.log("getExperienceDetails",getSkillDetails );



  return (
    <div className="">
    <div className="flex border-l-2 border-gray-700 bg-[#E1D7B7] h-[calc(100vh-70px)] font-sans">
      <div className="w-80 bg-[#1E2A5E] p-4">
        <div className="flex justify-center">
          <input
            width={200}
            height={200}
            className="rounded-full"
            type="image"
            src={avatarImage}
            alt="Avatar"
          />
        </div>
        <h1 className=" text-white font-bold bg-[#7C93C3] text-3xl p-2  my-4 mt-2">
          Profile
        </h1>
        <ul className="space-y-2  text-white font-medium">
          <li className="border-b border-black pb-2">
            Name: {getPersonalDetails ? getPersonalDetails.name : "john"}{" "}
          </li>
          <li>Email: {getPersonalDetails ? getPersonalDetails.email : "john.doe@example.com"}</li>
          <li>Age: {getPersonalDetails ? getPersonalDetails.age :"19"}</li>
          <li>languages: {getPersonalDetails ? getPersonalDetails.language : "English"}</li>
        </ul>
        <h1 className="text-xl mt-4 bg-[#7C93C3] text-white p-2  font-bold ">About</h1>
        <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700  " />
        <p className="text-white ">
          <span className="font-bold text-black text-xl text-white bg-[#7C93C3]">
            Introduction: 
          </span>
          {getPersonalDetails ? ` ${getPersonalDetails.introduction}` : " Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum."}
        </p>
        <div  className="printDiv flex mt-8">
          <h3 className="text-white">Feel Free To Download</h3>
          <button
            onClick={downloadCv}
            className=" cursor-pointer group relative flex gap-1.5 px-8 py-4 bg-black bg-opacity-80 text-[#f1f1f1] rounded-3xl hover:bg-opacity-70 transition font-semibold shadow-md"
          >
            Download
          </button>
        </div>
      </div>
      {/* <!-- Main Content (Empty space) --> */}
      <div className="flex-1 p-4 ">
        {/* <!-- Content goes here --> */}
        <h1 className="bg-[#1E2A5E] text-white text-center font-bold text-2xl p-2">
          Education
        </h1>
        {/* Eduction details */}
        <ul className=" text-black p-5 font-medium bg-white my-2">
          <ul className="text-lg w-40  bg-[#55679C] text-white  p-1">Degree</ul>
          <li className="py-1 pl-3">{getEductionDetails ? getEductionDetails.degree : "MCA"}</li>
          <ul className="text-lg w-40  bg-[#55679C] text-white  p-1">Institution</ul>
          <li className="py-1 pl-3">{getEductionDetails ? getEductionDetails.institutionName : "University of Delhi"}</li>
          <ul className="text-lg w-40  bg-[#55679C] text-white  w- p-1">Graduation Date</ul>
          <li className="py-1 pl-3">{getEductionDetails ? getEductionDetails.startDate : "2022"} --- {getEductionDetails ? getEductionDetails.endDate : "2020"}</li>
          <ul className="text-lg w-40  bg-[#55679C] text-white  p-1">Location</ul>
          <li className="py-1 pl-3">{getEductionDetails ? getEductionDetails.location : "Punjab"}</li>
        </ul>
        {/* experience details */}
        <h1 className=" bg-[#1E2A5E] text-white text-center font-bold text-2xl p-2">
          Experience
        </h1>
        {/* Eduction details */}
        <ul className=" text-black p-5 font-medium bg-white my-2">
          <ul className="text-lg w-40 bg-[#55679C] text-white  p-1">Job Title</ul>
          <li className="py-1 pl-3">{getExperienceDetails ? getExperienceDetails.jobTitle : "MCA"}</li>
          <ul className="text-lg w-40 bg-[#55679C] text-white  p-1">Company Name</ul>
          <li className="py-1 pl-3">{getExperienceDetails ? getExperienceDetails.companyName : "Enigmatix"}</li>
          <ul className="text-lg w-40 bg-[#55679C] text-white w- p-1">Start Date</ul>
          <li className="py-1 pl-3">{getExperienceDetails ? getExperienceDetails.startDate : "2022"}</li>
          <ul className="text-lg w-40 bg-[#55679C] text-white p-1">Location</ul>
          <li className="py-1 pl-3">{getExperienceDetails ? getExperienceDetails.location : "Punjab"}</li>
          <ul className="text-lg w-40 bg-[#55679C] text-white p-1">Description</ul>
          <li className="py-1 pl-3">{getExperienceDetails ? getExperienceDetails.description : "Description"}</li>
        </ul>
        <h1 className="bg-[#1E2A5E] text-white text-center font-bold text-2xl p-2">
          Skill
        </h1>
        {/* Skill */}
        <ul className="list-disc list-inside flex text-black p-2 font-medium bg-white my-2">
        {getSkillDetails ? getSkillDetails.skills.split(' ').map(skill => (
            <li className="py-1 pl-3" key={skill}>{skill}</li>
          )) : (
            <>
              <li >JavaScript</li>
              <li >React</li>
              <li >Tailwind CSS</li>
            </>
          )}
        </ul>
      </div>
    </div>
  </div>
  );
}

export default HalfClean;
