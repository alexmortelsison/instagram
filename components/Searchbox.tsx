"use client";
import { CircleX, SearchIcon } from "lucide-react";
import { useState } from "react";

export default function Searchbox() {
  const [input, setInput] = useState("");
  const reset = () => {
    setInput("");
  };
  return (
    <form className="flex border bg-[#363636] w-full px-4 py-2 rounded-lg max-w-sm mx-4 items-center">
      <SearchIcon className="text-gray-400" size={20} />
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        type="text"
        className="flex outline-none bg-transparent pl-4"
      />
      {input && <CircleX onClick={reset} className="cursor-pointer" />}
    </form>
  );
}
