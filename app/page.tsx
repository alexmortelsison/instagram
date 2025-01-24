import Feed from "@/components/Feed";
import LeftSidebar from "@/components/LeftSidebar";
import Navbar from "@/components/Navbar";
import RightSidebar from "@/components/RightSidebar";

export default function Home() {
  return (
    <div className="sm:grid sm:grid-cols-12">
      <Navbar />
      <LeftSidebar />
      <Feed />
      <RightSidebar />
    </div>
  );
}
