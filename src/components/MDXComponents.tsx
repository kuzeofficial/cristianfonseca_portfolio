import React from 'react'
import { CustomImage } from './MD/CustomImage'
import Image from "next/image";

export const MDXComponents = {
    h1: (props:any) => <h1 className="textblock tracking-wide theme-dark bg-clip-text items-center text-4xl lg:text-4xl md:text-3xl sm:text-3xl mt-5" {...props}/>,
    img: (props:any) => <CustomImage {...props} className="rounded-md "/>,
    a: (props:any) => <a className="text-transparent theme-gradient bg-clip-text font-bold" {...props}/>,
    p: (props:any) => <p className="font-light mt-5 text-md font-normal max-h-3xl  block overflow-ellipsis overflow-hidden break-words mb-2" {...props}/>,
    Image,
}
