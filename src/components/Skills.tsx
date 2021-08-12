import NextIcon from "./Icons/Next"
import ReactIcon from "./Icons/React"
import TailwindIcon from "./Icons/Tailwind"

export const Skills = () => {
    return (
        <div className="w-60 mt-2 md:mb-10 lg:mb-3 2xl:mb-0 ">
            <ul className={`flex flex-wrap my-2 ml-[-5px] items-center`}>
				<li>
                    <a href="https://es.reactjs.org/">
					    <ReactIcon width="2em" height="2em"/>
                    </a>
				</li>
                <li>
                    <a href="https://nextjs.org">
					    <NextIcon width="2em" height="1.6em"/>
                    </a>
				</li>
                <li>
                    <a href="https://tailwindcss.com/">
                        <TailwindIcon width="2em" height="1.6em"/>
                    </a>
                </li>
			</ul>
        </div>
    )
}