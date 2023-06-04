import React from "react";
import student from "../../../../assets/banner/student.jpg";
import { DayPicker } from "react-day-picker";
import { format } from "date-fns";

const AttendenceBanner = ({ selectedDate, setSelectedDate }) => {
  return (
    <header>
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row-reverse	">
          <img
            src={student}
            className="max-w-sm lg:w-1/2  rounded-lg shadow-2xl"
          />
          <div>
            <DayPicker
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default AttendenceBanner;
