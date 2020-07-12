import React, { useState } from "react";
import moment from "moment";
import WeekItem from "./WeekItem";
import { Medium15Font } from "../../../../../components/Fonts/Fonts";
import { WeekDays } from "./WeekDays";
import { WeekList } from "./WeekList";
import { DateSelectorStyled } from "./DateSelectorStyled";

const DateSelector = () => {
  // 0. List of week days
  // eslint-disable-next-line no-unused-vars
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
  // eslint-disable-next-line no-unused-vars
  const [currentDate, setCurrentDate] = useState(moment());
  // 2. Get current week day
  // eslint-disable-next-line no-unused-vars
  const [currentWeekDay, setCurrentWeekDay] = useState(
    currentDate.format("ddd")
  );
  // 3. Get current week number
  // eslint-disable-next-line no-unused-vars
  const [currentWeek, setCurrentWeek] = useState(currentDate.week());
  // 4. Get date of first week day
  // eslint-disable-next-line no-unused-vars
  const [firstWeekDate, setFirstWeekDate] = useState(
    moment(moment().week(currentWeek)).day(0)
  );

  return (
    <DateSelectorStyled>
      {console.log("DateSelector renders")}
      <Medium15Font
        color={(props) => props.theme.colors.blackColor}
        style={{
          display: "inline-block",
          marginBottom: "47px",
        }}
      >
        {currentDate.format("D MMMM, dddd")}
      </Medium15Font>
      <WeekDays>
        <WeekList>
          {week.map((day) => (
            <WeekItem
              key={day}
              day={day}
              currentWeekDay={currentWeekDay}
              firstWeekDate={firstWeekDate}
            />
          ))}
        </WeekList>
      </WeekDays>
    </DateSelectorStyled>
  );
};

export default DateSelector;
