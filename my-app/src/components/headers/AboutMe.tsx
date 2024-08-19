import { CurrencyIcon, Globe } from 'lucide-react';
import React from 'react';
import { Badge } from '../ui/badge';
import { cn } from '@/lib/utils';

type Props = {
  name: string,
  role: string,
  availability: "available" | "open" | "unavailable",
  location: string,
  email: string,
  image: string,
  resume: string,
  currentCompany: { name: string, role: string, duration: string }
};

export default function AboutMe({ name, role, availability, location, image, email, resume, currentCompany }: Props) {
  return (
    <div className='w-full max-w-lg flex flex-col justify-center items-center gap-5 p-6 mx-auto'>
      <div className='w-full flex justify-between items-center'>
        {/* Role and availability */}
        <div className='inline-flex gap-2 justify-center items-center text-sm'>
          <Globe size={18} />
          {role}
        </div>

        <div className='inline-flex gap-2 justify-center items-center text-sm'>
          <Badge className={cn(
            availability === "available" ? "bg-green-500 text-green-100" :
            availability === "open" ? "bg-yellow-500 text-yellow-100" :
            "bg-red-500 text-red-100"
          )}>
            {availability === "available" ? "Available" : availability === "open" ? "Open to opportunities" : "Unavailable"}
          </Badge>
        </div>
      </div>

      <div className='w-full flex flex-col md:flex-row justify-between items-center gap-6'>
        {/* Name, location, current company, and image */}
        <div className='flex flex-col justify-center items-start text-center md:text-left'>
          <h1 className='text-3xl font-bold'>Hello, I&apos;m {name}</h1>
          <p className='text-sm'>{role} based in {location}</p>
          <p className='text-sm'>Currently {currentCompany.role} @ {currentCompany.name} {currentCompany.duration}</p>
        </div>

        <img src={image} alt="me" className='w-20 h-20 rounded-full object-cover shadow-lg' />
      </div>

      <div className='w-full flex justify-between items-center'>
        {/* Resume and Email */}
        <Badge className='bg-primary-foreground'>
        <a href={resume} className='text-blue-500 underline text-sm' target='_blank' rel='noopener noreferrer'>View Resume</a>
        </Badge>
        <p className='text-sm'>{email}</p>
      </div>
    </div>
  );
}
