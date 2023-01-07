import React, { useContext, useState } from "react";
import { HomeContext } from "../pages/Home";
import Modal from "@mui/material/Modal";

export const Card = ({ article }) => {
  const { articlesList, setArticlesList } = useContext(HomeContext);
  const [newArticle, setNewArticle] = useState({
    id: article.id,
    title: article.title,
    content: article.content,
    tags: article.tags,
  });
  const [open, setOpen] = useState(false);

  const handleDelete = (e) => {
    e.preventDefault();
    const filteredArticles = articlesList.filter((elmt) => {
      return elmt.id !== article.id;
    });
    setArticlesList(filteredArticles);

    //delete article from database
  };

  const handleEdit = (e) => {
    setOpen(false);

    if (
      newArticle.title !== "" &&
      newArticle.content !== "" &&
      newArticle.id !== "" &&
      newArticle.tags !== ""
    ) {
      const nextArticle = {
        id: newArticle.id,
        title: newArticle.title,
        content: newArticle.content,
        tags: newArticle.tags,
      };

      const filteredArticles = articlesList.filter((elmt) => {
        return elmt.id !== article.id;
      });
      setArticlesList([...filteredArticles, nextArticle]);
      //edit article
    } else {
      alert("Veuillez remplir tous les champs");
    }
  };

  return (
    <>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div
          className=""
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <div className="modal-box">
            <h1 className="font-extrabold text-xl">Modifier un article</h1>

            <input
              type="text"
              placeholder="Titre"
              className="input input-bordered w-full mt-8"
              onChange={(e) => {
                setNewArticle({
                  ...newArticle,
                  title: e.target.value,
                });
              }}
              value={newArticle.title}
            />
            <input
              type="text"
              placeholder="Tags"
              className="input input-bordered w-full mt-4"
              onChange={(e) => {
                setNewArticle({
                  ...newArticle,
                  tags: e.target.value.split(" "),
                });
              }}
              value={newArticle.tags.join(" ")}
            />
            <textarea
              placeholder="Contenu"
              className="input input-bordered w-full mt-4 "
              onChange={(e) => {
                setNewArticle({
                  ...newArticle,
                  content: e.target.value,
                });
              }}
              value={newArticle.content}
            />

            <div className="modal-action">
              <btn
                htmlFor="my-modal"
                className="btn btn-primary"
                onClick={handleEdit}
              >
                Modifier
              </btn>
            </div>
          </div>
        </div>
      </Modal>

      <div className="card w-96 bg-base-100 shadow-xl mb-8" key={article.id}>
        <div className="card-body">
          <h2 className="card-title">{article.title}</h2>
          <p>{article.content}</p>
          <hr class="solid"></hr>
          <div>
            {article.tags.map((tag) => (
              <span className="badge badge-secondary mr-1 ">{tag}</span>
            ))}
          </div>
          <div className="card-actions justify-end">
            <button
              className="btn btn-secondary gap-2"
              onClick={() => setOpen(true)}
            >
              Modifier
            </button>
            <button
              className="btn btn-primary gap-2"
              onClick={(e) => {
                handleDelete(e);
              }}
            >
              Supprimer
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>{" "}
          </div>
        </div>
      </div>
    </>
  );
};

export const ArticleList = () => {
  const { articlesList } = useContext(HomeContext);

  return (
    <div className="article-list grid grid-cols-4 gap-4">
      {articlesList.map((article) => (
        <Card article={article} />
      ))}
    </div>
  );
};
