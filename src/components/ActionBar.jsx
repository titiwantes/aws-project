import React, { useContext, useState } from "react";
import { HomeContext } from "../pages/Home";
import Modal from "@mui/material/Modal";

const ActionBar = () => {
  const { articlesList, setArticlesList, ARTICLES } = useContext(HomeContext);
  console.log(ARTICLES);
  const [open, setOpen] = useState(false);
  const [newArticle, setNewArticle] = useState({
    id: "",
    title: "",
    content: "",
    tags: "",
  });

  const createArticle = () => {
    setOpen(false);
    const nextArticle = {
      id: (Math.random() + 1).toString(36).substring(7),
      title: newArticle.title,
      content: newArticle.content,
      tags: newArticle.tags,
    };
    console.log(nextArticle.tags);

    setArticlesList([...articlesList, nextArticle]);

    setNewArticle({
      id: "",
      title: "",
      content: "",
      tags: "",
    });
    // add the new article to database
  };

  return (
    <div className="navbar">
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
            <h1 className="font-extrabold text-xl">Créer un article</h1>

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
            />

            <div className="modal-action">
              <btn
                htmlFor="my-modal"
                className="btn btn-primary"
                onClick={createArticle}
              >
                Creer
              </btn>
            </div>
          </div>
        </div>
      </Modal>

      <div className="navbar-start"></div>
      <div className="navbar-center">
        <button className="btn btn-secondary gap-2">
          Articles :
          <div className="badge badge-primary">
            {articlesList.length.toString()}
          </div>
        </button>
      </div>

      <div className="navbar-end">
        <button className="btn btn-primary gap-2" onClick={() => setOpen(true)}>
          Ajouter un article
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
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ActionBar;
