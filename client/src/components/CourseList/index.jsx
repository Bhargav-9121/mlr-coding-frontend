import CourseCard from "../CourseCard";
import "./index.css";

function CourseList() {
  //   const [courses, setCourses] = useState([]);
  //   useEffect(() => {
  //     fetch("URL")
  //       .then((response) => response.json())
  //       .then((data) => setCourses(data))
  //       .catch((error) => console.error("Error fetching courses:", error));
  //   }, []);

  const courses = [
    {
      courseid: "python2024-ii",
      coursetags: ["programming", "web development"],
      title: "Introduction to Programming",
      description:
        "This course provides an introduction to programming concepts using a variety of programming languages.",
    },
    {
      courseid: "C002",
      coursetags: ["data science", "machine learning"],
      title: "Data Science Fundamentals",
      description:
        "Explore the foundations of data science, including data analysis, statistics, and machine learning techniques.",
    },
    {
      courseid: "C003",
      coursetags: ["mobile development", "iOS"],
      title: "iOS App Development",
      description:
        "Learn to develop native iOS applications using Swift programming language and iOS development tools.",
    },
  ];

  return (
    <div>
      <h1
        style={{
          textAlign: "center",
          marginTop: "40px",
          marginBottom: "30px",
          fontSize: "40px",
          color: "purple",
        }}
      >
        My Courses
      </h1>
      <div className="course-list">
        {courses.map((course) => (
          <CourseCard key={course.courseid} course={course} />
        ))}
      </div>
    </div>
  );
}

export default CourseList;
