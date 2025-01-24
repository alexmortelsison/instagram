"use client";
import { InstagramEmbed } from "react-social-media-embed";
export default function RightSidebar() {
  return (
    <div className="col-span-3 border-l hidden lg:inline-block p-4 w-full space-y-16">
      <div style={{ display: "flex", justifyContent: "center" }}>
        <InstagramEmbed
          url="https://www.instagram.com/roses_are_rosie/"
          width={756}
        />
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <InstagramEmbed
          url="https://www.instagram.com/p/CUbHfhpswxt/"
          width={756}
          captioned
        />
      </div>
    </div>
  );
}
