import React from "react";
import { Link } from "react-router-dom";

const ArticleList = ({ articles }) => {
  return (
    <>
      <ul>
        {articles.map((article) => (
          <div key={article.id}>
            <li>{article.title}</li>
            <Link
              to={"/article/" + article.id}
              className="btn btn-lg custom-button"
              role="button"
            >
              leer
            </Link>
          </div>
        ))}
      </ul>
    </>
  );
};

export default ArticleList;
