import React from "react";
import FeaturedInfo from "../../../components/DashBoard/FeaturedInfo/FeaturedInfo";
import Chart from "../../../components/DashBoard/Chart/Chart";
import { userData } from "../../../dummyData";
import WidgetSm from "../../../components/DashBoard/widgetSm/WidgetSm";
import WidgetLg from "../../../components/DashBoard/widgetLg/WidgetLg";
import "./dbhome.css";
import { Fragment } from "react";

export default function Home() {
  return (
    <div className="home">
      Home
      <Fragment>
        <FeaturedInfo />
        <Chart
          data={userData}
          title="User Analytics"
          grid
          dataKey="Active User"
        />
        <div className="homeWidgets">
          <WidgetSm />
          <WidgetLg />
        </div>
      </Fragment>
    </div>
  );
}
