import { ReactElement } from "react";

// const defaultStyles =
//   "rounded-md font-semibold transition duration-300 ease-out inline-flex justify-center items-center";

// export const Button = (props: ButtonProps) => {
//   return (
//     <button
//       className={`${defaultStyles} ${variantStyles[props.variant]} ${sizeStyles[props.size]}`}
//     >
//       {props.startIcon ? <span className="mr-2">{props.startIcon}</span> : null}
//       {props.text}
//       {props.endIcon ? <span className="ml-2">{props.endIcon}</span> : null}
//     </button>
//   );
// };

interface ButtonProps {
  text?: String;
  variant: "primary" | "secondary" | "delete" | "edit";
  size: "sm" | "md" | "lg";
  startIcon?: ReactElement;
  endIcon?: ReactElement;
}

const variantStyles = {
  primary: "bg-primary text-black cursor-pointer",
  secondary: "bg-neutral-50 text-black cursor-pointer",
  delete: "bg-error text-black cursor-pointer",
  edit: "bg-card text-white cursor-pointer",
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
