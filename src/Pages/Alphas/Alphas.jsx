/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import "../../index.css";
import React, { useRef } from "react";
const alphas = [
  { title: "أ", sound: "../../../public/sounds/ا.mp3" },
  { title: "ب", sound: "../../../public/sounds/b.mp3" },
  { title: "ت", sound: "../../../public/sounds/t.mp3" },
  { title: "ث", sound: "../../../public/sounds/ث.mp3" },
  { title: "ج", sound: "../../../public/sounds/g.mp3" },
  { title: "ح", sound: "../../../public/sounds/7.mp3" },
  { title: "خ", sound: "../../../public/sounds/kh.mp3" },
  { title: "د", sound: "../../../public/sounds/d.mp3" },
  { title: "ذ", sound: "../../../public/sounds/th.mp3" },
  { title: "ر", sound: "../../../public/sounds/r.mp3" },
  { title: "ز", sound: "../../../public/sounds/z.mp3" },
  { title: "س", sound: "../../../public/sounds/s.mp3" },
  { title: "ش", sound: "../../../public/sounds/sh.mp3" },
  { title: "ص", sound: "../../../public/sounds/ص.mp3" },
  { title: "ض", sound: "../../../public/sounds/ض.mp3" },
  { title: "ط", sound: "../../../public/sounds/ط.mp3" },
  { title: "ظ", sound: "../../../public/sounds/ظ.mp3" },
  { title: "ع", sound: "../../../public/sounds/3.mp3" },
  { title: "غ", sound: "../../../public/sounds/gh.mp3" },
  { title: "ف", sound: "../../../public/sounds/f.mp3" },
  { title: "ق", sound: "../../../public/sounds/ق.mp3" },
  { title: "ك", sound: "../../../public/sounds/k.mp3" },
  { title: "ل", sound: "../../../public/sounds/l.mp3" },
  { title: "م", sound: "../../../public/sounds/m.mp3" },
  { title: "ن", sound: "../../../public/sounds/n.mp3" },
  { title: "ه", sound: "../../../public/sounds/h.mp3" },
  { title: "و", sound: "../../../public/sounds/wa.mp3" },
  { title: "ي", sound: "../../../public/sounds/y.mp3" },
];

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
