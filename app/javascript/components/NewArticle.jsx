import React, { useState } from "react";

const NewArticle = () => {
  const [newArticle, setNewArticle] = useState([]);
  const [errorA, setErrorA] = useState(null);
  const [loadingA, setLoadingA] = useState(true);

  async function sendArticle() {
    const token = document.querySelector('meta[name="csrf-token"]').content;
    const { title, text } = newArticle;
    const body = {
      title,
      text,
    };
    try {
      setLoadingA(true);
      await fetch(`/api/v1/articles/create`, {
        method: "POST",
        headers: {
          "X-CSRF-Token": token,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      })
        .then((response) => {
          if (response.ok) {
            console.log(response);
            return response.json();
          }
        })
        .then(console.log(response));
    } catch (e) {
      setErrorA(e);
      console.log(errorA);
    } finally {
      setLoadingA(false);
    }
  }

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
    </>
  );
};

export default NewArticle;
