import React from 'react'
import Link from 'next/link'
import { Badge } from 'lucide-react';

type Props = {
    children: React.ReactNode;
    image: string;
    title: string;
    description: string;
    tags: string[];
    href: string;
}

export default function ItemCard({ children, image, title, description, tags, href }: Props) {
    return (
        <Link className='flex justify-center items-center w-full h-full' href={href}>
            <div className='flex flex-col justify-center items-center w-full h-full'>
                <img src={image} alt={title} className='w-full h-48 object-cover rounded-lg' />
                </div>

                <div className='flex flex-col justify-center items-center w-full h-full '>
                    <p className='flex justify-center items-center'>  
                    <h3 className='text-lg font-semibold'> {title} </h3>
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