"use client";
import React, { memo } from "react";
import { Calendar } from "primereact/calendar";
import TypeDefaultCalendar from "./types/TypeDefaultCalendar";
import converterIsoParaDateTime from "@/utils/date/converterIsoParaDateTime";
import converterDateTimeParaIso from "@/utils/date/converterDateTimeParaIso";
import generateRandomHash from "@/utils/hash/generateRandomHash";

const DefaultCalendar = ({
  value,
  setValue,
  name,
  propertyInObject = false,
  fullWidth = true,
  label = "",
  inline = false,
  showIcon = false,
}: TypeDefaultCalendar) => {
  const randomId: string = generateRandomHash();

  return (
    <div className="flex flex-column gap-1">
      <label htmlFor={randomId}>{label}</label>
      <Calendar
        value={
          value !== undefined && value?.trim() !== ""
            ? converterIsoParaDateTime(value!)
            : null
        }
        onChange={(e): void => {
          if (setValue === undefined) return;
          const val: string = converterDateTimeParaIso(e.value!);
          if (!propertyInObject) {
            setValue!(val);
            return;
          }

          setValue!((prev: object) => ({ ...prev, [name!]: val }));
        }}
        inputId={randomId}
        className={fullWidth ? "w-full" : ""}
        dateFormat="dd/mm/yy"
        inline={inline}
        showIcon={showIcon}
      />
    </div>
  );
};

export default memo(DefaultCalendar);
