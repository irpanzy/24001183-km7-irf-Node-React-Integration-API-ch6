import { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import NavbarTailwind from "./components/navbar/NavbarTailwind";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // check user nya login gak
  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsAuthenticated(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");

    setIsAuthenticated(false);
  };

  return (
    <>
      {isAuthenticated && <NavbarTailwind onLogout={handleLogout} />}

      <Routes>
        <Route
          path="/"
          element={isAuthenticated ? <Homepage /> : <Navigate to="/login" />}
        ></Route>

        <Route
          path="/login"
          element={isAuthenticated ? <Login /> : <Navigate to="/" />}
        ></Route>
      </Routes>
    </>
  );
}

export default App;
