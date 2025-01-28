import reactForBeginnersImg from '../assets/react_for_beginners.jpg';
import MachineLearing from '../assets/Machine_Learning.jpg';
import PythonDataScience from '../assets/PythonDataScience1.jpeg';
import JavascriptAdvanced from '../assets/javascript_advanced.jpeg';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa'; 

const PopularCourses = () => {
  const courses = [
    {
      title: 'React for Beginners',
      instructor: 'Jane Doe',
      description: 'Learn the basics of React and build interactive web apps.',
      rating: 4.5,
      enrollments: '1200',
      duration: '6 hours',
      price: '$49',
      imageUrl: reactForBeginnersImg, // Replace with actual image URLs
      label: 'Best Seller', // Updated label for the course
      labelStyle: { backgroundColor: 'green' } // Added style for Best Seller label
    },
    {
      title: 'Python Data Science',
      instructor: 'John Smith',
      description: 'Master data analysis with Python and its libraries.',
      rating: 4.8,
      enrollments: '1500',
      duration: '8 hours',
      price: '$59',
      imageUrl: PythonDataScience, // Replace with actual image URLs
      label: 'New Release', // Updated label for the course
      labelStyle: { backgroundColor: 'red' } // Added style for New Release label
    },
    {
      title: 'Advanced JavaScript',
      instructor: 'Alice Johnson',
      description: 'Dive deeper into JavaScript and learn advanced concepts.',
      rating: 4.7,
      enrollments: '900',
      duration: '7 hours',
      price: '$39',
      imageUrl: JavascriptAdvanced, // Replace with actual image URLs
    },
    {
      title: 'Machine Learning A-Z',
      instructor: 'Bob Lee',
      description: 'Learn machine learning from scratch with practical examples.',
      rating: 4.5,
      enrollments: '1800',
      duration: '10 hours',
      price: '$99',
      imageUrl: MachineLearing, // Replace with actual image URLs
    },
  ];

  // Function to render stars based on rating
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

  return (
    <div className="container " style={{ maxWidth: '1455px', marginTop: '145px', marginBottom: '65px' }}>
      <h2 className="text-center mb-5" style={{ fontSize: '2.5rem', marginBottom: '40px' }}>
        Explore Our Popular Courses
      </h2>
      <div className="row">
        {courses.map((course, index) => (
          <div className="col-md-3 mb-4" key={index}>
            <div className="card text-center shadow-sm border-light" style={{ borderRadius: '10px', position: 'relative' }}>
              {/* Badge at the top of the card */}
              {course.label && (
                <div className="badge text-white" style={{ position: 'absolute', top: '10px', left: '10px', ...course.labelStyle }}>
                  {course.label}
                </div>
              )}
              <img
                src={course.imageUrl}
                alt={course.title}
                className="card-img-top"
                style={{ height: '200px', objectFit: 'cover', borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }} // Adjust height as needed
              />
              <div className="card-body">
                <h5 className="card-title" style={{ fontSize: '1.75rem', fontWeight: 'bold' }}>{course.title}</h5>
                <h6 className="card-subtitle mb-2 text-muted" style={{ fontSize: '1.2rem' }}>{course.instructor}</h6>
                <p className="card-text" style={{ fontSize: '1rem' }}>{course.description}</p>
                <p style={{ fontSize: '1rem' }}>
                  <strong>Rating:</strong> {renderStars(course.rating)} <span>({course.rating})</span> | <strong>Enrollments:</strong> {course.enrollments}
                </p>
                <p style={{ fontSize: '1rem' }}>
                  <strong>Duration:</strong> {course.duration} | <strong>Price:</strong> {course.price}
                </p>
                <a href="#" className="btn btn-primary">Enroll Now</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularCourses;
