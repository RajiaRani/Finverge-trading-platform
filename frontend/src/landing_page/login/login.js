import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({ email: "", password: "" });

  const { email, password } = inputValue;

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue((prev) => ({ ...prev, [name]: value }));
  };

  const handleError = (err) =>
    toast.error(err, { position: "bottom-left" });

  const handleSuccess = (msg) =>
    toast.success(msg, { position: "bottom-left" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:3001/login",
        inputValue,
        { withCredentials: true }
      );
      const { success, message } = data || {};
      if (success) {
        handleSuccess(message || "Logged in!");
        setTimeout(() => navigate("/"), 800);
      } else {
        handleError(message || "Invalid credentials");
      }
    } catch (error) {
      handleError(error?.response?.data?.message || error.message);
      console.error(error);
    }
    setInputValue({ email: "", password: "" });
  };

  return (
    <>
      <div className="form_container">
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
              <h2>Login Account</h2>
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
                    autoComplete="email"
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
                    autoComplete="current-password"
                    required
                  />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>

                <div className="d-block mt-3">
                  Don’t have an account? <Link to="/signup">Signup</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <ToastContainer />
    </>
  );
};

export default Login;
