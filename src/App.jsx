import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login.jsx";
import Localjaisalmertours from "./Pages/Localjaisalmertours.jsx";
import DistrictTravel from "./Pages/DistrictTravel.jsx";
import Statetostate from "./Pages/statetostate.jsx";

function App() {
  return ( 
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Localjaisalmer" element={<Localjaisalmertours/>} />
        <Route path="/DistrictTravel" element={<DistrictTravel />} />
        <Route path="/Statetostate" element={<Statetostate/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
