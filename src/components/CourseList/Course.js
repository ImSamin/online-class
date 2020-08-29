import React from "react";
import "./Course.css";

const Course = (props) => {
  const course = props.courses;
  const handlebtn = props.handlebtn;
  return (
    <div className="course-container">
      <div className="course">
        <img src={course.img} alt="" />
        <h2 style={{ color: "blue" }}>{course.course_name}</h2>
        <p>Instructor: {course.instractor_name}</p>
        <p style={{ color: "Green" }}>
          <b>Rating: {course.rating}</b>
        </p>
        <h3 style={{ color: "orange" }}>${course.price}</h3>
        <button onClick={() => handlebtn(props.courses)}>Enroll Now</button>
      </div>
    </div>
  );
};

export default Course;
