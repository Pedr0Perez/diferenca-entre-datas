"use client";

import React, { memo, useEffect, useState } from "react";
import DefaultCard from "@/components/Default/DefaultCard";
import TypeDateDate from "./types/TypeDateData";
import retornarDataAtualDaqui1AnoEmIso from "./function/retornarDataAtualDaqui1AnoEmIso";
import retornarDataAtualEmIso from "./function/retornarDataAtualEmIso";
import DefaultButton from "@/components/Default/DefaultButton";
import HomeTable from "./session/HomeTable";
import CalendarSession from "./session/CalendarSession";
import NotCalendarSession from "./session/NotCalendarSession";
import { Checkbox } from "primereact/checkbox";
import getLocalStorage from "@/utils/localStorage/getLocalStorage";
import setLocalStorage from "@/utils/localStorage/setLocalStorage";

const CardHome = () => {
  const [dateData, setDateData] = useState<TypeDateDate>({
    startDate: retornarDataAtualEmIso(),
    endDate: retornarDataAtualDaqui1AnoEmIso(),
  });

  const [showCalendar, setShowCalendar] = useState<boolean>(
    parseInt(getLocalStorage("calendar")!) === 1
  );

  useEffect(() => {
    setLocalStorage("calendar", showCalendar ? "1" : "0");
  }, [showCalendar]);

  useEffect(() => {
    //console.log(dateData);
  }, [dateData]);

  const [counter, setCounter] = useState(0);

  return (
    <DefaultCard title="Calcular período">
      {!showCalendar && (
        <NotCalendarSession dateData={dateData} setDateData={setDateData} />
      )}
      {showCalendar && (
        <CalendarSession dateData={dateData} setDateData={setDateData} />
      )}
      <div className="card flex mb-3">
        <div className="flex align-items-center">
          <Checkbox
            inputId="showCalendar"
            checked={showCalendar}
            value={true}
            onChange={(e) => {
              if (e.checked) {
                setShowCalendar(true);
                return;
              }

              setShowCalendar(false);
            }}
          />
          <label htmlFor="showCalendar" className="ml-2 cursor-pointer">
            Exibir calendário
          </label>
        </div>
      </div>
      <div className="card grid mb-3" style={{ maxWidth: "1366px" }}>
        <div className="col-12 md:col-5 lg:col-3">
          <DefaultButton
            icon="pi pi-calendar-clock"
            label="Calcular diferença"
            onClick={() => {
              setCounter(counter + 1);
            }}
            disabled={
              dateData.startDate.trim() === "" || dateData.endDate.trim() === ""
            }
          />
        </div>
      </div>
      <div className="card grid" style={{ maxWidth: "1366px" }}>
        <div className="col-12 md:col-10 lg:col-6">
          <HomeTable dateData={dateData} counter={counter} />
        </div>
      </div>
    </DefaultCard>
  );
};

export default memo(CardHome);
