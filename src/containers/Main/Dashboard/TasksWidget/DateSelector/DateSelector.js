import React, { Fragment, useState } from "react";
// import PropTypes, { string } from "prop-types";
import moment from "moment";
import "./DateSelector.scss";
import WeekItem from "./WeekItem";

const DateSelector = (props) => {
  // 0. List of week days
  const [week, setWeek] = useState([
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat",
  ]);
  // 1. Get current date;
  const [currentDate, setCurrentDate] = useState(moment());
  // // 2. Get current week day
  const [currentWeekDay, setCurrentWeekDay] = useState(
    currentDate.format("ddd")
  );
  // // 3. Get current week number
  const [currentWeek, setCurrentWeek] = useState(currentDate.week());
  // // 4. Get date of first week day
  const [firstWeekDate, setFirstWeekDate] = useState(
    moment(moment().week(currentWeek)).day(0)
  );

  return (
    <Fragment>
      <span className="tasks-widget__selected-date-text">
        {currentDate.format("MMM Do YY")}
      </span>
      <div className="tasks-widget__week-days">
        <ul className="tasks-widget__week-list">
          {week.map((day) => (
            <WeekItem key={day} day={day} currentWeekDay={currentWeekDay} firstWeekDate={firstWeekDate} />
          ))}
        </ul>
      </div>
      <div className="tasks-widget__divider" />
    </Fragment>
  );
};

export default DateSelector;