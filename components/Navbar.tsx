import { HeartIcon } from "lucide-react";
import Logo from "./Logo";
import Searchbox from "./Searchbox";
import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import { Button } from "./ui/button";

export default function Navbar() {
  return (
    <nav className="flex sm:hidden items-center p-4 border-b">
      <Logo />
      <Searchbox />
      <SignedIn>
        <HeartIcon size={40} className="" />
      </SignedIn>
      <SignedOut>
        <Button asChild>
          <SignInButton />
        </Button>
      </SignedOut>
    </nav>
  );
}
