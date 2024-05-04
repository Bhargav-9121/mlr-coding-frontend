/* eslint-disable react/prop-types */
import { useState } from "react";
import "./index.css";

const ModuleCards = ({ module }) => {
  const [showLessons, setShowLessons] = useState(false);

  const toggleLessons = () => {
    setShowLessons(!showLessons);
  };

  return (
    <div className="module-card">
      <h2 onClick={toggleLessons}>{module.module_title}</h2>

      {showLessons && (
        <div className="lessons-container">
          {module.lessons.map((lesson) => (
            <div key={lesson._id} className="lesson">
              <h3>{lesson.lesson_title}</h3>
              <p>Lesson Number: {lesson.lesson_no}</p>
              <p>Points: {lesson.lesson_points}</p>
              <p>Content Type: {lesson.contentype}</p>
              {lesson.contentype === "text-material" && (
                <p>{lesson.text_content}</p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ModuleCards;

// // ModuleCards.jsx
// import { useState } from "react";
// import "./index.css";

// const ModuleCards = ({ module }) => {
//   const [showLessons, setShowLessons] = useState(false);

//   const toggleLessons = () => {
//     setShowLessons(!showLessons);
//   };

//   return (
//     <div className="module-card">
//       <h2 onClick={toggleLessons}>{module.module_title}</h2>
//       {showLessons && (
//         <div className="lessons-container">
//           {module.lessons.map((lesson) => (
//             <div key={lesson._id} className="lesson">
//               <h3>{lesson.lesson_title}</h3>
//               <p>Lesson Number: {lesson.lesson_no}</p>
//               <p>Points: {lesson.lesson_points}</p>
//               <p>Content Type: {lesson.contentype}</p>
//               {lesson.contentype === "text-material" && (
//                 <p>{lesson.text_content}</p>
//               )}
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default ModuleCards;
