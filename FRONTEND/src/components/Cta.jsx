function Cta() {
  return (
    <>
      <div
        className="cta-section text-center my-5"
        style={{
          backgroundColor: "#f8f9fa",
          padding: "40px",
          borderRadius: "12px",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.15)",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <h3 style={{ fontSize: "2.2rem", fontWeight: "700" }}>
          Ready to Boost Your Skills?
        </h3>
        <p style={{ fontSize: "1.4rem", margin: "15px 0" }}>
          Join our community of learners today!
        </p>
        <a href="/my-profile" className="btn btn-success btn-lg">
          Get Started Now
        </a>
      </div>
    </>
  );
}

export default Cta;
