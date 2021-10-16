import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";
import { useState, useEffect } from "react";
import axios from "axios";

export default function WidgetSm() {
  const [newUsers, setNewUsers] = useState([]);
  const axiosInstance = axios.create({
    baseURL: "https://netfli-x.herokuapp.com/api/",
  });

  useEffect(() => {
    const getNewUsers = async () => {
      try {
        const res = await axiosInstance.get("/users?new=true", {
          headers: {
            token:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNTJjYjlmMGQ4YTcxY2E2MWFlNGE2NyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzMzM1OTAyNCwiZXhwIjoxNjMzNzkxMDI0fQ.E6t70UdrsqstvIeGnD-tBTQJPWjUx3qb184xwiG7Tdk",
          },
        });
        setNewUsers(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getNewUsers();
  }, []);

  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        {newUsers.map((user) => {
          return (
            <li className="widgetSmListItem" key={user._id}>
              <img
                src={
                  user.profilePicture ||
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmX1IYrleu5pZkTWvD6cBrp4E0knysir8f-A&usqp=CAU"
                }
                alt=""
                className="widgetSmImg"
              />
              <div className="widgetSmUser">
                <span className="widgetSmUsername">{user.username}</span>
              </div>
              <button className="widgetSmButton">
                <Visibility className="widgetSmIcon" />
                Display
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
