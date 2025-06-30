"use client";
import React, { memo } from "react";
import { Calendar } from "primereact/calendar";
import TypeDefaultCalendar from "./types/TypeDefaultCalendar";
import converterIsoParaDateTime from "@/utils/date/converterIsoParaDateTime";
import converterDateTimeParaIso from "@/utils/date/converterDateTimeParaIso";
import { useId } from "react";

const DefaultCalendar = <T,>({
  value,
  setValue,
  name,
  propertyInObject = false,
  fullWidth = true,
  label = "",
  inline = false,
  showIcon = false,
}: TypeDefaultCalendar<T>) => {
  const randomId: string = useId();

  return (
    <div className="flex flex-column gap-1">
      <label htmlFor={randomId}>{label}</label>
      <Calendar
        className={fullWidth ? "w-full" : ""}
        value={
          value !== undefined && value?.trim() !== ""
            ? converterIsoParaDateTime(value!)
            : null
        }
        onChange={(e): void => {
          if (setValue === undefined) return;

          const val: string = converterDateTimeParaIso(e.value!);
          if (!propertyInObject) {
            setValue!(val as T);
            return;
          }

          setValue!((prev: T) => ({ ...prev, [name!]: val }));
        }}
        inputId={randomId}
        dateFormat="dd/mm/yy"
        inline={inline}
        showIcon={showIcon}
      />
    </div>
  );
};

export default memo(DefaultCalendar) as typeof DefaultCalendar;
