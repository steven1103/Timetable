import { Paper } from "@material-ui/core";
import React from "react";
import "./Paper.css";

const Schedule = {
  Mon: "과학.영어.체육.기가.수학.독서",
  Tue: "정보.과학.수학.역사.스포.국어.창체",
  Wed: "영어.체육.국어.과학.기가.음악.미술",
  Thu: "역사.기가.예음.수학.영어.정보",
  Fri: "수학.국어.역사.기탐.체육.과학",
  Sat: "국어.영어.수학",
  Sun: "사회.과학",
};

const zoomIDGet = (subject) => {
  if (subject === "수학") {
    return "3680263847";
  } else if (subject === "과학") {
    return "4533591609";
  } else if (subject === "국어") {
    return "3290062503";
  } else if (subject === "영어") {
    return "4425870269";
  } else if (subject === "기가") {
    return "5738228001";
  } else if (subject === "미술") {
    return "5533636313";
  } else if (subject === "체육") {
    return "9849739266";
  } else if (subject === "역사") {
    return "2126825285";
  } else if (subject === "창체") {
    return "3680263847";
  } else if (subject === "음악") {
    return "9471108619";
  } else if (subject === "정보") {
    return "4507491039";
  } else if (subject === "독서") {
    return "6871964364";
  } else if (subject === "스포") {
    return "9896910472";
  } else if (subject === "기탐") {
    return "2558169121";
  } else {
    return "error404";
  }
};

const getDayOfWeek = () => {
  const week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const dayOfWeek = week[new Date().getDay()];
  return dayOfWeek;
};

const TimeTable = () => {
  const dateToday = getDayOfWeek();
  let todaysSchedule;

  if (dateToday === "Mon") {
    todaysSchedule = Schedule.Mon;
  } else if (dateToday === "Tue") {
    todaysSchedule = Schedule.Tue;
  } else if (dateToday === "Wed") {
    todaysSchedule = Schedule.Wed;
  } else if (dateToday === "Thu") {
    todaysSchedule = Schedule.Thu;
  } else if (dateToday === "Fri") {
    todaysSchedule = Schedule.Fri;
  } else if (dateToday === "Sat") {
    todaysSchedule = Schedule.Sat;
  } else if (dateToday === "Sun") {
    todaysSchedule = Schedule.Sun;
  }

  const splitedSchedule = todaysSchedule.split(".");
  let ElementList = [];

  for (let i = 0; i < splitedSchedule.length; i++) {
    ElementList.push(
      <Paper
        style={{
          display: "table-cell",
          verticalAlign: "middle",
          textAlign: "center",
          alignSelf: "center",
        }}
        key={i}
        className="Paper"
      >
        <h3>{i + 1}교시</h3>
        <h1>
          {"\n"}
          {splitedSchedule[i]}
        </h1>
        <a
          href={"https://us04web.zoom.us/j/".concat(
            zoomIDGet(splitedSchedule[i])
          )}
          style={{
            alignSelf: "center",
            color: "blue",
            textDecoration: "none",
          }}
          target="_blank"
          rel="noreferrer"
        >
          링크
        </a>
      </Paper>
    );
  }

  return (
    <div>
      <div
        style={{
          display: "table",
          tableLayout: "fixed",
          width: "100%",
          borderSpacing: 5,
          height: "30vh",
        }}
      >
        {ElementList}
      </div>
    </div>
  );
};

export default TimeTable;
