import { RightArrow } from "./Icons/Icons";
import { Skills } from "./Skills";
import Image from "next/image";

export const Hero = () => {
  return (
    <div className="flex flex-col justify-between my-10 space-y-14 md:space-y-0 lg:flex-row">
      <div className="flex flex-col">
        <div className="flex flex-col md:flex-row items-center">
          <Image
            src="/images/logo2.webp"
            alt="Cristian Fonseca"
            width={144}
            height={154}
            className="shadow-lg rounded-md border-none"
            placeholder="blur"
            blurDataURL="/images/logo2.webp"
          />
          <div className="ml-3 flex flex-col md:items-start items-center">
            <h1 className="flex flex-col sm:flex-row items-center text-4xl lg:text-4xl md:text-3xl sm:text-3xl text-center">
              <span className="sm:ml-2">Hi, I'm </span>
              <Image
                className="flex flex-row"
                src="/images/wave.gif"
                alt="Greetings Welcome"
                width="40px"
                height="40px"
              />
              <span className="block tracking-wide ml-2 text-transparent theme-gradient bg-clip-text whitespace-nowrap md:inline">
                Cristian Fonseca
              </span>
            </h1>
            <h2 className="font-light  max-w-lg mt-4 text-center md:text-left sm:text-left text-1xl sm:text-2xl md:text-1xl">
              A young web developer🤓 passionate about technology💻 and
              communication🛰️ from Brasil🏝️
            </h2>
          </div>
        </div>

        <Skills />
      </div>
      <div className="flex flex-col items-start  justify-center space-y-2">
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
