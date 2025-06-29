type TypeDefaultButton = {
  label?: string;
  icon?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  severity?: "secondary" | "success" | "info" | "warning";
  outlined?: boolean;
  fullWidth?: boolean;
  className?: string;
  disabled?: boolean;
};

export default TypeDefaultButton;
