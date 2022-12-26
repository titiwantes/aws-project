import React, { useContext } from "react";
import { HomeContext } from "../pages/Home";

const ArticleList = () => {
  
  const {articlesList } = useContext(HomeContext);

  return (
    <div className="article-list">
      {articlesList.map((article) => (
        <div className="card w-[500px] bg-base-100 shadow-xl mb-8">
          <div className="card-body">
            <h2 className="card-title">{article.title}</h2>
            <p>{article.content}</p>
            <hr class="solid"></hr>
            <div>
              {article.tags.map((tag) => (
                <span className="badge badge-primary mr-1">{tag}</span>
              ))}
            </div>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Supprimer</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ArticleList;
