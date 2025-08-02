import React from 'react';

function CourseDetails({ courses }) {
  const renderCourses = () => {
    if (!courses) return null;

    return courses.map((course, index) =>
      course.name ? (
        <div key={index} className="entry">
          <h3>{course.name}</h3>
          <p>{course.date}</p>
        </div>
      ) : null
    );
  };

  return (
    <div className="mystyle1">
      <h1>Course Details</h1>
      {renderCourses()}
    </div>
  );
}

export default CourseDetails;
