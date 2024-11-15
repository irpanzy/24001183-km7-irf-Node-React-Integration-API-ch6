import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import NavbarTailwind from "./components/navbar/NavbarTailwind";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import NotFound from "./pages/404";
import { useAuth } from "./context/AuthContext";

function App() {
  const { isAuthenticated, logout } = useAuth();

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
          element={isAuthenticated ? <Navigate to="/" /> : <Login />}
        ></Route>

        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </>
  );
}

export default App;
