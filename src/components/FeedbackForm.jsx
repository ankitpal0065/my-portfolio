import React, { useState } from "react";

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Feedback submitted!");
    // Add your submit logic here
  };

  return (
    <div style={{ maxWidth: 400, margin: "auto" }}>
      <h2 style={{ textAlign: "center", marginBottom: 20 }}>
        Send a message for feedback
      </h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          style={{
            width: "100%",
            padding: "8px",
            marginBottom: "10px",
            boxSizing: "border-box",
          }}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          style={{
            width: "100%",
            padding: "8px",
            marginBottom: "10px",
            boxSizing: "border-box",
          }}
        />
        <input
          type="text"
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          style={{
            width: "100%",
            padding: "8px",
            marginBottom: "10px",
            boxSizing: "border-box",
            height: "36px", // same height as other inputs
          }}
        />
        <button
  type="submit"
  style={{
    padding: "8px 16px",
    width: "100%",
    backgroundColor: "blue", // dark background
    color: "white",           // blue text color
    border: "none",
    cursor: "pointer",
  }}
>
  Submit
</button>

      </form>
    </div>
  );
};

export default FeedbackForm;
