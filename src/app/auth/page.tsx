import React from "react";
import AuthButton from "./AuthButton";
import Card from "./Card";


const page = () => {
  return (
    <div className="flex h-screen w-full">
      <div
        className="flex-1 flex flex-col overflow-hidden bg-[#000000]
      justify-center items-center"
      >
        <div className="flex flex-col justify-center">
        <div className=" px-12 font-bold text-white">
          <span className="text-6xl md:text-7xl">
            Connect with anyone, anywhere.
          </span>
        </div>
        <div className="text-xl text-white text-left w-full px-12 pt-4">
          <span>Chat with friends, family, and colleagues in real-time.</span>
        </div>
        <div className="mt-6">
        <AuthButton/>
        </div>
      </div>
      </div>
      <div className="flex-1 hidden lg:flex">
        <div className="bg-white w-full flex justify-center">
            <div className="flex flex-col justify-center">
            <span className="text-black font-bold text-6xl xl:text-[3.5rem] lg:px-10 xl:px-20">
                Seamless Communication.
            </span>
            <span className="xl:px-[5.5rem] lg:px-[3rem] text-xl pt-2 text-slate-600">Collaborate with your team, share files, and stay connected.
            </span>
            <Card/>
            </div>
                
        </div>
      </div>
    </div>
  );
};

export default page;
