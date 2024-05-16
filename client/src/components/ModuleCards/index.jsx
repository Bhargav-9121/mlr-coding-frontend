import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./index.css";
import Button from "@mui/material/Button";

export default function ModuleCards({ module }) {
  const [showLessons, setShowLessons] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const handleModuleClick = () => {
    setIsClicked(!isClicked);
    setShowLessons(!showLessons);
  };

  return (
    <div className="module-card">
      <Button
        className="module-title-btn"
        variant="contained"
        onClick={handleModuleClick}
        style={{
          backgroundColor: isClicked ? "#d59bf6" : "white",
        }}
      >
        {module.module_title}
      </Button>

      {showLessons && (
        <div
          className="lessons-container"
          style={{ marginBottom: isClicked ? "20px" : "0" }}
        >
          {module.lessons.map((lesson) => (
            <Link
              key={lesson._id}
              target="_blank"
              to={`/lesson-page/${lesson._id}`}
            >
              <div className="lesson">
                <h3 className="lesson-title">{lesson.lesson_title}</h3>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
