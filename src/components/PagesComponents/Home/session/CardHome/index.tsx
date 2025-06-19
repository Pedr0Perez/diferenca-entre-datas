"use client";

import React, { memo, useEffect, useState } from "react";
import DefaultCard from "@/components/Default/DefaultCard";
import DefaultCalendar from "@/components/Default/DefaultCalendar";
import TypeDateDate from "./types/TypeDateData";
import retornarDataAtualDaqui1AnoEmIso from "./function/retornarDataAtualDaqui1AnoEmIso";
import retornarDataAtualEmIso from "./function/retornarDataAtualEmIso";
import DefaultButton from "@/components/Default/DefaultButton";

const CardHome = () => {
  const [dateData, setDateData] = useState<TypeDateDate>({
    startDate: retornarDataAtualEmIso(),
    endDate: retornarDataAtualDaqui1AnoEmIso(),
  });

  return (
    <DefaultCard title="Calcular período">
      <div className="card grid mb-3" style={{ maxWidth: "1366px" }}>
        <div className="col-12 md:col-5 lg:col-3">
          <DefaultCalendar
            label="Data inicial"
            value={dateData.startDate}
            setValue={setDateData}
            propertyInObject
            name="startDate"
            showIcon
          />
        </div>
        <div className="col-12 md:col-5 lg:col-3">
          <DefaultCalendar
            label="Data final"
            value={dateData.endDate}
            setValue={setDateData}
            propertyInObject
            name="endDate"
            showIcon
          />
        </div>
      </div>
      <div className="card grid">
        <div className="col-12 md:col-4 lg:col-2">
          <DefaultButton
            icon="pi pi-calendar-clock"
            label="Calcular diferença"
          />
        </div>
      </div>
    </DefaultCard>
  );
};

export default memo(CardHome);
