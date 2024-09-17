/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import "../index.css";
import Button from "./Button";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import scrollIntoView from "./scrollintoView";

const links = [
  { name: "الصفحة الرئيسية", path: "/home" },
  { name: "الحروف", path: "/alphas" },
  { name: "الكلمات", path: "/words" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(true);
  const [scrollHeight, setScrollHeight] = useState(0);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const toggleNav = () => {
      setWidth(window.innerWidth);
      if (window.innerWidth <= 639) {
        setIsOpen(false);
      } else setIsOpen(true);
    };
    toggleNav();
    window.addEventListener("resize", toggleNav);

    return () => window.removeEventListener("resize", toggleNav);
  }, []);

  useEffect(() => {
    const updateProgress = () => {
      const { scrollTop, scrollHeight, clientHeight } =
        document.documentElement;
      const scrollProgress = (scrollTop / (scrollHeight - clientHeight)) * 100;
      setScrollHeight(scrollProgress);
    };

    window.addEventListener("scroll", updateProgress);

    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  return (
    <div className={`bg-white shadow-lg sticky top-0 left-0 z-[1000]`}>
      <div className="container mx-auto lg:px-14 px-5 flex items-center justify-between h-24">
        <NavLinks isOpen={isOpen} setIsOpen={setIsOpen} width={width} />
        <IconBars setIsOpen={setIsOpen} isOpen={isOpen} />
        <Logo />
      </div>
      <div
        className="h-[4px] absolute bottom-0 left-0 bg-blue-500"
        style={{ width: `${scrollHeight}%` }}
      ></div>
      <div
        className="fixed bottom-10 right-10 cursor-pointer"
        onClick={scrollIntoView}
      >
        <IconArrowUpCircleFill />
      </div>
    </div>
  );
}

function Logo() {
  const navigate = useNavigate();
  return (
    <div
      className="text-2xl font-bold cursor-pointer"
      onClick={() => navigate("/home")}
    >
      عَلَّمنِي
    </div>
  );
}

function NavLinks({ isOpen, setIsOpen, width }) {
  function handleClick() {
    scrollIntoView();
    if (width <= 1024) setIsOpen(false);
  }

  return (
    <ul
      className={`${
        !isOpen ? "hidden" : "flex flex-col sm:flex-row"
      } items-center justify-center gap-8 p-5 m-5 absolute sm:relative sm:top-0 w-[100%] sm:w-fit sm:left-0 top-16 -left-5 sm:bg-white sm:text-black bg-black text-white z-[100]`}
    >
      {links.map((item) => (
        <Link key={item.name} to={item.path} onClick={handleClick}>
          {item.name}
        </Link>
      ))}
    </ul>
  );
}

function IconBars({ setIsOpen, isOpen }) {
  const toggleNav = () => setIsOpen((is) => !is);
  return (
    <div className="cursor-pointer block sm:hidden" onClick={toggleNav}>
      {isOpen ? (
        <svg viewBox="0 0 512 512" fill="currentColor" height="2em" width="2em">
          <path d="M0 96c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zm64 160c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32zm384 160c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h384c17.7 0 32 14.3 32 32z" />
        </svg>
      ) : (
        <svg viewBox="0 0 448 512" fill="currentColor" height="2em" width="2em">
          <path d="M0 96c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zm0 160c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zm448 160c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h384c17.7 0 32 14.3 32 32z" />
        </svg>
      )}
    </div>
  );
}

function IconArrowUpCircleFill() {
  return (
    <svg
      fill="#3b82f6"
      viewBox="0 0 16 16"
      height="3.5em"
      width="3.5em"
      className="hover:scale-110 transition-all bg-black rounded-full p-1"
    >
      <path d="M16 8A8 8 0 100 8a8 8 0 0016 0zm-7.5 3.5a.5.5 0 01-1 0V5.707L5.354 7.854a.5.5 0 11-.708-.708l3-3a.5.5 0 01.708 0l3 3a.5.5 0 01-.708.708L8.5 5.707V11.5z" />
    </svg>
  );
}
