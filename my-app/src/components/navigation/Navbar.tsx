import React from 'react'
import { Home, Folder, Briefcase, GitHub, Mail, FilePlus, Book } from 'react-feather'
import { Button } from "@/components/ui/button"
import { ModeToggle } from '../ui/modeToggle'
import Link from 'next/link'
import { GraduationCap} from 'lucide-react';
 

const Navbar = () => {
    return (
        <div className='w-full h-full bg-primary-foreground max-w-lg flex justify-between items-center px-4 py-2 rounded-xl border m-0'>
            <div className='flex justify-center items-center gap-2'>
                {/* Home */}
                <Link href="#home">
                    <Button variant="ghost" size="icon" aria-label="Home">
                        <Home />
                    </Button>
                </Link>

                {/*Projects*/}
                <Link href="#projects">
                    <Button variant="ghost" size="icon" aria-label="Projects">
                        <Folder />
                    </Button>
                </Link>

                {/* Experience */}
                <Link href="#experience">
                    <Button variant="ghost" size="icon" aria-label="Experience">
                        <Briefcase />
                    </Button>
                </Link>

                {/* Education */}
                <Link href="#education">
                    <Button variant="ghost" size="icon" aria-label="Education">
                    <GraduationCap/>
                    </Button>
                </Link>

                   {/* Github */}
                   <Link href="https://github.com/elic4vet" target='_blank'>
                    <Button variant="ghost" size="icon" aria-label="Github">
                        <GitHub />
                    </Button>
                </Link>

                {/* Contact */}
                <Link href="#contact">
                    <Button variant="ghost" size="icon" aria-label="Contact">
                        <Mail />
                    </Button>
                </Link>
            </div>
            <div className='flex justify-center items-center gap-2'>
                {/* Toggle theme*/}
                <ModeToggle />
                {/* Hire me */}
                <Link href="https://www.linkedin.com/in/eerkekoglou/" target='_blank'>
                    <Button className='flex justify-center items-center gap-2' variant="outline" aria-label="Hire me" >
                        <FilePlus />
                        Hire me
                    </Button>
                </Link>
            </div>
        </div>
    )
}

export default Navbar
