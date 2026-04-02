"use client";

import { useState } from "react";
import Image from "next/image";

export default function Hero() {
  const [cats, setCats] = useState<{ x: number; y: number; id: number; fading: boolean }[]>([]);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const id = Date.now();

    setCats((prev) => [...prev, { x, y, id, fading: false }]);

    setTimeout(() => {
      setCats((prev) => prev.map((cat) => cat.id === id ? { ...cat, fading: true } : cat));
    }, 2500);

    setTimeout(() => {
      setCats((prev) => prev.filter((cat) => cat.id !== id));
    }, 3000);
  };

  return (
    <section className="flex flex-col pt-3">
      <div
        className="relative bg-[#A7C7E7] rounded-2xl shadow-lg w-full h-32 overflow-hidden"
        style={{ boxShadow: "inset 0 0 35px 15px rgba(255,255,255,0.4)" }}
        onClick={handleClick}
      >
        {cats.map((cat) => (
          <Image
            key={cat.id}
            src="/logos/cat.svg"
            alt="cat"
            width={40}
            height={40}
            className={cat.fading ? "cat-fade" : "cat-pop"}
            style={{
              position: "absolute",
              left: cat.x - 20,
              top: cat.y - 20,
            }}
          />
        ))}

        <p className="absolute top-3 left-4 text-xs text-[#2F3E34]/60 select-none">
          Click here!
        </p>
      </div>
    </section>
  );
}