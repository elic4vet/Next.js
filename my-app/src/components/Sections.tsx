import React from 'react'

type Props = {
    title: string,
    icon: React.ReactNode,
    children: React.ReactNode
}

export default function Section({ title, icon, children }: Props) {
    return (
        <div className='max-w-lg w-full h-full flex flex-col justify-center items-start bg-secondary space-y-4'>
            <span className='flex justify-center items-center gap-1 m-2 p-2 text-lg font-semibold'>
                {icon}
                <h2>{title}</h2>
            </span>
            <div className='w-full h-full m-2 mb-4 mt-0 flex flex-col justify-center items-center'>
                {children}
            </div>
        </div>

    )
}