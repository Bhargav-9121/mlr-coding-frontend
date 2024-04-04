import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DataTable from "./components/DataTable";
import api from "./api/axiosConfig";
import ProfilePage from "./components/Profile";
import NavBar from "./components/NavBar";
import ProtectedRoute from "./components/ProtectedRoute";
import LoginPage from "./components/LoginPage";
import NotFound from "./components/NotFound";

import Personal from "./components/Personal";

import LandingPage from "./components/LandingPage";

const App = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const response = await api.get("/leaderboard");
      const sortedData = response.data.sort((a, b) => b.total - a.total);
      setData(sortedData);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const [stats, setStats] = useState(null);

  const username = "Pabboju Sandeep Chary";
  const getStats = async () => {
    try {
      const response = await api.get("/leaderboard");
      const person = response.data.find((person) => person.Name === username);
      setStats(person);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    getStats();
  }, []);

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/login" element={<LoginPage />} />
        {/* <Route element={<ProtectedRoute />}> */}

        <Route
          path="/leaderboard"
          element={<DataTable data={data} onLoad={getData} />}
        />
        <Route
          path="/personal"
          element={<Personal data={data} onLoad={getData} />}
        />
        <Route
          path="/profile"
          element={<ProfilePage stats={stats} onLoad={getStats} />}
        />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
