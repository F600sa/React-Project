import './App.css';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './component/Home/Home';
import Login from './component/login/login';
import Riyadh from './component/Home/Riyadh'
import About from './component/Home/About';
import Contact from './component/Home/Contact'
import Ticket from './component/Ticket'
import CreateCard from './component/company/CreateCard';
import GetCard from './component/company/GetCard';
import CURD from './component/company/CURD.JS';
import Getcon from './component/company/Getcon';
function App() {
  return (<>
    
    <Router>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="Home" element={<Home />} />
      <Route path='Riyadh' element={<Riyadh/>}></Route>
      <Route path='About' element={<About/>}></Route>
      <Route path='Contact' element={<Contact/>}></Route>
      <Route path='Ticket' element={<Ticket/>}></Route>
      <Route path='CreateCard'element={<CreateCard/>}></Route>
      <Route path='GetCard' element={<GetCard/>}></Route>
      <Route path='CURD' element={<CURD/>}></Route>
      <Route path='Getcon'element={<Getcon/>}></Route>
      
    </Routes>
    
   
    </Router>


    {/* <Home></Home>
    <Login></Login> */}
    
  </>
  );
}

export default App;
