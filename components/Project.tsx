"use client";

import Link from "next/link";
import { useState } from "react";

export default function Project() {
  const [page, setPage] = useState(0);
  const CARDS_PER_PAGE = 4;

  const projects = [
    {
      title: "Cloud Cost Monitoring",
      description: "A cloud cost monitoring dashboard covering GCP and AWS spend, supported by an automated VBA for monthly reporting.",
      link: "https://medium.com/@rahmativa14",
    },
    {
      title: "The Room 19 Library Management Website",
      description: "A web reservation system built with Next.js and Supabase, featuring authentication, booking management, and transaction consistency.",
      link: "https://github.com/naufaleka03/Website-Perpustakaan-The-Room-19",
    },
    {
      title: "Dash-Event",
      description: "A web event registration platform built with Laravel, featuring event discovery, participant registration, and event management.",
      link: "https://github.com/rachmawatii16/DASH-EVENT",
    },
  ];

  const visibleProjects = projects.slice(page * CARDS_PER_PAGE, (page + 1) * CARDS_PER_PAGE);
  const atStart = page === 0;
  const atEnd = (page + 1) * CARDS_PER_PAGE >= projects.length;

  return (
    <section className="mt-6 mb-6">
      <h3 className="text-lg font-semibold mb-3 text-[#2F3E34]">Projects</h3>
      <p className="text-[#2F3E34] mb-4">A few things I have worked on</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {visibleProjects.map((project) => (
          <div
            key={project.title}
            className="bg-[#A7C7E7] rounded-2xl p-5 shadow-md"
            style={{ boxShadow: "inset 0 0 28px 10px rgba(255,255,255,0.4)" }}
          >
            <div className="flex items-start justify-between gap-2">
              <h4 className="font-semibold text-[#2F3E34] text-lg leading-snug">
                {project.title}
              </h4>
              <Link
                href={project.link}
                target="_blank"
                className="shrink-0 bg-white/40 hover:bg-white/60 transition rounded-full p-2"
                style={{ cursor: "url('/logos/pointer.png') 16 16, auto" }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2F3E34" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17L17 7M17 7H7M17 7V17"/>
                </svg>
              </Link>
            </div>
            <div className="border-t border-[#2F3E34]/20 my-3" />
            <p className="text-sm text-[#2F3E34] leading-relaxed text-justify">
              {project.description}
            </p>
          </div>
        ))}
      </div>

      <div className="flex gap-2 justify-end mt-3">
        <button
          onClick={() => setPage((p) => p - 1)}
          disabled={atStart}
          className="w-8 h-8 rounded-full border border-[#2F3E34] flex items-center justify-center transition hover:bg-[#9DC08B]/20 disabled:opacity-30 disabled:cursor-not-allowed"
          style={{ cursor: "url('/logos/pointer.png') 16 16, auto" }}
        >
          <span className="text-[#2F3E34] text-sm">‹</span>
        </button>
        <button
          onClick={() => setPage((p) => p + 1)}
          disabled={atEnd}
          className="w-8 h-8 rounded-full border border-[#2F3E34] flex items-center justify-center transition hover:bg-[#9DC08B]/20 disabled:opacity-30 disabled:cursor-not-allowed"
          style={{ cursor: "url('/logos/pointer.png') 16 16, auto" }}
        >
          <span className="text-[#2F3E34] text-sm">›</span>
        </button>
      </div>
    </section>
  );
}