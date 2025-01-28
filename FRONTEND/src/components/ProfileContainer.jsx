import React, { useState } from "react";
import MyProfile from "./MyProfile";
import Courses from "./Courses";
import SkillTest from "./SkillTest";
import Courses from "./Courses";

const ProfileContainer = () => {
  const [interestedSkills, setInterestedSkills] = useState(["TypeScript", "Node.js"]);
  const [recommendationLevel, setRecommendationLevel] = useState('Basic');

  return (
    <>
      <MyProfile setInterestedSkills={setInterestedSkills} />
      <SkillTest setRecommendationLevel={setRecommendationLevel} />
      <Courses
        expectedSkill={interestedSkills}
        recommendationLevel={recommendationLevel} 
      />
    </>
  );
};

export default ProfileContainer;
