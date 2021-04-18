import { Paper } from "@material-ui/core";
import React from "react";
import "./Paper.css";

const Schedule = {
  Mon: "과학.수학.영어.기가.정보.미술",
  Tue: "수학.독서.체육.영어.국어.스포.창체",
  Wed: "음악.수학.역사.국어.기가.과학.체육",
  Thu: "기가.정보.과학.예음.역사.수학",
  Fri: "체육.체육.체육.영어.역사.국어",
  Sat: "체육.체육.체육",
  Sun: "체육.체육.체육",
};

const zoomIDGet = (subject) => {
  if (subject === "수학") {
    return "3680263847";
  } else if (subject === "과학") {
    return "4444258802";
  } else if (subject === "국어") {
    return "3290062503";
  } else if (subject === "영어") {
    return "4425870269";
  } else if (subject === "기가") {
    return "2558169121";
  } else if (subject === "미술") {
    return "5533636313";
  } else if (subject === "체육") {
    return "9849739266";
  } else if (subject === "역사") {
    return "2126825285";
  } else if (subject === "창체") {
    return "5533636313";
  } else if (subject === "음악") {
    return "9471108619";
  } else if (subject === "정보") {
    return "4507491039";
  } else if (subject === "독서") {
    return "6871964364";
  } else if (subject === "스포") {
    return "4507491039";
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
