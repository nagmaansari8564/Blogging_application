import React from "react";
import CustomNavbar from "./CustomNavbar";

const Base = ({ title = "welcome to our website", children }) => {
  return (
    <div className="container-fluid">
      <CustomNavbar />
      {children}
      <h1>im footer</h1>
    </div>
  );
};

export default Base;
