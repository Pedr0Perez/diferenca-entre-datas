"use client";
import React, { memo } from "react";
import { Calendar } from "primereact/calendar";
import TypeDefaultCalendar from "./types/TypeDefaultCalendar";
import converterIsoParaDateTime from "@/utils/date/converterIsoParaDateTime";
import converterDateTimeParaIso from "@/utils/date/converterDateTimeParaIso";

const DefaultCalendar = ({
  value,
  setValue,
  name,
  propertyInObject = false,
  fullWidth = true,
}: TypeDefaultCalendar) => {
  return (
    <Calendar
      value={value !== undefined ? converterIsoParaDateTime(value!) : null}
      onChange={(e): void => {
        if (setValue !== undefined) return;
        const val: string = converterDateTimeParaIso(e.value!);
        if (!propertyInObject) {
          setValue!(val);
          return;
        }

        setValue!((prev: object) => ({ ...prev, [name!]: val }));
      }}
      className={fullWidth ? "w-full" : ""}
    />
  );
};

export default memo(DefaultCalendar);
