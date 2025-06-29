"use client";

import React, { memo, useId } from "react";
import { InputMask } from "primereact/inputmask";
import TypeDefaultInputDate from "./types/TypeDefaultInputDate";
import converterBrDateParaIso from "@/utils/date/converterBrDateParaIso";
import converterIsoParaBrDate from "@/utils/date/converterIsoParaBrDate";

const DefaultInputDate = ({
  value,
  setValue,
  name,
  propertyInObject,
  fullWidth,
  label,
  inline,
}: TypeDefaultInputDate): React.ReactNode => {
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

          console.log(e.target.value);

            const val: string = converterBrDateParaIso(e.target.value!);

            if (!propertyInObject) {
                setValue(val);
                return;
            }

            setValue((prev: object) => ({ ...prev, [name!]: val }));
        }}
        id={randomId}
      />
    </div>
  );
};

export default memo(DefaultInputDate);
