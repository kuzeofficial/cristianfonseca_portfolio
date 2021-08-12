import NextIcon from "./Icons/Next"
import ReactIcon from "./Icons/React"
import TailwindIcon from "./Icons/Tailwind"

export const Skills = () => {
    return (
        <div className="w-auto mt-2 md:mb-10 lg:mb-3 2xl:mb-0">
            <ul className={`flex flex-wrap my-2 ml-[-5px] space-x-2 justify-center sm:justify-start`}>
				<li>
                    <a href="https://es.reactjs.org/">
					    <ReactIcon className="lg:w-9 lg:h-9 md:w-9 md:h-9 w-11 h-11"/>
                    </a>
				</li>
                <li>
                    <a href="https://nextjs.org">
					    <NextIcon className="lg:w-9 lg:h-9 md:w-9 md:h-9 w-11 h-11"/>
                    </a>
				</li>
                <li>
                    <a href="https://tailwindcss.com/">
                        <TailwindIcon className="lg:w-9 lg:h-9 md:w-9 md:h-9 w-11 h-11"/>
                    </a>
                </li>
			</ul>
        </div>
    )
}