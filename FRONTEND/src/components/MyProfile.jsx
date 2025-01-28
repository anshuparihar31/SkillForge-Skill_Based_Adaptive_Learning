import React, { useState, useContext } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { SkillsContext } from "../context/SkillsContext"; 
import axios from "axios";

const MyProfile = () => {
  const { interestedSkills, setInterestedSkills } = useContext(SkillsContext); // Use the context
  const [profilePic, setProfilePic] = useState(null);
  const [name, setName] = useState("Swami Patil");
  const [email, setEmail] = useState("swami@gmail.com");
  const [location, setLocation] = useState("Pune, Maharashtra");
  const [skills, setSkills] = useState(["JavaScript", "React"]);
  const [isEditing, setIsEditing] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");  // New state for success message

  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfilePic(URL.createObjectURL(file));
    }
  };

  const handleSave = () => {
    const userDetails = {
      name,
      email,
      location,
      skills,
      interestedSkills,
    };

    axios.post("http://localhost:3001/api/profile", userDetails)
      .then(response => {
        console.log("User details saved successfully:", response.data);
        setSuccessMessage("Profile saved successfully!");  // Set success message
      })
      .catch(error => {
        console.error("Error saving user details:", error);
        setSuccessMessage("Error saving profile. Please try again.");  // Handle error message
      });
    
    // Only update the interested skills in context, no navigation
    setInterestedSkills(interestedSkills);

    setIsEditing(false); // Exit editing mode
  };

  return (
    <>
      <Header />
      <div style={styles.container}>
        <div style={styles.card}>
          <div style={styles.imageContainer}>
            <img
              src={profilePic || "https://www.w3schools.com/howto/img_avatar.png"}
              alt="User Profile"
              style={styles.profileImage}
            />
            {isEditing && (
              <div style={{ marginTop: "10px" }}>
                <label style={styles.fileLabel}>
                  Choose File
                  <input
                    type="file"
                    onChange={handleProfilePicChange}
                    style={styles.fileInput}
                  />
                </label>
              </div>
            )}
          </div>
          {/* Username */}
          <div style={styles.inputContainer}>
            <label style={styles.label}>Username:</label>
            {isEditing ? (
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={styles.input}
              />
            ) : (
              <span>{name}</span>
            )}
          </div>
          {/* Email */}
          <div style={styles.inputContainer}>
            <label style={styles.label}>Email:</label>
            {isEditing ? (
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={styles.input}
              />
            ) : (
              <span>{email}</span>
            )}
          </div>
          {/* Location */}
          <div style={styles.inputContainer}>
            <label style={styles.label}>Location:</label>
            {isEditing ? (
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                style={styles.input}
              />
            ) : (
              <span>{location}</span>
            )}
          </div>
          {/* Skills */}
          <div style={styles.inputContainer}>
            <label style={styles.label}>Skills:</label>
            {isEditing ? (
              <input
                type="text"
                value={skills.join(", ")}
                onChange={(e) =>
                  setSkills(
                    e.target.value.split(",").map((skill) => skill.trim())
                  )
                }
                style={styles.input}
              />
            ) : (
              <ul style={styles.list}>
                {skills.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            )}
          </div>
          {/* Interested Skills */}
          <div style={styles.inputContainer}>
            <label style={styles.label}>Interested Skills:</label>
            {isEditing ? (
              <input
                type="text"
                value={interestedSkills.join(", ")}
                onChange={(e) => {
                  const newSkills = e.target.value.split(",").map((skill) => skill.trim());
                  setInterestedSkills(newSkills); // Update the context
                }}
                style={styles.input}
              />
            ) : (
              <ul style={styles.list}>
                {interestedSkills.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            )}
          </div>
          {isEditing ? (
            <button onClick={handleSave} style={styles.saveButton}>
              Save
            </button>
          ) : (
            <button onClick={() => setIsEditing(true)} style={styles.editButton}>
              Edit
            </button>
          )}

          {/* Success Message */}
          {successMessage && <p style={styles.successMessage}>{successMessage}</p>}
        </div>
      </div>
      <Footer />
    </>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    backgroundColor: "#f0f2f5",
  },
  card: {
    maxWidth: "500px",
    width: "100%",
    backgroundColor: "#ffffff",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 0 15px rgba(0, 0, 0, 0.1)",
    fontFamily: "Arial, sans-serif",
    color: "#333",
    marginTop: "40px",
    marginBottom: "40px",
  },
  imageContainer: {
    textAlign: "center",
    marginBottom: "20px",
  },
  profileImage: {
    width: "150px",
    height: "150px",
    borderRadius: "50%",
    border: "2px solid #ccc",
    objectFit: "cover",
    marginBottom: "10px",
  },
  fileLabel: {
    padding: "6px 12px",
    backgroundColor: "#007bff",
    color: "#fff",
    borderRadius: "4px",
    cursor: "pointer",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  fileInput: {
    display: "none",
  },
  inputContainer: {
    marginBottom: "15px",
    paddingBottom: "10px",
    borderBottom: "1px solid #ddd",
  },
  label: {
    fontWeight: "bold",
    display: "block",
    marginBottom: "5px",
  },
  input: {
    width: "100%",
    padding: "8px",
    border: "1px solid #ccc",
    borderRadius: "4px",
  },
  list: {
    paddingLeft: "20px",
  },
  saveButton: {
    width: "100%",
    padding: "10px",
    backgroundColor: "#28a745",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontWeight: "bold",
  },
  editButton: {
    width: "100%",
    padding: "10px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontWeight: "bold",
  },
  successMessage: {
    color: "#28a745",
    fontWeight: "bold",
    textAlign: "center",
    marginTop: "15px",
  },
};

export default MyProfile;
