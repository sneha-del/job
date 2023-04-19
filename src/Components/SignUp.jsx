
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Footer.css";
import "./Login.css"
import { Link } from "react-router-dom";

function SignUp  () {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    
  });
  const navigate =useNavigate();


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(formData));
    
    navigate('/login');
  };

  return (
    <div className='container-register mt-3 mb-3 '>
    <div className="row-register">
        <div className="col-md-4 offset-md-4">
            <div className="card">
                <div className="card-header fs-3 text-center bg-primary">
                    BookXpert
                </div>
                <div className="card-body">
                    <form  onSubmit={(e)=>handleSubmit(e)}>
                       <div className="mb-3"> 
                        <input required type="text" placeholder=" FirstName" name="firstName" className='form-control' onChange={(e)=>handleChange(e)} value={formData.firstName} />
                       </div>

                        <div className="mb-3">
                        <input required type="text" placeholder=" LastName" name="lastName" className='form-control' onChange={(e)=>handleChange(e)} value={formData.lastName} />
                       </div>

                        <div className="mb-3">
                        <input required type="text" placeholder=" Email id" name="email" className='form-control' onChange={(e)=>handleChange(e)} value={formData.email}/>
                       </div>

                        <div className="mb-3">
                        <input required type="password" placeholder=" Password" name="password" className='form-control' onChange={(e)=>handleChange(e)} value={formData.password}/>
                       </div> 

                       <div className="btn-div">
                       <button className="btn btn-success col-md-12">Sign up</button> 
                       By signing up you agree to our Terms of Use, Privacy Policy, GDPR Privacy Notice and Disclaimer Policy.<br />
                       <button className="btn col-md-12 fs-5 "  type="submit"><Link to="/login"> Now Login</Link></button>
                       </div>

                
 
                    </form>
                </div>
            </div>
        </div>
    </div>

</div>

  );
};

export default SignUp;
