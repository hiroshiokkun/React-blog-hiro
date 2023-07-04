import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreatePost from "./components/CreatePost";
import Login from "./components/Login";
import Home from "./components/Home";
import Logout from "./components/Logout";
import Navbar from "./components/Navbar";
import { useState } from "react";

function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));

  return (
    <Router>
      <Navbar isAuth={isAuth} />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/createpost"
          element={<CreatePost isAuth={isAuth} />}
        ></Route>
        <Route path="/login" element={<Login setIsAuth={setIsAuth} />}></Route>
        <Route path="/logout" element={<Logout />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
