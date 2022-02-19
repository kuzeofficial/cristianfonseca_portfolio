import { RightArrow } from "./Icons/Icons";
import { Skills } from "./Skills";
import Image from "next/image";

export const Hero = () => {
  return (
    <div className="flex flex-col justify-between my-10 space-y-14 md:space-y-0 lg:flex-row">
      <div className="flex flex-col">
        <div className="flex flex-col items-center md:flex-row">
          <Image
            src="/images/logo.webp"
            alt="Cristian Fonseca"
            width={144}
            height={154}
            className="border-none rounded-2xl"
            placeholder="blur"
            blurDataURL="/images/logo.webp"
          />
          <div className="flex flex-col items-center ml-3 md:items-start">
            <h1 className="flex flex-col items-center text-4xl text-center sm:flex-row lg:text-4xl md:text-3xl sm:text-3xl">
              <span className="sm:ml-2">Hi, I'm </span>
              <Image
                className="flex flex-row"
                src="/images/wave.gif"
                alt="Greetings Welcome"
                width="40px"
                height="40px"
              />
              <span className="block ml-2 tracking-wide text-transparent theme-gradient bg-clip-text whitespace-nowrap md:inline">
                Cristian Fonseca
              </span>
            </h1>
            <h2 className="max-w-lg mt-4 font-light text-center md:text-left sm:text-left text-1xl sm:text-2xl md:text-1xl">
              A young web developer🤓 passionate about technology💻 and
              communication🛰️ from Brasil🏝️
            </h2>
          </div>
        </div>

        <Skills />
      </div>
      <div className="flex flex-col items-start justify-center space-y-2">
        <a
          className="text-lg font-semibold transition-colors text-primary hover:text-secondary group"
          href="/Cristian Fonseca.pdf"
          download
        >
          <span className="mr-1">Download Resume</span>
          <span className="inline-block align-middle transition-transform transform group-hover:translate-x-1">
            <RightArrow />
          </span>
        </a>
        <a
          className="text-lg font-semibold transition-colors text-primary hover:text-secondary group"
          href="#contact"
        >
          <span className="mr-1">Say Hi</span>
          <span className="inline-block align-middle transition-transform transform group-hover:translate-x-1">
            <RightArrow />
          </span>
        </a>
      </div>
    </div>
  );
};
