import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <>
      <Link href={"/"}>
        <Image
          src={"/instagram.webp"}
          alt="logo"
          width={4}
          height={4}
          className=""
        />
      </Link>
      <Link href={"/"}>
        <Image
          src={"/Square.webp"}
          alt="logo"
          width={80}
          height={80}
          className=""
        />
      </Link>
    </>
  );
}
