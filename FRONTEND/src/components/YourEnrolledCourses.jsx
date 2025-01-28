import React from 'react';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';

const YourEnrolledCourses = ({ courses, onCourseSelect }) => { // Accepting onCourseSelect as a prop

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.25; // Check for half star

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={i} className="text-warning" />);
    }

    if (hasHalfStar) {
      stars.push(<FaStarHalfAlt key={fullStars} className="text-warning" />);
    }

    // Ensure we don't add more stars than 5
    while (stars.length < 5) {
      stars.push(<FaStar key={stars.length} className="text-muted" />);
    }

    return stars;
  };

  const handleCourseClick = (course) => {
    onCourseSelect(course); // Pass the entire course object to the parent component
  };

  return (
    <div className="container my-5">
      <h3 className="text-left mb-4" style={{ fontSize: '2rem', marginBottom: '30px', fontFamily: 'Verdana, sans-serif' }}>
        Your Enrolled Courses
      </h3>
      <div className="row mb-5 justify-content-center">
        {courses.EnrolledCourse.slice(0, 3).map((course, index) => (
          <div className="col-md-3 mb-4" key={index}>
            <div className="card text-center shadow-sm border-light" style={{ borderRadius: '10px', height: '500px', width: '100%', position: 'relative' }}>
              {course.label && (
                <span className="badge" style={{ position: 'absolute', top: '10px', right: '10px', backgroundColor: course.labelStyle?.backgroundColor }}>
                  {course.label}
                </span>
              )}
              <img
                src={course.imageUrl}
                alt={course.title}
                className="card-img-top"
                style={{ height: '200px', objectFit: 'cover', borderTopLeftRadius: '10px', borderTopRightRadius: '10px', cursor: 'pointer' }} // Add cursor pointer
                onClick={() => handleCourseClick(course)} // Pass the full course object
              />
              <div className="card-body">
                {/* Add onClick handler to the title */}
                <h5 className="card-title" onClick={() => handleCourseClick(course)} style={{ cursor: 'pointer' }}>
                  {course.title}
                </h5>
                <p className="card-text">
                  <strong>Instructor:</strong> {course.instructor}
                </p>
                <div className="d-flex justify-content-center align-items-center">
                  {renderStars(course.rating)}
                  <span style={{ marginLeft: '8px', fontWeight: 'bold' }}>{course.rating}</span>
                </div>
                <p className="card-text mt-2">
                  <small>{course.enrollments} Enrollments | {course.duration}</small>
                </p>
                <p className="card-text">
                  <strong>{course.price}</strong>
                </p>
                <div className="mt-3">
                  <div className="progress" style={{ height: '15px' }}>
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: `${course.progress}%`, backgroundColor: '#28a745' }} // Green color
                      aria-valuenow={course.progress}
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      {course.progress}%
                    </div>
                  </div>
                </div>
                <button className="btn btn-success mt-3">Continue Learning</button>
              </div>
            </div>
          </div>
        ))}
        {/* Placeholder for the fourth card */}
        <div className="col-md-3 mb-4" style={{ visibility: 'hidden' }}>
          <div className="card text-center shadow-sm border-light" style={{ borderRadius: '10px', height: '500px', width: '100%' }}>
            {/* Placeholder card can go here if needed */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default YourEnrolledCourses;
