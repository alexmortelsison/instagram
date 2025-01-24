import Image from "next/image";
import Link from "next/link";
import Navlinks from "./Navlinks";
import {
  BinocularsIcon,
  HeartIcon,
  HomeIcon,
  MessageSquareIcon,
  SearchIcon,
  SquarePlayIcon,
  SquarePlusIcon,
} from "lucide-react";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { Button } from "./ui/button";

export default function LeftSidebar() {
  return (
    <div className="col-span-2 border-r h-screen pl-4 mt-10 hidden lg:inline-block px-2">
      <Link href={"/"}>
        <Image
          src={"/instagram.webp"}
          alt="logo"
          width={120}
          height={120}
          className="invert mb-10"
        />
      </Link>
      <div className="space-y-4">
        <Navlinks link={"/"} Icon={<HomeIcon />} title={"Home"} />
        <Navlinks link={"/"} Icon={<SearchIcon />} title={"Search"} />
        <Navlinks link={"/"} Icon={<BinocularsIcon />} title={"Explore"} />
        <Navlinks link={"/"} Icon={<SquarePlayIcon />} title={"Reels"} />
        <Navlinks link={"/"} Icon={<MessageSquareIcon />} title={"Messages"} />
        <Navlinks link={"/"} Icon={<HeartIcon />} title={"Notifications"} />
        <Navlinks link={"/"} Icon={<SquarePlusIcon />} title={"Create"} />
        <div className="flex space-x-4 hover:bg-[#363636] p-2 rounded-lg">
          <SignedIn>
            <UserButton />
            <p>Profile</p>
          </SignedIn>
        </div>
        <SignedOut>
          <Button asChild>
            <SignInButton />
          </Button>
        </SignedOut>
      </div>
    </div>
  );
}
