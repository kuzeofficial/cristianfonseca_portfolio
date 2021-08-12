import { Mail } from "./Icons/Icons";
import TelegramIcon from "./Icons/Telegram";

export default function Contact() {
    return (
        <div className='grid grid-cols-2 mx-auto text-muted dark:text-black'>
            <div className='p-4 text-center'>
                <div className='w-1/2 mx-auto text-lg font-semibold md:w-auto'>
                    Email
                    <div className='w-8 h-8 mx-auto my-2 text-muted'>
                        <Mail/>
                    </div>
                </div>
                <a
                    href='mailto:cfonsecacomas@gmail.com'
                    className='mt-1 transition-colors text-primary hover:text-secondary'
                >
                    Mail
                </a>
            </div>     
            <div className='p-4 text-center'>
                <div className='w-1/2 mx-auto text-lg font-semibold md:w-auto'>
                    Telegram
                    <div className='w-8 h-8 mx-auto my-2 text-muted'>
                        <TelegramIcon/>
                    </div>
                </div>
                <a
                    className='mt-1 transition-colors text-primary hover:text-secondary'
                    href='https://t.me/christian_devk'
                >
                    Profile
                </a>
            </div>
        </div>
    )
}

