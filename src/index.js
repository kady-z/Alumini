import React from "react";
import ReactDOM from "react-dom";
import App from './components/App';
import Events from "./components/Events";
import Header from "./components/Header";

import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";

ReactDOM.render (
    <BrowserRouter>
<Header />
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="Events" element={<Events />} />
    </Routes>
  </BrowserRouter>,

  document.getElementById('root')
  );