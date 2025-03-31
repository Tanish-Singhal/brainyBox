export interface IconProps {
  size?: 'sm' | 'md' | 'lg';
  color?: 'white' | 'black';
  hoverEffect?: boolean;
}

export const defaultStyles = "transition duration-300 ease-out  rounded-md";

export const iconSizeVariants = {
  sm: 'size-4',
  md: 'size-5',
  lg: 'size-6',
}

export const iconColorVariants = {
  white: 'stroke-neutral-50',
  black: 'stroke-black',
}

export const iconHoverEffect = {
  true: "hover:bg-backgroundHighlight cursor-pointer",
  false: ""
}
