import React from "react";
import { Link } from "react-router-dom";
import logo from './logo.png';
import './Navigation.css'
      


const Navigation = () => {
  return (

      <nav className="navbar navbar-dark bg-info">
        <h2 className=" text-center " style={{textAlign: "center", marginLeft: "650px"}}> Welcome To Zak and Feiya's Chat App!! 
         <img src={logo} alt="logo" />
         </h2>

        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/" className="nav-link textcolor">
              Chat History
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/logs" className="nav-link textcolor">
              Log History
            </Link>
          </li>
        </ul>
      </nav>
    
  );
};

export default Navigation;
