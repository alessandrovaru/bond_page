import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const Article = () => {
  let params = useParams();
  console.log(params);

  const [article, setArticle] = useState([]);
  const [errorA, setErrorA] = useState(null);
  const [loadingA, setLoadingA] = useState(true);

  async function getArticle() {
    try {
      setLoadingA(true);
      await fetch(`/api/v1/show/${params.id}`)
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
        })
        .then((data) => setArticle(data));
    } catch (e) {
      setErrorA(e);
    } finally {
      setLoadingA(false);
    }
  }

  useEffect(() => {
    getArticle();
  }, []);
  return (
    <div>
      <h2>{article.title}</h2>
      <p>{article.text}</p>
      <Link to="/articles" className="btn btn-lg custom-button" role="button">
        Back
      </Link>
    </div>
  );
};

export default Article;
