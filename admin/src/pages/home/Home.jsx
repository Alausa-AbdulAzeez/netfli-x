import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./home.css";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import { useState, useEffect, useMemo } from "react";
import axios from "axios";

export default function Home() {
  const [userStats, setUserStats] = useState([]);

  const months = useMemo(
    () => [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    []
  );

  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await axios.get("/users/stats", {
          headers: {
            token:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNTJjYjlmMGQ4YTcxY2E2MWFlNGE2NyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzMjkxODU5MywiZXhwIjoxNjMzMzUwNTkzfQ.NcXLlRAwu15oAuBxQNnGgoJbmXa6yLPY2l73bS_P4Ss",
          },
        });
        const statList = res.data.sort(function (a, b) {
          return a._id - b._id;
        });
        await statList.map((item) =>
          setUserStats((prev) => [
            ...prev,
            { name: months[item._id - 1], "New User": item.total },
          ])
        );
      } catch (error) {
        console.log(error);
      }
    };
    getStats();
  }, [months]);

  return (
    <div className="home">
      <FeaturedInfo />
      <Chart data={userStats} title="User Analytics" grid dataKey="New User" />
      <div className="homeWidgets">
        <WidgetSm key />
        <WidgetLg />
      </div>
    </div>
  );
}
