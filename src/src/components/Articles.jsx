import React, { useContext, useState } from "react";
import { HomeContext } from "../pages/Home";
import Modal from "@mui/material/Modal";
import { toast } from "react-hot-toast";

export const Card = ({ article }) => {
  const { data, setData, user } = useContext(HomeContext);
  const [newArticle, setNewArticle] = useState({
    id: article.id,
    title: article.title,
    content: article.content,
    tags: article.tags,
  });
  const [open, setOpen] = useState(false);
  const [display, setDisplay] = useState(false);

  const handleDelete = (e) => {
    e.preventDefault();
    //delete article from database

    fetch(
      `https://466x4ag9y8.execute-api.us-east-1.amazonaws.com/items/${article.id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer " + user.signInUserSession.accessToken.jwtToken,
        },
      }
    )
      .then((res) => {
        if (res.status === 200) {
          const filteredArticles = data.filter((elmt) => {
            return elmt.id !== article.id;
          });
          setData(filteredArticles);

          toast.success("Article supprimé avec succès");
        }
      })
      .catch((error) => {
        toast.error("Une erreur est survenue");
      });
  };

  const handleEdit = (e) => {
    if (
      newArticle.title !== "" &&
      newArticle.content !== "" &&
      newArticle.id !== "" &&
      newArticle.tags !== ""
    ) {
      fetch("https://466x4ag9y8.execute-api.us-east-1.amazonaws.com/items", {
        method: "PUT",
        body: JSON.stringify({
          id: newArticle.id,
          user: user.username,
          title: newArticle.title,
          content: newArticle.content,
          tagList: newArticle.tags,
        }),

        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer " + user.signInUserSession.accessToken.jwtToken,
        },
      })
        .then((res) => {
          setOpen(false);
          const nextArticle = {
            id: newArticle.id,
            user: user.username,
            title: newArticle.title,
            content: newArticle.content,
            tags: newArticle.tags,
          };

          const filteredArticles = data.filter((elmt) => {
            return elmt.id !== article.id;
          });
          setData([...filteredArticles, nextArticle]);
          toast.success("Article modifié avec succès");
        })
        .catch((error) => {
          toast.error("Veuillez remplir tous les champs");
        });
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
            <h1 className="font-extrabold mb-8 text-xl">Modifier un article</h1>

            <span className="text-lg text-gray-400">Titre de l'article</span>

            <input
              type="text"
              placeholder="Titre"
              className="input input-bordered w-full mb-4"
              onChange={(e) => {
                setNewArticle({
                  ...newArticle,
                  title: e.target.value,
                });
              }}
              value={newArticle.title}
            />

            <span className="text-lg text-gray-400">Tags</span>

            <input
              type="text"
              placeholder="Tags"
              className="input input-bordered w-full mb-4"
              onChange={(e) => {
                setNewArticle({
                  ...newArticle,
                  tags: e.target.value,
                });
              }}
              value={newArticle.tags}
            />

            <span className="text-lg text-gray-400">Contenu</span>
            <textarea
              placeholder="Contenu"
              className="textarea textarea-bordered min-h-[200px]  w-full mb-4 "
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
      <Modal
        open={display}
        onClose={() => setDisplay(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        draggable
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className="card w-1/2 h-3/4 bg-base-100 shadow-xl">
          <figure>
            <div className="bg-primary h-20 flex p-4 w-full">
              <h1 className="card-title text-white text-2xl">
                {article.title}
              </h1>
            </div>
          </figure>

          <div className="card-body">
            <p>{article.content}</p>
            <hr class="solid"></hr>
            <div>
              {article.tags.split(" ").map((tag, index) => (
                <span key={index} className="badge badge-secondary mr-1 ">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Modal>

      <div
        className="card w-96 bg-base-100 shadow-md mb-8 hover:shadow-secondary transition-all-500 hover:cursor-pointer hover:transform-scale-110 hover:shadow-mg"
        key={article.id}
        onClick={() => {
          setDisplay(true);
        }}
      >
        <figure>
          <div className="bg-primary h-9 w-full"></div>
        </figure>

        <div className="card-body">
          <h2
            className="
          text-2xl
          font-bold
          text-gray-800
          text-start
          mb-4
          "
          >
            {article.title}
          </h2>
          <hr class="solid"></hr>

          <p className="h-[150px] text-gray-500  overflow-hidden">
            {article.content}
          </p>
          <hr class="solid"></hr>
          <div>
            {article.tags.split(" ").map((tag) => (
              <span className="badge badge-secondary mr-1 ">{tag}</span>
            ))}
          </div>
          <div className="card-actions justify-end">
            <button
              className="btn btn-secondary gap-2"
              disabled={article.user !== user.username}
              onClick={(e) => {
                e.stopPropagation();
                setOpen(true);
              }}
            >
              Modifier
            </button>
            <button
              disabled={article.user !== user.username}
              className="btn btn-primary gap-2"
              onClick={(e) => {
                e.stopPropagation();
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
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export const ArticleList = () => {
  const { data } = useContext(HomeContext);

  return (
    <div className="article-list grid grid-cols-4 gap-4">
      {data.map((article) => (
        <Card key={article.id} article={article} />
      ))}
    </div>
  );
};
