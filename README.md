# 🎯 SkillForge-Skill Based Adaptive Learning Platform

🚀 A web-based platform that evaluates users' skills and recommends personalized courses based on their interests and career goals. Using AI-driven assessment, it identifies strengths and weaknesses, offering tailored learning paths to bridge skill gaps and enhance career development.  

---

## 📌 Features  

✅ **User Profile Module** – Collects user interests, skills, and domain preferences.  
✅ **Skill Assessment Module** – Conducts dynamic assessments to evaluate proficiency.  
✅ **Course Recommendation Module** – Suggests courses based on skill levels, interests, and domain alignment.  

---

## 🔄 **System Design & Workflow**  

### 🏗 **System Modules**  
1️⃣ **User Profile Module** – Collects user data, including interests, skills, and expected career domains.  
2️⃣ **Skill Assessment Module** – Conducts dynamic quizzes to measure user proficiency.  
3️⃣ **Course Recommendation Module** – Uses AI to suggest courses based on the user’s skills and learning goals.  

### 📌 **Workflow**  
1️⃣ **User Registration** – Users input skills, interests, and career goals via a web interface.  
2️⃣ **Skill Evaluation** – The system dynamically generates assessments based on user-selected domains.  
3️⃣ **Data Analysis** – The system processes user inputs and assessment results to determine skill gaps.  
4️⃣ **Course Suggestions** – A hybrid recommendation algorithm generates personalized learning paths.  

---

## 🏗 **Phases of Development**  

### 🔹 **1. User Profile Collection**  
📌 **Objective:** Gather user information to generate personalized course recommendations.  

🔧 **Implementation:**  
- A **React** web interface collects skills, interests, and career goals.  
- **Express.js APIs** handle secure storage of user data in **MongoDB**.  
- **Validation:** Client-side & server-side validation ensures accuracy.  

---

### 🔹 **2. Skill Assessment**  
📌 **Objective:** Evaluate users’ proficiency and provide recommendations for improvement.  

🔧 **Implementation:**  
- **Dynamic Assessments:** Randomized quizzes for different skill levels using a dynamic question bank.  
- **Grading System:**  
  - Basic: **< 50%**  
  - Intermediate: **50% - 79%**  
  - Advanced: **≥ 80%**  
- **Recommendations:** Users receive course suggestions based on scores.  

---

### 🔹 **3. Recommendation Algorithm**  
📌 **Objective:** Suggest relevant courses tailored to user skills and career goals.  

🔧 **Implementation:**  
- **Hugging Face Model:** Uses **skill assessment scores, interests, and profile data** to generate recommendations.  
- **Weighted Scoring:**  
  - ✅ Skill Match  
  - ✅ Domain Relevance  
  - ✅ Personal Interests  
- **Course Display:** Ranks top courses with metadata such as estimated time, difficulty, and learning outcomes.  

---

### 🔹 **4. Course Database**  
📌 **Objective:** Maintain a curated repository of high-quality courses.  

🔧 **Implementation:**  
- **Sourced from platforms:** Coursera, Udemy, LinkedIn Learning.  
- **Metadata tagging:**  
  - 🔹 Skill prerequisites  
  - 🔹 Difficulty level  
  - 🔹 Learning outcomes  
  - 🔹 Domain relevance  
- **Database:** Stored in **MongoDB** for efficient querying and scalability.  

---

## 🛠 **Tech Stack**  

| Component  | Technology  |
|------------|------------|
| **Frontend** | React, Vite |
| **Backend** | Express.js |
| **Database** | MongoDB |
| **AI Model** | Hugging Face |
| **Hosting** | Google Cloud / AWS |

---

## 📜 **Installation & Setup**  

###🔹 **1. Clone the Repository**  
```sh
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```
## 🔹 **2.Configure Environment**
Create a .env file in the backend directory and add:
 ```sh
HUGGING_FACE_API_KEY=your_hugging_face_api_key_here
```
## 📜 **3.Installation Dependencies**

```sh
npm install
```
## 📜 **4.Run Application**

🔹**1.Start BackEnd**
```sh
cd backend 
node server.js
```

🔹**2.Start FrontEnd**
```sh
npm start dev
```



