import React from 'react'
import Link from 'next/link'
import {Badge} from './ui/badge'
import { ChevronRight } from 'react-feather'


type Props = {
    image: string;
    title: string;
    description: string;
    tags: string[];
    href: string;
}

export default function ItemCard({ image, title, description, tags, href }: Props) {
    return (
        <Link className='flex justify-center items-center w-full h-full flex-1 gap-4' href={href}>
            <div className='flex flex-col justify-center items-center h-full'>
                <img src={image} alt={title} className=' h-16 w-16 object-cover rounded-lg' />
            </div>

            <div className='flex flex-col justify-center items-center w-full h-full gap-2 flex-1'>
                <span className='text-sm'> 
                <span className='text-base font-semibold'>{title}</span>
                {" - "}
                {description}
                </span>

                <span className='flex justify-center items-center'>
                    {tags.map((tag, index) => (
                        <Badge
                            key={index + tag } variant="outline">
                            {tag}
                        </Badge>
                    ))}
                </span>
            </div>

            <div className='p-2 pr-4'>
             <ChevronRight/>  
            </div>
        </Link>
    )
}