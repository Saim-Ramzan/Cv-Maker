import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Login from "./component/Login";
import Signup from "./component/Signup";
import Home from "./component/Home/Home";
import Layout from "./component/layout/Layout";
import ProtectedRoutes from "./component/layout/ProtectedRoutes";
import TemplateMain from "./component/Home/TemplateMain";
import Clean from "./component/template/Clean";
import HalfClean from "./component/template/HalfClean";
import Basic from "./component/template/Basic";
import BasicPlus from "./component/template/BasicPlus";
import Max from "./component/template/Max";
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import Alpha from "./component/template/Alpha";

function App() {
  return (
    /* eslint-disable */
    <div>
      <Router>
      <Routes>
      <Route  element={<ProtectedRoutes />}> 
        <Route  element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/templates" element={<TemplateMain />} />
        {/* Template */}
        <Route path="/clean" element={<Clean />} />
        <Route path="/halfclean" element={<HalfClean />} />
        <Route path="/basic" element={<Basic />} />
        <Route path="/basicPlus" element={<BasicPlus />} />
        <Route path="/max" element={<Max />} /> 
        <Route path="/alpha" element={<Alpha />} />     

              
        </Route>
      </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
    <ToastContainer  autoClose={2000} />
    </div>
  );
}
/* eslint-enable */


export default App;
