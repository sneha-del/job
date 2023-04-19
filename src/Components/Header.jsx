import React  from "react";
import "./Header.css";
import { Link,  useNavigate } from "react-router-dom";
import CallIcon from '@mui/icons-material/Call';
import LocationOnIcon from '@mui/icons-material/LocationOn';



function Header ()  {
  const navigate = useNavigate();
  const auth = localStorage.getItem("loggedIn");
  console.log("loginnnn", auth);
  const logoutUser = () => {
    localStorage.removeItem("loggedIn");
    navigate("/login");
  };
  return (
    <>
    
    <nav className ="navbar1  ">
      <div>
        <CallIcon/> +91-11100XXXXX <LocationOnIcon/> Flat No: 101, Sai Srinivasam, 3rd Lane, Ashok Nagar, Guntur 
       </div>
     </nav>
     
   <nav className ="navbar navbar-expand-lg navbar-light  ">
      <div className ="container-fluid">
      <Link to="/" className="nav-link activ" href="#">
           <img src={"/logo.png"} width={"150px"} height={"20px"} alt="" className="img-fluid me-2" /> 
        </Link>
      </div >
      <div className ="container-fluid">
        
        
        <button
          className ="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className ="navbar-toggler-icon"></span>
        </button>
        <div className ="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className ="navbar-nav me-auto mb-2 mb-lg-0">
            <li className ="nav-item">
              <Link to="/" className="nav-link activ" href="#">
                BookXpert
              </Link>
            </li>
            <li>
              <Link
                to="/aboutus"
                className="nav-link "
                aria-current="page"
                href="#"
              >
                About Us
              </Link>
            </li>
            <li className ="nav-item">
              <Link to="/blogs" className="nav-link" href="#">
                Blogs
              </Link>
            </li>
            <li className ="nav-item">
              <Link to="/services" className="nav-link" href="#">
                Services
              </Link>
            </li>
            <li>
              <Link to="/contact" className="nav-link" href="#">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/events" className="nav-link" href="#">
                Events
              </Link>
            </li>
            <li>
              {auth ? (
                <Link
                  onClick={logoutUser}
                  to="/logout"
                  className="nav-link"
                  href="#"
                >
                  Logout
                </Link>
              ) : (
                <Link to="/login" className="nav-link" href="#">
                  Login
                </Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
    
    </>
  );
};

export default Header;
