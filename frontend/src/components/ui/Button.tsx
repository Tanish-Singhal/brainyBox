import { ReactElement } from "react";

interface ButtonProps {
  text?: String;
  variant: "primary" | "secondary" | "delete" | "edit";
  size: "sm" | "md" | "lg";
  startIcon?: ReactElement;
  endIcon?: ReactElement;
  onClick?: () => void;
}

const variantStyles = {
  primary: "bg-primary text-black hover:bg-primary/80 cursor-pointer",
  secondary: "bg-neutral-50 text-black hover:bg-neutral-50/80 cursor-pointer",
  delete: "bg-error text-black hover:bg-error/80 cursor-pointer",
  edit: "bg-card text-white hover:bg-edit/80 cursor-pointer",
};

const sizeStyles = {
  sm: "text-sm px-2 py-1",
  md: "text-base px-4 py-2",
  lg: "text-lg px-6 py-3",
};

const defaultStyles =
  "rounded-md font-semibold transition duration-300 ease-out inline-flex justify-center items-center";

export const Button = (props: ButtonProps) => {
  return (
    <button
      onClick={props.onClick}
      className={`${variantStyles[props.variant]} ${
        sizeStyles[props.size]
      } ${defaultStyles}`}
    >
      {props.startIcon ? <span className="mr-1">{props.startIcon}</span> : null}
      {props.text}
      {props.endIcon ? <span className="ml-1">{props.endIcon}</span> : null}
    </button>
  );
};
