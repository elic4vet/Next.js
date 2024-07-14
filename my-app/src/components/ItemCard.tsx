import React from 'react'
import Link from 'next/link'
import { Badge } from 'lucide-react';
import Image from 'next/image'
 

type Props = {
    image: string;
    title: string;
    description: string;
    tags: string[];
    href: string;
}

export default function ItemCard({ image, title, description, tags, href }: Props) {
    return (
        <Link className='flex justify-center items-center w-full h-full' href={href}>
            <div className='flex flex-col justify-center items-center w-full h-full'>
                <img src={image} alt={title} className=' h-16 w-16 object-cover rounded-lg'  />
            </div>

            <div className='flex flex-col justify-center items-center w-full h-full gap-1 flex-1 '>
                <h3 className='text-lg font-semibold'> {title} </h3>
                <p className='flex justify-center items-center'>
                <span> {description} </span>
                </p>

                <div className='flex justify-center items-center'>
                    <span className='flex justify-center items-center gap-1'>
                        {tags.map((tag, index) => (
                            <Badge
                                key={tag + index}
                                className='text-xs font-semibold text-primary bg-secondary p-1 rounded-lg'>
                                {tag}
                            </Badge>
                        ))}
                    </span>
                </div>
            </div>
        </Link>
    )
}