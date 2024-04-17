import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import LandingPage from "./Pages/LandingPage";
import AddEmployee from "./Pages/AddEmployee";
import Decrypt from "./Pages/Decrypt";
import EditEmployee from "./Pages/EditEmployee";
import EditeProfile from "./Pages/EditProfile";
import Empolyee from "./Pages/Employee";
import Encryption from "./Pages/Encryption";
import Login from "./Pages/Login";
import TryAgain from "./Pages/TrayAgain";
import DashbordEmployee from "./Pages/DashbordEmployee";
import About from "./Pages/About";
import Service from "./Pages/Service";
import RecruitmentArea from "./Pages/RecruitmentArea";
import RecruitmentPassForm from "./Pages/RecruitmentPassForm";
import PassEmployee from "./Pages/PassEmployee";
import ForeignEmployee from "./Pages/ForeignEmployee";
import UpdateClientData from "./Pages/UpdateClientData";
import EncryptedFiles from "./Pages/EncryptedFiles";
// import UpdateClientData from "./Pages/ClientDetails";
// import ClientDetails from "./Pages/ClientDetails";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/addEmployee" element={<AddEmployee />} />
          <Route path="/Encryptedfiles" element={<EncryptedFiles />} />
          <Route path="/Decrypt" element={<Decrypt />} />
          <Route path="/EditEmployee/:id" element={<EditEmployee />} />
          <Route path="/EditProfile" element={<EditeProfile />} />
          <Route path="/Employee" element={<Empolyee />} />
          <Route path="/Encryption" element={<Encryption />} />
          <Route path="/tryagain" element={<TryAgain />} />
          <Route path="/dashboard" element={<DashbordEmployee />} />
          <Route path="/passForm" element={<RecruitmentPassForm />} />
          <Route path="/PassEmployee" element={<PassEmployee />} />
          <Route path="/forginEmployee" element={<ForeignEmployee />} />
          <Route path="/recruitment" element={<RecruitmentArea />} />
          <Route path="/updateClient/:id" element={<UpdateClientData/>} />
          <Route path="*" element={<div>not found</div>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
