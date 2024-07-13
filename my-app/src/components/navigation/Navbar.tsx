import React from 'react'
import { Home, Folder, Briefcase, GitHub, Mail, FilePlus } from 'react-feather'
import { Button } from "@/components/ui/button"
import { ModeToggle } from '../ui/modeToggle'

const Navbar = () => {
    return (
        <div className='w-full h-full flex justify-between items-center px-4 py-2 rounded-xl border m-4'>
            <div className='flex justify-center items-center gap-2'>
                {/* Home */}
                <Button variant="ghost" size="icon" aria-label="Home">
                    <Home />
                </Button>

                {/*Projects*/}
                <Button variant="ghost" size="icon" aria-label="Projects">
                    <Folder/>
                </Button>

                {/* Experience */}
                <Button variant="ghost" size="icon" aria-label="Experience">
                    <Briefcase/>
                </Button>

                {/* Education */}
                <Button variant="ghost" size="icon" aria-label="Education">
                    <GitHub />
                </Button>

                {/* Contact */}
                <Button variant="ghost" size="icon" aria-label="Contact">
                    <Mail />
                </Button>
            </div>
            <div className='flex justify-center items-center gap-2'>
                {/* Toggle theme*/}
                <ModeToggle />
                {/* Hire me */}
                <Button className='flex justify-center items-center gap-2' variant="outline" aria-label="Hire me" >
                 <FilePlus/>
                    Hire me
                </Button>
            </div>

        </div>
    )
}

export default Navbar
