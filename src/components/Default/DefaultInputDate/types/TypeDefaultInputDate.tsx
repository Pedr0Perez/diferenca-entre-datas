type TypeDefaultInputDate<T,> = {
  value?: string | null;
  setValue?: React.Dispatch<React.SetStateAction<T>>;
  name?: string;
  propertyInObject?: boolean;
  fullWidth?: boolean;
  label?: string;
  showIcon?: boolean;
};

export default TypeDefaultInputDate;
