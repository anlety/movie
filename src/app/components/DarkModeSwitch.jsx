"use client";
import { BsMoonStarsFill } from "react-icons/bs";
import { IoMdSunny } from "react-icons/io";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

export default function DarkModeSwitch() {
  const {systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false)
  useEffect(()=> setMounted(true), [])
  const currentTheme = theme === "system" ? systemTheme : theme;
  return (
    <>
    {
      mounted && (currentTheme === "dark" ? (
          <IoMdSunny className="cursor-pointer text-xl hover:text-blue-400" onClick={()=> setTheme("light")}/>
      ):(
          <BsMoonStarsFill className="cursor-pointer text-xl hover:text-blue-400" onClick={()=> setTheme("dark")}/>
      )
    )}</>
  )
}
