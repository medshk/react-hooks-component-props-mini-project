import React from "react";
import Article from "./Article";

export default function ArticleList({ articles }) {
  return (
    <main>
      {articles.map((art) => (
        <Article
          key={art.id}
          title={art.title}
          date={art.date}
          preview={art.preview}
          minutes={art.minutes}
        />
      ))}
    </main>
  );
}
