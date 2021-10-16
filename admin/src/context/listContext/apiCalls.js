import axios from "axios";
import {
  createListFailure,
  createListStart,
  createListSuccess,
  deleteListFailure,
  deleteListStart,
  deleteListSuccess,
  getListsFailure,
  getListsStart,
  getListsSuccess,

  // updateMovieFailure,
  // updateMovieStart,
  // updateMovieSuccess,
} from "./ListActions";

const axiosInstance = axios.create({
  baseURL: "https://netfli-x.herokuapp.com/api/",
});
// GET LISTS
export const getLists = async (dispatch) => {
  dispatch(getListsStart());
  try {
    const res = await axiosInstance.get("/lists", {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    // console.log(res.data);
    dispatch(getListsSuccess(res.data));
  } catch (error) {
    dispatch(getListsFailure());
  }
};

// DELETE LISTS
export const deleteList = async (id, dispatch) => {
  dispatch(deleteListStart());
  try {
    await axiosInstance.delete("/lists/" + id, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(deleteListSuccess(id));
  } catch (error) {
    dispatch(deleteListFailure());
  }
};

// CREATE MOVIE

export const createList = async (list, dispatch) => {
  dispatch(createListStart());
  try {
    const res = await axiosInstance.post("/lists", list, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    console.log(`data  ${res.data}`);

    dispatch(createListSuccess(res.data));
  } catch (error) {
    dispatch(createListFailure());
  }
};
// // UPDATE MOVIE

// export const updateMovie = async (movie, dispatch) => {
//   dispatch(updateMovieStart());
//   try {
//     const res = await axios.put("/movies/" + movie._id, movie, {
//       headers: {
//         token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
//       },
//     });
//     dispatch(updateMovieSuccess(res.data));
//   } catch (error) {
//     dispatch(updateMovieFailure());
//   }
// };
