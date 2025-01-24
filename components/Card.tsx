import {
  BookMarkedIcon,
  EllipsisIcon,
  HeartIcon,
  MessagesSquareIcon,
  SendIcon,
  SmileIcon,
} from "lucide-react";
import Image from "next/image";
import { VscVerifiedFilled } from "react-icons/vsc";

export default function Card() {
  return (
    <div className="mt-8 h-screen">
      <div className="flex items-center justify-between">
        <div className="bg-gradient-to-br from-yellow-500 via-red-500 to-pink-700 rounded-full p-[2px]">
          <Image
            src={
              "https://assets.teenvogue.com/photos/675216b0bdec78b0c175aede/4:3/w_1800,h_1350,c_limit/TV_Culture-GroupChat_RosieDec2024_PROMO.jpg"
            }
            alt="photo"
            width={120}
            height={120}
            className="rounded-full object-cover h-12 w-12 bg-gradient-to-tr from-yellow-500 to-pink-500"
          />
        </div>
        <p className="text-sm pl-2 flex items-center flex-1">
          roses_are_rosies
          <span>
            <VscVerifiedFilled size={16} className="text-blue-400" />
          </span>
          <span className="px-1 text-gray-500">•</span>
          <span className="px-1 text-gray-500">6hr</span>
        </p>
        <EllipsisIcon />
      </div>
      <div className="mt-2">
        <Image
          src={"/rosie.png"}
          alt="photo"
          width={1600}
          height={1600}
          className="w-full rounded-md"
        />
        <div className="flex justify-between mt-4">
          <div className="flex space-x-4">
            <HeartIcon />
            <MessagesSquareIcon />
            <SendIcon />
          </div>
          <div>
            <BookMarkedIcon />
          </div>
        </div>
        <p className="text-sm font-semibold mt-2">5.1M likes</p>
        <div className="max-w-xl items-center">
          <p className="text-sm flex font-semibold items-center space-x-1 pt-2">
            roses_are_rosies
            <span>
              <VscVerifiedFilled size={16} className="text-blue-400 ml-1" />
            </span>
            <span className="font-normal truncate">
              toxic till the end mv and rosie is out now everyoneeeee!!!!!
              ahhhhhhhhhhhhhhh ♡😭
            </span>
          </p>
        </div>
        <p className="text-sm mt-2 text-gray-400">View all 2.5k comments</p>
        <div className="flex justify-between mt-2 text-sm text-gray-400 items-center">
          <p>Add a comment...</p>
          <SmileIcon size={18} />
        </div>
      </div>
    </div>
  );
}
