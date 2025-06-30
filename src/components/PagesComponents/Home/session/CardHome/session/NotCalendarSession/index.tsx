import React, { memo } from "react";
import DefaultInputDate from "@/components/Default/DefaultInputDate";
import TypeNotCalendarSession from "./types/TypeNotCalendarSession";
import TypeDateDate from "../../types/TypeDateData";

const NotCalendarSession = ({
  dateData,
  setDateData,
}: TypeNotCalendarSession): React.ReactNode => {
  return (
    <div className="card grid" style={{ maxWidth: "1366px" }}>
      <div className="col-12 md:col-5 lg:col-3">
        <DefaultInputDate<TypeDateDate>
          value={dateData.startDate}
          setValue={setDateData}
          name="startDate"
          label="Data inicial"
          propertyInObject={true}
        />
      </div>
      <div className="col-12 md:col-5 lg:col-3">
        <DefaultInputDate<TypeDateDate>
          value={dateData.endDate}
          setValue={setDateData}
          name="endDate"
          label="Data final"
          propertyInObject={true}
        />
      </div>
    </div>
  );
};

export default memo(NotCalendarSession);
