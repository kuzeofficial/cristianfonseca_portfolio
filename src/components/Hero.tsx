import { RightArrow } from './Icons/Icons'

export const Hero = () => {
    return(
        <div className="flex flex-col justify-between my-10 space-y-14 md:items-end md:flex-row">
            <div className="flex flex-col">
                <h1 className="flex items-center sm:flex-row flex-col text-4xl lg:text-4xl md:text-3xl ">
                    <img src="/images/logo.webp" alt="..." className="mr-3 shadow-lg rounded-full w-20 h-auto border-none " />
                    <span className="md:block">Hi, I'm&nbsp;</span>
                    <img className="mr-2 flex flex-row" src="https://raw.githubusercontent.com/MartinHeinz/MartinHeinz/master/wave.gif" width="30px" />
                    <span className="block tracking-wide text-transparent md:inline theme-gradient bg-clip-text whitespace-nowrap">
                        Cristian Fonseca
                    </span>
                </h1>
                <h4 className="max-w-lg mt-4 text-center md:text-left sm:text-left text-1xl sm:text-2xl md:text-1xl font-light">
                    A young web developer🤓 passionate about technology💻 and communication🛰️ from Cuba🏝️
                </h4>
            </div>
        </div>
    )

}