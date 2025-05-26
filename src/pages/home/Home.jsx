import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";


function Home() {
  const navigate = useNavigate();

const[formData, setFormData] = useState({
"name":"",

"email":"",
})

  const handleChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/create", formData);
      console.log("User created:", response.data);
      navigate("/table");

    } catch (error) {
      console.error("Error creating user:", error);
    }
  };


  return (
    <div className="form-box margin-100">
      <form onSubmit={handleSubmit} action="">
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Ujjawal Dhwaj"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="ujjawaldhwaj@gmail.com"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Home;
