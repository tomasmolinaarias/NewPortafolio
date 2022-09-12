import { Button } from "@mui/material";
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../Style/Navbar.css";
import ReorderIcon from "@mui/icons-material/Reorder";
export const Navbar = () => {
  const [expandNavbar, setExpandNavbar] = useState(false);
  const Location = useLocation();
  useEffect(() => {
    setExpandNavbar(false);
  }, [Location]);

  return (
    <div className="navbar" id={expandNavbar ? "open" : "close"}>
      <div className="toggleButton">
        <Button
          onClick={() => {
            setExpandNavbar((prev) => !prev);
          }}
        >
          <ReorderIcon />
        </Button>
      </div>
      <div className="links">
        <Link to="/">Home </Link>
        <Link to="/Projects">Proyects</Link>
        <Link to="/Experience">Experience</Link>
      </div>
    </div>
  );
};
