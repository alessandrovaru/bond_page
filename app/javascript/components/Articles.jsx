import React from "react";
import { Link } from "react-router-dom";

const Articles = () => {
  return (
    <>
      <h2>Todos los articles</h2>
      <Link to="/" className="btn btn-lg custom-button" role="button">
        Volver al home
      </Link>
    </>
  );
};

export default Articles;
