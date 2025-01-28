import React, { useState } from 'react';
import '../SkillAssessment.css';
import SkillTest from './SkillTest';
import Footer from "./Footer";
import Header from "./Header";

const SkillAssessment = () => {
    return (
        <>
          <Header />
          <SkillTest></SkillTest>
          <Footer />
        </>
      );
};

export default SkillAssessment;
