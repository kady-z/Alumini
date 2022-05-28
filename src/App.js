import React from "react";
import Home from './components/Home/Home';
import Events from "./components/Events/Events";
import Header from "./components/Header/Header";

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
        </Routes>
      </BrowserRouter>
    );
}

export default App;