type TypeDefaultCalendar<T,> = {
  value?: string | null;
  setValue?: React.Dispatch<React.SetStateAction<T>>;
  name?: string;
  propertyInObject?: boolean;
  fullWidth?: boolean;
  label?: string;
  inline?: boolean;
  showIcon?: boolean;
};

export default TypeDefaultCalendar;
