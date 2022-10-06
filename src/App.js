import React from "react";
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from "./components/Home";
import {BrowserRouter} from 'react-router-dom';
import Detail from "./components/Detail";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="/detail/:id" element={<Detail />} />
          </Route>
          <Route path="*" element={<h1>Page 404 Not Found</h1>} />
        </Routes>
      </BrowserRouter>
      
    {/* <Home /> */}
    </div>
    
  );

  // return (
  //   <Routes>
  //     <Route path="/" element={<Wrapper />}>
  //       <Route index element={<Home />} />
  //       <Route path="/about" element={<About />} />
  //       <Route path="/detail/:id" element={<Detail />} />
  //     </Route>
  //     <Route path="*" element={<h1>Page 404 Not Found</h1>} />
  //   </Routes>
  // );
}

export default App;