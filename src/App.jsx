import Login from "./pages/login";
import Register from "./pages/register";
import Dashboard from "./pages/dashboard";
import { Routes, Route, Navigate } from "react-router-dom";
import Simulador from "./pages/simulador";
import { useEffect, useState } from "react";

function App() {
  let [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem("isAuthenticated") == true);
  let [userName, setUserName] = useState(localStorage.getItem("userName") == "");
  useEffect(()=>{
    localStorage.setItem("isAuthenticated", isAuthenticated);
    localStorage.setItem("userName", isAuthenticated);
  }, [isAuthenticated, userName]);
  let handleLogin = (userName)=>{
    setIsAuthenticated(true);
    setUserName(userName);
  }
  let handleLogout = (userName)=>{
    setIsAuthenticated(false);
    setUserName("");
    localStorage.removeItem("isAuthenticated", isAuthenticated);
    localStorage.removeItem("userName", isAuthenticated);
  }
  return (
    <>
      <Routes>
        <Route path="/login" element={
          isAuthenticated ? <Navigate to="/Dashboard" /> : <Login onLogin={handleLogin} />
        } />
        <Route path="/Register" element={
          isAuthenticated ? <Navigate to="/Dashboard" /> : <Register  onLogin={handleLogin}/>
        } />
        <Route path="/Dashboard" element={
         // isAuthenticated ? <Dashboard user={userName} onLogout={handleLogout} /> : <Navigate to="/login" />
         <Dashboard />
        } />
        <Route path="/Simulador" element={ <Simulador /> } />
        <Route path="*" element={ <Login onLogin={handleLogin} />} />
      </Routes>

    </>
  )
}

export default App
