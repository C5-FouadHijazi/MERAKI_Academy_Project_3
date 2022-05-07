import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./style.css"

const Navbar = () => {
    const navigate = useNavigate();
    return (
      
      <div className="Nev" >

      {<Link to="/Register/">Register</Link>}

       {<Link to="/login">login</Link>}

       {<Link to="/Dashboard">Dashboard</Link>}

       {<Link to="/Logout">Logout</Link>}
   
      </div>
    );
  };
  
  export default Navbar;