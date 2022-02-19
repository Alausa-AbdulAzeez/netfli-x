import { ArrowBackOutlined } from "@material-ui/icons";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import "./watch.scss";

function Watch() {
  const location = useLocation();
  const movie = location.movie;
  return (
    <>
      {movie && (
        <>
          <div className="watch">
            <Link to="/">
              <div className="back">
                <ArrowBackOutlined />
                <span>Home</span>
              </div>
            </Link>
            <video
              src={movie.video}
              className="video"
              autoPlay={true}
              progress="true"
              controls
            ></video>
          </div>
        </>
      )}
    </>
  );
}

export default Watch;
