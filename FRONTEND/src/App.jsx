import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import './App.css';
import CourseSummary from './components/CourseSummary';
import Courses from './components/Courses';
import MyProfile from './components/MyProfile';
import ContactUs from './components/ContactUs';
import Login from './components/login';
import Signup from './components/signup';
import SkillAssessment from './components/SkillAssessment';
import { SkillsProvider } from './context/SkillsContext'; // Import the SkillsProvider

function App() {
  return (
    <SkillsProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/skill-assessment" element={<SkillAssessment />} />
        <Route path="/my-profile" element={<MyProfile />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/course-summary" element={<CourseSummary />} />
      </Routes>
    </SkillsProvider>
  );
}

export default App;
