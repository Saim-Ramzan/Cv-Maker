import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Login from "./component/Login";
import Signup from "./component/Signup";
import Home from "./component/Home/Home";
import Layout from "./component/layout/Layout";

function App() {
  return (
    <div>
      <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        </Route>
      
        
      </Routes>
    </Router>
    </div>
  );
}

export default App;
