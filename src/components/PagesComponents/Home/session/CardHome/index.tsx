"use client";

import React, { memo } from "react";
import DefaultCard from "@/components/Default/DefaultCard";
import DefaultCalendar from "@/components/Default/DefaultCalendar";

const CardHome = () => {
  return (
    <DefaultCard title="Calcular período">
      <div className="card grid">
        <div className="col-12 md:col-5 lg:col-3">
          <DefaultCalendar />
        </div>
      </div>
    </DefaultCard>
  );
};

export default memo(CardHome);
