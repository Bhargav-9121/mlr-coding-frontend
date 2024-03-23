import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DataTable from "./components/DataTable";
import DashBoard from "./components/DashBoard"; 
import api from "./api/axiosConfig";
import ProfilePage from "./components/Profile";
import NavBar from "./components/NavBar";
import LoginPage from "./components/LoginPage"

const App = () => {
    const [data, setData] = useState([]);

    const getData = async () => {
      try {
        const response = await api.get("/leaderboard");
        const sortedData = response.data.sort((a, b) => b.total - a.total);
        setData(sortedData);
      } catch (error) {
        console.log(error);
      }
    };
    
    
    
    const [stats, setStats] = useState(null);
    
    const username = 'Matsa Diwakar';
    const getStats = async () => {
      try {
        const response = await api.get("/leaderboard");
        const person = response.data.find(person => person.Name === username);
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
      <NavBar username={username}/>
      <Routes>
        <Route path="/leaderboard" element={<DataTable data={data} onLoad={getData} />} />
        <Route path="/profile" element={<ProfilePage stats={stats} onLoad={getStats}/>} />
        <Route path="/login" element={<LoginPage/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
