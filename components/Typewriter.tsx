"use client";

import { useEffect, useState } from "react";

interface TypewriterProps {
  text: string;
  speed?: number; 
}

export default function Typewriter({ text, speed = 80 }: TypewriterProps) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    setDisplayed("");
    let i = 0;

    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i + 1));
      i++;
      if (i >= text.length) clearInterval(interval);
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <p className="text-2xl font-semibold mb-3 text-[#2F3E34]">
      {displayed}
      <span className="animate-pulse">|</span>
    </p>
  );
}