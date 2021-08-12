import Link from 'next/link'
import { GitHubLogo, TwitterLogo, ColorSwatch } from './Icons/Icons'

export const Navbar = ({ pickerOpen, setPickerOpen }) => {
    return (
        <nav className="p-10 text-muted lg:max-w-5xl md:mx-auto md:max-w-3xl">
            <div className="flex items-center justify-between">
                <div className="space-x-6 md:space-x-14">
                    <Link href='/'>
                        <a className="transition-colors hover:text-muted-hover">Home</a>
                    </Link>
                    <Link href='/'>
                        <a className="transition-colors hover:text-muted-hover">Blog</a>
                    </Link>
                </div>
                <div className="space-x-6">
                    <button 
                        aria-label="toggle theme picker" 
                        onClick={() => setPickerOpen(!pickerOpen)} 
                        className="w-8 h-8 transition-colors hover:text-muted-hover"
                    >
                        <ColorSwatch/>
                    </button>
                    <a
                        aria-label="Cristian Fonseca Github Profile"
                        href="https://github.com/kuzeofficial"
                        className="inline-block w-8 h-8 transition-colors hover:text-muted-hover"
                    >
                        <GitHubLogo/>
                    </a>
                    <a
                        aria-label="Cristian Fonseca Twitter Profile"
                        href="https://twitter.com/cristian_devk"
                        className="inline-block w-8 h-8 transition-colors hover:text-muted-hover"
                    >
                        <TwitterLogo/>
                    </a>
                </div>
            </div>
        </nav>
    )
}