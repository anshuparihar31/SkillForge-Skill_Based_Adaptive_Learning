import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa'; // Importing star icons

const CourseCategorizer = ({ courses, level }) => {
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const categorizeCourses = async () => {
      setLoading(true);
      setError('');
      try {
        const results = await Promise.all(
          courses.map(async (course) => {
            const courseContent = course.contents.join('. '); // Join the content array into a single string

            const response = await axios.post('http://localhost:3001/categorize', {
              content: courseContent,
            });

            return {
              ...course,
              category: response.data.category,
              error: null,
            };
          })
        );

        // Print all courses with their categories
        console.log('All Courses with Categories:');
        results.forEach((course) => {
          console.log(`Title: ${course.title}, Category: ${course.category}`);
        });

        // Filter courses that match the specified level
        const advancedCourses = results.filter((course) => course.category === level);
        setFilteredCourses(advancedCourses);

        // Print filtered courses only if there are any
        if (advancedCourses.length > 0) {
          console.log('Filtered Courses (One by One):');
          advancedCourses.forEach((course) => {
            console.log(`Title: ${course.title}, Category: ${course.category}`);
          });
        }
      } catch (err) {
        setError('Failed to categorize the courses');
      }
      setLoading(false);
    };

    categorizeCourses();
  }, [courses]);

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

  const renderCourseCard = (course) => (
    <div className="col-md-3 mb-4" key={course.title}>
      <div className="card text-center shadow-sm border-light" style={{ borderRadius: '10px', height: '500px', position: 'relative' }}>
        {course.label && (
          <span
            className="badge"
            style={{ position: 'absolute', top: '10px', right: '10px', backgroundColor: course.labelStyle?.backgroundColor }}
          >
            {course.label}
          </span>
        )}
        <img
          src={course.imageUrl}
          alt={course.title}
          className="card-img-top"
          style={{
            height: '200px',
            objectFit: 'cover',
            borderTopLeftRadius: '10px',
            borderTopRightRadius: '10px',
            cursor: 'pointer',
          }}
        />
        <div className="card-body">
          <h5 className="card-title" style={{ cursor: 'pointer' }}>
            {course.title}
          </h5>
          <p className="card-text">
            <strong>Instructor:</strong> {course.instructor}
          </p>
          <div className="d-flex justify-content-center align-items-center mb-2">
            {renderStars(course.rating)}
            <span style={{ marginLeft: '8px', fontWeight: 'bold' }}>{course.rating}</span>
          </div>
          <p className="card-text mt-2">
            <small>
              {course.enrollments} Enrollments | {course.duration}
            </small>
          </p>
          <p className="card-text">
            <strong>{course.price}</strong>
          </p>
          <button className="btn btn-primary">Enroll Now</button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="container">
      <h2
        className="text-left mb-4"
        style={{
          fontSize: '2rem',
          marginBottom: '30px',
          fontFamily: 'Verdana, sans-serif',
        }}
      >
        Recommended Courses
      </h2>
      {loading && <p>Loading...</p>}
      {error && <p className="text-danger">{error}</p>}
      {filteredCourses.length > 0 ? (
        <div className="row mb-5">{filteredCourses.map(renderCourseCard)}</div>
      ) : (
        <p>No courses found for the selected level.</p>
      )}
    </div>
  );
};

export default CourseCategorizer;
