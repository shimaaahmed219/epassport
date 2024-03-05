
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import LandingPage from './Pages/LandingPage'
import AddEmployee from './Pages/AddEmployee'
import AddFile from './Pages/AddFile'
import Decrypt from './Pages/Decrypt'
import EditEmployee from './Pages/EditEmployee'
import EditeProfile from './Pages/EditProfile'
import Empolyee from './Pages/Employee'
import Encryption from './Pages/Encryption'
import Login from './Pages/Login'
import PassForm from './Pages/PassForm'
import TryAgain from './Pages/TrayAgain'
import MartialStatus from './Pages/MartialStatus'
import NationalForm from './Pages/NationalForm'
import DetailsForm from './Pages/DetailsForm'
// import { Dashboard } from '@mui/icons-material'
import DashbordEmployee from './Pages/DashbordEmployee'
import About from './Pages/About'
import Service from './Pages/Service'
import Passport from './Pages/Passport'


function App() {
 

  return (
   <>
<BrowserRouter>
<Routes>
  <Route path='/'element={<LandingPage/>}/>
  <Route path ="/about" element={<About/>}/>
  <Route path ="/service" element={<Service/>}/>
  <Route path='/Login' element={<Login/>}/>
  <Route path ="/passport" element={<Passport/>}/>
  <Route path ='/addEmployee' element={<AddEmployee/>}/>
  <Route path ='/addFile' element={<AddFile/>}/>
  <Route path ='/Decrypt' element={<Decrypt/>}/>
  <Route path ='/EditEmployee/:id' element={<EditEmployee/>}/>
  <Route path='/EditProfile' element={<EditeProfile/>}/>
  <Route path='/Employee' element={<Empolyee/>}/>
  <Route path='/Encryption' element={<Encryption/>}/>
  <Route path='/passForm' element={<PassForm/>}/>
  <Route path='/tryagain' element={<TryAgain/>}/>
  <Route path='/status' element={<MartialStatus/>}/>
  <Route path='/NationalForm' element={<NationalForm/>}/>
  <Route path='/DetailsForm' element={<DetailsForm/>}/>
  <Route path='/dashbord' element={<DashbordEmployee/>}/>
  <Route path ="*" element={<div>not found</div>}/>

</Routes>

</BrowserRouter>


   </>
  )
}

export default App
