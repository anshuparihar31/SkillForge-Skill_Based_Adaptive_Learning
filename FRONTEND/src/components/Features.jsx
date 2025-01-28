import { MdPersonalVideo } from "react-icons/md";
import { GiCheckMark } from "react-icons/gi";
import { FaBookOpen } from "react-icons/fa";

function Features() {
  return (
    <>
      <div
        class="container px-4 py-5"
        id="hanging-icons"
        style={{
          marginLeft: "20px",
          marginRight: "20px",
          width: "100%",
          maxWidth: "98%",
          marginTop: '45px', marginBottom: '85px'
        }}
      >
        <h2 class="pb-2 border-bottom" style={{ fontSize: "2.5em" }}>
          Key Features
        </h2>
        <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">
          <div class="col d-flex align-items-start">
            <div class="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
              <MdPersonalVideo style={{ width: "2em", height: "2em" }} />
            </div>
            <div>
              <h3 class="fs-2 text-body-emphasis">
                Personalized Learning Paths
              </h3>
              <p>
              Get tailored course recommendations based on your current skills and future goals to enhance your learning experience.
              </p>
              <a href="/courses" class="btn btn-primary">
                Explore Courses
              </a>
            </div>
          </div>
          <div class="col d-flex align-items-start">
            <div class="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
              <GiCheckMark style={{ width: "2em", height: "2em" }} />
            </div>
            <div>
              <h3 class="fs-2 text-body-emphasis">
                Skill Assessments and Quizzes
              </h3>
              <p>
                Participate in interactive, level-based quizzes that assess your
                knowledge and help you identify the best courses that will
                enhance your skills effectively and efficiently.
              </p>
              <a href="/skill-assessment" class="btn btn-primary">
                Start Assessment
              </a>
            </div>
          </div>
          <div class="col d-flex align-items-start">
            <div class="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
              <FaBookOpen style={{ width: "2em", height: "2em" }} />
            </div>
            <div>
              <h3 class="fs-2 text-body-emphasis">
                Comprehensive Course Catalog
              </h3>
              <p>
                Explore a wide range of courses across various fields, ensuring
                there's something for everyone—whether you're a beginner or
                looking to advance your skills.
              </p>
              <a href="/courses" class="btn btn-primary">
                View All Courses
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Features;
