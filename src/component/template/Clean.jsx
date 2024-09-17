import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import {  db } from "../../firebase";
import avatarImage from "../../assests/images.jpeg";

function Clean() {
  const [userPersonalDetail, setUserPersonalDetail] = useState({});
  const [userExperienceDetail, setUserExperienceDetail] = useState({});

  const userUid = localStorage.getItem("userToken");

  useEffect(() => {
    const getQuearyData = async () => {
      const q = collection(db, userUid);
      const querySnapshot = await getDocs(q);
      querySnapshot.docs.map((item) => {
        const data = item.data();
        setUserExperienceDetail(data.experienceDetails);
        setUserPersonalDetail(data.personalDetails);
        console.log("personalDetails", data.personalDetails);
      });
    };
    getQuearyData();
  }, []);

  // console.log("userPersonalDetail",userPersonalDetail)
  // console.log("userExperienceDetail",userExperienceDetail)

  return (
    <div className="">
      <div className="flex border-l-2 border-gray-700 bg-gray-800 h-[calc(100vh-70px)] font-sans">
        <div className="w-80 bg-white p-4">
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
          <h1 className=" text-black font-bold bg-yellow-400 text-3xl p-2  my-4 mt-2">
            Profile
          </h1>
          <ul className="space-y-2  font-medium">
            <li className="border-b border-black pb-2">
              Name: {"" ? "" : "john"}{" "}
            </li>
            <li>Email: {"" ? "" : "john.doe@example.com"}</li>
            <li>Age: </li>
            <li>languages: </li>
          </ul>
          <h1 className="text-xl mt-4 bg-yellow-400 p-2  font-bold ">About</h1>
          <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700  " />
          <p>
            <span className="font-bold text-xl bg-yellow-400">
              Introduction:
            </span>{" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
            dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit
            amet consectetur adipisicing elit.
          </p>
          <div  className="printDiv flex mt-8">
            <h3>Feel Free To Download</h3>
            <button
              onClick={() => window.print()}
              className=" cursor-pointer group relative flex gap-1.5 px-8 py-4 bg-black bg-opacity-80 text-[#f1f1f1] rounded-3xl hover:bg-opacity-70 transition font-semibold shadow-md"
            >
              Download
            </button>
          </div>
        </div>
        {/* <!-- Main Content (Empty space) --> */}
        <div className="flex-1 p-4 ">
          {/* <!-- Content goes here --> */}
          <h1 className="bg-yellow-400 text-center font-bold text-2xl p-2">
            Education
          </h1>
          {/* Eduction details */}
          <ul className=" text-black p-5 font-medium bg-white my-2">
            <ul className="text-lg bg-yellow-400  p-1">Degree</ul>
            <li className="py-1 pl-3">{"" ? "" : "MCA"}</li>
            <ul className="text-lg bg-yellow-400  p-1">Institution</ul>
            <li className="py-1 pl-3">{"" ? "" : "University of Delhi"}</li>
            <ul className="text-lg bg-yellow-400 w- p-1">Graduation Date</ul>
            <li className="py-1 pl-3">{"" ? "" : "2022"}</li>
            <ul className="text-lg bg-yellow-400  p-1">Location</ul>
            <li className="py-1 pl-3">{"" ? "" : "Punjab"}</li>
          </ul>
          {/* experience details */}
          <h1 className="bg-yellow-400 text-center font-bold text-2xl p-2">
            Experience
          </h1>
          {/* Eduction details */}
          <ul className=" text-black p-5 font-medium bg-white my-2">
            <ul className="text-lg bg-yellow-400  p-1">Job Title</ul>
            <li className="py-1 pl-3">{"" ? "" : "MCA"}</li>
            <ul className="text-lg bg-yellow-400  p-1">Company Name</ul>
            <li className="py-1 pl-3">{"" ? "" : "Enigmatix"}</li>
            <ul className="text-lg bg-yellow-400 w- p-1">Start Date</ul>
            <li className="py-1 pl-3">{"" ? "" : "2022"}</li>
            <ul className="text-lg bg-yellow-400  p-1">Location</ul>
            <li className="py-1 pl-3">{"" ? "" : "Punjab"}</li>
          </ul>
          <h1 className="bg-yellow-400 text-center font-bold text-2xl p-2">
            Skill
          </h1>
          {/* Skill */}
          <ul className="list-disc list-inside flex text-black p-2 font-medium bg-white my-2">
            <li className="py-1 pl-3">{"" ? "" : "Programmer"}</li>
            <li className="py-1 pl-3">{"" ? "" : "Teamwork"}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Clean;
