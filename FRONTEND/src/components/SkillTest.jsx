import React, { useState, useContext } from 'react';
import '../SkillAssessment.css';
import { SkillsContext } from "../context/SkillsContext";

const SkillTest = () => {
  const { setRecommendationLevel } = useContext(SkillsContext);

  const [selectedDomain, setSelectedDomain] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showQuiz, setShowQuiz] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [answers, setAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [randomQuestions, setRandomQuestions] = useState([]);
  const [recommendationLevel, setLocalRecommendationLevel] = useState('');

  const domains = [
    { name: 'Web Development', description: 'HTML, CSS, JavaScript, React' },
    { name: 'Data Science', description: 'Python, Machine Learning, Data Analysis' },
    { name: 'Cybersecurity', description: 'Network Security, Ethical Hacking' },
    { name: 'DevOps', description: 'CI/CD, Jenkins, Kubernetes' },
  ];


  const quizData = {
    'Web Development': {
    Basic: [
      { question: 'What does HTML stand for?', options: ['HyperText Markup Language', 'Home Tool Markup Language', 'Hyperlinks Text Markup Language'], correct: 'HyperText Markup Language' },
      { question: 'Which tag is used to insert an image in HTML?', options: ['<img>', '<image>', '<src>'], correct: '<img>' },
      { question: 'What is the purpose of the <head> tag in HTML?', options: ['To contain metadata about the document', 'To display content on the webpage', 'To style elements'], correct: 'To contain metadata about the document' },
      { question: 'What CSS property is used to change the background color?', options: ['background-color', 'color', 'font-color'], correct: 'background-color' },
      { question: 'Which tag is used for line breaks in HTML?', options: ['<br>', '<lb>', '<break>'], correct: '<br>' },
      { question: 'What does CSS stand for?', options: ['Cascading Style Sheets', 'Colorful Style Sheets', 'Creative Style Sheets'], correct: 'Cascading Style Sheets' },
      { question: 'Which HTML attribute specifies an alternate text for an image?', options: ['alt', 'src', 'title'], correct: 'alt' },
      { question: 'How do you make text bold in HTML?', options: ['<b>', '<bold>', '<strong>'], correct: '<b>' },
      { question: 'What HTML element is used for the largest heading?', options: ['<h1>', '<heading>', '<h6>'], correct: '<h1>' },
      { question: 'Which CSS property changes the text color of an element?', options: ['color', 'text-color', 'font-color'], correct: 'color' },
      { question: 'What is the correct syntax for creating a link in HTML?', options: ['<a href="url">link text</a>', '<link src="url">link text</link>', '<url link="url">link text</url>'], correct: '<a href="url">link text</a>' },
      { question: 'How can you create a numbered list in HTML?', options: ['<ol>', '<ul>', '<list>'], correct: '<ol>' },
      { question: 'In CSS, which property is used to change the font of an element?', options: ['font-family', 'font-style', 'text-style'], correct: 'font-family' },
      { question: 'Which HTML tag is used to define an unordered list?', options: ['<ul>', '<ol>', '<li>'], correct: '<ul>' },
      { question: 'What is the correct HTML tag for inserting a line horizontally on a page?', options: ['<hr>', '<br>', '<line>'], correct: '<hr>' },
      { question: 'How do you make each word in a text start with a capital letter in CSS?', options: ['text-transform: capitalize;', 'text-capitalize: each;', 'capitalize: true;'], correct: 'text-transform: capitalize;' },
      { question: 'What is the purpose of the <title> tag in HTML?', options: ['Sets the document’s title', 'Displays content on the page', 'Creates a tooltip'], correct: 'Sets the document’s title' },
      { question: 'Which tag would you use for a form submission in HTML?', options: ['<form>', '<submit>', '<button>'], correct: '<form>' },
      { question: 'What is the correct HTML tag to define an emphasized text?', options: ['<em>', '<i>', '<strong>'], correct: '<em>' },
      { question: 'How do you add a comment in HTML?', options: ['<!-- Comment -->', '// Comment', '/* Comment */'], correct: '<!-- Comment -->' },
    ],
    Intermediate: [
      { question: 'Which of these is a JavaScript framework?', options: ['Angular', 'CSS', 'HTML'], correct: 'Angular' },
      { question: 'What is the "this" keyword in JavaScript?', options: ['A reference to the current object', 'A global variable', 'An empty object'], correct: 'A reference to the current object' },
      { question: 'Which array method adds one or more elements to the end of an array?', options: ['push', 'pop', 'shift'], correct: 'push' },
      { question: 'What does the “let” keyword do in JavaScript?', options: ['Declares a block-scoped variable', 'Declares a global variable', 'Declares a constant variable'], correct: 'Declares a block-scoped variable' },
      { question: 'How do you add a background color in CSS?', options: ['background-color', 'bg-color', 'color-background'], correct: 'background-color' },
      { question: 'How do you access an HTML element by its ID in JavaScript?', options: ['document.getElementById', 'document.querySelectorAll', 'document.getElementsByClassName'], correct: 'document.getElementById' },
      { question: 'What does "event.preventDefault()" do in JavaScript?', options: ['Stops the default action of an event', 'Prevents errors', 'Logs event details'], correct: 'Stops the default action of an event' },
      { question: 'Which CSS property is used to make text italic?', options: ['font-style: italic', 'font-type: italic', 'text-italic'], correct: 'font-style: italic' },
      { question: 'How can you select elements with the class name "example" in CSS?', options: ['.example', '#example', 'example'], correct: '.example' },
      { question: 'How do you log a message to the console in JavaScript?', options: ['console.log()', 'alert()', 'log()'], correct: 'console.log()' },
      { question: 'What does the "===" operator do in JavaScript?', options: ['Checks for strict equality', 'Checks for loose equality', 'Assigns a value'], correct: 'Checks for strict equality' },
      { question: 'What is the purpose of the <nav> tag in HTML5?', options: ['Defines a set of navigation links', 'Defines a section', 'Inserts a table'], correct: 'Defines a set of navigation links' },
      { question: 'What does JSON stand for?', options: ['JavaScript Object Notation', 'Java Serialized Object Notation', 'Java Syntax Object Notation'], correct: 'JavaScript Object Notation' },
      { question: 'How do you create a function in JavaScript?', options: ['function myFunction()', 'create function myFunction()', 'makeFunction myFunction()'], correct: 'function myFunction()' },
      { question: 'What CSS property is used for a flex container?', options: ['display: flex', 'position: flex', 'align-items: flex'], correct: 'display: flex' },
      { question: 'How do you create a dropdown list in HTML?', options: ['<select>', '<dropdown>', '<list>'], correct: '<select>' },
      { question: 'What does CSS Grid allow you to do?', options: ['Create complex layouts', 'Style fonts', 'Apply colors'], correct: 'Create complex layouts' },
      { question: 'Which JavaScript method removes the last element of an array?', options: ['pop()', 'shift()', 'remove()'], correct: 'pop()' },
      { question: 'How can you center an element using flexbox?', options: ['justify-content: center; align-items: center;', 'flex-center: true;', 'text-align: center;'], correct: 'justify-content: center; align-items: center;' },
      { question: 'What is the purpose of "map()" in JavaScript arrays?', options: ['Creates a new array with the results', 'Changes the array size', 'Removes null values'], correct: 'Creates a new array with the results' },
    ],
    Advanced: [
      { question: 'What is the Virtual DOM in React?', options: ['A copy of the actual DOM', 'A representation of UI changes', 'An advanced form of DOM'], correct: 'A representation of UI changes' },
      { question: 'Which hook is used to manage side effects in React?', options: ['useEffect', 'useState', 'useContext'], correct: 'useEffect' },
      { question: 'What does JSX stand for in React?', options: ['JavaScript XML', 'Java Syntax Extension', 'JavaScript Extra'], correct: 'JavaScript XML' },
      { question: 'How do you lift state up in React?', options: ['By passing props from parent to child', 'By creating a new context', 'By rendering multiple components'], correct: 'By passing props from parent to child' },
      { question: 'What is Redux?', options: ['A state management library', 'A CSS framework', 'A JavaScript array method'], correct: 'A state management library' },
      { question: 'What is useReducer used for in React?', options: ['Manages complex state', 'Fetches data', 'Handles props'], correct: 'Manages complex state' },
      { question: 'What are higher-order components (HOCs) in React?', options: ['Components that take a component and return a new one', 'A hook in React', 'React’s lifecycle methods'], correct: 'Components that take a component and return a new one' },
      { question: 'How do you handle form submission in React?', options: ['By using onSubmit event', 'By calling onClick', 'By using action attribute'], correct: 'By using onSubmit event' },
      { question: 'How do you initialize state in a React component?', options: ['useState()', 'setState()', 'useEffect()'], correct: 'useState()' },
      { question: 'How is context used in React?', options: ['Provides global values', 'Stores component data', 'Handles API requests'], correct: 'Provides global values' },
      { question: 'What does Prop Drilling refer to in React?', options: ['Passing data through multiple levels', 'Creating multiple props', 'Handling form submissions'], correct: 'Passing data through multiple levels' },
      { question: 'What is the purpose of React Router?', options: ['Manages navigation', 'Handles data fetching', 'Manages state'], correct: 'Manages navigation' },
      { question: 'What does the useRef hook do in React?', options: ['Creates a reference to a DOM element', 'Creates a new component', 'Initializes state'], correct: 'Creates a reference to a DOM element' },
      { question: 'What is React.memo used for?', options: ['Optimizes re-renders', 'Creates new states', 'Builds class components'], correct: 'Optimizes re-renders' },
      { question: 'How do you handle asynchronous data fetching in React?', options: ['useEffect with async functions', 'React Scheduler', 'Redux Thunk'], correct: 'useEffect with async functions' },
      { question: 'What is server-side rendering (SSR) in React?', options: ['Rendering on the server before the client', 'Rendering using GraphQL', 'Rendering CSS before JavaScript'], correct: 'Rendering on the server before the client' },
      { question: 'How does lazy loading work in React?', options: ['Imports components as needed', 'Deletes unused components', 'Resets components'], correct: 'Imports components as needed' },
      { question: 'What is a Fragment in React?', options: ['A wrapper for multiple elements', 'A hook in React', 'A new prop type'], correct: 'A wrapper for multiple elements' },
      { question: 'How do you handle conditional rendering in React?', options: ['Using if-else or ternary operators', 'Adding new states', 'Changing URL path'], correct: 'Using if-else or ternary operators' },
      { question: 'What is the difference between state and props in React?', options: ['State is local, props are passed down', 'Props are local, state is global', 'Both are global variables'], correct: 'State is local, props are passed down' },
    ]
  },
    'Data Science': {
    Basic: [
      { 
        question: 'What is Data Science?', 
        options: ['The study of algorithms', 'Extracting insights from data', 'Designing hardware systems'], 
        correct: 'Extracting insights from data' 
      },
      { 
        question: 'Which of the following is not a step in the Data Science process?', 
        options: ['Data Cleaning', 'Data Visualization', 'Hardware Design'], 
        correct: 'Hardware Design' 
      },
      { 
        question: 'What is a CSV file commonly used for?', 
        options: ['Storing tabular data', 'Compressing files', 'Running code'], 
        correct: 'Storing tabular data' 
      },
      { 
        question: 'Which library is used for data manipulation in Python?', 
        options: ['Pandas', 'NumPy', 'Matplotlib'], 
        correct: 'Pandas' 
      },
      { 
        question: 'What does "EDA" stand for in Data Science?', 
        options: ['Exploratory Data Analysis', 'Essential Data Application', 'Efficient Data Aggregation'], 
        correct: 'Exploratory Data Analysis' 
      },
      { 
        question: 'Which visualization is best for categorical data?', 
        options: ['Bar Chart', 'Scatter Plot', 'Line Chart'], 
        correct: 'Bar Chart' 
      },
      { 
        question: 'What does the "NaN" value represent?', 
        options: ['Not a Number', 'New and Null', 'Numeric Array Notation'], 
        correct: 'Not a Number' 
      },
      { 
        question: 'What does "machine learning" refer to?', 
        options: ['Hardcoding algorithms', 'Enabling machines to learn patterns from data', 'Building hardware components'], 
        correct: 'Enabling machines to learn patterns from data' 
      },
      { 
        question: 'Which of the following is not a Python library used in Data Science?', 
        options: ['TensorFlow', 'Excel', 'Seaborn'], 
        correct: 'Excel' 
      },
      { 
        question: 'What is the purpose of a scatter plot?', 
        options: ['Show relationships between two variables', 'Visualize categorical data', 'Display summary statistics'], 
        correct: 'Show relationships between two variables' 
      },
      { 
        question: 'What is the role of statistics in Data Science?', 
        options: ['Analyze and interpret data', 'Compile code efficiently', 'Clean up files on a system'], 
        correct: 'Analyze and interpret data' 
      },
      { 
        question: 'Which of the following represents a supervised learning task?', 
        options: ['Clustering', 'Regression', 'Dimensionality Reduction'], 
        correct: 'Regression' 
      },
      { 
        question: 'What is the difference between training and testing datasets?', 
        options: ['Training is for building the model; testing is for evaluation', 'Testing is larger than training', 'Training is random'], 
        correct: 'Training is for building the model; testing is for evaluation' 
      },
      { 
        question: 'Which Python library is used for statistical analysis?', 
        options: ['SciPy', 'Matplotlib', 'Keras'], 
        correct: 'SciPy' 
      },
      { 
        question: 'What is overfitting in machine learning?', 
        options: ['The model learns noise instead of patterns', 'The model doesn’t learn enough patterns', 'The model predicts randomly'], 
        correct: 'The model learns noise instead of patterns' 
      },
      { 
        question: 'What is the output of the shape attribute in Pandas?', 
        options: ['Number of rows and columns', 'Sum of all data', 'Count of null values'], 
        correct: 'Number of rows and columns' 
      },
      { 
        question: 'What is the default index in a Pandas DataFrame?', 
        options: ['Range from 0 to n-1', 'Column names', 'Custom user input'], 
        correct: 'Range from 0 to n-1' 
      },
      { 
        question: 'What is the purpose of the "groupby" function in Pandas?', 
        options: ['Aggregate data based on a category', 'Sort rows', 'Remove duplicates'], 
        correct: 'Aggregate data based on a category' 
      },
      { 
        question: 'Which Python function is used to find the correlation between variables?', 
        options: ['corr()', 'mean()', 'aggregate()'], 
        correct: 'corr()' 
      },
      { 
        question: 'What is a key characteristic of structured data?', 
        options: ['Data organized in rows and columns', 'Text-heavy and unformatted data', 'Non-numeric values only'], 
        correct: 'Data organized in rows and columns' 
      }
    ],
    Intermediate: [
        {
            question: 'Which clustering algorithm is hierarchical?',
            options: ['Agglomerative Clustering', 'K-Means', 'DBSCAN'],
            correct: 'Agglomerative Clustering',
          },
          {
            question: 'What does a confusion matrix help evaluate?',
            options: [
              'The performance of a classification model',
              'The distribution of numerical data',
              'Correlation between variables',
            ],
            correct: 'The performance of a classification model',
          },
          {
            question: 'Which Python library is commonly used for natural language processing (NLP)?',
            options: ['NLTK', 'Pandas', 'Matplotlib'],
            correct: 'NLTK',
          },
          {
            question: 'What is the purpose of cross-validation in machine learning?',
            options: [
              'Test model stability',
              'Reduce the dataset size',
              'Convert categorical data to numerical data',
            ],
            correct: 'Test model stability',
          },
          {
            question: 'Which of the following is a dimensionality reduction technique?',
            options: ['PCA', 'KNN', 'Random Forest'],
            correct: 'PCA',
          },
          {
            question: 'What does the term “ensemble learning” refer to?',
            options: [
              'Combining multiple models for better performance',
              'Using a single model for predictions',
              'Randomly splitting datasets',
            ],
            correct: 'Combining multiple models for better performance',
          },
          {
            question: 'Which metric is not suitable for evaluating regression models?',
            options: ['Accuracy', 'Mean Squared Error', 'R-Squared'],
            correct: 'Accuracy',
          },
          {
            question: 'What is the difference between bagging and boosting?',
            options: [
              'Bagging reduces variance; boosting reduces bias',
              'Bagging uses weighted datasets; boosting uses equal datasets',
              'Bagging is for classification only; boosting is for regression only',
            ],
            correct: 'Bagging reduces variance; boosting reduces bias',
          },
          {
            question: 'Which Python library provides data structures for multi-dimensional arrays?',
            options: ['NumPy', 'Pandas', 'Scikit-learn'],
            correct: 'NumPy',
          },
          {
            question: 'What is the purpose of hyperparameter tuning?',
            options: [
              'Optimize model performance',
              'Increase dataset size',
              'Reduce computational time',
            ],
            correct: 'Optimize model performance',
          },
          {
            question: 'What does one-hot encoding do?',
            options: [
              'Transforms categorical variables into numerical format',
              'Splits data into training and testing sets',
              'Identifies null values in a dataset',
            ],
            correct: 'Transforms categorical variables into numerical format',
          },
          {
            question: 'What is the use of the elbow method in clustering?',
            options: [
              'Determining the optimal number of clusters',
              'Evaluating classification models',
              'Visualizing hierarchical clusters',
            ],
            correct: 'Determining the optimal number of clusters',
          },
          {
            question: 'Which method is used to handle missing data?',
            options: [
              'Imputation',
              'One-hot encoding',
              'Normalization',
            ],
            correct: 'Imputation',
          },
          {
            question: 'What does feature scaling achieve?',
            options: [
              'Standardizes data to a specific range',
              'Increases dataset size',
              'Adds more features to a dataset',
            ],
            correct: 'Standardizes data to a specific range',
          },
          {
            question: 'Which technique is used to identify outliers in data?',
            options: ['Boxplot', 'Scatter Plot', 'Confusion Matrix'],
            correct: 'Boxplot',
          },
          {
            question: 'What is the difference between Type I and Type II errors?',
            options: [
              'Type I rejects a true null; Type II accepts a false null',
              'Type I accepts a false null; Type II rejects a true null',
              'Both are identical errors',
            ],
            correct: 'Type I rejects a true null; Type II accepts a false null',
          },
          {
            question: 'Which library is used for deep learning in Python?',
            options: ['TensorFlow', 'Pandas', 'Seaborn'],
            correct: 'TensorFlow',
          },
          {
            question: 'What is the purpose of the activation function in neural networks?',
            options: [
              'Introduce non-linearity',
              'Improve computational efficiency',
              'Normalize weights',
            ],
            correct: 'Introduce non-linearity',
          },
          {
            question: 'Which algorithm is best suited for time series forecasting?',
            options: ['ARIMA', 'K-Means', 'Logistic Regression'],
            correct: 'ARIMA',
          },
          {
            question: 'What is a kernel in Support Vector Machines (SVM)?',
            options: [
              'A function to transform data into a higher dimension',
              'A loss function',
              'A parameter for tuning decision trees',
            ],
            correct: 'A function to transform data into a higher dimension',
          },
        ],

      Advanced: [
        {
            question: 'What is the significance of the curse of dimensionality?',
            options: [
              'High-dimensional data affects distance-based algorithms',
              'It helps optimize computational time',
              'Improves the efficiency of clustering algorithms',
            ],
            correct: 'High-dimensional data affects distance-based algorithms',
          },
          {
            question: 'What does the ROC curve measure?',
            options: [
              'Trade-off between sensitivity and specificity',
              'Variance and bias trade-off',
              'Feature correlation',
            ],
            correct: 'Trade-off between sensitivity and specificity',
          },
          {
            question: 'Which optimization algorithm is commonly used in neural networks?',
            options: ['Stochastic Gradient Descent', 'Monte Carlo', 'Apriori Algorithm'],
            correct: 'Stochastic Gradient Descent',
          },
          {
            question: 'What is L1 regularization also known as?',
            options: ['Lasso', 'Ridge', 'Elastic Net'],
            correct: 'Lasso',
          },
          {
            question: 'Which algorithm is suitable for collaborative filtering?',
            options: ['Matrix Factorization', 'Linear Regression', 'PCA'],
            correct: 'Matrix Factorization',
          },
          {
            question: 'What is the role of dropout in deep learning?',
            options: [
              'Prevent overfitting by randomly dropping neurons',
              'Increase model complexity',
              'Improve model accuracy directly',
            ],
            correct: 'Prevent overfitting by randomly dropping neurons',
          },
          {
            question: 'What does "bag of words" represent in NLP?',
            options: [
              'Text data represented as a frequency distribution of words',
              'Sequence of numerical word embeddings',
              'Collection of tokenized phrases',
            ],
            correct: 'Text data represented as a frequency distribution of words',
          },
          {
            question: 'What is transfer learning?',
            options: [
              'Using a pre-trained model for a similar task',
              'Sharing data between different datasets',
              'Combining supervised and unsupervised learning',
            ],
            correct: 'Using a pre-trained model for a similar task',
          },
          {
            question: 'Which metric is used to evaluate unsupervised learning models?',
            options: ['Silhouette Score', 'F1 Score', 'Log Loss'],
            correct: 'Silhouette Score',
          },
          {
            question: 'What is the main challenge in working with unbalanced datasets?',
            options: [
              'The model may become biased towards majority classes',
              'The dataset size is too large',
              'The computation time increases significantly',
            ],
            correct: 'The model may become biased towards majority classes',
          },
          {
            question: 'What is the purpose of word embeddings in NLP?',
            options: [
              'Convert text into numerical vectors',
              'Tokenize sentences',
              'Perform stop-word removal',
            ],
            correct: 'Convert text into numerical vectors',
          },
          {
            question: 'Which algorithm is used in association rule learning?',
            options: ['Apriori Algorithm', 'Gradient Boosting', 'DBSCAN'],
            correct: 'Apriori Algorithm',
          },
          {
            question: 'What is a key feature of the Long Short-Term Memory (LSTM) network?',
            options: [
              'Handles sequential data effectively',
              'Performs efficient image recognition',
              'Optimizes hyperparameters automatically',
            ],
            correct: 'Handles sequential data effectively',
          },
          {
            question: 'What does the ReLU activation function return for negative inputs?',
            options: ['Zero', 'Negative input values', 'Positive input values'],
            correct: 'Zero',
          },
          {
            question: 'What is Bayesian inference used for in Data Science?',
            options: [
              'Update probabilities based on new evidence',
              'Reduce dimensionality',
              'Normalize feature values',
            ],
            correct: 'Update probabilities based on new evidence',
          },
          {
            question: 'What is the purpose of the Kullback-Leibler Divergence in machine learning?',
            options: [
              'Measure the difference between two probability distributions',
              'Optimize the loss function',
              'Cluster data into k groups',
            ],
            correct: 'Measure the difference between two probability distributions',
          },
          {
            question: 'What does the term "epoch" mean in deep learning?',
            options: [
              'One complete pass through the entire dataset',
              'The time taken to train a model',
              'The number of layers in a network',
            ],
            correct: 'One complete pass through the entire dataset',
          },
          {
            question: 'Which evaluation metric is commonly used for imbalanced classification problems?',
            options: ['F1 Score', 'Accuracy', 'Mean Absolute Error'],
            correct: 'F1 Score',
          },
          {
            question: 'What is the main advantage of using gradient boosting over bagging?',
            options: [
              'Boosting reduces bias by focusing on misclassified examples',
              'Boosting increases computational speed',
              'Boosting eliminates the need for hyperparameter tuning',
            ],
            correct: 'Boosting reduces bias by focusing on misclassified examples',
          },
          {
            question: 'What is the primary difference between generative and discriminative models?',
            options: [
              'Generative models learn data distribution; discriminative models classify data',
              'Generative models require labeled data; discriminative models do not',
              'Generative models have lower accuracy than discriminative models',
            ],
            correct: 'Generative models learn data distribution; discriminative models classify data',
          },
        ],
    },
    // Add more questions for other domains and levels
  };
  const courseRecommendations = {
    'Web Development': {
      Basic: ["Go To Courses For Recommended Courses"],
      Intermediate: ["Go To Courses For Recommended Courses"],
      Advanced: ["Go To Courses For Recommended Courses"],
    },
    'Data Science': {
      Basic: ["Go To Courses For Recommended Courses"],
      Intermediate: ["Go To Courses For Recommended Courses"],
      Advanced: ["Go To Courses For Recommended Courses"],
    }
    // Add other domains and levels here
  };

  const getRandomQuestions = (questions, count = 10) => {
    const shuffled = [...questions].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  const handleDomainSelect = (domain) => {
    setSelectedDomain(domain);
    setShowQuiz(false);
    setShowResult(false);
    setSelectedLevel('');
    setCurrentQuestion(0);
    setAnswers([]);
    setScore(0);
    setRandomQuestions([]);
  };

  const handleLevelSelect = (level) => {
    setSelectedLevel(level);
    const selectedQuestions = getRandomQuestions(quizData[selectedDomain][level], 10);
    setRandomQuestions(selectedQuestions);
    setShowQuiz(true);
    setShowResult(false);
    setCurrentQuestion(0);
    setAnswers([]);
    setScore(0);
  };

  const handleAnswerSelect = (answer) => {
    const correctAnswer = randomQuestions[currentQuestion]?.correct;

    if (answer === correctAnswer) {
      setScore((prevScore) => prevScore + 1);
    }

    setAnswers((prevAnswers) => [...prevAnswers, answer]);

    if (currentQuestion === randomQuestions.length - 1) {
      const totalQuestions = randomQuestions.length;
      const percentage = (score + (answer === correctAnswer ? 1 : 0)) / totalQuestions * 100;

      let recommendation = '';
      if (percentage >= 80) {
        recommendation = 'Advanced';
      } else if (percentage >= 50) {
        recommendation = 'Intermediate';
      } else {
        recommendation = 'Basic';
      }

      setLocalRecommendationLevel(recommendation);
      setRecommendationLevel(recommendation);

      setShowQuiz(false);
      setShowResult(true);
    } else {
      setCurrentQuestion((prevQuestion) => prevQuestion + 1);
    }
  };

  const renderQuiz = () => (
    <div className="quiz-container">
      <h2>{selectedDomain} Quiz - {selectedLevel}</h2>
      <p>{randomQuestions[currentQuestion]?.question}</p>
      <div className="quiz-options">
        {randomQuestions[currentQuestion]?.options.map((option, index) => (
          <button
            key={index}
            className="quiz-button"
            onClick={() => handleAnswerSelect(option)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );

  const renderResult = () => {
    const nextLevel = {
      Basic: 'Intermediate',
      Intermediate: 'Advanced',
    };

    const previousLevel = {
      Intermediate: 'Basic',
      Advanced: 'Intermediate',
    };

    const percentage = (score / randomQuestions.length) * 100;

    return (
      <div className="result-container">
        <h2>Congratulations! You've completed the {selectedDomain} quiz at {selectedLevel} level.</h2>
        <p>Your Score: {score} / {randomQuestions.length}</p>
        <p>Recommendation Level: {recommendationLevel}</p>
        <p>Recommended Courses for You:</p>
        <ul>
          {recommendationLevel && courseRecommendations[selectedDomain][recommendationLevel]?.map((course, index) => (
            <li key={index}>{course}</li>
          ))}
        </ul>
        {percentage >= 80 && nextLevel[selectedLevel] && (
          <button
            className="quiz-button"
            onClick={() => handleLevelSelect(nextLevel[selectedLevel])}
          >
            Proceed to {nextLevel[selectedLevel]} Test
          </button>
        )}
        {percentage < 50 && previousLevel[selectedLevel] && (
          <button
            className="quiz-button"
            onClick={() => handleLevelSelect(previousLevel[selectedLevel])}
          >
            Retake {previousLevel[selectedLevel]} Test
          </button>
        )}
      </div>
    );
  };

  return (
    <div className="skill-assessment-page">
      <header className="assessment-header">
        <h1>Skill Assessment</h1>
        <p>Select a domain to assess your skills and receive personalized training recommendations.</p>
      </header>

      {!showQuiz && !showResult && (
        <section className="domain-selection">
          <h2>Select a Domain</h2>
          <div className="domain-cards">
            {domains.map((domain) => (
              <div key={domain.name} className="domain-card" onClick={() => handleDomainSelect(domain.name)}>
                <h3>{domain.name}</h3>
                <p>{domain.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {selectedDomain && !showQuiz && !showResult && (
        <section className="level-selection">
          <h2>Select your skill level in {selectedDomain}</h2>
          <div className="quiz-options">
            <button className="quiz-button" onClick={() => handleLevelSelect('Basic')}>Basic</button>
            <button className="quiz-button" onClick={() => handleLevelSelect('Intermediate')}>Intermediate</button>
            <button className="quiz-button" onClick={() => handleLevelSelect('Advanced')}>Advanced</button>
          </div>
        </section>
      )}

      {showQuiz && renderQuiz()}

      {showResult && renderResult()}
    </div>
  );
};

export default SkillTest;