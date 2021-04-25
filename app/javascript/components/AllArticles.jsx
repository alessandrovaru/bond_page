import React from "react";

const AllArticles = ({ article }) => {
  return (
    <>
      <ul>
        {article.map((article) => (
          <li key={article.id}>{article.title}</li>
        ))}
      </ul>
    </>
  );
};

export default AllArticles;
