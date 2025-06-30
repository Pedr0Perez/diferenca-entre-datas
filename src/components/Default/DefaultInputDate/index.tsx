"use client";

import React, { memo, useId } from "react";
import { InputMask } from "primereact/inputmask";
import TypeDefaultInputDate from "./types/TypeDefaultInputDate";
import converterBrDateParaIso from "@/utils/date/converterBrDateParaIso";
import converterIsoParaBrDate from "@/utils/date/converterIsoParaBrDate";

const DefaultInputDate = <T,>({
  value,
  setValue,
  name,
  propertyInObject,
  fullWidth,
  label,
}: TypeDefaultInputDate<T>): React.ReactNode => {
  const randomId: string = useId();

  return (
    <div className="flex flex-column gap-1">
      <label htmlFor={randomId}>{label}</label>
      <InputMask
        className={fullWidth ? "w-full" : ""}
        value={converterIsoParaBrDate(value ?? "")}
        mask="99/99/9999"
        onBlur={(e) => {
          if (setValue === undefined) return;

          //console.log(e.target.value);

            const val: string = converterBrDateParaIso(e.target.value!);

            if (!propertyInObject) {
                setValue(val as T);
                return;
            }

            setValue((prev: T) => ({ ...prev, [name!]: val }));
        }}
        id={randomId}
      />
    </div>
  );
};

export default memo(DefaultInputDate) as typeof DefaultInputDate;
