import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DataTable from "./components/DataTable";
import api from "./api/axiosConfig";
import ProfilePage from "./components/Profile";
// import NavBar from "./components/NavBar";
// import ProtectedRoute from "./components/ProtectedRoute";
import LoginPage from "./components/LoginPage";
import NotFound from "./components/NotFound";
import Courses from "./components/Courses";
import CourseDetails from "./components/CourseDetails";
import Contests from "./components/Contests";
import JobsPage from "./components/JobsPage";
import Forgot from "./components/Forgot";
import Personal from "./components/Personal";
import LandingPage from "./components/LandingPage";
import ProtectedRoute from "./components/ProtectedRoute";

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
      <Routes>
        <Route element={<ProtectedRoute />}>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/login" element={<LoginPage />} />
          <Route exact path="/forgot" element={<Forgot />} />
          {/* <Route element={<ProtectedRoute />}> */}
          <Route exact path="/courses" element={<Courses />} />
          <Route exact path="/courses/:id" element={<CourseDetails />} />
          <Route
            exact
            path="/leaderboard"
            element={<DataTable data={data} onLoad={getData} />}
          />
          <Route exact path="/contests" element={<Contests />} />
          <Route exact path="/jobs" element={<JobsPage />} />
          <Route
            exact
            path="/personal"
            element={<Personal data={data} onLoad={getData} />}
          />
          <Route
            exact
            path="/profile"
            element={<ProfilePage stats={stats} onLoad={getStats} />}
          />

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
