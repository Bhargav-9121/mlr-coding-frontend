import DataTable from "./components/DataTable";
import api from "./api/axiosConfig";
import { useState, useEffect } from "react";

const App = () => {

    const [data, setData] = useState([]);

    const getData = async () => {
        try {
            const response = await api.get("/leaderboard");
            const sortedData = response.data.sort((a, b) => b.total - a.total); // Sort data by totalScore in descending order
            setData(sortedData);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    return <DataTable data={data} />;
};

export default App;
