import React from "react";
import { useState, useContext } from "react";
import reactForBeginnersImg from "../assets/React_For_Beginners1.jpeg"; 
import BasicWebDev from "../assets/Web_Development_Bootcamp_Basic.jpeg"; 
import AdvancedWebDev from "../assets/Web_Development_Bootcamp_Advanced.jpeg"; 
import NodeJs from "../assets/Nodejs_Crash_Course2.jpeg"; 
import FullStack from "../assets/Full_Stack_Development1.png"; 
import AdvancedMachineLearning from "../assets/Machine_Learning2.jpg"; 
import IntermediateMachineLearning from "../assets/Machine_Learning_Intermediate.jpg"; 
import DeepLearning from "../assets/Deep_Learning1.jpeg"; 
import PythonDataScience from "../assets/PythonDataScience1.jpeg"; 
import PythonDataScience1 from "../assets/PythonDataScience3.jpeg"; 
import MachineLearning_A_Z from "../assets/Machine_Learning.jpg"; 
import JavascriptAdvanced from "../assets/javascript_advanced.jpeg"; 
import DigitalMarketing from "../assets/Digital_Marketing2.jpeg"; 
import GraphicDesign from "../assets/Graphic_Design2.jpeg"; 
import CSSMastery from "../assets/CSS_Mastery.jpeg"; 
import Footer from "./Footer";
import Header from "./Header";
import ExploreMoreCourses from "./ExploreMoreCourses";
import YourEnrolledCourses from "./YourEnrolledCourses";
import CourseSummary from "./CourseSummary";
import DomainCategorizer from "./DomainCategorizer";
import { SkillsContext } from "../context/SkillsContext";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  FaVideo,
  FaBook,
  FaClipboardList,
  FaMobileAlt,
  FaCertificate,
  FaCodeBranch,
  FaCheckCircle,
} from "react-icons/fa";

function Courses() {
  const courses = {
    EnrolledCourse: [
      {
        title: "Web Development Bootcamp (Basic)",
        instructor: "John Doe",
        rating: 4.5,
        enrollments: 1200,
        duration: "6 weeks",
        price: "₹1,499",
        imageUrl: BasicWebDev, // Use imported image
        label: "New",
        labelStyle: { backgroundColor: "#28a745" },
        progress: 75, // Progress percentage
        name: "Complete Web Development Bootcamp",
        description: `Unlock your potential with our Complete Web Development Bootcamp. With 62+ hours of expertly crafted content, this course takes you from beginner to full-stack developer, equipping you with the latest tools and technologies used by top companies like Apple and Google. Join over a million students who have transformed their careers and start building real-world projects today!`,
        contents: [
          "Introduction to HTML & Basic Structure",
          "Styling with CSS: Selectors, Properties, and Layouts",
          "JavaScript Basics: Variables, Functions, and Events",
          "Building Simple Interactive Web Pages",
          "Responsive Design Fundamentals",
          "Introduction to Web Hosting and Deployment",
          "Project: Build Your First Static Website",
        ],
        launchDate: "January 2024",
        includes: [
          { text: "61 hours on-demand video", icon: <FaVideo /> },
          { text: "7 coding exercises", icon: <FaCodeBranch /> },
          { text: "65 articles", icon: <FaBook /> },
          { text: "194 downloadable resources", icon: <FaClipboardList /> },
          { text: "Access on mobile and TV", icon: <FaMobileAlt /> },
          { text: "Certificate of completion", icon: <FaCertificate /> },
        ],
        learnings: [
          "Build web development projects for your portfolio.",
          "Learn the latest technologies, including Javascript and React.",
          "After the course, you will be able to build websites.",
          "Work as a freelance web developer.",
          "Master frontend and backend development.",
          "Create responsive designs for various devices.",
          "Understand RESTful API concepts.",
          "Use Git for version control.",
        ],
      },
      {
        title: "React for Beginners",
        instructor: "Jane Smith",
        rating: 4.7,
        enrollments: 900,
        duration: "4 weeks",
        price: "₹1,999",
        imageUrl: reactForBeginnersImg, // Use imported image
        label: "",
        progress: 40, // Progress percentage
        name: "Complete React for Beginners",
        description: `Dive into the world of React and master the fundamentals of building interactive user interfaces. This course covers everything from component-based architecture to state management with hooks. Perfect for anyone looking to start a career in web development or enhance their existing skills!`,
        contents: [
          "React Fundamentals",
          "JSX and Rendering Elements",
          "Components and Props",
          "State and Lifecycle",
          "Handling Events",
          "Conditional Rendering",
          "Lists and Keys",
          "Forms",
          "Lifting State Up",
          "Composition vs Inheritance",
        ],
        launchDate: "February 2024",
        includes: [
          { text: "25 hours on-demand video", icon: <FaVideo /> },
          { text: "5 coding exercises", icon: <FaCodeBranch /> },
          { text: "20 articles", icon: <FaBook /> },
          { text: "50 downloadable resources", icon: <FaClipboardList /> },
          { text: "Access on mobile and TV", icon: <FaMobileAlt /> },
          { text: "Certificate of completion", icon: <FaCertificate /> },
        ],
        learnings: [
          "Understand the React component lifecycle.",
          "Build single-page applications using React.",
          "Manage state using React hooks.",
          "Implement routing in React applications.",
          "Use props effectively to pass data.",
          "Optimize performance in React applications.",
        ],
      },
      {
        title: "Node.js Crash Course",
        instructor: "Alice Johnson",
        rating: 4.4,
        enrollments: 500,
        duration: "3 weeks",
        price: "₹999",
        imageUrl: NodeJs, // Use imported image
        label: "",
        progress: 20, // Progress percentage
        name: "Complete Node.js Crash Course",
        description: `Get up to speed with Node.js in this comprehensive crash course. You'll learn about server-side programming, working with databases, and building RESTful APIs with Express. Ideal for developers who want to extend their skills into back-end development!`,
        contents: [
          "Introduction to Node.js",
          "NPM and Package Management",
          "Building a Simple Server",
          "Express.js Framework",
          "RESTful API Development",
          "Connecting to MongoDB",
          "Authentication and Authorization",
          "Error Handling",
          "Deployment",
        ],
        launchDate: "March 2024",
        includes: [
          { text: "30 hours on-demand video", icon: <FaVideo /> },
          { text: "10 coding exercises", icon: <FaCodeBranch /> },
          { text: "15 articles", icon: <FaBook /> },
          { text: "25 downloadable resources", icon: <FaClipboardList /> },
          { text: "Access on mobile and TV", icon: <FaMobileAlt /> },
          { text: "Certificate of completion", icon: <FaCertificate /> },
        ],
        learnings: [
          "Understand the Node.js environment.",
          "Build a full-fledged RESTful API.",
          "Handle databases using Mongoose.",
          "Implement user authentication in Node.js.",
          "Deploy Node.js applications.",
        ],
      },
    ],

    development: [
      {
        title: "Web Development Bootcamp (Advanced)",
        instructor: "John Doe",
        rating: 4.5,
        enrollments: 1200,
        duration: "6 weeks",
        price: "₹1,499",
        imageUrl: AdvancedWebDev, // Placeholder image
        label: "New",
        labelStyle: { backgroundColor: "#28a745" },
        name: "Complete Web Development Bootcamp",
        description: `Unlock your potential with our Complete Web Development Bootcamp. With 62+ hours of expertly crafted content, this course takes you from beginner to full-stack developer, equipping you with the latest tools and technologies used by top companies like Apple and Google. Join over a million students who have transformed their careers and start building real-world projects today!`,
        contents: [
          "HTML 5",
          "CSS 3",
          "JavaScript ES6",
          "React.js",
          "Node.js",
          "Express.js",
          "MongoDB",
          "RESTful APIs",
          "Version Control with Git",
          "Responsive Web Design",
        ],
        launchDate: "January 2024",
        includes: [
          { text: "61 hours on-demand video", icon: <FaVideo /> },
          { text: "7 coding exercises", icon: <FaCodeBranch /> },
          { text: "65 articles", icon: <FaBook /> },
          { text: "194 downloadable resources", icon: <FaClipboardList /> },
          { text: "Access on mobile and TV", icon: <FaMobileAlt /> },
          { text: "Certificate of completion", icon: <FaCertificate /> },
        ],
        learnings: [
          "Build web development projects for your portfolio.",
          "Learn the latest technologies, including Javascript and React.",
          "After the course, you will be able to build websites.",
          "Work as a freelance web developer.",
          "Master frontend and backend development.",
          "Create responsive designs for various devices.",
          "Understand RESTful API concepts.",
          "Use Git for version control.",
        ],
      },
      {
        title: "React for Beginners",
        instructor: "Jane Smith",
        rating: 4.7,
        enrollments: 900,
        duration: "4 weeks",
        price: "₹1,999",
        imageUrl: reactForBeginnersImg, // Placeholder image
        label: "",
        name: "Complete React for Beginners",
        description: `Dive into the world of React and master the fundamentals of building interactive user interfaces. This course covers everything from component-based architecture to state management with hooks. Perfect for anyone looking to start a career in web development or enhance their existing skills!`,
        contents: [
          "React Fundamentals",
          "JSX and Rendering Elements",
          "Components and Props",
          "State and Lifecycle",
          "Handling Events",
          "Conditional Rendering",
          "Lists and Keys",
          "Forms",
          "Lifting State Up",
          "Composition vs Inheritance",
        ],
        launchDate: "February 2024",
        includes: [
          { text: "25 hours on-demand video", icon: <FaVideo /> },
          { text: "5 coding exercises", icon: <FaCodeBranch /> },
          { text: "20 articles", icon: <FaBook /> },
          { text: "50 downloadable resources", icon: <FaClipboardList /> },
          { text: "Access on mobile and TV", icon: <FaMobileAlt /> },
          { text: "Certificate of completion", icon: <FaCertificate /> },
        ],
        learnings: [
          "Understand the React component lifecycle.",
          "Build single-page applications using React.",
          "Manage state using React hooks.",
          "Implement routing in React applications.",
          "Use props effectively to pass data.",
          "Optimize performance in React applications.",
        ],
      },
      {
        title: "Node.js Crash Course",
        instructor: "Alice Johnson",
        rating: 4.4,
        enrollments: 500,
        duration: "3 weeks",
        price: "₹999",
        imageUrl: NodeJs, // Placeholder image
        label: "",
        name: "Complete Node.js Crash Course",
        description: `Get up to speed with Node.js in this comprehensive crash course. You'll learn about server-side programming, working with databases, and building RESTful APIs with Express. Ideal for developers who want to extend their skills into back-end development!`,
        contents: [
          "Introduction to Node.js",
          "NPM and Package Management",
          "Building a Simple Server",
          "Express.js Framework",
          "RESTful API Development",
          "Connecting to MongoDB",
          "Authentication and Authorization",
          "Error Handling",
          "Deployment",
        ],
        launchDate: "March 2024",
        includes: [
          { text: "30 hours on-demand video", icon: <FaVideo /> },
          { text: "10 coding exercises", icon: <FaCodeBranch /> },
          { text: "15 articles", icon: <FaBook /> },
          { text: "25 downloadable resources", icon: <FaClipboardList /> },
          { text: "Access on mobile and TV", icon: <FaMobileAlt /> },
          { text: "Certificate of completion", icon: <FaCertificate /> },
        ],
        learnings: [
          "Understand the Node.js environment.",
          "Build a full-fledged RESTful API.",
          "Handle databases using Mongoose.",
          "Implement user authentication in Node.js.",
          "Deploy Node.js applications.",
        ],
      },
      {
        title: "Full Stack Development",
        instructor: "Bob Brown",
        rating: 4.6,
        enrollments: 1100,
        duration: "8 weeks",
        price: "₹2,499",
        imageUrl: FullStack, // Placeholder image
        label: "",
        name: "Complete Full Stack Development",
        description: `Master the art of full-stack development by learning both front-end and back-end technologies. This course provides a holistic understanding of the development process, from building responsive user interfaces to creating robust server-side applications.`,
        contents: [
          "Frontend Technologies (HTML, CSS, JS)",
          "React.js for Frontend Development",
          "Node.js and Express for Backend Development",
          "Database Management with MongoDB",
          "RESTful APIs",
          "Authentication and Security",
          "Deployment Strategies",
          "Responsive Design Principles",
          "Version Control with Git",
        ],
        launchDate: "April 2024",
        includes: [
          { text: "80 hours on-demand video", icon: <FaVideo /> },
          { text: "15 coding exercises", icon: <FaCodeBranch /> },
          { text: "75 articles", icon: <FaBook /> },
          { text: "150 downloadable resources", icon: <FaClipboardList /> },
          { text: "Access on mobile and TV", icon: <FaMobileAlt /> },
          { text: "Certificate of completion", icon: <FaCertificate /> },
        ],
        learnings: [
          "Build a complete web application.",
          "Implement both client-side and server-side programming.",
          "Work with databases effectively.",
          "Deploy full-stack applications.",
          "Gain expertise in various technologies.",
        ],
      },
    ],
    machineLearning: [
      {
        title: "Introduction to Machine Learning (Advanced)",
        instructor: "Dr. Sarah Lee",
        rating: 4.8,
        enrollments: 2000,
        duration: "5 weeks",
        price: "₹2,999",
        imageUrl: AdvancedMachineLearning, // Placeholder image
        label: "Popular",
        labelStyle: { backgroundColor: "#007bff" },
        progress: 85, // Progress percentage
        name: "Complete Introduction to Machine Learning",
        description: `Take your machine learning skills to the next level with this advanced course, designed for those who have a solid understanding of basic machine learning concepts. Dive deep into complex algorithms, advanced model evaluation techniques, and cutting-edge neural network architectures. Gain hands-on experience with sophisticated tools and libraries to tackle real-world challenges and push the boundaries of what machine learning can do.`,
        contents: [
          "Advanced Supervised Learning Techniques",
          "Deep Learning and Neural Network Architectures",
          "Unsupervised Learning at Scale (Clustering, Dimensionality Reduction)",
          "Model Optimization and Hyperparameter Tuning",
          "Advanced Feature Engineering Strategies",
          "Reinforcement Learning Fundamentals",
          "Transfer Learning and Pretrained Models",
          "Ethical Considerations in Machine Learning",
          "Practical Applications and Case Studies in Industry",
        ],
        launchDate: "January 2024",
        includes: [
          { text: "30 hours on-demand video", icon: <FaVideo /> },
          { text: "5 coding exercises", icon: <FaCodeBranch /> },
          { text: "20 articles", icon: <FaBook /> },
          { text: "35 downloadable resources", icon: <FaClipboardList /> },
          { text: "Access on mobile and TV", icon: <FaMobileAlt /> },
          { text: "Certificate of completion", icon: <FaCertificate /> },
        ],
        learnings: [
          "Understand the core concepts of machine learning.",
          "Implement machine learning algorithms using Python.",
          "Conduct data preprocessing for better model performance.",
          "Evaluate and tune machine learning models.",
          "Apply machine learning techniques to real-world problems.",
        ],
      },
      {
        title: "Deep Learning Specialization",
        instructor: "Dr. Mike Green",
        rating: 4.9,
        enrollments: 1500,
        duration: "10 weeks",
        price: "₹3,499",
        imageUrl: DeepLearning, // Placeholder image
        label: "Trending",
        progress: 90, // Progress percentage
        name: "Complete Deep Learning Specialization",
        description: `Master the techniques of deep learning in this detailed specialization course. Covering topics from neural networks to convolutional networks, this course provides you with the skills needed to build cutting-edge machine learning models. Ideal for those looking to excel in AI and machine learning!`,
        contents: [
          "Neural Networks Basics",
          "Forward and Backward Propagation",
          "Convolutional Neural Networks",
          "Recurrent Neural Networks",
          "Natural Language Processing",
          "Deep Learning for Time Series Analysis",
          "Model Deployment Strategies",
          "Real-world Applications of Deep Learning",
        ],
        launchDate: "February 2024",
        includes: [
          { text: "50 hours on-demand video", icon: <FaVideo /> },
          { text: "15 coding exercises", icon: <FaCodeBranch /> },
          { text: "40 articles", icon: <FaBook /> },
          { text: "100 downloadable resources", icon: <FaClipboardList /> },
          { text: "Access on mobile and TV", icon: <FaMobileAlt /> },
          { text: "Certificate of completion", icon: <FaCertificate /> },
        ],
        learnings: [
          "Build and train deep learning models using TensorFlow.",
          "Understand advanced concepts of neural networks.",
          "Apply deep learning techniques in various domains.",
          "Develop skills in natural language processing and computer vision.",
          "Optimize and deploy deep learning models.",
        ],
      },
      {
        title: "Data Science with Python",
        instructor: "Emma White",
        rating: 4.4,
        enrollments: 1300,
        duration: "7 weeks",
        price: "₹1,799",
        imageUrl: PythonDataScience, // Placeholder image
        label: "",
        progress: 70, // Progress percentage
        name: "Complete Data Science with Python",
        description: `Learn how to manipulate data and perform analysis using Python in this engaging course. You will explore libraries like Pandas, NumPy, and Matplotlib to become proficient in data science. A perfect choice for anyone looking to work in data analysis or data science!`,
        contents: [
          "Introduction to Data Science",
          "Python for Data Analysis",
          "Data Visualization Techniques",
          "Exploratory Data Analysis",
          "Data Wrangling with Pandas",
          "Statistical Analysis",
          "Machine Learning with Scikit-learn",
          "Project: Real-world Data Science Case Study",
        ],
        launchDate: "March 2024",
        includes: [
          { text: "40 hours on-demand video", icon: <FaVideo /> },
          { text: "10 coding exercises", icon: <FaCodeBranch /> },
          { text: "30 articles", icon: <FaBook /> },
          { text: "75 downloadable resources", icon: <FaClipboardList /> },
          { text: "Access on mobile and TV", icon: <FaMobileAlt /> },
          { text: "Certificate of completion", icon: <FaCertificate /> },
        ],
        learnings: [
          "Master data analysis techniques using Python.",
          "Visualize complex data insights.",
          "Apply statistical methods for data interpretation.",
          "Implement machine learning algorithms for predictions.",
          "Build a portfolio of data science projects.",
        ],
      },
      {
        title: "Machine Learning A-Z",
        instructor: "David Blue",
        rating: 4.6,
        enrollments: 1800,
        duration: "8 weeks",
        price: "₹2,299",
        imageUrl: MachineLearning_A_Z, // Placeholder image
        label: "Recommended",
        progress: 75, // Progress percentage
        name: "Complete Machine Learning A-Z",
        description: `This comprehensive course guides you through the entire machine learning process from data collection to model deployment. You will learn how to work with real datasets and implement various algorithms for classification and regression. Perfect for beginners and experienced practitioners alike!`,
        contents: [
          "Introduction to Machine Learning",
          "Data Preprocessing and Cleaning",
          "Regression Algorithms",
          "Classification Algorithms",
          "Clustering Techniques",
          "Dimensionality Reduction",
          "Ensemble Learning",
          "Model Deployment",
        ],
        launchDate: "April 2024",
        includes: [
          { text: "45 hours on-demand video", icon: <FaVideo /> },
          { text: "12 coding exercises", icon: <FaCodeBranch /> },
          { text: "50 articles", icon: <FaBook /> },
          { text: "90 downloadable resources", icon: <FaClipboardList /> },
          { text: "Access on mobile and TV", icon: <FaMobileAlt /> },
          { text: "Certificate of completion", icon: <FaCertificate /> },
        ],
        learnings: [
          "Build machine learning models from scratch.",
          "Understand various machine learning algorithms.",
          "Evaluate model performance and accuracy.",
          "Implement data preprocessing and feature engineering.",
          "Gain practical experience with real-world datasets.",
        ],
      },
    ],

    others: [
      {
        title: "Advanced JavaScript",
        instructor: "Sarah Parker",
        rating: 4.9,
        enrollments: 750,
        duration: "5 weeks",
        price: "₹1,799",
        imageUrl: JavascriptAdvanced, // Placeholder image
        label: "",
        name: "Mastering Advanced JavaScript",
        description: `Take your JavaScript skills to the next level with this advanced course. Explore topics such as closures, promises, async/await, and functional programming. Perfect for developers looking to deepen their understanding of JavaScript!`,
        contents: [
          "Understanding Closures",
          "Promises and Async/Await",
          "Functional Programming",
          "JavaScript Design Patterns",
          "ES6 Features",
          "Modules and Namespaces",
          "Error Handling in JavaScript",
          "Working with APIs",
          "Testing JavaScript Applications",
        ],
        launchDate: "May 2024",
        includes: [
          { text: "35 hours on-demand video", icon: <FaVideo /> },
          { text: "12 coding exercises", icon: <FaCodeBranch /> },
          { text: "30 articles", icon: <FaBook /> },
          { text: "60 downloadable resources", icon: <FaClipboardList /> },
          { text: "Access on mobile and TV", icon: <FaMobileAlt /> },
          { text: "Certificate of completion", icon: <FaCertificate /> },
        ],
        learnings: [
          "Understand and implement closures in JavaScript.",
          "Handle asynchronous operations with Promises.",
          "Write functional programming code in JavaScript.",
          "Design reusable components using design patterns.",
          "Utilize modern JavaScript features effectively.",
        ],
      },
      {
        title: "CSS Mastery",
        instructor: "Emma Wilson",
        rating: 4.8,
        enrollments: 650,
        duration: "4 weeks",
        price: "₹1,299",
        imageUrl: CSSMastery, // Placeholder image
        label: "",
        name: "CSS Mastery: From Beginner to Expert",
        description: `Build upon your foundational CSS knowledge and move into intermediate skills. This course covers practical Flexbox and Grid usage, essential responsive design techniques, and CSS transitions that enhance web experiences. Perfect for those looking to bridge the gap between beginner and advanced skills.`,
        contents: [
          "CSS Fundamentals Review",
          "Intermediate Flexbox Layouts",
          "Using CSS Grid for Layouts",
          "Simple Transitions and Animations",
          "Responsive Design Essentials",
          "Basic CSS Preprocessors (Sass) Overview",
          "Core Best Practices for CSS",
          "Introduction to CSS Accessibility",
          "Common Debugging Techniques",
        ],
        launchDate: "June 2024",
        includes: [
          { text: "30 hours on-demand video", icon: <FaVideo /> },
          { text: "8 coding exercises", icon: <FaCodeBranch /> },
          { text: "25 articles", icon: <FaBook /> },
          { text: "45 downloadable resources", icon: <FaClipboardList /> },
          { text: "Access on mobile and TV", icon: <FaMobileAlt /> },
          { text: "Certificate of completion", icon: <FaCertificate /> },
        ],
        learnings: [
          "Build responsive layouts with Flexbox and Grid.",
          "Create stunning animations with CSS.",
          "Implement best practices for writing CSS.",
          "Ensure accessibility in your CSS designs.",
          "Debug and troubleshoot CSS issues effectively.",
        ],
      },
      {
        title: "Python for Data Science",
        instructor: "Michael Scott",
        rating: 4.6,
        enrollments: 800,
        duration: "6 weeks",
        price: "₹1,499",
        imageUrl: PythonDataScience1, // Placeholder image
        label: "",
        name: "Python for Data Science and Machine Learning",
        description: `Discover the power of Python in data science and machine learning. This course covers data manipulation, visualization, and building machine learning models. Ideal for aspiring data scientists!`,
        contents: [
          "Introduction to Python",
          "Data Manipulation with Pandas",
          "Data Visualization with Matplotlib",
          "Introduction to Machine Learning",
          "Building Machine Learning Models",
          "Working with Real-world Datasets",
          "Model Evaluation and Selection",
          "Deployment of Machine Learning Models",
          "Ethics in Data Science",
        ],
        launchDate: "July 2024",
        includes: [
          { text: "40 hours on-demand video", icon: <FaVideo /> },
          { text: "15 coding exercises", icon: <FaCodeBranch /> },
          { text: "35 articles", icon: <FaBook /> },
          { text: "75 downloadable resources", icon: <FaClipboardList /> },
          { text: "Access on mobile and TV", icon: <FaMobileAlt /> },
          { text: "Certificate of completion", icon: <FaCertificate /> },
        ],
        learnings: [
          "Understand the basics of Python programming.",
          "Manipulate data using Pandas.",
          "Visualize data using Matplotlib.",
          "Build and evaluate machine learning models.",
          "Understand ethical considerations in data science.",
        ],
      },
      {
        title: "Introduction to Machine Learning (Intermediate)",
        instructor: "Angela Davis",
        rating: 4.5,
        enrollments: 900,
        duration: "5 weeks",
        price: "₹1,799",
        imageUrl: IntermediateMachineLearning, // Placeholder image
        label: "",
        name: "Introduction to Machine Learning and AI",
        description: `Elevate your machine learning skills with this intermediate-level course. Dive deeper into essential algorithms, practical data handling, and model evaluation strategies that go beyond the basics.`,
        contents: [
          "Review of Fundamental Machine Learning Concepts",
          "Intermediate Supervised and Unsupervised Learning Techniques",
          "Data Preprocessing for Complex Datasets",
          "Exploratory Data Analysis Using Advanced Visualization Tools",
          "Building Intermediate-Level Machine Learning Models",
          "Model Evaluation and Validation Techniques (Cross-Validation, ROC Curves)",
          "Feature Engineering and Selection Strategies",
          "Overfitting Prevention: Regularization and Cross-Validation",
          "Ethical and Societal Implications of Machine Learning",
          "Real-world Applications and Case Studies in Machine Learning",
        ],
        launchDate: "August 2024",
        includes: [
          { text: "35 hours on-demand video", icon: <FaVideo /> },
          { text: "10 coding exercises", icon: <FaCodeBranch /> },
          { text: "30 articles", icon: <FaBook /> },
          { text: "50 downloadable resources", icon: <FaClipboardList /> },
          { text: "Access on mobile and TV", icon: <FaMobileAlt /> },
          { text: "Certificate of completion", icon: <FaCertificate /> },
        ],
        learnings: [
          "Understand the fundamentals of machine learning.",
          "Implement various types of machine learning algorithms.",
          "Preprocess data for machine learning tasks.",
          "Evaluate machine learning models effectively.",
          "Explore ethical issues related to AI.",
        ],
      },
      {
        title: "Web Development Bootcamp (Basic)",
        instructor: "Alice Johnson",
        rating: 4.7,
        enrollments: 1200,
        duration: "10 weeks",
        price: "₹2,499",
        imageUrl: BasicWebDev, // Placeholder image
        label: "",
        name: "The Complete Web Development Bootcamp",
        description: `Start your journey in web development with this beginner-friendly course. Learn essential skills in HTML, CSS, and JavaScript to create simple, static websites. This course is perfect for those new to coding and eager to build foundational web development skills.`,
        contents: [
          "Introduction to HTML & Basic Structure",
          "Styling with CSS: Selectors, Properties, and Layouts",
          "JavaScript Basics: Variables, Functions, and Events",
          "Building Simple Interactive Web Pages",
          "Responsive Design Fundamentals",
          "Introduction to Web Hosting and Deployment",
          "Project: Build Your First Static Website",
        ],

        launchDate: "September 2024",
        includes: [
          { text: "60 hours on-demand video", icon: <FaVideo /> },
          { text: "20 coding exercises", icon: <FaCodeBranch /> },
          { text: "50 articles", icon: <FaBook /> },
          { text: "100 downloadable resources", icon: <FaClipboardList /> },
          { text: "Access on mobile and TV", icon: <FaMobileAlt /> },
          { text: "Certificate of completion", icon: <FaCertificate /> },
        ],
        learnings: [
          "Master the fundamentals of web development.",
          "Build responsive and interactive web applications.",
          "Understand backend development concepts.",
          "Work with databases and APIs.",
          "Deploy your applications to the web.",
        ],
      },
      {
        title: "Digital Marketing Essentials",
        instructor: "Sophia Lee",
        rating: 4.8,
        enrollments: 500,
        duration: "6 weeks",
        price: "₹1,199",
        imageUrl: DigitalMarketing, // Placeholder image
        label: "",
        name: "Digital Marketing: From Basics to Advanced",
        description: `Learn the fundamentals of digital marketing in this comprehensive course. Discover SEO, content marketing, social media strategies, and analytics to boost your online presence.`,
        contents: [
          "Introduction to Digital Marketing",
          "SEO Basics",
          "Content Marketing Strategies",
          "Social Media Marketing",
          "Email Marketing Techniques",
          "Understanding Google Analytics",
          "Pay-Per-Click Advertising",
          "Building a Digital Marketing Plan",
          "Case Studies and Best Practices",
        ],
        launchDate: "October 2024",
        includes: [
          { text: "40 hours on-demand video", icon: <FaVideo /> },
          { text: "15 coding exercises", icon: <FaCodeBranch /> },
          { text: "30 articles", icon: <FaBook /> },
          { text: "60 downloadable resources", icon: <FaClipboardList /> },
          { text: "Access on mobile and TV", icon: <FaMobileAlt /> },
          { text: "Certificate of completion", icon: <FaCertificate /> },
        ],
        learnings: [
          "Understand the key concepts of digital marketing.",
          "Implement effective SEO strategies.",
          "Create compelling content for online platforms.",
          "Analyze and measure marketing effectiveness.",
          "Develop a comprehensive digital marketing strategy.",
        ],
      },
      {
        title: "Graphic Design Basics",
        instructor: "Mark Brown",
        rating: 4.5,
        enrollments: 400,
        duration: "5 weeks",
        price: "₹1,499",
        imageUrl: GraphicDesign, // Placeholder image
        label: "",
        name: "Introduction to Graphic Design",
        description: `Explore the world of graphic design in this beginner-friendly course. Learn about design principles, color theory, and tools like Adobe Illustrator and Photoshop.`,
        contents: [
          "Design Principles",
          "Color Theory",
          "Typography Basics",
          "Using Adobe Illustrator",
          "Using Adobe Photoshop",
          "Creating Logos and Branding",
          "Layout Design Techniques",
          "Portfolio Development",
          "Design Projects",
        ],
        launchDate: "November 2024",
        includes: [
          { text: "30 hours on-demand video", icon: <FaVideo /> },
          { text: "10 design projects", icon: <FaCodeBranch /> },
          { text: "25 articles", icon: <FaBook /> },
          { text: "40 downloadable resources", icon: <FaClipboardList /> },
          { text: "Access on mobile and TV", icon: <FaMobileAlt /> },
          { text: "Certificate of completion", icon: <FaCertificate /> },
        ],
        learnings: [
          "Understand fundamental design principles.",
          "Work effectively with color and typography.",
          "Master essential graphic design tools.",
          "Create a diverse portfolio of design projects.",
          "Develop your unique design style.",
        ],
      },
    ],
  };

  const { interestedSkills } = useContext(SkillsContext); // Use the context
  const { recommendationLevel } = useContext(SkillsContext); // Use the context to get recommendationLevel

  const [selectedCourse, setSelectedCourse] = useState(null); // State to hold the selected course

  const handleCourseSelect = (course, source) => {
    setSelectedCourse({ ...course, source }); // Update the state with the selected course and its source
  };

  // Print all courses

  return (
    <>
      {/* {console.log(recommendationLevel)} */}
      <Header />
      {!selectedCourse ? (
        <>
          <YourEnrolledCourses
            courses={courses}
            onCourseSelect={(course) => handleCourseSelect(course, "enrolled")} //
          />
          <DomainCategorizer
            courses={courses}
            expectedSkill={interestedSkills} // Pass interestedSkills as a prop
            recommendationLevel={recommendationLevel}
          />
          <ExploreMoreCourses
            courses={courses}
            onCourseSelect={(course) => handleCourseSelect(course, "explore")} //
          />
        </>
      ) : (
        <CourseSummary
          course={selectedCourse}
          buttonLabel={
            selectedCourse.source === "enrolled" ? "View" : "Enroll Now"
          }
        />
      )}
      <Footer />
    </>
  );
}

export default Courses;
