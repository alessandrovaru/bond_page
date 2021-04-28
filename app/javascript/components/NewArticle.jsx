import React, { useState } from "react";
import { Link } from "react-router-dom";

const NewArticle = () => {
  const [newArticle, setNewArticle] = useState([]);
  const [articleSent, setArticleSent] = useState(null);
  const [errorA, setErrorA] = useState(null);
  const [loadingA, setLoadingA] = useState(null);

  const sendArticle = async () => {
    const token = document.querySelector('meta[name="csrf-token"]').content;
    const { title, text } = newArticle;

    const body = {
      title,
      text,
    };

    const requestOptions = {
      method: "POST",
      headers: {
        "X-CSRF-Token": token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    };

    try {
      setLoadingA(true);
      const response = await fetch(`/api/v1/articles/create`, requestOptions);
      const data = await response.json();
      setArticleSent(data);
    } catch (error) {
      setErrorA({ error: true, msg: error.message });
    } finally {
      setLoadingA(false);
    }

    console.log(requestOptions);
  };

  const handleChange = (e) => {
    setNewArticle({
      ...newArticle,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(newArticle);
    sendArticle();
  };

  return (
    <>
      <form onChange={handleChange} onSubmit={handleSubmit}>
        <label>
          Title
          <input type="text" name="title" />
        </label>
        <label>
          Contenido
          <input type="text" name="text" />
        </label>
        <input type="submit" value="Submit" />
      </form>
      {loadingA && <p>Cargando</p>}
      {articleSent && (
        <p>
          Enviado, <Link to={"/article/" + articleSent.id}> read it</Link> dsdss
        </p>
      )}
      {errorA && <p>Error</p>}
    </>
  );
};

export default NewArticle;
