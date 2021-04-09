import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

function getNotificationPermission() {
  if (!("Notification" in window)) {
    alert(
      "데스크톱 알림을 지원하지 않는 브라우저입니다. \n 알림 기능을 이용하실수 없습니다"
    );
  }
  Notification.requestPermission(function (result) {
    if (result === "denied") {
      alert("알림을 차단하셨습니다.\n 사이트 설정에서 변경하실 수 있습니다.");
      return false;
    }
  });
}

getNotificationPermission();

const TimeChart = () => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
              <TableCell align="left"> 
                교시
              </TableCell>
              <TableCell align="left"> 
                시작 시간
              </TableCell>
              <TableCell align="left"> 
                종료 시간
              </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow>
                <TableCell>1교시</TableCell>
                <TableCell>9:00</TableCell>
                <TableCell>9:45</TableCell>
            </TableRow>
            <TableRow>
                <TableCell>2교시</TableCell>
                <TableCell>9:55</TableCell>
                <TableCell>10:40</TableCell>
            </TableRow>
            <TableRow>
                <TableCell>3교시</TableCell>
                <TableCell>10:50</TableCell>
                <TableCell>11:35</TableCell>
            </TableRow>
            <TableRow>
                <TableCell>4교시</TableCell>
                <TableCell>11:45</TableCell>
                <TableCell>12:30</TableCell>
            </TableRow>
            <TableRow>
                <TableCell>5교시</TableCell>
                <TableCell>1:20</TableCell>
                <TableCell>2:05</TableCell>
            </TableRow>
            <TableRow>
                <TableCell>6교시</TableCell>
                <TableCell>2:15</TableCell>
                <TableCell>3:00</TableCell>
            </TableRow>
            <TableRow>
                <TableCell>7교시</TableCell>
                <TableCell>3:10</TableCell>
                <TableCell>3:55</TableCell>
            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TimeChart;
