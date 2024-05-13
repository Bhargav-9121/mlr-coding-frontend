// ModulesPage.jsx
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ModuleCards from "../ModuleCards";
import "./index.css";

const ModulesPage = () => {
  const { id } = useParams();

  const [modules, setModules] = useState({});

  useEffect(() => {
    const fetchModules = async () => {
      try {
        const response = await fetch(
          `https://scoretracking-vishnu.onrender.com/fetch/courses/${id}`
        );

        const data = await response.json();
        setModules(data);
        console.log(data);
      } catch (error) {
        console.log("Error Fetching Modules", error);
      }
    };

    fetchModules();
  }, []);

  return (
    <div className="modules-container">
      {modules.modules &&
        modules.modules.map((each) => (
          <ModuleCards key={each._id} module={each} />
        ))}
    </div>
  );
};

export default ModulesPage;

// // ModulesPage.jsx
// import { useParams } from "react-router-dom";
// import { useState, useEffect } from "react";
// import ModuleCards from "../ModuleCards";

// const ModulesPage = () => {
//   const { id } = useParams();

//   const [modules, setModules] = useState({});

//   useEffect(() => {
//     const fetchModules = async () => {
//       try {
//         const response = await fetch(
//           `https://scoretracking-vishnu.onrender.com/fetch/courses/${id}`
//         );

//         const data = await response.json();
//         setModules(data);
//         console.log(data);
//       } catch (error) {
//         console.log("Error Fetching Modules", error);
//       }
//     };

//     fetchModules();
//   }, []);

//   return (
//     <div className="modules-container">
//       {modules.modules &&
//         modules.modules.map((each) => (
//           <ModuleCards key={each._id} module={each} />
//         ))}
//     </div>
//   );
// };

// export default ModulesPage;
