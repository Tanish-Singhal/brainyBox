import { ReactElement } from "react";
import { ShareIcon } from "../../assets/icons/ShareIcon";
import { TrashIcon } from "../../assets/icons/TrashIcon";

interface CardProps {
  title: string;
  link: string;
  type: "youtube" | "twitter";
  icon: ReactElement;
}

export const Card = ({ title, link, type, icon }: CardProps) => {
  return (
    <div className="w-80 max-w-80 bg-card rounded-md shadow-gray-800 p-3 shadow-md border border-backgroundHighlight">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          {icon}
          <h2 className="text-neutral-100 font-semibold text-xl">{title}</h2>
        </div>

        <div className="flex items-center gap-3">
          <ShareIcon size="md" color="white" hoverEffect={true} />
          <TrashIcon size="md" color="white" hoverEffect={true} />
        </div>
      </div>

      {/* <div className="w-full h-36 bg-backgroundHighlight text-textColor rounded-md mt-5 p-2">
        <h3 className="font-semibold text-2xl mb-2">Future Projects</h3>
        <p>Content of the file</p>
      </div> */}

      {/* <div className="mt-5">
        <iframe
          className="w-full rounded-md"
          src="https://www.youtube.com/embed/7knffm3qgug?si=lhJVAxg5EP_KPZAY"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div> */}

      {/* <div className="mt-5">
        <blockquote className="twitter-tweet">
          <a href="https://twitter.com/elonmusk/status/1812256998588662068?ref_src=twsrc%5Etfw">
            July 13, 2024
          </a>
        </blockquote>
      </div> */}

      <div className="mt-4">
        {type === "youtube" ? (
          <iframe
            className="w-full rounded-md"
            src={link.replace("watch?v=", "embed/")}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        ) : (
          <blockquote className="twitter-tweet">
            <a href={link}></a>
          </blockquote>
        )}
      </div>

      <div></div>

      <div className="flex items-center mt-3">
        <div className="bg-tag text-black rounded-full px-2 py-1 mr-2">
          <p className="text-sm font-semibold">#tag1</p>
        </div>
        <div className="bg-tag text-black rounded-full px-2 py-1 mr-2">
          <p className="text-sm font-semibold">#personal</p>
        </div>
      </div>

      <div>
        <p className="text-textColor/40 text-sm mt-5 font-semibold">
          Created on 12/12/2025
        </p>
      </div>
    </div>
  );
};
