import { ReactElement } from "react";

interface SidebarItemProps {
  title: string;
  icon: ReactElement;
}

export const SidebarItem = ({ title, icon }: SidebarItemProps) => {
  return (
    <div className="flex items-center gap-2 hover:bg-backgroundHighlight rounded-md text-whites px-2 font-semibold text-lg cursor-pointer transition duration-300 ease-out">
      {icon} {title}
    </div>
  );
};
