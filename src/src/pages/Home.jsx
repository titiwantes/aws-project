import Navbar from "../components/Navbar";
import { useEffect, useState, createContext } from "react";
import ActionBar from "../components/ActionBar";
import {  ArticleList } from "../components/Articles";
import fetch from "isomorphic-fetch";

export const HomeContext = createContext();

const Home = ({ signOut, user }) => {
  const [data, setData] = useState([]);
  const [saveData, setSaveData] = useState([]);

  const getData = () => {
    fetch("https://466x4ag9y8.execute-api.us-east-1.amazonaws.com/items", {
      method: "GET",
      //set authorization header
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + user.signInUserSession.accessToken.jwtToken
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setSaveData(data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <HomeContext.Provider value={{ data, setData, getData, user, saveData, setSaveData }}>
      <Navbar signOut={signOut} />
      <div>
        <ActionBar user={user} />
        <div className="divider">
          <hr />
        </div>
        <div className="flex justify-center">
          <ArticleList user={user} />
        </div>
      </div>
    </HomeContext.Provider>
  );
};
export default Home;
