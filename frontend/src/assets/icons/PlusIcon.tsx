import {
  defaultStyles,
  iconColorVariants,
  iconHoverEffect,
  IconProps,
  iconSizeVariants,
} from ".";

export const PlusIcon = (props: IconProps) => {
  const color = props.color || "white";
  const size = props.size || "md";
  const hoverEffect = props.hoverEffect || false;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.7}
      className={`${iconSizeVariants[size]} ${
        iconColorVariants[color]
      } ${defaultStyles} ${
        iconHoverEffect[String(hoverEffect) as "true" | "false"]
      }`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 4.5v15m7.5-7.5h-15"
      />
    </svg>
  );
};
