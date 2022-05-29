import React from "react";
import Home from './components/Home/Home';
import UpcommingEvents from "./components/Events/UpcommingEvents";
import PastEvents from "./components/Events/PastEvents";
import Header from "./components/Header/Header";
import Role from "./components/Roles/Roles"
import Upbutton from "./components/Footer/Upbutton"
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
    return (
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="UpcommingEvents" element={<UpcommingEvents />} />
          <Route path="PastEvents" element={<PastEvents />} />
          <Route path="Role" element={<Role />} />
        </Routes>
        <Upbutton/>
      </BrowserRouter>
    );
}

export default App;