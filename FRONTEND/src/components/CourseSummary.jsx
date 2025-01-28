import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaCheckCircle } from 'react-icons/fa';

const CourseSummary = ({ course, buttonLabel }) => {
  if (!course) return null; // If no course is passed, return null (don't render anything)

  const handleButtonClick = () => {
    if (buttonLabel === 'View') {
      // Logic for viewing the course details
      console.log(`Viewing course: ${course.title}`);
      // You might redirect to a detailed view or open a modal here
    } else if (buttonLabel === 'Enroll Now') {
      // Logic for enrolling in the course
      console.log(`Enrolling in course: ${course.title}`);
      // Add enrollment logic here, such as calling an API or updating state
    }
  };

  return (
    <div className="container mt-4">
      <div className="row g-4 align-items-start">
        {/* Course Image */}
        <div className="col-md-4">
          <img 
            src={course.imageUrl} 
            alt={course.title} 
            className="img-fluid rounded shadow-sm"
            style={{ maxHeight: '300px', width: '100%', objectFit: 'cover' }}
          />
        </div>

        {/* Course Info */}
        <div className="col-md-8">
          <h2 className="fw-bold">{course.title}</h2>
          <div className="mb-2">
            <span className="text-muted">By: {course.instructor}</span> | 
            <span className="ms-2">⭐⭐⭐⭐⭐ ({course.rating}/5)</span>
          </div>
          <p className="text-secondary">{course.description}</p>

          {/* Course Additional Info */}
          <p className="text-muted mb-1">
            <strong>Duration:</strong> {course.duration}
          </p>
          <p className="text-muted">
            <strong>Launched:</strong> {course.launchDate}
          </p>

          {/* Enroll Button */}
          <button className="btn btn-primary" onClick={handleButtonClick}>
            {buttonLabel} {/* Dynamic button label */}
          </button>
        </div>
      </div>

      {/* This Course Includes and What You'll Learn Sections */}
      <div className="card mt-4 shadow-sm">
        <div className="card-body">
          <h4 className="card-title">This Course Includes:</h4>
          <div className="row mb-3">
            {course.includes.map((item, index) => (
              <div className="col-md-4 mb-3" key={index}>
                <div className="text-center">
                  <div style={{ fontSize: '24px' }}>
                    {item.icon}
                  </div>
                  <p className="card-text">{item.text}</p>
                </div>
              </div>
            ))}
          </div>

          <h4 className="mt-4">What You'll Learn:</h4>
          <div className="row">
            {course.learnings.map((item, index) => (
              <div className="col-md-6 mb-2" key={index}>
                <div className="d-flex align-items-center">
                  <FaCheckCircle className="text-success me-2" />
                  <span>{item}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Course Content Section */}
      <div className="card mt-4 shadow-sm">
        <div className="card-body">
          <h4 className="card-title">Course Content:</h4>
          <ul className="list-group">
            {course.contents.map((content, index) => (
              <li className="list-group-item" key={index}>{content}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CourseSummary;
