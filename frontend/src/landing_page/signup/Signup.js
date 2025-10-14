import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Signup() {
  const navigate = useNavigate();

  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
    username: "",
  });

  const { email, password, username } = inputValue;

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue((prev) => ({ ...prev, [name]: value }));
  };

  const handleError = (err) =>
    toast.error(err, { position: "bottom-left" });

  const handleSuccess = (msg) =>
    toast.success(msg, { position: "bottom-right" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:4000/signup",
        inputValue,
        { withCredentials: true }
      );
      const { success, message } = data || {};
      if (success) {
        handleSuccess(message || "Signed up!");
        setTimeout(() => navigate("/"), 1000);
      } else {
        handleError(message || "Signup failed");
      }
    } catch (error) {
      handleError(
        error?.response?.data?.message || error.message || "Something went wrong"
      );
      console.error(error);
    }

    setInputValue({ email: "", password: "", username: "" });
  };

  return (
    <>
      <div className="container mb-5">
        <div className="row p-5 mt-5 text-center text-muted">
          <h3>Open a free demat &amp; trading account online</h3>
          <p>
            Start investing brokerage free and join a community of 1.5+ crore
            investors and traders
          </p>
        </div>

        <div className="row m-auto p-5" style={{ width: "100%" }}>
          <div className="col-5">
            <img src="/media/images/signup.png" alt="signup" />
          </div>

          <div className="col-2" />

          <div className="col-5 text-muted">
            <h3>Signup now</h3>
            <p>Or track your existing application</p>

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={email}
                  placeholder="Enter your email"
                  onChange={handleOnChange}
                  className="form-control"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="username">Username</label>
                <input
                  id="username"
                  type="text"
                  name="username"
                  value={username}
                  placeholder="Enter your username"
                  onChange={handleOnChange}
                  className="form-control"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="password">Password</label>
                <input
                  id="password"
                  type="password"
                  name="password"
                  value={password}
                  placeholder="Enter your password"
                  onChange={handleOnChange}
                  className="form-control"
                  required
                />
              </div>

              <button type="submit" className="btn btn-primary">Submit</button>

              <div className="d-block mt-3">
                Already have an account? <Link to="/login">Login</Link>
              </div>
            </form>

            <p className="mt-4">
              By proceeding, you agree to the Zerodha{" "}
              <a href="/">terms</a> &amp; <a href="/">privacy policy</a>
            </p>
          </div>
        </div>
      </div>

      <ToastContainer />
    </>
  );
}

export default Signup;
