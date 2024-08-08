import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex h-screen w-full">
      <div className="flex-1 flex overflow-hidden dark:bg-[#651c2b55] bg-[#651c2b]
      justify-center items-center">
        Hello From Mumbai
      </div>
      <div className="flex-1">
        <div className="bg-blue-500">Hello From Mumbai</div>
      </div>
    </div>
  );
}
