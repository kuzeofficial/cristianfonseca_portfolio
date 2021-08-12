import { RightArrow } from './Icons/Icons'
import { Skills } from './Skills'

export const Hero = () => {
    return(
        <div className="flex flex-col justify-between my-10 space-y-14 md:space-y-0 lg:flex-row">
            <div className="flex flex-col">
                <h1 className="flex flex-col sm:flex-row items-center text-4xl lg:text-4xl md:text-3xl sm:text-3xl ">
                    <img src="/images/logo.webp" alt="Cristian Fonseca" className="shadow-lg rounded-full border-none mr-3 w-20 h-auto"/>
                    <span>Hi, I'm </span>
                    <img className="flex flex-row mr-2" src="/images/wave.gif" alt="Greetings Welcome"width="40px" />
                    <span className="block tracking-wide text-transparent theme-gradient bg-clip-text whitespace-nowrap md:inline">
                        Cristian Fonseca
                    </span>
                </h1>
                <h2 className="font-light max-w-lg mt-4 text-center md:text-left sm:text-left text-1xl sm:text-2xl md:text-1xl">
                    A young web developer🤓 passionate about technology💻 and communication🛰️ from Cuba🏝️
                </h2>
                <Skills/>
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
    )

}