export interface IconProps {
  size?: 'sm' | 'md' | 'lg';
  color?: 'white' | 'black';
  hoverEffect?: boolean;
}

export const defaultStyles = "transition duration-300 ease-out p-1 rounded-md";

export const iconSizeVariants = {
  sm: 'size-5',
  md: 'size-6',
  lg: 'size-7',
}

export const iconColorVariants = {
  white: 'stroke-neutral-50',
  black: 'stroke-black',
}

export const iconHoverEffect = {
  true: "hover:bg-backgroundHighlight cursor-pointer",
  false: ""
}
