import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { map } from "jquery";

import AllArticles from "../components/AllArticles";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [errorA, setErrorA] = useState(null);
  const [loadingA, setLoadingA] = useState(true);

  async function getArticles() {
    try {
      setLoadingA(true);
      await fetch(`/api/v1/articles/index`)
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
        })
        .then((data) => setArticles(data));
    } catch (e) {
      setErrorA(e);
    } finally {
      setLoadingA(false);
    }
  }
  useEffect(() => {
    getArticles();
  }, []);

  return (
    <>
      <h2>Todos los articles</h2>
      <AllArticles article={articles} />
      <Link to="/" className="btn btn-lg custom-button" role="button">
        Volver al home
      </Link>
    </>
  );
};

export default Articles;
