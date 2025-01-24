"use client";
import Image from "next/image";
import Link from "next/link";
import Navlinks from "./Navlinks";
import {
  BinocularsIcon,
  CirclePlus,
  HeartIcon,
  HomeIcon,
  MessageSquareIcon,
  SearchIcon,
  SquarePlayIcon,
  SquarePlusIcon,
} from "lucide-react";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { Button } from "./ui/button";
import { useState } from "react";
import Modal from "./Modal";
import { UploadButton } from "@/lib/uploadthing";

export default function LeftSidebar() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => setIsModalOpen(true);
  const handleModalClose = () => setIsModalOpen(false);

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
        <div onClick={handleModalOpen}>
          <Navlinks link={"/"} Icon={<SquarePlusIcon />} title={"Create"} />
        </div>
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
      <Modal isOpen={isModalOpen} onClose={handleModalClose}>
        <div className="flex flex-col items-center justify-center h-full">
          <div className="flex items-center justify-center w-32 h-32 border-2 border-dashed border-gray-400 rounded-full mb-6">
            <CirclePlus size={100} className="text-gray-400" />
          </div>
          <p className="text-gray-600 mb-4">Drag photos and videos here</p>
          <UploadButton
            endpoint="imageUploader"
            onClientUploadComplete={(res) => {
              // Do something with the response
              console.log("Files: ", res);
              alert("Upload Completed");
            }}
            onUploadError={(error: Error) => {
              // Do something with the error.
              alert(`ERROR! ${error.message}`);
            }}
          />
        </div>
      </Modal>
    </div>
  );
}
