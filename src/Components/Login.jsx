import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css'


const Login = () => {
    const [loginData, setLoginData] = useState({
      email: "",
      password: "",
    });
    const navigate = useNavigate();
    
  
    const handleChange = (e) => {
      setLoginData({ ...loginData, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const user = JSON.parse(localStorage.getItem("user"));
      if (
        loginData.email === user.email &&
        loginData.password === user.password
      ) {
        localStorage.setItem("loggedIn", true);
        
        navigate('/aboutus');
        
      } else {
        alert("Invalid Details!");
      }
    };
    return(
        <>
          <div className="container-login mt-3 mb-3">
      <div className="row-login">
        <div className="col-md-4 offset-md-4">
          <div className="card">
            <div className="card-header fs-3 text-center bg-primary">BookXpert</div>
            
            <div className="card-body">
              <form onSubmit={(e) => handleSubmit(e)}>
                <div className="mb-3">
                  <input
                    required
                    type="text"
                    placeholder=" Enter email id"
                    name="email"
                    className="form-control"
                    onChange={(e) => handleChange(e)}
                    value={loginData.email}
                  />
                </div>

                <div className="mb-3">
                  <input
                    required
                    type="password"
                    placeholder=" Password"
                    name="password"
                    className="form-control"
                    onChange={(e) => handleChange(e)}
                    value={loginData.password}
                  />
                </div>

                <div className="btn-div">
                  <button className="btn btn-success col-md-12">Login</button>{" "}
                  <br />
                  <button className="btn col-md-12 fs-5 " type="submit">
                    Don't have an account?
                    <Link to="/signup">Sign up.</Link>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
        </>
    )
}
export default Login;
