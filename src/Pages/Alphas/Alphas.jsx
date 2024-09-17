/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import "../../index.css";
import React, { useRef } from "react";
import sounds from "../../assets/sounds/sounds";

const alphas = Object.keys(sounds).map((key) => ({
  title: key,
  sound: sounds[key],
}));

export default function Alphas() {
  return <AlphasItems items={alphas} />;
}

function AlphasItems({ items }) {
  return (
    <div className="flex flex-wrap gap-2 container mx-auto items-center justify-center p-10 border-2 border-gray-300 rounded-md mt-10">
      {items.map((item) => (
        <AlphasItem key={item.title} title={item.title} sound={item.sound} />
      ))}
    </div>
  );
}

function AlphasItem({ title, sound }) {
  const audioRef = useRef(null);

  const handlePlay = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  return (
    <div className="shadow-md p-2 rounded-md aspect-square flex items-center justify-between flex-col w-full sm:w-44 border-t-4 border-blue-500 m-3  select-none">
      <div
        className="h-full w-full flex items-center justify-center cursor-pointer"
        onClick={handlePlay}
      >
        <span className="sm:text-6xl text-9xl font-bold w-fit h-fit">
          {title}
        </span>
      </div>
      <audio ref={audioRef} src={sound} controls className="hidden" />
      <div className="flex gap-2 pt-2 justify-between items-center border-t-2 border-gray-300 w-full">
        <button onClick={handlePlay}>تشغيل</button>
        <button>تسجيل</button>
      </div>
    </div>
  );
}
