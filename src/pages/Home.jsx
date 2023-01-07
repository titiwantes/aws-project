import React from "react";
import Navbar from "../components/Navbar";
import { useState, createContext, useMemo } from "react";
import ActionBar from "../components/ActionBar";
import { Card, ArticleList } from "../components/Articles";

export const HomeContext = createContext();

const Home = () => {
  const ARTICLES = [
    {
      id: 1,
      title: "Article 1",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a",
      tags: ["tag1", "tag2", "tag3"],
    },
    {
      id: 2,
      title: "EArticle 2",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a",
      tags: ["tag1", "tag2", "tag3"],
    },
    {
      id: 3,
      title: "Article 3",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a",
      tags: ["tag1", "tag2"],
    },
    {
      id: 4,
      title: "Article 4",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a",
      tags: ["tag1", "tag2", "tag3"],
    },
    {
      id: 5,
      title: "Article 5",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a",
      tags: ["tag1", "tag2", "tag3"],
    },
    {
      id: 6,
      title: "Article 6",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a",
      tags: ["tag1", "tag2", "tag3"],
    },
    {
      id: 7,
      title: "Article 7",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a",
      tags: ["tag1", "tag3"],
    },
    {
      id: 8,
      title: "Article 8",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a",
      tags: ["tag1", "tag3"],
    },
    {
      id: 9,
      title: "Article 9",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a",
      tags: ["tag1", "tag2"],
    },
    {
      id: 10,
      title: "Article 10",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a",
      tags: ["tag1", "tag2", "tag3"],
    },
    {
      id: 11,
      title: "Article 11",

      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a",
      tags: ["tag1", "tag2", "tag3"],
    },
  ];
  const [articlesList, setArticlesList] = useState(ARTICLES);
  const displayedArticles = useMemo(() => {
    console.log("changed");
    return (
      <div className="article-list grid grid-cols-4 gap-4">
        {articlesList.map((article) => {
          return <Card key={article.id} article={article} />;
        })}
      </div>
    );
  }, [articlesList]);

  return (
    <HomeContext.Provider
      value={{ articlesList, setArticlesList, ARTICLES, displayedArticles }}
    >
      <Navbar />
      <div>
        <ActionBar />
        <div className="divider">
          <hr />
        </div>
        <div className="flex justify-center">
          <ArticleList/>
        </div>
      </div>
    </HomeContext.Provider>
  );
};

export default Home;
