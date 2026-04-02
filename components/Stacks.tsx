import Image from "next/image";
import { Fragment } from "react";

export default function Stacks() {
  const stacks = [
    {
      category: "Languages",
      logos: [
        { name: "Python", logo: "/logos/python.svg" },
        { name: "JavaScript", logo: "/logos/javascript.svg" },
        { name: "PHP", logo: "/logos/php.svg" },
      ],
    },
    {
      category: "Frameworks",
      logos: [
        { name: "Laravel", logo: "/logos/laravel.svg" },
        { name: "Next.js", logo: "/logos/nextjs.svg" },
      ],
    },
    {
      category: "Cloud",
      logos: [
        { name: "GCP", logo: "/logos/gcp.svg" },
      ],
    },
  ];

  return (
    <section className="px-6 mt-6">
      <h3 className="text-lg font-semibold mb-3 text-[#2F3E34]">Stacks</h3>
      <p className="text-[#2F3E34] mb-4">Some tools I use along the way</p>
      <div className="flex items-start">
        {stacks.map((stack, index) => (
          <Fragment key={stack.category}>
            {index !== 0 && (
              <div className="w-0.5 bg-[#9DC08B] self-stretch my-4" />
            )}
            <div className="flex-1 p-5">
              <p className="text-xs font-semibold text-[#2F3E34] mb-3">{stack.category}</p>
              <div className="flex flex-wrap gap-2">
                {stack.logos.map((item) => (
                  <div
                    key={item.name}
                    className="flex flex-row items-center gap-2 border border-[#9DC08B] rounded-lg p-2"
                  >
                    <div className="w-8 h-8 flex items-center justify-center">
                      <Image
                        src={item.logo}
                        alt={item.name}
                        width={32}
                        height={32}
                        className="object-contain w-full h-full"
                      />
                    </div>
                    <span className="text-xs text-[#2F3E34]">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </Fragment>
        ))}
      </div>
    </section>
  );
}