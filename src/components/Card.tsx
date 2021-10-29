type CardProps = {
    date: string;
    codelink?: string;
    livecode: string;
    title: string;
    description: string;
    author: string;
}
export default function Card({date,codelink,livecode,title,description,author}: CardProps) {
    return (
        <div className='flex flex-row sm:justify-center md:justify-center mb-3 '>
            <div className="border-primary border hover:shadow-md rounded w-auto md:w-1/1 sm:w-1/1 lg:w-1/1 h-auto mx-7 flex flex-col justify-center p-3">
                <div className="w-100 items-center flex justify-between mb-1">
                    <p className="text-sm font-semibold text-red-400">{date}</p>
                    <div>
                        { codelink &&
                            <a className= "no-underline hover:underline text-sm sm:static font-semibold text-red-400 mr-2" target="_blank" href={codelink}>Code</a>
                        }
                        <a className= "no-underline hover:underline text-sm sm:static font-semibold text-blue-400" target="_blank" href={livecode}>Live</a>
                    </div>
                </div>

                <h1 className="font-black text-lg tracking-wide">{title}</h1>

                <div className="text-sm font-normal max-h-3xl max-w-3xl leading-7 block overflow-ellipsis overflow-hidden break-words mb-2">
                    <p>{description}</p>
                </div>

                <div className="w-full flex items-center">
                    <svg className="w-3 h-3 fill-current text-gray-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M18 3a1 1 0 00-1.447-.894L8.763 6H5a3 3 0 000 6h.28l1.771 5.316A1 1 0 008 18h1a1 1 0 001-1v-4.382l6.553 3.276A1 1 0 0018 15V3z" clipRule="evenodd" /></svg>
                    <p className="text-gray-500 font-mono text-sm">{author}</p>
                </div>
            </div>
        </div>
    )
}
