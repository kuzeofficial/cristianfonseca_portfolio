import ApolloIcon from "./Icons/Apollo"
import BootstrapIcon from "./Icons/Bootstrap"
import ExpressIcon from "./Icons/Express"
import GraphQLIcon from "./Icons/GraphQL"
import JavascriptIcon from "./Icons/Javascript"
import MaterialIcon from "./Icons/MaterialUI"
import NextIcon from "./Icons/Next"
import NodeJSIcon from "./Icons/NodeJS"
import ReactIcon from "./Icons/React"
import ReduxIcon from "./Icons/Redux"
import TailwindIcon from "./Icons/Tailwind"
import TypescriptIcon from "./Icons/Typescript"

export const Skills = () => {
    return (
        <div className="w-auto mt-2 md:mb-10 lg:mb-3 2xl:mb-0">
            <ul className='flex flex-wrap my-2 ml-[-5px] space-x-2 justify-center sm:justify-start'>
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
                <li>
                    <a href="https://getbootstrap.com/">
                        <BootstrapIcon className="lg:w-9 lg:h-9 md:w-9 md:h-9 w-11 h-11"/>
                    </a>
                </li>
                <li>
                    <a href="https://material-ui.com/es/">
                        <NodeJSIcon className="lg:w-9 lg:h-9 md:w-9 md:h-9 w-11 h-11"/>
                    </a>
                </li>
                <li>
                    <a href="https://tailwindcss.com/">
                        <MaterialIcon className="lg:w-9 lg:h-9 md:w-9 md:h-9 w-11 h-11"/>
                    </a>
                </li>
                <li>
                    <a href="https://www.typescriptlang.org/">
                        <TypescriptIcon className="lg:w-9 rounded lg:h-9 md:w-9 md:h-9 w-11 h-11"/>
                    </a>
                </li>
                <li>
                    <a href="https://graphql.org/">
                        <GraphQLIcon className="lg:w-9 lg:h-9 md:w-9 md:h-9 w-11 h-11"/>
                    </a>
                </li>
                <li>
                    <a href="https://developer.mozilla.org/es/docs/Web/JavaScript">
                        <JavascriptIcon className="lg:w-9 rounded lg:h-9 md:w-9 md:h-9 w-11 h-11"/>
                    </a>
                </li>
                <li>
                    <a href="https://expressjs.com/es/">
                        <ExpressIcon className="lg:w-9 rounded lg:h-9 md:w-9 md:h-9 w-11 h-11"/>
                    </a>
                </li>
                <li>
                    <a href="https://es.redux.js.org/">
                        <ReduxIcon className="lg:w-9 rounded lg:h-9 md:w-9 md:h-9 w-11 h-11"/>
                    </a>
                </li>
                <li>
                    <a href="https://www.apollographql.com/">
                        <ApolloIcon className="lg:w-9 rounded lg:h-9 md:w-9 md:h-9 w-11 h-11"/>
                    </a>
                </li>
			</ul>
        </div>
    )
}