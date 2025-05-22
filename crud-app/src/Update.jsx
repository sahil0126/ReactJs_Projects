import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Update = () => {
  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate=useNavigate();

  useEffect(() => {
    setId(localStorage.getItem("id"));
    setName(localStorage.getItem("name"));
    setEmail(localStorage.getItem("email"));
  }, []);

  const handleUpdate = (e) => {
    e.preventDefault();
    axios.put(
      `https://682f0ab1746f8ca4a47f8878.mockapi.io/crud-app-api/${id}`,
      {
        name: name,
        email: email,
      }
    ).then(()=>{
        navigate("/read")
    })
  };

  return (
    <>
      <form /*onSubmit={handleSubmit}*/>
        <div className="container">
          <h2>Update</h2>

          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* {name}
        {email} */}

          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleUpdate}
          >
            Update
          </button>
        </div>
      </form>
    </>
  );
};

export default Update;
