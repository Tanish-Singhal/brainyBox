import { Logo } from "../../assets/icons/Logo";
import { TwitterIcon } from "../../assets/icons/TwitterIcon";
import { YoutubeIcon } from "../../assets/icons/YoutubeIcon";
import { SidebarItem } from "./SidebarItem";

export const Sidebar = () => {
  return (
    <div className="h-screen w-full max-w-60 bg-card text-white absolute p-3 border-r border-r-backgroundHighlight">
      <div className="flex items-center gap-3 m-2 mb-10">
        <Logo />
        <h1 className="text-3xl font-semibold">BrainyBox</h1>
      </div>
      <div className="flex flex-col gap-4">
        <SidebarItem title="Twitter" icon={<TwitterIcon size="lg" />} />
        <SidebarItem title="Youtube" icon={<YoutubeIcon size="lg" />} />
      </div>
    </div>
  );
};
