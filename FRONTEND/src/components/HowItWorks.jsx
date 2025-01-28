import {
  PiPersonArmsSpreadFill,
  PiClipboardTextFill,
  PiRocketFill,
  PiLightbulbFill,
} from "react-icons/pi";

function HowItWorks() {
  return (
    <>
      {" "}
      <div className="container mt-5" style={{ maxWidth: "1455px",marginTop: '85px', marginBottom: '85px' }}>
        <h2 className="text-center mb-4" style={{ fontSize: "2.5rem" }}>
          <PiLightbulbFill
            style={{
              fontSize: "2.5rem",
              marginRight: "10px",
              color: "#007bff",
            }}
          />
          How It Works
        </h2>
        <div className="row">
          {/* Step 1 */}
          <div className="col-md-4">
            <div className="card text-center" style={{ height: "100%" }}>
              <div className="card-body">
                <div
                  className="icon mb-3"
                  style={{ fontSize: "3rem", color: "#007bff" }}
                >
                  <PiPersonArmsSpreadFill />
                </div>
                <h3 className="card-title" style={{ fontSize: "1.85rem" }}>
                  Step 1: Assess Your Skills
                </h3>
                <p className="card-text" style={{ fontSize: "1.1rem" }}>
                  Begin your journey by taking our quick skills assessment.
                </p>
              </div>
            </div>
          </div>
          {/* Step 2 */}
          <div className="col-md-4">
            <div className="card text-center" style={{ height: "100%" }}>
              <div className="card-body">
                <div
                  className="icon mb-3"
                  style={{ fontSize: "3rem", color: "#007bff" }}
                >
                  <PiClipboardTextFill />
                </div>
                <h3 className="card-title" style={{ fontSize: "1.85rem" }}>
                  Step 2: Receive Recommendations
                </h3>
                <p className="card-text" style={{ fontSize: "1.1rem" }}>
                  Get personalized course recommendations based on your current
                  skills.
                </p>
              </div>
            </div>
          </div>
          {/* Step 3 */}
          <div className="col-md-4">
            <div className="card text-center" style={{ height: "100%" }}>
              <div className="card-body">
                <div
                  className="icon mb-3"
                  style={{ fontSize: "3rem", color: "#007bff" }}
                >
                  <PiRocketFill />
                </div>
                <h3 className="card-title" style={{ fontSize: "1.85rem" }}>
                  Step 3: Start Learning
                </h3>
                <p className="card-text" style={{ fontSize: "1.1rem" }}>
                  Enroll in the recommended courses and kickstart your learning
                  journey!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HowItWorks;
