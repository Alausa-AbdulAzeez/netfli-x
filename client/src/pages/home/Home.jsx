import "./home.scss";
import Navbar from "../../components/navbar/Navbar";
import Featured from "../../components/featured/Featured";
import List from "../../components/list/List";
import { useEffect, useState } from "react";
import axios from "axios";

function Home({ type }) {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);

  const axiosInstance = axios.create({
    baseURL: "https://netfli-x.herokuapp.com/api/",
  });

  useEffect(() => {
    const getRandomLists = async () => {
      try {
        const res = await axiosInstance.get(
          `lists${type ? "?type=" + type : ""}${
            genre ? "&genre=" + genre : ""
          }`,
          {
            headers: {
              token:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNTJjYjlmMGQ4YTcxY2E2MWFlNGE2NyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzMzk1ODAwMSwiZXhwIjoxNjM4Mjc4MDAxfQ.zQ8wf_-KOzZiDI8IaIyRI2Uvapoysaz8FMrcQ_x00qI",
            },
          }
        );
        setLists(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getRandomLists();
  }, [type, genre]);
  return (
    <div className="home">
      <Navbar />
      <Featured type={type} />
      {lists.map((list) => {
        return <List list={list} key={list._id} />;
      })}
    </div>
  );
}

export default Home;
