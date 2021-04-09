import { Paper } from "@material-ui/core";
import React from "react";
import "./Notice.css";

const Notice = () => {
  return (
    <div class="Notice">
      <div class="wrapper">
        <Paper
          className="Paper"
          style={{
            alignSelf: "center",
            minHeight: 295,
            textAlign: "center",
          }}
          onClick={() => window.open("https://us04web.zoom.us/j/5533636313")}
        >
          <div style={{ marginTop: 65 }}>
            <h3>#줌 들어가기</h3>
            <h1 style={{color:'purple'}}>조회 & 종례</h1>
            <h3>늦지 않게 참여하기!</h3>
          </div>
        </Paper>
        <Paper
          className="Paper"
          style={{
            alignSelf: "center",
            minHeight: 295,
            textAlign: "center",
          }}
          onClick={() => window.open("https://hcs.eduro.go.kr/#/relogin")}
        >
          <div style={{ marginTop: 65 }}>
            <h3>#바로가기</h3>
            <h1 style={{ color: "blue" }}>자가진단</h1>
            <h3>매일매일 자가진단!</h3>
          </div>
        </Paper>
        <Paper
          className="Paper"
          style={{
            alignSelf: "center",
            minHeight: 295,
            textAlign: "center",
          }}
          onClick={() => window.open("https://timetreeapp.com/calendars/f8N4kHogxvbT")}
        >
          <div style={{ marginTop: 65 }}>
            <h3>#바로가기</h3>
            <h1 style={{ color: "green" }}>TIMETREE</h1>
            <h3>준비물은 꼼꼼히!</h3>
          </div>
        </Paper>
        <Paper
          className="Paper"
          style={{
            alignSelf: "center",
            minHeight: 295,
            textAlign: "center",
          }}
        >
          <div style={{ marginTop: 65 }}>
            <h3>#MADEBY</h3>
            <h1>고창범</h1>
            <h3>😊</h3>
          </div>
        </Paper>
      </div>
    </div>
  );
};

export default Notice;
