import Image from "next/image";
import { VscVerifiedFilled } from "react-icons/vsc";
import Card from "./Card";

export default function Feed() {
  return (
    <div className="col-span-7 justify-center sm:inline-block m-8 items-center w-full max-w-xl mx-auto flex">
      <div className="items-center flex justify-center">
        <div className="flex gap-8 items-center">
          <div className="flex flex-col items-center space-y-2">
            <div className="bg-gradient-to-br from-yellow-500 via-red-500 to-pink-700 rounded-full p-[2px]">
              <Image
                src={
                  "https://assets.teenvogue.com/photos/675216b0bdec78b0c175aede/4:3/w_1800,h_1350,c_limit/TV_Culture-GroupChat_RosieDec2024_PROMO.jpg"
                }
                alt="photo"
                width={120}
                height={120}
                className="rounded-full object-cover h-16 w-16 bg-gradient-to-tr from-yellow-500 to-pink-500 bg-spac"
              />
            </div>
            <p className="text-[10px] flex items-center">
              roses_are_rosie
              <span>
                <VscVerifiedFilled size={16} className="text-blue-400" />
              </span>
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <div className="bg-gradient-to-br from-yellow-500 via-red-500 to-pink-700 rounded-full p-[2px]">
              <Image
                src={
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDzkzfjQl1EPzo50LJuEcr4b8j5WYbQTNLVSzQ7fT-f_VE8DV36ttTPgdielTLya1nIL4-TAIqEC6WTG3GQI5V-Q"
                }
                alt="photo"
                width={120}
                height={120}
                className="rounded-full object-cover h-16 w-16 bg-gradient-to-tr from-yellow-500 to-pink-500 bg-spac"
              />
            </div>
            <p className="text-[10px] flex items-center">
              sooyaaa__
              <span>
                <VscVerifiedFilled size={16} className="text-blue-400" />
              </span>
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <div className="bg-gradient-to-br from-yellow-500 via-red-500 to-pink-700 rounded-full p-[2px]">
              <Image
                src={
                  "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQdFBItGqNAcrahlJb3OcHl5RSm8KzBNq8DuSdvCxwOKnUm4Ao_D6nt7cZhUlOltO5ntSrju_5j1_vX2LxMs-Sgmg"
                }
                alt="photo"
                width={120}
                height={120}
                className="rounded-full object-cover h-16 w-16 bg-gradient-to-tr from-yellow-500 to-pink-500 bg-spac"
              />
            </div>
            <p className="text-[10px] flex items-center">
              jennierubyjane
              <span>
                <VscVerifiedFilled size={16} className="text-blue-400" />
              </span>
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <div className="bg-gradient-to-br from-yellow-500 via-red-500 to-pink-700 rounded-full p-[2px]">
              <Image
                src={
                  "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTL8PA9Xl6yRfL1WwLqbKsFS3WJ1GAxJXjOB-XCF2knUn8D_CtAHoT7kA66l4MA0nInk0eCS8TGTV5gGYm4XNPEhQ"
                }
                alt="photo"
                width={120}
                height={120}
                className="rounded-full object-cover h-16 w-16 bg-gradient-to-tr from-yellow-500 to-pink-500 bg-spac"
              />
            </div>
            <p className="text-[10px] flex items-center">
              lalalalisa_m
              <span>
                <VscVerifiedFilled size={16} className="text-blue-400" />
              </span>
            </p>
          </div>
        </div>
      </div>
      <div>
        <Card />
      </div>
    </div>
  );
}
