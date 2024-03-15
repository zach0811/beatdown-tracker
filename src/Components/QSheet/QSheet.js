import React from "react";
import classes from "./QSheet.module.css";
import { DateCreator } from "../../Utils/DateCreator";

const siteInformation = {
  site: "Rubicon",
  meetingDays: [2, 4],
  time: "5:30 AM",
  location: "Wills Park",
  siteQ: "Avis",
  subregion: "Alpha Central",
  type: "Bootcamp",
  closestAED: "N/A",
  launchDate: "1/2/2023",
};

const startDate = "1/2/2023";
const endDate = "2/15/2023";
const meetingDays = siteInformation.meetingDays; // Monday is 1, Friday is 5
const rows = DateCreator(startDate, endDate, meetingDays);

const days = rows.map((row) => row.dayOfWeek);
const dates = rows.map((row) => row.date);

export const QSheet = () => {
  return (
    <div className={classes.qsheet}>
      <div className={classes.headerContainer}>
        <table>
          <thead>
            <tr>
              <th>Day</th>
              <th>Date</th>
              <th>Q (F3 Name)</th>
              <th>Special BD Type</th>
              <th>Total PAX</th>
              <th>Prerunners/ruck</th>
              <th>FNGs</th>
            </tr>
          </thead>
        </table>
      </div>
      <div className={classes.tableContainer}>
        <table>
          <tbody>
            {days.map((day, index) => (
              <tr key={index}>
                <td>{day}</td>
                <td>{dates[index]}</td>
                <td>
                  <input type="text" name="q_name" />
                </td>
                <td>
                  <input type="text" name="q_name" />
                </td>
                <td>
                  <input type="text" name="q_name" />
                </td>
                <td>
                  <input type="text" name="q_name" />
                </td>
                <td>
                  <input type="text" name="q_name" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
