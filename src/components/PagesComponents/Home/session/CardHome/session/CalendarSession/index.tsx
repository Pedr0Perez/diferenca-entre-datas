import React, { memo } from "react";
import DefaultCalendar from "@/components/Default/DefaultCalendar";
import TypeCalendarSession from "./types/TypeCalendarSession";
import TypeDateDate from "../../types/TypeDateData";

const CalendarSession = ({
  dateData,
  setDateData,
}: TypeCalendarSession): React.ReactNode => {

  return (
    <div className="card grid" style={{ maxWidth: "1366px" }}>
      <div className="col-12 md:col-5 lg:col-3">
        <DefaultCalendar<TypeDateDate>
          label="Data inicial"
          value={dateData.startDate}
          setValue={setDateData}
          propertyInObject
          name="startDate"
          showIcon
        />
      </div>
      <div className="col-12 md:col-5 lg:col-3">
        <DefaultCalendar<TypeDateDate>
          label="Data final"
          value={dateData.endDate}
          setValue={setDateData}
          propertyInObject
          name="endDate"
          showIcon
        />
      </div>
    </div>
  );
};

export default memo(CalendarSession);
