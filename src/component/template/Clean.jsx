import React, { useEffect } from 'react'
import { collection, query, where, getDocs } from "firebase/firestore";
import { auth, db } from '../../firebase';


function Clean() {
  const userUid=  localStorage.getItem("userToken")

  const getQuearyData = async () => {
  const q = collection(db, userUid);
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    const data = doc.data()
    console.log("user ID Data",data);

  });
} 
useEffect(() => {
  getQuearyData()
},[])
  
  return (
    <div>Clean</div>
  )
}

export default Clean