import React from "react";
import Home from './components/Home/Home';
import Events from "./components/Events/Events";
import Header from "./components/Header/Header";
import Role from "./components/Roles/Roles"

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
          <Route path="Events" element={<Events />} />
          <Route path="Role" element={<Role />} />
        </Routes>
      </BrowserRouter>
    );
}

export default App;