# SkillForge-Personalised-Employee-Training-and-Development-Platform
Overview
This project involves designing and implementing a personalized course recommendation system that evaluates user skills, determines proficiency levels, and suggests courses aligned with their interests and career goals. The system is structured to ensure robustness, scalability, and adaptability through well-defined stages of development.

System Design and Workflow
The system consists of three main modules:

User Profile Module: Collects user data, including interests, skills, and domain preferences.
Skill Assessment Module: Conducts dynamic assessments to evaluate users’ skill levels.
Course Recommendation Module: Provides personalized course suggestions based on proficiency, interests, and career aspirations.
Workflow Steps:
User Registration: Users input their skills, interests, and expected domains via a web interface.
Skill Evaluation: Tailored assessments measure the user's proficiency levels.
Data Analysis: User inputs and assessment results are processed to generate recommendations.
Course Suggestions: A hybrid recommendation algorithm suggests suitable courses.
Phases of Development
1. User Profile Collection
Objective: Collect necessary user data to generate personalized recommendations.
Implementation:

A web interface built using React to collect skills, interests, and career goals.
Express.js backend handles secure storage of user profiles in MongoDB, with encryption to ensure data confidentiality.
Client-side and server-side validation for data accuracy.
2. Skill Assessment
Objective: Evaluate users' proficiency and provide tailored recommendations.
Implementation:

Dynamic assessments with randomized quizzes covering multiple-choice and domain-specific challenges.
Performance grading:
Basic (<50%)
Intermediate (50-79%)
Advanced (≥80%)
Recommendations are generated based on performance, guiding users to the next appropriate skill level.
3. Recommendation Algorithm
Objective: Provide personalized course suggestions.
Implementation:

A fine-tuned Hugging Face model processes user skill assessment scores, interests, and skills.
Courses are ranked based on weighted scoring criteria such as:
Skill match
Domain relevance
Personal interests
Courses include key metadata such as difficulty level, learning outcomes, and estimated time commitment.
4. Course Database
Objective: Maintain a repository of high-quality courses.
Implementation:

Courses sourced from platforms such as Coursera, Udemy, and LinkedIn Learning.
Metadata includes skill prerequisites, difficulty level, learning outcomes, and domain relevance.
Stored in MongoDB for efficient querying and scalability.
Tools and Technologies
Frontend
React – For dynamic, responsive UI.
Vite – For fast development and optimized builds.
Backend
Express.js – For API development and routing.
Database
MongoDB – For secure and scalable data management.

Overview
This project involves designing and implementing a personalized course recommendation system that evaluates user skills, determines proficiency levels, and suggests courses aligned with their interests and career goals. The system is structured to ensure robustness, scalability, and adaptability through well-defined stages of development.

System Design and Workflow
The system consists of three main modules:

User Profile Module: Collects user data, including interests, skills, and domain preferences.
Skill Assessment Module: Conducts dynamic assessments to evaluate users’ skill levels.
Course Recommendation Module: Provides personalized course suggestions based on proficiency, interests, and career aspirations.
Workflow Steps:
User Registration: Users input their skills, interests, and expected domains via a web interface.
Skill Evaluation: Tailored assessments measure the user's proficiency levels.
Data Analysis: User inputs and assessment results are processed to generate recommendations.
Course Suggestions: A hybrid recommendation algorithm suggests suitable courses.
Phases of Development
1. User Profile Collection
Objective: Collect necessary user data to generate personalized recommendations.
Implementation:

A web interface built using React to collect skills, interests, and career goals.
Express.js backend handles secure storage of user profiles in MongoDB, with encryption to ensure data confidentiality.
Client-side and server-side validation for data accuracy.
2. Skill Assessment
Objective: Evaluate users' proficiency and provide tailored recommendations.
Implementation:

Dynamic assessments with randomized quizzes covering multiple-choice and domain-specific challenges.
Performance grading:
Basic (<50%)
Intermediate (50-79%)
Advanced (≥80%)
Recommendations are generated based on performance, guiding users to the next appropriate skill level.
3. Recommendation Algorithm
Objective: Provide personalized course suggestions.
Implementation:

A fine-tuned Hugging Face model processes user skill assessment scores, interests, and skills.
Courses are ranked based on weighted scoring criteria such as:
Skill match
Domain relevance
Personal interests
Courses include key metadata such as difficulty level, learning outcomes, and estimated time commitment.
4. Course Database
Objective: Maintain a repository of high-quality courses.
Implementation:

Courses sourced from platforms such as Coursera, Udemy, and LinkedIn Learning.
Metadata includes skill prerequisites, difficulty level, learning outcomes, and domain relevance.
Stored in MongoDB for efficient querying and scalability.
Tools and Technologies
Frontend
React – For dynamic, responsive UI.
Vite – For fast development and optimized builds.
Backend
Express.js – For API development and routing.
Database
MongoDB – For secure and scalable data management.


Installation and Setup
Clone the repository:
https://github.com/anshuparihar31/SkillForge-Personalised-Employee-Training-and-Development-Platform.git
Install dependencies:
npm install  
Start the application:
npm start  
Start Server:
server.js
