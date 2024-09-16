import React from 'react'
import {  Outlet, useNavigate } from 'react-router-dom'
import Layout from './Layout';

function ProtectedRoutes() {
  const navigate = useNavigate();
  let token =  localStorage.getItem("userToken")
  return token ? <Outlet /> : navigate('/login') 
}

export default ProtectedRoutes