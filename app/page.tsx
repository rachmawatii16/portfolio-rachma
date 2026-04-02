'use client'

import Hero from "@/components/Hero";
import About from "@/components/About";
import Stacks from "@/components/Stacks";
import Project from "@/components/Project";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="max-w-4xl mx-auto">
      <Hero />
      <About />
      <Stacks />
      <Project />
      <Contact />

    </main>
  );
}