import {
  defaultStyles,
  iconColorVariants,
  iconHoverEffect,
  IconProps,
  iconSizeVariants,
} from ".";

export const CloseIcon = (props: IconProps) => {
  const color = props.color || "white";
  const size = props.size || "md";
  const hoverEffect = props.hoverEffect || false;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.7}
      className={`${defaultStyles} ${iconColorVariants[color]} ${
        iconHoverEffect[String(hoverEffect) as "true" | "false"]
      } ${iconSizeVariants[size]}`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18 18 6M6 6l12 12"
      />
    </svg>
  );
};
