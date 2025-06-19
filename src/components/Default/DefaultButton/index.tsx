import React, { memo } from "react";
import { Button } from "primereact/button";
import TypeDefaultButton from "./types/TypeDefaultButton";

const DefaultButton = ({
  className = "",
  fullWidth = true,
  label,
  icon,
  onClick,
  severity,
  outlined = false,
}: TypeDefaultButton): React.ReactNode => {
  return (
    <Button
      icon={icon}
      label={label}
      onClick={onClick}
      severity={severity}
      className={`${fullWidth ? "w-full" : ""}${
        className !== "" ? " " + className : ""
      }`}
      outlined={outlined}
    />
  );
};

export default memo(DefaultButton);
