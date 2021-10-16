import "./listItem.scss";
import {
  PlayArrow,
  Add,
  ThumbUpAltOutlined,
  ThumbDownOutlined,
} from "@material-ui/icons";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function ListItem({ index, item }) {
  const [isHovered, setIsHovered] = useState(false);
  const [movie, setMovie] = useState({});

  const axiosInstance = axios.create({
    baseURL: "https://netfli-x.herokuapp.com/api/",
  });

  useEffect(() => {
    const getMovie = async () => {
      try {
        const res = await axiosInstance.get("/movies/find/" + item, {
          headers: {
            token:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNTJjYjlmMGQ4YTcxY2E2MWFlNGE2NyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzMzk1ODAwMSwiZXhwIjoxNjM4Mjc4MDAxfQ.zQ8wf_-KOzZiDI8IaIyRI2Uvapoysaz8FMrcQ_x00qI",
          },
        });
        setMovie(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getMovie();
  }, [item]);
  return (
    <div
      className="listItem"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ left: isHovered && index * 225 + index * 2.5 }}
    >
      {movie && (
        <>
          <img src={movie.img} alt="" />
          {isHovered && (
            <Link to={{ pathname: "/watch", movie: movie }} className="link">
              <>
                <video src={movie.trailer} autoPlay loop></video>
                <div className="itemInfo">
                  <div className="icons">
                    <PlayArrow className="icon" />
                    <Add className="icon" />
                    <ThumbUpAltOutlined className="icon" />
                    <ThumbDownOutlined className="icon" />
                  </div>
                  <div className="itemInfoTop">
                    <span>{movie.duration}</span>
                    <span className="limit">+{movie.limit}</span>
                    <span>{movie.year}</span>
                  </div>
                  <div className="description">{movie.description}</div>
                  <div className="genre">{movie.genre}</div>
                </div>
              </>
            </Link>
          )}
        </>
      )}
    </div>
  );
}

export default ListItem;
