import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./index.css";

const LessonContent = () => {
  const { id } = useParams();
  const [lessonData, setLessonData] = useState(null);

  useEffect(() => {
    const showLessonContent = async () => {
      try {
        const response = await fetch(
          `http://13.201.156.87:8800/lesson/preview/${id}`
        );

        const data = await response.json();
        setLessonData(data);
      } catch (error) {
        console.log("Error Fetching Modules", error);
      }
    };

    showLessonContent();
  }, []);

  return (
    <div>
      {lessonData && (
        <div className="lesson-details">
          <div dangerouslySetInnerHTML={{ __html: lessonData.text_content }} />
        </div>
      )}
    </div>
  );
};

export default LessonContent;
