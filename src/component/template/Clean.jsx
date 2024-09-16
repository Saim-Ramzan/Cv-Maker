import React, { useEffect } from 'react'
import { collection, getDoc, } from "firebase/firestore"; 
import { auth, db } from '../../firebase';


function Clean() {
  const userUid=  localStorage.getItem("userToken")
    const citiesRef = collection(db, userUid);
    console.log("citiesRef",citiesRef);
    
    // const getData =  async () => {
    //     getDoc(citiesRef).then((snapshot) => {
    //     });
    // } 
    // useEffect(() => {
    //     getData()
    // }, [])
    
  return (
    <div>Clean</div>
  )
}

export default Clean