"use client";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

export default function DarkModeButton() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null;
  }
  const currentTheme = theme === "system" ? systemTheme : theme;
  return (
    <div>
      {currentTheme === "dark" ? (
        <BsFillSunFill
          className="h-8 w-8 cursor-pointer text-yellow-500"
          onClick={() => setTheme("light")}
        />
      ) : (
        <BsFillMoonFill
          className="h-8 w-8 cursor-pointer text-gray-500"
          onClick={() => setTheme("dark")}
        />
      )}
    </div>
  );
}
