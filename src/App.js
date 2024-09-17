import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Login from "./component/Login";
import Signup from "./component/Signup";
import Home from "./component/Home/Home";
import Layout from "./component/layout/Layout";
import ProtectedRoutes from "./component/layout/ProtectedRoutes";
import TemplateMain from "./component/Home/TemplateMain";
import Clean from "./component/template/Clean";
import HalfClean from "./component/template/HalfClean";

function App() {
  return (
    <div>
      <Router>
      <Routes>
      <Route  element={<ProtectedRoutes />}> 
        <Route  element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/templates" element={<TemplateMain />} />
        <Route path="/clean" element={<Clean />} />
        <Route path="/halfclean" element={<HalfClean />} />
        </Route>
      </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
