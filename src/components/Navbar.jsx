import { useContext, useState } from "react";
import { HomeContext } from "../pages/Home";

const Navbar = ({signOut}) => {
  const { setArticlesList, ARTICLES } = useContext(HomeContext);
  const [select, setSelect] = useState("Chercher par titre");

  const handleSelect = (e) => {
    setSelect(select === "Chercher par titre" ? "Chercher par tag" : "Chercher par titre");
  };


  const handleSearch = (e) => {
    const searchValue = e.target.value.split(" ");
    //filter articles by tag list of tags searched
    
    const filteredArticles = select.includes("tag") ? ARTICLES.filter((article) => {
      return searchValue.every((tag) => {
        return article.tags.some((articleTag) => {
          return articleTag.includes(tag);
        });
      });
    }) : ARTICLES.filter((article) => {
      return searchValue.every((word) => {
        return article.title.includes(word);
      });
    });



    setArticlesList(filteredArticles);
  };

  return (
    <div className="navbar bg-primary  z-50 mb-5 ">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <label>Homepage</label>
            </li>
            <li></li>
            <li>
              <label
                onClick={() => {
                  signOut();
                }}
              >Disconnect</label>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <div className="btn btn-ghost normal-case text-white text-xl">
          AWS-Project
        </div>
      </div>

      <div className="navbar-end">
        <btn className="btn btn-primary mr-2 text-white " onClick={
          handleSelect
        } >
          {select}
        </btn>
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered"
            onChange={(e) => handleSearch(e)}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
