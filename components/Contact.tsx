"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Contact() {
  const [open, setOpen] = useState(false);

  const contacts = [
    { name: "GitHub", logo: "/logos/github.svg", link: "https://github.com/rachmawatii16" },
    { name: "LinkedIn", logo: "/logos/linkedin.svg", link: "https://www.linkedin.com/in/rachmawati-20b214216/" },
    { name: "Email", logo: "/logos/gmail.svg", link: "mailto:rahmativa14@gmail.com" },
    { name: "CV", logo: "/logos/cv.svg", link: "/cv.pdf" },
  ];

  const CARD_SIZE = 64;
  const GAP = 12; 

  return (
    <section className="mt-6 mb-12 flex flex-col items-center">
      <p className="text-md font-semibold mb-6 text-[#2F3E34]">Feel free to reach out</p>

      <div className="flex flex-col items-center gap-4">

        <div
          style={{
            display: "flex",
            gap: GAP,
            opacity: open ? 1 : 0,
            height: open ? CARD_SIZE : 0,  
            transform: open ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.3s ease, transform 0.3s ease",
            pointerEvents: open ? "auto" : "none",
          }}
        >
          {contacts.map((contact) => (
            <Link
              key={contact.name}
              href={contact.link}
              target="_blank"
              style={{ cursor: "url('/logos/pointer.png') 16 16, auto" }}
            >
              <div
                className="rounded-2xl p-4 flex items-center justify-center border-2 border-[#9DC08B] hover:-translate-y-1 transition-transform"
                style={{
                  width: CARD_SIZE,
                  height: CARD_SIZE,
                  boxShadow: "inset 0 0 20px 8px rgba(255,255,255,0.3)",
                }}
              >
                <Image
                  src={contact.logo}
                  alt={contact.name}
                  width={32}
                  height={32}
                  className="object-contain w-full h-full"
                />
              </div>
            </Link>
          ))}
        </div>

        <button
          onClick={() => setOpen((prev) => !prev)}
          style={{
            cursor: "url('/logos/pointer.png') 16 16, auto",
            marginTop: open ? 16 : 0, 
            transition: "margin-top 0.3s ease",
          }}
          className="flex flex-col items-center gap-1 transition-transform"
        >
          <Image
            src="/logos/folder.svg"
            alt="folder"
            width={64}
            height={64}
            className="object-contain"
          />
            <span className="text-xs text-[#2F3E34]/60 select-none">click here</span>
        </button>

      </div>
    </section>
  );
}