"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useEffect } from "react";

const Header = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [showBlur, setShowBlur] = useState(false);
  console.log("component rerenders", theme);
  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.getElementById("html")?.setAttribute("data-theme", theme);
    window.addEventListener("scroll", () => {
      console.log(window.scrollY);
      if (window.scrollY > 500) {
        setShowBlur(true);
      } else {
        setShowBlur(false);
      }
    });
  }, [theme]);

  const handleThemeChange = () => {
    const currentTheme = localStorage.getItem("theme");
    if (currentTheme === "light") {
      setTheme("dim");
    } else {
      setTheme("light");
    }
  };
  return (
    <nav
      className={`sticky top-0 z-20 py-3 ${
        showBlur ? "bg-base-100" : "bg-base-200"
      } ${showBlur ? "bg-opacity-65" : "bg-opacity-100"} ${
        showBlur &&
        "border-b-[.5px] border-base-content border-opacity-70 backdrop-blur-md"
      } ${
        showBlur &&
        "shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.06)]"
      }`}
    >
      <div className="container-center flex items-center justify-between gap-5">
        <Link href="/" className="">
          Home
        </Link>
        <Link href="/contact" className="">
          Contact Me
        </Link>

        {/* theme changer */}
        <label className="swap swap-rotate">
          {/* this hidden checkbox controls the state */}
          <input
            type="checkbox"
            onChange={handleThemeChange}
            checked={theme === "dim"}
          />

          {/* sun icon */}
          <svg
            className="swap-on h-10 w-10 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
          </svg>

          {/* moon icon */}
          <svg
            className="swap-off h-10 w-10 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
          </svg>
        </label>
      </div>
    </nav>
  );
};

export default Header;