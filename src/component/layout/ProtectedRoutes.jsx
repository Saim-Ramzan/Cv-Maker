import React from 'react'
import {  Outlet, Navigate } from 'react-router-dom'
import Layout from './Layout';

function ProtectedRoutes() {
  let token =  localStorage.getItem("userToken")
    
  return token ? <Outlet /> :  <Navigate to='/login'/>
}

export default ProtectedRoutes