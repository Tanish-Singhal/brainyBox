export interface IconProps {
  size?: 'sm' | 'md' | 'lg';
  color?: 'white' | 'black' | 'white-fill' | 'black-fill';
  hoverEffect?: boolean;
}

export const defaultStyles = "transition duration-300 ease-out p-1 rounded-md";

export const iconSizeVariants = {
  sm: 'w-5 h-5',
  md: 'w-7 h-7',
  lg: 'w-10 h-10',
}

export const iconColorVariants = {
  white: 'stroke-neutral-50',
  black: 'stroke-black',
  "white-fill": "fill-neutral-50",
  "black-fill": "fill-black",
}

export const iconHoverEffect = {
  true: "hover:bg-backgroundHighlight cursor-pointer",
  false: ""
}
