import "./navbar.scss";
import { useContext, useState } from "react";
import { ArrowDropDown, Notifications, Search } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { AuthContext } from "../../authContext/AuthContext";
import { logOutFunction } from "../../authContext/apiCalls";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { dispatch } = useContext(AuthContext);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
  };

  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar "}>
      <div className="container">
        <div className="left">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
            alt="logo"
          />
          <Link to="/" className="link">
            <span>Homepage</span>
          </Link>
          <Link to="/series" className="link">
            <span className=" navbarMainLinks">Series</span>
          </Link>
          <Link to="/movies" className="link">
            <span className=" navbarMainLinks">Movies</span>
          </Link>
          <span>New and Popular</span>
          <span>My List</span>
        </div>
        <div className="right">
          <Search className="icon" />
          <span>Kid</span>
          <Notifications className="icon" />
          <img
            src="https://images.pexels.com/photos/5682518/pexels-photo-5682518.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
            alt="no avatar"
          />
          <div className="profile">
            <ArrowDropDown className="icon" />
            <div className="options">
              <span>Settings</span>
              <span onClick={() => logOutFunction(dispatch)}>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
