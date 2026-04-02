import Typewriter from "./Typewriter"

export default function About() {
  return (
    <section className="px-6 mt-6">
      <Typewriter text="Hi, Welcome to My Portfolio!" />
      <h3 className="text-lg font-semibold mb-3 text-[#2F3E34]">About Me</h3>
      <p className="text-[#2F3E34] leading-relaxed text-justify whitespace-pre-line">
{`Hi, I'm Rachmawati. I didn't imagine myself diving into tech, but here I am exploring it and enjoying the process. Lately, I've been focusing on cloud and data, learning how things work behind the scenes and how data can be turned into something meaningful. I like trying new things, even when I'm not completely sure where they'll lead. That curiosity is what brought me into this field, and honestly, I'm still a bit surprised by how far I've come. For now, I'm just enjoying the process of learning, exploring, and growing without limiting myself. I'm excited to see where this journey takes me next.`}
      </p>
    </section>
  );
}