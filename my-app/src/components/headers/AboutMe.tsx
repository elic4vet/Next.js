import { Globe } from 'lucide-react'
import React from 'react'

type Props = {
    name: string,
    role: string,
    availability: "available" | "open" | "unavailable",
    location: string,
    email: string,
    image: string,
    resume: string,
    currrentCompany: { name: string, role: string, duration: string },
}

export default function AboutMe({ name, role, availability, location, email, resume, currrentCompany }: Props) {
    return (
        <div className='w-full h-full flex flex-col justify-center items-center gap-4'>
            <div className='w-full flex justify-between items-center'> {/*role , availability*/} 
            <div className='inline-flex gap-1 justify-center items-center text-sm'>
              <Globe size={18}/>
                <div>{role}</div>  
            </div>
            </div>

            <div>{/* name , location, currrentCompany , image */}</div>
            <div>{/* Resumé , Email*/}</div>
        </div>
    )
}