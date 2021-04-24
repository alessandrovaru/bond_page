import React from "react";

const { Link } = require("react-router-dom");

const Homepage = () => {
  return (
    <div>
      <h2>Hola, bienvenido</h2>
      <Link to="/articles" className="btn btn-lg custom-button" role="button">
        Ver articles
      </Link>
    </div>
  );
};

export default Homepage;
