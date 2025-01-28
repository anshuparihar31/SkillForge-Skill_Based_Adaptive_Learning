import React, { createContext, useState } from 'react';

// Create a context for skills
export const SkillsContext = createContext();

export const SkillsProvider = ({ children }) => {
  const [interestedSkills, setInterestedSkills] = useState([]);
  const [recommendationLevel, setRecommendationLevel] = useState(""); // Add recommendationLevel

  return (
    <SkillsContext.Provider 
      value={{ 
        interestedSkills, 
        setInterestedSkills,
        recommendationLevel, // Include recommendationLevel in the context
        setRecommendationLevel // Include the setter function
      }}
    >
      {children}
    </SkillsContext.Provider>
  );
};
