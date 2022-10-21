import React, { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { BrowserRouter } from "react-router-dom";
import Detail from "./pages/Detail";
import Register from "./pages/Register";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Protected from "./components/Protected";
import Login from "./pages/Login";

function App() {
  const tokenLocalStorage = localStorage.getItem("token");
  const [token, setToken] = useState(tokenLocalStorage);
  return (
    <div className="App">
      <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
        <BrowserRouter>
          <Routes>
            <Route path="/">
              <Route
                index
                element={<Home token={token} setToken={setToken} />}
              />
              <Route
                path="/detail/:id"
                element={
                  <Protected token={token} setToken={setToken}>
                    <Detail />
                  </Protected>
                }
              />
            </Route>
            <Route path="*" element={<h1>Page 404 Not Found</h1>} />
            <Route
              path="/login"
              element={<Login token={token} setToken={setToken} />}
            />
            <Route
              path="/register"
              element={<Register token={token} setToken={setToken} />}
            />
          </Routes>
        </BrowserRouter>
      </GoogleOAuthProvider>

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
