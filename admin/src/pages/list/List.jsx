import { Link, useLocation } from "react-router-dom";
import "./list.css";

import { useContext } from "react";
import { MovieContext } from "../../context/movieContext/MovieContext";

export default function List() {
  const location = useLocation();
  const list = location.list;

  const { dispatch } = useContext(MovieContext);

  const handleChange = (e) => {
    const value = e.target.value;
  };

  const handleUpdate = (e) => {
    e.preventDefault();
  };

  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">List</h1>
        <Link to="/newList">
          <button className="productAddButton">Create</button>
        </Link>
      </div>
      <div className="productTop">
        <div className="productTopRight">
          <div className="productInfoTop">
            <span className="productName">{list.title}</span>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <span className="productInfoKey">id:</span>
              <span className="productInfoValue">{list._id}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">genre:</span>
              <span className="productInfoValue">{list.genre}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">type:</span>
              <span className="productInfoValue">{list.type}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="productBottom">
        <form className="productForm">
          <div className="productFormLeft">
            <label>List Title</label>
            <input
              type="text"
              placeholder={list.title}
              onChange={handleChange}
              name="title"
            />
            <label>Type</label>
            <input
              type="text"
              placeholder={list.type}
              onChange={handleChange}
              name="type"
            />
            <label>Genre</label>
            <input
              type="text"
              placeholder={list.genre}
              onChange={handleChange}
              name="genre"
            />
          </div>
          <div className="productFormRight">
            <button className="productButton" onClick={handleUpdate}>
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
