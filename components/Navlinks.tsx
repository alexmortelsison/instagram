import Link from "next/link";
import { ReactNode } from "react";
import React from "react";

export default function Navlinks({
  link,
  Icon,
  title,
}: {
  link: string;
  Icon: ReactNode;
  title: string;
}) {
  return (
    <>
      <div className="flex space-x-4 w-full hover:bg-[#363636] p-2 rounded-lg">
        <Link href={link}>{Icon}</Link>
        <Link href={link}>{title}</Link>
      </div>
    </>
  );
}
