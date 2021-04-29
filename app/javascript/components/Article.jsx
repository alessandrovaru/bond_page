import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const Article = () => {
  let params = useParams();
  console.log(params);

  const [article, setArticle] = useState([]);
  const [articleDeleted, setArticleDeleted] = useState(null);
  const [errorA, setErrorA] = useState(null);
  const [loadingA, setLoadingA] = useState(true);

  async function getArticle() {
    setArticleDeleted(false);
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

  const deleteArticle = async () => {
    const token = document.querySelector('meta[name="csrf-token"]').content;

    const requestOptions = {
      method: "DELETE",
      headers: {
        "X-CSRF-Token": token,
        "Content-Type": "application/json",
      },
    };

    try {
      setLoadingA(true);
      const response = await fetch(
        `/api/v1/destroy/${params.id}`,
        requestOptions
      );
      const data = await response.json();
      console.log(data);
      setArticleDeleted(true);
    } catch (error) {
      setErrorA({ error: true, msg: error.message });
    } finally {
      setLoadingA(false);
    }

    console.log(requestOptions);
  };

  useEffect(() => {
    getArticle();
  }, []);
  return (
    <div>
      <h2>{article.title}</h2>
      <p>{article.text}</p>
      <button onClick={deleteArticle}>delete</button>
      {articleDeleted && <p>Borrado</p>}
      <Link to="/articles" className="btn btn-lg custom-button" role="button">
        Back
      </Link>
    </div>
  );
};

export default Article;
