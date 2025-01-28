import React, { useState, useEffect } from 'react';
import CourseCategorizer from './CourseCategorizer'; // Import the CourseCategorizer component

const categorizeCourse = (courseContent) => {
  const domains = {
    WebDev: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express', 'Frontend', 'Backend'],
    React: ['React', 'JSX', 'Components', 'Props', 'Hooks'],
    MachineLearning: ['Machine Learning', 'Data', 'Neural Networks', 'AI', 'Regression', 'Classification'],
    C: ['C', 'C++', 'Pointers', 'Memory Management', 'Data Structures'],
    Java: ['Java', 'OOP', 'Spring', 'JDBC', 'JavaFX'],
    Python: ['Python', 'Django', 'Flask', 'Pandas', 'NumPy', 'Machine Learning'],
    SQL: ['SQL', 'Database', 'Queries', 'MySQL', 'PostgreSQL', 'Data Manipulation'],
    DigitalMarketing: ['Digital Marketing', 'SEO', 'Social Media Marketing'],
    GraphicDesign: ['Graphic Design', 'Adobe','Design Principles','Color Theory']
  };

  const contentLower = courseContent.toLowerCase();

  for (const [category, keywords] of Object.entries(domains)) {
    if (keywords.some(keyword => contentLower.includes(keyword.toLowerCase()))) {
      return category;
    }
  }

  return 'Other';
};

const DomainCategorizer = ({ courses, expectedSkill, recommendationLevel }) => {
  const [courseCategories, setCourseCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    setLoading(true);
    setError('');

    try {
      const allCourses = [
        ...courses.others,
        ...courses.machineLearning,
        ...courses.development,
      ];

      // Print all courses
      console.log('All Courses:');
      allCourses.forEach(course => {
        console.log(course);
      });

      // Categorize all courses
      const categorizedCourses = allCourses.map(course => {
        const courseContent = course.contents.join('. ');
        const category = categorizeCourse(courseContent);
        return { ...course, category };
      });

      // Filter courses based on the expected skill
      const filteredCourses = categorizedCourses.filter(course => 
        Array.isArray(expectedSkill) 
          ? expectedSkill.includes(course.category) 
          : course.category === expectedSkill
      );

      setCourseCategories(filteredCourses);

      // Print categorized courses one by one
      console.log('Categorized and Filtered Courses:');
      filteredCourses.forEach(course => {
        console.log(course);
      });
    } catch (error) {
      console.error('Error:', error); // Log error details
      setError('Failed to categorize the courses');
    }

    setLoading(false);
  }, [courses, expectedSkill]);

  return (
    <div className="container">
      {loading && <p>Loading...</p>}
      {error && <p className="text-danger">{error}</p>}

      {/* Pass the filtered courses to CourseCategorizer */}
      <CourseCategorizer 
        courses={courseCategories} 
        level={recommendationLevel} 
      />
    </div>
  );
};

export default DomainCategorizer;
